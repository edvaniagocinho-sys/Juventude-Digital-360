import React, { useState } from 'react';
import { X, Rocket, Printer, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

interface BusinessPlanCanvasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BusinessPlanCanvasModal: React.FC<BusinessPlanCanvasModalProps> = ({
  isOpen,
  onClose
}) => {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState('AgroZambézia Hortas Sustentáveis');
  const [location, setLocation] = useState('Quelimane, Bairro Sinacura');
  const [valueProp, setValueProp] = useState(
    'Fornecimento diário de hortaliças frescas e couves sem pesticidas nocivos diretamente a restaurantes e famílias locais via encomendas no WhatsApp com entrega rápida.'
  );
  const [targetCustomer, setTargetCustomer] = useState(
    'Restaurantes e pensões de Quelimane, famílias trabalhadoras e feirantes do Mercado Central.'
  );
  const [channels, setChannels] = useState(
    'Catálogo no WhatsApp Business, entregas locais por ciclistas/motoboy e banca física às sextas-feiras.'
  );
  const [keyActivities, setKeyActivities] = useState(
    'Produção em canteiros com rega gota-a-gota solar, colheita matinal, higienização, empacotamento e distribuição.'
  );
  const [costs, setCosts] = useState(
    'Sementes, adubo orgânico, motobomba solar, embalagens biodegradáveis e transporte local.'
  );
  const [revenue, setRevenue] = useState(
    'Venda de cabazes semanais de hortícolas (350 MZN/cabaz) e fornecimento por contrato mensal a pensões.'
  );

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="no-print px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-[#159447]" />
            <div>
              <h3 className="text-base font-bold text-[#123A70]">
                Gerador de Plano de Negócios Simplificado
              </h3>
              <p className="text-xs text-neutral-500">
                Estrutura a tua proposta de negócio para apresentar a bancos, incubadoras ou investidores em Moçambique.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-[#123A70] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir Plano</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Step Indicator */}
          <div className="no-print flex items-center justify-between bg-neutral-100 p-2 rounded-xl text-xs font-medium">
            <button
              onClick={() => setStep(1)}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${step === 1 ? 'bg-white shadow text-[#123A70] font-bold' : 'text-neutral-600'}`}
            >
              1. Identidade & Proposta
            </button>
            <button
              onClick={() => setStep(2)}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${step === 2 ? 'bg-white shadow text-[#123A70] font-bold' : 'text-neutral-600'}`}
            >
              2. Clientes & Canais
            </button>
            <button
              onClick={() => setStep(3)}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${step === 3 ? 'bg-white shadow text-[#123A70] font-bold' : 'text-neutral-600'}`}
            >
              3. Operações & Finanças
            </button>
            <button
              onClick={() => setStep(4)}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${step === 4 ? 'bg-[#159447] text-white font-bold' : 'text-neutral-600'}`}
            >
              4. Ver Canvas Completo
            </button>
          </div>

          {/* Form Steps */}
          {step === 1 && (
            <div className="no-print space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-neutral-900 mb-1">Nome do Negócio ou Projeto *</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={e => setBusinessName(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-neutral-900 mb-1">Localização (Bairro, Cidade / Distrito na Zambézia ou Moçambique) *</label>
                <input
                  type="text"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-neutral-900 mb-1">
                  Proposta de Valor: Qual é a solução diferenciada que ofereces? *
                </label>
                <textarea
                  rows={3}
                  value={valueProp}
                  onChange={e => setValueProp(e.target.value)}
                  className="w-full p-2.5 border border-neutral-300 rounded-lg outline-none leading-relaxed"
                />
              </div>
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-2 bg-[#123A70] text-white rounded-lg flex items-center gap-1 cursor-pointer font-semibold"
                >
                  Seguinte: Clientes <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="no-print space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-neutral-900 mb-1">
                  Quem são os teus clientes prioritários? (Público-Alvo) *
                </label>
                <textarea
                  rows={3}
                  value={targetCustomer}
                  onChange={e => setTargetCustomer(e.target.value)}
                  className="w-full p-2.5 border border-neutral-300 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-neutral-900 mb-1">
                  Canais de Venda e Entrega (Como o cliente te conhece e recebe o produto?) *
                </label>
                <textarea
                  rows={3}
                  value={channels}
                  onChange={e => setChannels(e.target.value)}
                  className="w-full p-2.5 border border-neutral-300 rounded-lg outline-none"
                />
              </div>
              <div className="flex justify-between pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-neutral-600 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Anterior
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-5 py-2 bg-[#123A70] text-white rounded-lg flex items-center gap-1 cursor-pointer font-semibold"
                >
                  Seguinte: Finanças <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="no-print space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-neutral-900 mb-1">
                  Atividades Principais (O que precisas de fazer todos os dias?) *
                </label>
                <textarea
                  rows={2}
                  value={keyActivities}
                  onChange={e => setKeyActivities(e.target.value)}
                  className="w-full p-2.5 border border-neutral-300 rounded-lg outline-none"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-neutral-900 mb-1">
                    Estrutura de Custos (Despesas principais) *
                  </label>
                  <textarea
                    rows={3}
                    value={costs}
                    onChange={e => setCosts(e.target.value)}
                    className="w-full p-2.5 border border-neutral-300 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-neutral-900 mb-1">
                    Fontes de Receita (Como ganhas dinheiro e quanto cobras?) *
                  </label>
                  <textarea
                    rows={3}
                    value={revenue}
                    onChange={e => setRevenue(e.target.value)}
                    className="w-full p-2.5 border border-neutral-300 rounded-lg outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-between pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-neutral-600 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Anterior
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-5 py-2 bg-[#159447] text-white rounded-lg flex items-center gap-1 cursor-pointer font-semibold shadow-sm"
                >
                  Gerar Canvas Completo <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Printable Business Canvas Document */}
          <div className={`${step === 4 ? 'block' : 'hidden print:block'} bg-white p-6 rounded-xl border border-neutral-300 shadow-sm print:border-none print:p-0`}>
            <div className="border-b-2 border-[#123A70] pb-3 mb-5">
              <div className="flex justify-between items-baseline">
                <h2 className="text-xl font-black text-[#123A70] uppercase">
                  {businessName || 'Nome do Negócio'}
                </h2>
                <span className="text-xs text-neutral-500">{location}</span>
              </div>
              <p className="text-xs text-neutral-600 font-medium mt-1">
                Quadro de Modelo de Negócio Simplificado · JUVENTUDE DIGITAL 360°
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200">
                <h4 className="font-bold text-[#123A70] uppercase text-[11px] mb-1.5">
                  1. Proposta de Valor Única
                </h4>
                <p className="text-neutral-700 leading-relaxed">{valueProp}</p>
              </div>

              <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200">
                <h4 className="font-bold text-[#159447] uppercase text-[11px] mb-1.5">
                  2. Clientes Prioritários
                </h4>
                <p className="text-neutral-700 leading-relaxed">{targetCustomer}</p>
              </div>

              <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200">
                <h4 className="font-bold text-[#123A70] uppercase text-[11px] mb-1.5">
                  3. Canais de Venda e Distribuição
                </h4>
                <p className="text-neutral-700 leading-relaxed">{channels}</p>
              </div>

              <div className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200">
                <h4 className="font-bold text-[#123A70] uppercase text-[11px] mb-1.5">
                  4. Atividades Chave
                </h4>
                <p className="text-neutral-700 leading-relaxed">{keyActivities}</p>
              </div>

              <div className="p-3.5 bg-red-50/50 rounded-lg border border-red-200">
                <h4 className="font-bold text-[#E53935] uppercase text-[11px] mb-1.5">
                  5. Estrutura de Custos
                </h4>
                <p className="text-neutral-700 leading-relaxed">{costs}</p>
              </div>

              <div className="p-3.5 bg-emerald-50/50 rounded-lg border border-emerald-200">
                <h4 className="font-bold text-[#159447] uppercase text-[11px] mb-1.5">
                  6. Fontes de Receita
                </h4>
                <p className="text-neutral-700 leading-relaxed">{revenue}</p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-neutral-200 flex justify-between items-center text-[10px] text-neutral-400">
              <span>JUVENTUDE DIGITAL 360° · Apoio ao Empreendedorismo Juvenil em Moçambique</span>
              <span>Data: {new Date().toLocaleDateString('pt-MZ')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
