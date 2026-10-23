import React, { useState } from 'react';
import { YouthIdea, MozambiqueProvince } from '../types';
import {
  Lightbulb,
  PlusCircle,
  Heart,
  Share2,
  MapPin,
  CheckCircle2,
  Filter,
  User,
  ShieldCheck,
  X,
  Sparkles,
  Layers
} from 'lucide-react';

interface IdeaLabPageProps {
  ideas: YouthIdea[];
  onOpenIdeaModal: () => void;
  onLikeIdea: (id: string) => void;
}

export const IdeaLabPage: React.FC<IdeaLabPageProps> = ({
  ideas,
  onOpenIdeaModal,
  onLikeIdea
}) => {
  const [selectedArea, setSelectedArea] = useState<string>('Todas');
  const [selectedProvince, setSelectedProvince] = useState<string>('Todas');
  const [activeIdeaDetails, setActiveIdeaDetails] = useState<YouthIdea | null>(null);

  const areas = [
    'Todas',
    'Agricultura & Agroprocessamento',
    'Educação',
    'Ambiente & Sustentabilidade',
    'Tecnologia & Inovação',
    'Cultura & Artes Digitais',
    'Empreendedorismo Local',
    'Desenvolvimento Comunitário'
  ];

  // Only show ideas that have been approved and where public consent was given
  const publicIdeas = ideas.filter(
    idea => idea.status === 'Aprovada' && idea.publicConsentGiven
  );

  const filteredIdeas = publicIdeas.filter(idea => {
    const matchesArea = selectedArea === 'Todas' || idea.area === selectedArea;
    const matchesProvince = selectedProvince === 'Todas' || idea.province === selectedProvince;
    return matchesArea && matchesProvince;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header and Action Buttons */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#159447] mb-2">
            <Lightbulb className="w-4 h-4 text-[#FFC928]" />
            <span>Incubadora Aberta de Soluções Juvenis</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123A70] tracking-tight">
            Laboratório de Ideias Juvenis
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
            Espaço de cocriação onde jovens da Zambézia e de todo Moçambique apresentam projetos de educação, agricultura, ambiente, cultura e tecnologia para transformar as suas comunidades.
          </p>
        </div>

        {/* 3 Required Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onOpenIdeaModal}
            className="px-4 py-2.5 bg-[#159447] hover:bg-[#12803c] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm active:scale-95"
          >
            <Lightbulb className="w-4 h-4 text-[#FFC928]" />
            <span>Enviar a Minha Ideia</span>
          </button>

          <button
            onClick={onOpenIdeaModal}
            className="px-4 py-2.5 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Apresentar um Projeto</span>
          </button>

          <button
            onClick={() => {
              setSelectedArea('Todas');
              setSelectedProvince('Todas');
            }}
            className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            Ver Ideias em Destaque
          </button>
        </div>
      </div>

      {/* Transparency & Consent Notice */}
      <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl flex items-start gap-3 text-xs text-neutral-700">
        <ShieldCheck className="w-5 h-5 text-[#123A70] shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-[#123A70]">Proteção e Respeito à Autoria Juvenil</p>
          <p className="text-neutral-600 mt-0.5 leading-relaxed">
            Todas as ideias apresentadas publicamente nesta secção receberam consentimento explícito e separado dos seus autores. Nenhuma proposta é divulgada sem a prévia autorização do jovem criador.
          </p>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label className="block text-[11px] font-bold text-neutral-600 mb-1">Filtrar por Área Temática</label>
          <select
            value={selectedArea}
            onChange={e => setSelectedArea(e.target.value)}
            className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
          >
            {areas.map(a => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>

        <div className="sm:w-64">
          <label className="block text-[11px] font-bold text-neutral-600 mb-1">Província</label>
          <select
            value={selectedProvince}
            onChange={e => setSelectedProvince(e.target.value)}
            className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
          >
            <option value="Todas">Todas as Províncias</option>
            <option value="Zambézia">Zambézia (Foco)</option>
            <option value="Maputo Cidade">Maputo Cidade</option>
            <option value="Maputo Província">Maputo Província</option>
            <option value="Sofala">Sofala</option>
            <option value="Nampula">Nampula</option>
          </select>
        </div>
      </div>

      {/* Ideas Grid */}
      {filteredIdeas.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-neutral-200 space-y-3">
          <Lightbulb className="w-10 h-10 text-neutral-300 mx-auto" />
          <h3 className="text-base font-bold text-neutral-800">
            Nenhuma ideia encontrada para os filtros selecionados
          </h3>
          <p className="text-xs text-neutral-500 max-w-md mx-auto">
            Sê o primeiro a apresentar um projeto nesta categoria para inspirar outros jovens moçambicanos!
          </p>
          <button
            onClick={onOpenIdeaModal}
            className="px-5 py-2.5 bg-[#159447] text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            Enviar a Minha Ideia Agora
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map(idea => (
            <div
              key={idea.id}
              className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-neutral-500">
                  <span className="font-semibold text-[#159447]">{idea.area}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-neutral-600">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    {idea.district}, {idea.province}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 leading-snug">
                  {idea.projectName}
                </h3>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-neutral-700 block text-[11px]">Problema Identificado:</span>
                    <p className="text-neutral-600 line-clamp-2">{idea.problem}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-700 block text-[11px]">Solução Proposta:</span>
                    <p className="text-neutral-600 line-clamp-2">{idea.solution}</p>
                  </div>
                </div>

                <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200 text-[11px] text-neutral-600 space-y-0.5">
                  <p><strong>Fase:</strong> {idea.stage}</p>
                  <p><strong>Beneficiários:</strong> {idea.beneficiaries}</p>
                  {idea.authorName && (
                    <p><strong>Autor(a):</strong> {idea.authorName}</p>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => onLikeIdea(idea.id)}
                  className="flex items-center gap-1.5 text-neutral-600 hover:text-red-500 font-medium transition-colors cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>{idea.likesCount || 0} Apoios</span>
                </button>

                <button
                  onClick={() => setActiveIdeaDetails(idea)}
                  className="font-bold text-[#123A70] hover:underline cursor-pointer"
                >
                  Ver Detalhes do Projeto →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Idea Details Modal */}
      {activeIdeaDetails && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
              <div>
                <span className="text-[11px] font-bold text-[#159447] uppercase">
                  {activeIdeaDetails.area} · {activeIdeaDetails.stage}
                </span>
                <h3 className="text-base font-bold text-neutral-900 mt-0.5">
                  {activeIdeaDetails.projectName}
                </h3>
              </div>
              <button
                onClick={() => setActiveIdeaDetails(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs text-neutral-700 leading-relaxed">
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 grid grid-cols-2 sm:grid-cols-3 gap-3 text-[11px]">
                <div>
                  <span className="text-neutral-500 block">Localização</span>
                  <strong className="text-neutral-900">{activeIdeaDetails.district}, {activeIdeaDetails.province}</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">Autor / Equipa</span>
                  <strong className="text-neutral-900">{activeIdeaDetails.authorName || 'Jovem Inovador'}</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">Data de Apresentação</span>
                  <strong className="text-neutral-900">{activeIdeaDetails.submissionDate}</strong>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-xs uppercase tracking-wide mb-1 text-[#123A70]">
                  1. O Problema na Comunidade
                </h4>
                <p className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  {activeIdeaDetails.problem}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-xs uppercase tracking-wide mb-1 text-[#159447]">
                  2. A Solução Proposta
                </h4>
                <p className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-200/60">
                  {activeIdeaDetails.solution}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <h4 className="font-bold text-neutral-900 text-[11px] uppercase tracking-wide mb-1">
                    Público Beneficiário
                  </h4>
                  <p className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200">
                    {activeIdeaDetails.beneficiaries}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-neutral-900 text-[11px] uppercase tracking-wide mb-1">
                    Recursos Necessários
                  </h4>
                  <p className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200">
                    {activeIdeaDetails.requiredResources}
                  </p>
                </div>
              </div>

              {activeIdeaDetails.authorContact && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-[11px]">
                  <strong>Contacto para Apoio / Mentoria:</strong> {activeIdeaDetails.authorContact}
                </div>
              )}
            </div>

            <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
              <button
                onClick={() => onLikeIdea(activeIdeaDetails.id)}
                className="px-4 py-2 bg-white border border-neutral-300 hover:border-red-400 text-neutral-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>Apoiar esta Ideia ({activeIdeaDetails.likesCount || 0})</span>
              </button>

              <button
                onClick={() => setActiveIdeaDetails(null)}
                className="px-4 py-2 bg-[#123A70] text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
