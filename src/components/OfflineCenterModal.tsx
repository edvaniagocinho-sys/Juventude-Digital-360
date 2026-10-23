import React from 'react';
import {
  X,
  Wifi,
  WifiOff,
  HardDrive,
  CheckCircle2,
  Smartphone,
  ShieldCheck,
  Zap,
  RotateCcw,
  Download
} from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface OfflineCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfflineCenterModal: React.FC<OfflineCenterModalProps> = ({ isOpen, onClose }) => {
  const { isOnline, isSimulatedOffline, toggleSimulatedOffline } = useOnlineStatus();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-xl ${isOnline ? 'bg-emerald-100 text-[#159447]' : 'bg-amber-100 text-amber-700'}`}>
              {isOnline ? <Wifi className="w-5 h-5 text-[#159447]" /> : <WifiOff className="w-5 h-5 text-amber-700" />}
            </div>
            <div>
              <h3 className="text-base font-bold text-[#123A70]">
                Versão Offline & Acesso Sem Gastar Dados Móveis
              </h3>
              <p className="text-xs text-neutral-500">
                Otimizado para a realidade das telecomunicações em Moçambique e Zambézia
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-700 leading-relaxed">
          
          {/* Status Box */}
          <div className={`p-4 rounded-xl border flex items-center justify-between ${
            isOnline
              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
              : 'bg-amber-50/80 border-amber-200 text-amber-900'
          }`}>
            <div className="flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full ${isOnline ? 'bg-[#159447]' : 'bg-[#FFC928] animate-pulse'}`} />
              <div>
                <strong className="block text-xs">
                  {isOnline ? 'Ligado à Internet (Modo Online)' : 'A Funcionar em Modo Offline'}
                </strong>
                <span className="text-[11px] opacity-80">
                  {isOnline
                    ? 'A aplicação sincroniza automaticamente as novas atualizações.'
                    : 'Estás a aceder aos conteúdos a partir da memória do teu telefone/computador.'}
                </span>
              </div>
            </div>

            {/* Test Toggle Button */}
            <button
              onClick={toggleSimulatedOffline}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border ${
                isSimulatedOffline
                  ? 'bg-white text-neutral-800 border-neutral-300'
                  : 'bg-[#123A70] text-white border-transparent hover:bg-[#0c274d]'
              }`}
            >
              {isSimulatedOffline ? 'Sair do Teste Offline' : 'Testar Sem Internet'}
            </button>
          </div>

          {/* O que funciona Offline? */}
          <div className="space-y-3">
            <h4 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-[#123A70]" />
              O que podes fazer sem Internet (100% Offline)?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 block">Criar e Imprimir o Teu CV</strong>
                  <span className="text-neutral-500">O gerador de currículo funciona inteiramente no teu navegador sem gastar saldo.</span>
                </div>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 block">Consultar Vagas e Bolsas</strong>
                  <span className="text-neutral-500">Todas as ofertas, requisitos e prazos ficam pré-carregados para leitura a qualquer momento.</span>
                </div>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 block">Gerar Plano de Negócios</strong>
                  <span className="text-neutral-500">O Canvas de Negócios e os Manuais de Legalização (BAÚ, NUIT) estão sempre acessíveis.</span>
                </div>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 block">Submeter Ideias Juvenis</strong>
                  <span className="text-neutral-500">Podes preencher e salvar propostas no Laboratório; ficam seguras no dispositivo.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Como instalar no telemóvel para aceder sempre */}
          <div className="space-y-3 border-t border-neutral-200 pt-4">
            <h4 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#159447]" />
              Instalar a App no Telemóvel (PWA)
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Ao instalares a aplicação no teu ecrã inicial através do botão <strong>"Instalar App"</strong> no menu superior, o portal ganha um ícone próprio igual a qualquer app nativa do Android ou iPhone, abrindo em ecrã completo sem barras de navegação do browser.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#123A70] text-white text-xs font-semibold rounded-lg hover:bg-[#0c274d] cursor-pointer"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
