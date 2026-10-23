import React from 'react';
import { Logo } from '../components/Logo';
import { PageType } from '../types';
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'Inclusão',
      desc: 'Garantir que os jovens dos distritos mais remotos e de origens humildes tenham a mesma oportunidade de aceder a editais, formação e trabalho que os centros urbanos.'
    },
    {
      title: 'Inovação',
      desc: 'Incentivar soluções digitais, sustentáveis e tecnologicamente acessíveis adaptadas às condições reais de Moçambique.'
    },
    {
      title: 'Transparência',
      desc: 'Rigor absoluto na verificação de fontes. Nenhuma cobrança de taxas indevidas e hiperligações diretas para os canais governamentais e empresariais oficiais.'
    },
    {
      title: 'Aprendizagem Contínua',
      desc: 'Apostar na capacitação técnica permanente em informática, línguas, programação, gestão e inteligência artificial.'
    },
    {
      title: 'Participação Juvenil',
      desc: 'Os jovens não são apenas beneficiários, são autores e protagonistas de propostas no Laboratório de Ideias.'
    },
    {
      title: 'Responsabilidade',
      desc: 'Proteção dos dados pessoais dos jovens, integridade na comunicação e compromisso com o desenvolvimento socioeconómico sustentável do país.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Hero Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-4">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#123A70] bg-[#123A70]/8 px-3 py-1.5 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-[#159447]" />
            <span>Iniciado na Zambézia · Para Todos os Jovens de Moçambique</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123A70] tracking-tight leading-tight">
            Sobre a JUVENTUDE DIGITAL 360°
          </h1>

          <p className="text-base text-neutral-600 leading-relaxed">
            Uma iniciativa cívica e tecnológica concebida para aproximar os jovens moçambicanos — estudantes, candidatos a emprego e empreendedores — do conhecimento, das bolsas de estudo e das oportunidades reais do mercado.
          </p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-neutral-200 shadow-sm shrink-0">
          <Logo size="xl" showSubtitle={true} />
        </div>
      </div>

      {/* Missão e Visão Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Missão */}
        <div className="p-8 bg-white rounded-2xl border border-neutral-200 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#123A70] flex items-center justify-center">
            <Target className="w-6 h-6 text-[#123A70]" />
          </div>
          <h2 className="text-xl font-bold text-[#123A70]">
            A Nossa Missão
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Facilitar o acesso dos jovens à informação, ao conhecimento e às oportunidades, combatendo a assimetria geográfica e conectando talentos locais a plataformas globais.
          </p>
        </div>

        {/* Visão */}
        <div className="p-8 bg-white rounded-2xl border border-neutral-200 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#159447] flex items-center justify-center">
            <Eye className="w-6 h-6 text-[#159447]" />
          </div>
          <h2 className="text-xl font-bold text-[#159447]">
            A Nossa Visão
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Tornar o portal uma referência digital para os jovens moçambicanos, inspirando uma geração autossuficiente, conectada e protagonista no progresso da sua comunidade e do país.
          </p>
        </div>

      </div>

      {/* Valores */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#123A70]">
            Os Nossos Valores Fundamentais
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Princípios inegociáveis que orientam a conceção e operação de toda a plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border border-neutral-200 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                <h3 className="text-base font-bold text-neutral-900">{v.title}</h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Status & Transparency Disclaimer */}
      <div className="p-8 bg-neutral-100 rounded-2xl border border-neutral-200 space-y-4">
        <div className="flex items-center gap-2 text-[#123A70]">
          <ShieldCheck className="w-5 h-5 text-[#159447]" />
          <h3 className="text-base font-bold">
            Transparência Institucional & Fase de Desenvolvimento
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
          O projeto <strong>JUVENTUDE DIGITAL 360°</strong> encontra-se atualmente em fase ativa de desenvolvimento e expansão contínua. 
          Em estrito respeito pelos nossos utilizadores e pelas normas éticas, <strong>não afirmamos parcerias institucionais que ainda não tenham sido formalmente celebradas</strong>. 
          Todos os editais de bolsas, vagas de emprego e formações referem expressamente as respetivas entidades promotoras como fontes públicas oficiais.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contactos')}
            className="px-5 py-2.5 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            Apresentar Proposta de Parceria ou Apoio
          </button>
        </div>
      </div>

    </div>
  );
};
