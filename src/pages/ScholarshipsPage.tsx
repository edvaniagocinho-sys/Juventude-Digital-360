import React, { useState } from 'react';
import { Scholarship } from '../types';
import {
  GraduationCap,
  Search,
  Filter,
  Globe,
  CheckCircle2,
  ExternalLink,
  Calendar,
  Clock,
  X,
  FileCheck,
  AlertCircle
} from 'lucide-react';

interface ScholarshipsPageProps {
  scholarships: Scholarship[];
}

export const ScholarshipsPage: React.FC<ScholarshipsPageProps> = ({ scholarships }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('Todos');
  const [selectedDestination, setSelectedDestination] = useState<string>('Todos');
  const [activeScholarshipModal, setActiveScholarshipModal] = useState<Scholarship | null>(null);

  const levels = [
    'Todos',
    'Licenciatura',
    'Pós-graduação / Mestrado',
    'Doutoramento',
    'Intercâmbio',
    'Formação Técnica'
  ];

  const destinations = [
    'Todos',
    'Moçambique',
    'Portugal',
    'Estados Unidos da América (EUA)',
    'África do Sul / Quénia'
  ];

  const filteredScholarships = scholarships.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.destinationCountry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.studyAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesLevel =
      selectedLevel === 'Todos' || item.level === selectedLevel;

    const matchesDestination =
      selectedDestination === 'Todos' ||
      item.destinationCountry.toLowerCase().includes(selectedDestination.toLowerCase());

    return matchesSearch && matchesLevel && matchesDestination;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#159447] mb-2">
            <GraduationCap className="w-4 h-4 text-[#159447]" />
            <span>Educação Superior e Capacitação Internacional</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123A70] tracking-tight">
            Bolsas de Estudo Nacionais e Internacionais
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
            Financiamento confirmado para licenciatura, pós-graduação, intercâmbio e cursos técnicos para jovens moçambicanos através do IBE, cooperação internacional e governos parceiros.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://ibe.gov.mz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-[#159447] border border-emerald-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Portal IBE Moçambique</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Pesquisar por país de destino, instituição (ex: Camões, IBE, DAAD, YALI) ou área..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#159447] outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-neutral-600 mb-1">Nível Académico</label>
            <select
              value={selectedLevel}
              onChange={e => setSelectedLevel(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
            >
              {levels.map(lvl => (
                <option key={lvl} value={lvl}>{lvl}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-neutral-600 mb-1">País ou Região de Destino</label>
            <select
              value={selectedDestination}
              onChange={e => setSelectedDestination(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
            >
              {destinations.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1 border-t border-neutral-100">
          <span>{filteredScholarships.length} bolsas disponíveis</span>
          {(selectedLevel !== 'Todos' || selectedDestination !== 'Todos' || searchTerm) && (
            <button
              onClick={() => {
                setSelectedLevel('Todos');
                setSelectedDestination('Todos');
                setSearchTerm('');
              }}
              className="text-[#159447] hover:underline cursor-pointer font-medium"
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Listing */}
      {filteredScholarships.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-neutral-200 space-y-3">
          <GraduationCap className="w-10 h-10 text-neutral-300 mx-auto" />
          <h3 className="text-base font-bold text-neutral-800">
            Nenhuma bolsa encontrada para os critérios selecionados
          </h3>
          <p className="text-xs text-neutral-500 max-w-md mx-auto">
            Novos editais oficiais são adicionados à medida que são publicados pelo Instituto de Bolsas de Estudo (IBE) e pelas missões diplomáticas.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredScholarships.map(item => (
            <div
              key={item.id}
              className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500">
                  <span className="font-semibold text-[#159447]">{item.level}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium flex items-center gap-1">
                    <Globe className="w-3 h-3 text-neutral-400" />
                    {item.destinationCountry}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#159447] font-medium">Oficial</span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-700 font-semibold">
                  Instituição: <span className="text-neutral-600 font-normal">{item.institution}</span>
                </p>

                {/* Áreas de Estudo */}
                <div className="text-xs text-neutral-600">
                  <span className="font-medium text-neutral-800">Áreas: </span>
                  <span>{item.studyAreas.join(', ')}</span>
                </div>

                {/* Benefícios Confirmados */}
                <div className="p-3 bg-emerald-50/60 border border-emerald-200/60 rounded-lg text-xs space-y-1">
                  <p className="font-bold text-[#159447] text-[11px] uppercase tracking-wider">
                    Benefícios Confirmados no Edital:
                  </p>
                  <ul className="space-y-1 text-[11px] text-neutral-700">
                    {item.confirmedBenefits.map((ben, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#159447] shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons: Ver Bolsas / Consultar Requisitos / Candidatar-me */}
              <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-[11px] text-neutral-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Prazo: {item.deadline}</span>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => setActiveScholarshipModal(item)}
                    className="px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Consultar Requisitos
                  </button>

                  <a
                    href={item.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 bg-[#159447] hover:bg-[#12803c] text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Candidatar-me no Site Oficial</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Requirements Modal */}
      {activeScholarshipModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
              <div>
                <span className="text-[11px] font-bold text-[#159447] uppercase">
                  Requisitos de Elegibilidade & Documentos
                </span>
                <h3 className="text-base font-bold text-neutral-900 mt-0.5">
                  {activeScholarshipModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveScholarshipModal(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-xs text-neutral-700 leading-relaxed">
              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 grid grid-cols-2 sm:grid-cols-3 gap-3 text-[11px]">
                <div>
                  <span className="text-neutral-500 block">Provedor</span>
                  <strong className="text-neutral-900">{activeScholarshipModal.institution}</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">Destino</span>
                  <strong className="text-neutral-900">{activeScholarshipModal.destinationCountry}</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">Prazo de Encerramento</span>
                  <strong className="text-neutral-900">{activeScholarshipModal.deadline}</strong>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-xs uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-[#159447]" />
                  Requisitos Obrigatórios do Candidato:
                </h4>
                <ul className="space-y-1.5">
                  {activeScholarshipModal.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-neutral-50 p-2.5 rounded-lg border border-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeScholarshipModal.notes && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-neutral-700 text-[11px]">
                  <strong>Observação importante:</strong> {activeScholarshipModal.notes}
                </div>
              )}

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-[11px] space-y-1">
                <p className="font-bold">Dica de Preparação para Jovens Moçambicanos:</p>
                <p>
                  Certifica atempadamente cópias do teu B.I., certificado de 12ª classe ou licenciatura na Conservatória e elabora a carta de motivação com foco em como o conhecimento adquirido será aplicado no desenvolvimento de Moçambique.
                </p>
              </div>
            </div>

            <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50 flex justify-between items-center">
              <button
                onClick={() => setActiveScholarshipModal(null)}
                className="px-4 py-2 text-neutral-600 hover:text-neutral-900 text-xs"
              >
                Voltar
              </button>
              <a
                href={activeScholarshipModal.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#159447] hover:bg-[#12803c] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm"
              >
                <span>Candidatar-me no Site Oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
