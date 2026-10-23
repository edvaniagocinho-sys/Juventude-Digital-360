import React, { useState } from 'react';
import { TechGuide } from '../types';
import {
  Cpu,
  ShieldAlert,
  Globe,
  Smartphone,
  Sparkles,
  Terminal,
  ExternalLink,
  Code,
  Lightbulb,
  CheckCircle2,
  Lock,
  Zap
} from 'lucide-react';

interface TechnologyPageProps {
  techGuides: TechGuide[];
  onOpenIdeaModal: () => void;
  onOpenDeployGuide: () => void;
  onNavigateToCourses: () => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({
  techGuides,
  onOpenIdeaModal,
  onOpenDeployGuide,
  onNavigateToCourses
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = [
    'Todas',
    'Inteligência Artificial',
    'Cibersegurança',
    'Criação de Sites',
    'E-Commerce & Pagamentos Móveis'
  ];

  const filteredGuides = techGuides.filter(g =>
    selectedCategory === 'Todas' ? true : g.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header with Visual Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-neutral-200">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#123A70]">
            <Cpu className="w-4 h-4 text-[#123A70]" />
            <span>Capacitação Tecnológica & Futuro do Trabalho</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#123A70] tracking-tight leading-tight">
            Tecnologia e Inovação para Jovens
          </h1>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl">
            Aprende a usar Inteligência Artificial com responsabilidade, blindar as tuas contas contra burlas no m-Pesa/e-Mola, criar o teu primeiro site na web e vender produtos online através do WhatsApp Business.
          </p>

          {/* 4 Required Functional Action Buttons */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              onClick={() => setSelectedCategory('Todas')}
              className="px-4 py-2.5 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm active:scale-95"
            >
              <Zap className="w-4 h-4 text-[#FFC928]" />
              <span>Explorar Ferramentas</span>
            </button>

            <button
              onClick={() => setSelectedCategory('Inteligência Artificial')}
              className="px-4 py-2.5 bg-white border border-neutral-300 hover:border-[#123A70] text-[#123A70] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Aprender IA</span>
            </button>

            <button
              onClick={onOpenDeployGuide}
              className="px-4 py-2.5 bg-white border border-neutral-300 hover:border-[#159447] text-[#159447] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Globe className="w-4 h-4" />
              <span>Criar o Meu Primeiro Site</span>
            </button>

            <button
              onClick={onOpenIdeaModal}
              className="px-4 py-2.5 bg-[#159447] hover:bg-[#12803c] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Lightbulb className="w-4 h-4 text-[#FFC928]" />
              <span>Partilhar uma Inovação</span>
            </button>
          </div>
        </div>

        {/* Visual Asset: Tech Lab with Mozambican Students */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-200 aspect-[4/3] bg-neutral-100">
            <img
              src="/src/assets/images/tech_lab_coding_youth_1792793465763.jpg"
              alt="Jovens moçambicanos numa sala de formação tecnológica a aprender programação e desenvolvimento digital"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Category Pills (Interactive Filter Controls) */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#123A70] text-white shadow-xs'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGuides.map(guide => (
          <div
            key={guide.id}
            className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                <span className="font-semibold text-[#123A70]">{guide.category}</span>
                <span aria-hidden="true">·</span>
                <span>Nível: {guide.level}</span>
              </div>

              <h3 className="text-base font-bold text-neutral-900 leading-snug">
                {guide.title}
              </h3>

              <p className="text-xs text-neutral-600 leading-relaxed">
                {guide.practicalSummary}
              </p>

              {/* Ferramentas Chave */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider block">
                  Ferramentas Recomendadas Gratuitas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {guide.keyTools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md font-mono text-[11px]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Passos e Dicas Práticas */}
              <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                <span className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider block">
                  Dicas Essenciais:
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-600">
                  {guide.stepsOrTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#159447] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-[11px] text-neutral-500">
                Conteúdo educativo aberto
              </span>
              <button
                onClick={onNavigateToCourses}
                className="font-bold text-[#123A70] hover:underline cursor-pointer"
              >
                Ver Cursos Relacionados →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cibersegurança & Alerta Anti-Fraude Especial Moçambique */}
      <section className="p-6 sm:p-8 bg-red-50/60 border border-red-200 rounded-2xl space-y-4">
        <div className="flex items-center gap-2.5 text-red-700">
          <ShieldAlert className="w-6 h-6 shrink-0" />
          <h2 className="text-base sm:text-lg font-bold">
            Alerta de Segurança Digital para Jovens Moçambicanos
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-3xl">
          Nenhuma entidade empregadora idónea ou instituição de ensino pede pagamentos prévios por transferência de telemóvel (m-Pesa / e-Mola) como condição para entrevista de emprego ou inscrição em bolsas de estudo. Denuncia sempre fraudes e protege as tuas palavras-passe.
        </p>
      </section>

    </div>
  );
};
