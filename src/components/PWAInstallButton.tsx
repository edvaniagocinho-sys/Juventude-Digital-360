import React, { useState } from 'react';
import { Download, Smartphone, X, CheckCircle2, Share } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'navbar' | 'banner' | 'compact';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'navbar',
  className = ''
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [showGeneralGuide, setShowGeneralGuide] = useState(false);

  // If already running standalone on home screen, do not show button
  if (isInstalled) {
    return null;
  }

  // Handle direct click
  const handleClick = async () => {
    if (isInstallable) {
      await install();
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      setShowGeneralGuide(true);
    }
  };

  return (
    <>
      {variant === 'navbar' && (
        <button
          onClick={handleClick}
          title="Instalar App no Telemóvel / Computador"
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-[#123A70] border border-neutral-300 ${className}`}
        >
          <Download className="w-3.5 h-3.5 text-[#159447]" />
          <span className="hidden sm:inline">Instalar App</span>
        </button>
      )}

      {variant === 'compact' && (
        <button
          onClick={handleClick}
          className={`inline-flex items-center gap-1 text-xs text-[#123A70] hover:underline font-semibold cursor-pointer ${className}`}
        >
          <Download className="w-3.5 h-3.5" />
          <span>Instalar no Telemóvel</span>
        </button>
      )}

      {/* iOS Safari Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-neutral-200 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <h3 className="text-sm font-bold text-[#123A70] flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#159447]" />
                Instalar no iPhone / iPad
              </h3>
              <button onClick={() => setShowIOSGuide(false)} className="text-neutral-400 hover:text-neutral-700">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-neutral-600">
              <p>O navegador Safari no iOS permite instalar o portal sem passar pela App Store:</p>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                <p className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#123A70] text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                  <span>Toca no botão <strong>Partilhar</strong> (ícone com quadrado e seta para cima <Share className="w-3.5 h-3.5 inline mx-0.5" />) na barra inferior do Safari.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#159447] text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                  <span>Desce o menu e toca em <strong>"Adicionar ao Ecrã Principal"</strong>.</span>
                </p>
              </div>
              <p className="text-[11px] text-[#159447] font-medium">
                ✓ A app ficará guardada no teu ecrã inicial e funcionará mesmo offline!
              </p>
            </div>
            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2 bg-[#123A70] text-white rounded-lg text-xs font-semibold cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* General Guide Modal (for browsers that don't support automated prompt) */}
      {showGeneralGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-neutral-200 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <h3 className="text-sm font-bold text-[#123A70] flex items-center gap-2">
                <Download className="w-4 h-4 text-[#159447]" />
                Instalar no Android ou Computador
              </h3>
              <button onClick={() => setShowGeneralGuide(false)} className="text-neutral-400 hover:text-neutral-700">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-neutral-600">
              <p>Podes instalar a <strong>JUVENTUDE DIGITAL 360°</strong> diretamente como um aplicativo leve (PWA):</p>
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                <p className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#123A70] text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                  <span>No Chrome ou Edge, toca nos <strong>três pontinhos (⋮)</strong> no canto superior do navegador.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#159447] text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                  <span>Seleciona <strong>"Instalar aplicação"</strong> ou <strong>"Adicionar ao ecrã inicial"</strong>.</span>
                </p>
              </div>
              <p className="text-[11px] text-[#159447] font-medium">
                ✓ Pesa menos de 2 MB, abre instantaneamente e tem modo offline completo!
              </p>
            </div>
            <button
              onClick={() => setShowGeneralGuide(false)}
              className="w-full py-2 bg-[#123A70] text-white rounded-lg text-xs font-semibold cursor-pointer"
            >
              Compreendi
            </button>
          </div>
        </div>
      )}
    </>
  );
};
