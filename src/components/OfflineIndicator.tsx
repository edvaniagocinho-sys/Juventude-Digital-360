import React from 'react';
import { WifiOff, Wifi, CheckCircle2, RefreshCw, HardDrive, Info } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface OfflineIndicatorProps {
  onOpenOfflineInfo?: () => void;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ onOpenOfflineInfo }) => {
  const { isOnline, isSimulatedOffline, toggleSimulatedOffline } = useOnlineStatus();

  return (
    <aside aria-label="Estado de conectividade" className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 pointer-events-none">
      {!isOnline ? (
        <div className="pointer-events-auto bg-[#151515] text-white p-3 sm:p-4 rounded-2xl shadow-2xl border border-amber-500/80 max-w-sm sm:max-w-md animate-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-500/20 text-[#FFC928] rounded-xl shrink-0 mt-0.5">
              <WifiOff className="w-5 h-5 text-[#FFC928]" />
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-white text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FFC928] animate-pulse" />
                  Modo Offline Ativo
                </span>
                {isSimulatedOffline && (
                  <span className="text-[10px] bg-neutral-800 text-amber-300 px-1.5 py-0.5 rounded border border-neutral-700">
                    Modo Teste
                  </span>
                )}
              </div>
              <p className="text-neutral-300 leading-relaxed text-[11px]">
                A aplicação está a funcionar sem Internet! O catálogo de vagas, bolsas, cursos, guias e o <strong>Criador de CV</strong> estão 100% gravados em cache local no teu dispositivo.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-2">
                {onOpenOfflineInfo && (
                  <button
                    onClick={onOpenOfflineInfo}
                    className="text-[11px] text-[#FFC928] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Saber mais</span>
                  </button>
                )}
                {isSimulatedOffline && (
                  <button
                    onClick={toggleSimulatedOffline}
                    className="text-[11px] text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    Desativar Teste Offline
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </aside>
  );
};
