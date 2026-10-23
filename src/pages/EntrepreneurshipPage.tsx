import React, { useState } from 'react';
import { FundingProgram, BusinessGuide } from '../types';
import {
  Rocket,
  DollarSign,
  BookOpen,
  Building2,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
  Lightbulb,
  Compass
} from 'lucide-react';

interface EntrepreneurshipPageProps {
  fundingPrograms: FundingProgram[];
  businessGuides: BusinessGuide[];
  onOpenBusinessPlan: () => void;
  onOpenIdeaModal: () => void;
  onNavigateToContacts: () => void;
}

export const EntrepreneurshipPage: React.FC<EntrepreneurshipPageProps> = ({
  fundingPrograms,
  businessGuides,
  onOpenBusinessPlan,
  onOpenIdeaModal,
  onNavigateToContacts
}) => {
  const [activeGuideId, setActiveGuideId] = useState<string | null>(businessGuides[0]?.id || null);
  const [activeTab, setActiveTab] = useState<'programas' | 'guias'>('programas');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header and Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-neutral-200">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#159447]">
            <Rocket className="w-4 h-4 text-[#159447]" />
            <span>Autonomia Financeira & Negócios Próprios em Moçambique</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123A70] tracking-tight leading-tight">
            Empreendedorismo e Financiamento Jovem
          </h1>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl">
            Passo-a-passo prático para legalizares o teu negócio no Balcão de Atendimento Único (BAÚ), obteres financiamento com taxas acessíveis e acederes a incubadoras na Zambézia e a nível nacional.
          </p>

          {/* 4 Required Functional Action Buttons */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              onClick={onOpenBusinessPlan}
              className="px-4 py-2.5 bg-[#159447] hover:bg-[#12803c] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm active:scale-95"
            >
              <FileText className="w-4 h-4 text-[#FFC928]" />
              <span>Criar Plano de Negócios</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('guias');
                scrollToSection('guias-section');
              }}
              className="px-4 py-2.5 bg-white border border-neutral-300 hover:border-[#123A70] text-[#123A70] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Compass className="w-4 h-4" />
              <span>Encontrar Apoio</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('programas');
                scrollToSection('programas-section');
              }}
              className="px-4 py-2.5 bg-white border border-neutral-300 hover:border-[#159447] text-[#159447] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <DollarSign className="w-4 h-4" />
              <span>Ver Financiamentos</span>
            </button>

            <button
              onClick={onOpenIdeaModal}
              className="px-4 py-2.5 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Lightbulb className="w-4 h-4 text-[#FFC928]" />
              <span>Apresentar Projeto</span>
            </button>
          </div>
        </div>

        {/* Visual Asset: Mozambican Entrepreneur */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 aspect-[4/3] bg-neutral-100">
            <img
              src="/src/assets/images/youth_entrepreneur_mozambique_1792793464363.jpg"
              alt="Jovem empreendedora moçambicana a gerir negócio de inovação agrária com tablet digital"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-neutral-100 rounded-xl w-fit text-xs font-semibold">
        <button
          onClick={() => setActiveTab('programas')}
          className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
            activeTab === 'programas'
              ? 'bg-white text-[#123A70] shadow-xs'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          Programas de Financiamento & Incubadoras ({fundingPrograms.length})
        </button>
        <button
          onClick={() => setActiveTab('guias')}
          className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
            activeTab === 'guias'
              ? 'bg-white text-[#123A70] shadow-xs'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          Guias Oficiais para Criar Negócio ({businessGuides.length})
        </button>
      </div>

      {/* Financiamentos & Incubadoras */}
      {activeTab === 'programas' && (
        <section id="programas-section" className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-[#123A70]">
              Oportunidades de Apoio Financeiro Verificadas
            </h2>
            <p className="text-xs text-neutral-500">
              Iniciativas sem cobrança fraudulenta de taxas, apoiadas pelo Estado Moçambicano, banca comercial e entidades parceiras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundingPrograms.map(prog => (
              <div
                key={prog.id}
                className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                    <span className="font-semibold text-[#159447]">{prog.fundingType}</span>
                    <span aria-hidden="true">·</span>
                    <span>{prog.region}</span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#123A70]">
                    {prog.organization}
                  </p>

                  <div className="p-3 bg-emerald-50/70 border border-emerald-200/60 rounded-lg text-xs space-y-1">
                    <span className="font-bold text-[#159447] text-[11px] block uppercase">
                      Benefício / Apoio:
                    </span>
                    <p className="text-neutral-800 text-xs font-medium leading-relaxed">
                      {prog.amountOrBenefit}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="space-y-1 pt-1 text-[11px]">
                    <span className="font-semibold text-neutral-700">Requisitos de acesso:</span>
                    <ul className="list-disc pl-4 space-y-0.5 text-neutral-500">
                      {prog.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-neutral-500">
                    Prazo: {prog.deadline}
                  </span>
                  <a
                    href={prog.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#159447] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Candidatar</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Guias Práticos para Criar Negócio */}
      {activeTab === 'guias' && (
        <section id="guias-section" className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-[#123A70]">
              Manuais Passo-a-Passo de Legalização e Gestão
            </h2>
            <p className="text-xs text-neutral-500">
              Orientações claras para jovens que querem formalizar o seu trabalho sem intermediários caros.
            </p>
          </div>

          <div className="space-y-4">
            {businessGuides.map(guide => {
              const isOpen = activeGuideId === guide.id;

              return (
                <div
                  key={guide.id}
                  className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => setActiveGuideId(isOpen ? null : guide.id)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-neutral-500 mb-1">
                        <span className="font-semibold text-[#123A70]">{guide.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>Leitura: {guide.readTime}</span>
                      </div>
                      <h3 className="text-base font-bold text-neutral-900">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {guide.summary}
                      </p>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-neutral-400" /> : <ChevronDown className="w-5 h-5 text-neutral-400" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-2 border-t border-neutral-100 space-y-4 text-xs text-neutral-700 leading-relaxed">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {guide.steps.map((st, idx) => (
                          <div key={idx} className="p-3.5 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                            <h4 className="font-bold text-[#123A70] text-xs">
                              {st.title}
                            </h4>
                            <p className="text-neutral-600 leading-relaxed">
                              {st.content}
                            </p>
                          </div>
                        ))}
                      </div>

                      {guide.officialResources?.length > 0 && (
                        <div className="p-3 bg-blue-50/70 border border-blue-200/80 rounded-lg space-y-1.5">
                          <p className="font-bold text-[#123A70] text-[11px]">
                            Recursos e Portais Oficiais do Governo:
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {guide.officialResources.map((res, i) => (
                              <a
                                key={i}
                                href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#123A70] font-semibold underline flex items-center gap-1 hover:text-[#0d284f]"
                              >
                                <span>{res.name}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

    </div>
  );
};
