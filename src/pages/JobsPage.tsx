import React, { useState } from 'react';
import { JobOpportunity, MozambiqueProvince } from '../types';
import {
  Briefcase,
  Search,
  Filter,
  MapPin,
  Clock,
  ExternalLink,
  PlusCircle,
  FileText,
  AlertTriangle,
  X,
  Building,
  CheckCircle2,
  Calendar,
  Share2
} from 'lucide-react';

interface JobsPageProps {
  jobs: JobOpportunity[];
  onOpenCVBuilder: () => void;
  onOpenReportJob: () => void;
}

export const JobsPage: React.FC<JobsPageProps> = ({
  jobs,
  onOpenCVBuilder,
  onOpenReportJob
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState<string>('Todas');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedType, setSelectedType] = useState<string>('Todos');
  const [activeJobDetails, setActiveJobDetails] = useState<JobOpportunity | null>(null);

  const provinces: string[] = [
    'Todas',
    'Zambézia',
    'Maputo Cidade',
    'Maputo Província',
    'Sofala',
    'Nampula',
    'Manica',
    'Tete',
    'Inhambane',
    'Gaza',
    'Cabo Delgado',
    'Niassa',
    'Nacional / Remoto'
  ];

  const categories = [
    'Todas',
    'Tecnologia & Digital',
    'Administração & Gestão',
    'Agricultura & Agronomia',
    'Educação',
    'Saúde',
    'Engenharia'
  ];

  const types = [
    'Todos',
    'Estágio Profissional',
    'Primeiro Emprego',
    'Trabalho Técnico',
    'Vaga Júnior',
    'Voluntariado'
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.locationDetails.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesProvince =
      selectedProvince === 'Todas' || job.province === selectedProvince;

    const matchesCategory =
      selectedCategory === 'Todas' || job.category === selectedCategory;

    const matchesType =
      selectedType === 'Todos' || job.type === selectedType;

    return matchesSearch && matchesProvince && matchesCategory && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header & Functional Buttons */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#123A70] mb-2">
            <Briefcase className="w-4 h-4 text-[#159447]" />
            <span>Oportunidades de Entrada no Mercado de Trabalho</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123A70] tracking-tight">
            Emprego e Estágios em Moçambique
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl">
            Vagas para recém-formados, estudantes e jovens à procura do primeiro emprego na província da Zambézia e a nível nacional.
          </p>
        </div>

        {/* Action Buttons: Criar o Meu CV e Comunicar uma Vaga */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onOpenCVBuilder}
            className="px-4 py-2.5 bg-[#123A70] hover:bg-[#0d284f] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm active:scale-95"
          >
            <FileText className="w-4 h-4 text-[#FFC928]" />
            <span>Criar o Meu CV</span>
          </button>

          <button
            onClick={onOpenReportJob}
            className="px-4 py-2.5 bg-white border border-neutral-300 hover:border-[#159447] text-[#159447] rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Comunicar uma Vaga</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Pesquisar por título, empresa, localização em Quelimane ou palavra-chave..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
          />
        </div>

        {/* Filter Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-neutral-600 mb-1">Filtrar por Província</label>
            <select
              value={selectedProvince}
              onChange={e => setSelectedProvince(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
            >
              {provinces.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-neutral-600 mb-1">Filtrar por Área / Categoria</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-neutral-600 mb-1">Tipo de Oportunidade</label>
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
            >
              {types.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter info summary */}
        <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1 border-t border-neutral-100">
          <span>{filteredJobs.length} ofertas encontradas</span>
          {(selectedProvince !== 'Todas' || selectedCategory !== 'Todas' || selectedType !== 'Todos' || searchTerm) && (
            <button
              onClick={() => {
                setSelectedProvince('Todas');
                setSelectedCategory('Todas');
                setSelectedType('Todos');
                setSearchTerm('');
              }}
              className="text-[#123A70] hover:underline cursor-pointer font-medium"
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Jobs Listing */}
      {filteredJobs.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-neutral-200 space-y-3">
          <Briefcase className="w-10 h-10 text-neutral-300 mx-auto" />
          <h3 className="text-base font-bold text-neutral-800">
            Nenhuma oportunidade encontrada com os filtros selecionados
          </h3>
          <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
            De momento não existem vagas correspondentes a esta busca exata. Novas oportunidades verificadas serão adicionadas regularmente pela nossa equipa de moderação na Zambézia e em Moçambique.
          </p>
          <button
            onClick={() => {
              setSelectedProvince('Todas');
              setSelectedCategory('Todas');
              setSelectedType('Todos');
              setSearchTerm('');
            }}
            className="px-4 py-2 bg-[#123A70] text-white text-xs font-semibold rounded-lg mt-2 cursor-pointer"
          >
            Ver Todas as Ofertas Disponíveis
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredJobs.map(job => {
            const isExpired = job.isExpired || new Date(job.deadline) < new Date();

            return (
              <div
                key={job.id}
                className={`p-6 bg-white rounded-xl border transition-all flex flex-col justify-between ${
                  isExpired
                    ? 'border-neutral-200 bg-neutral-50/70 opacity-90'
                    : 'border-neutral-200 hover:border-neutral-300 hover:shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  {/* Clean unboxed metadata with separators (Zero-Pill discipline) */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500">
                    <span className="font-semibold text-[#123A70]">{job.type}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium">{job.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-neutral-600">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      {job.province}
                    </span>
                    {isExpired && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#E53935] font-bold flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          Prazo Expirado
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 leading-snug">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                    <Building className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{job.organization}</span>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                    {job.description}
                  </p>

                  <div className="pt-2 text-xs text-neutral-500 space-y-1">
                    <p className="text-[11px] font-semibold text-neutral-700">Requisitos principais:</p>
                    <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-neutral-600">
                      {job.requirements.slice(0, 2).map((req, idx) => (
                        <li key={idx} className="line-clamp-1">{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="text-[11px] text-neutral-500 flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      {isExpired ? 'Encerrado em:' : 'Prazo:'} {job.deadline}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={() => setActiveJobDetails(job)}
                      className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Ver Detalhes
                    </button>

                    <a
                      href={job.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer shadow-2xs"
                    >
                      <span>Consultar Anúncio Oficial</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Details Modal */}
      {activeJobDetails && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
              <div>
                <span className="text-[11px] font-bold text-[#123A70] uppercase">
                  {activeJobDetails.type} · {activeJobDetails.category}
                </span>
                <h3 className="text-base font-bold text-neutral-900 mt-0.5">
                  {activeJobDetails.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveJobDetails(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-xs text-neutral-700 leading-relaxed">
              {activeJobDetails.isExpired && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>
                    <strong>Aviso de prazo expirado:</strong> As candidaturas para esta vaga já encerraram oficialmente. Podes consultar o perfil para te preparares para futuros concursos.
                  </span>
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-[11px]">
                <div>
                  <span className="text-neutral-500 block">Entidade</span>
                  <strong className="text-neutral-900">{activeJobDetails.organization}</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">Localização</span>
                  <strong className="text-neutral-900">{activeJobDetails.locationDetails}</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">Data Publicação</span>
                  <strong className="text-neutral-900">{activeJobDetails.publishDate}</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">Prazo Limite</span>
                  <strong className="text-neutral-900">{activeJobDetails.deadline}</strong>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 uppercase text-[11px] tracking-wide mb-1.5">
                  Descrição da Oportunidade
                </h4>
                <p>{activeJobDetails.description}</p>
              </div>

              {activeJobDetails.responsibilities?.length > 0 && (
                <div>
                  <h4 className="font-bold text-neutral-900 uppercase text-[11px] tracking-wide mb-1.5">
                    Responsabilidades e Funções
                  </h4>
                  <ul className="list-disc pl-4 space-y-1 text-neutral-600">
                    {activeJobDetails.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeJobDetails.requirements?.length > 0 && (
                <div>
                  <h4 className="font-bold text-neutral-900 uppercase text-[11px] tracking-wide mb-1.5">
                    Requisitos Exigidos
                  </h4>
                  <ul className="list-disc pl-4 space-y-1 text-neutral-600">
                    {activeJobDetails.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-3 bg-neutral-50 rounded-lg text-neutral-600 border border-neutral-200 text-[11px]">
                <p><strong>Fonte Oficial:</strong> {activeJobDetails.source}</p>
                {activeJobDetails.contactEmailOrMethod && (
                  <p className="mt-1"><strong>Envio de candidaturas:</strong> {activeJobDetails.contactEmailOrMethod}</p>
                )}
              </div>
            </div>

            <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  setActiveJobDetails(null);
                  onOpenCVBuilder();
                }}
                className="px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-[#123A70] rounded-lg text-xs font-semibold flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4" />
                <span>Preparar o Meu CV para esta Vaga</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveJobDetails(null)}
                  className="px-4 py-2 text-neutral-600 hover:text-neutral-900 text-xs"
                >
                  Fechar
                </button>
                <a
                  href={activeJobDetails.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <span>Aceder ao Link Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
