import React, { useState } from 'react';
import { Course } from '../types';
import {
  BookOpen,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
  PlusCircle,
  Clock,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';

interface CoursesPageProps {
  courses: Course[];
  onOpenSuggestCourse: () => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ courses, onOpenSuggestCourse }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('Todas');
  const [selectedCost, setSelectedCost] = useState<string>('Todos');

  const areas = [
    'Todas',
    'Informática & Digital',
    'Inglês para Trabalho',
    'Design & Multimédia',
    'Fotografia & Vídeo',
    'Marketing Digital',
    'Programação',
    'Inteligência Artificial',
    'Gestão & Negócios'
  ];

  const costs = [
    'Todos',
    '100% Gratuito',
    'Com Bolsa Disponível',
    'Subsidiado'
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesArea =
      selectedArea === 'Todas' || course.area === selectedArea;

    const matchesCost =
      selectedCost === 'Todos' || course.costType === selectedCost;

    return matchesSearch && matchesArea && matchesCost;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header with Functional Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 mb-2">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Capacitação e Desenvolvimento de Habilidades Digitais</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123A70] tracking-tight">
            Cursos e Formação Gratuita
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
            Formações em informática, programação, inglês corporativo, design, IA e empreendedorismo com entidades oficiais para jovens em Moçambique.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSuggestCourse}
            className="px-4 py-2.5 bg-white border border-neutral-300 hover:border-amber-600 text-amber-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <PlusCircle className="w-4 h-4 text-amber-600" />
            <span>Sugerir um Curso</span>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Pesquisar formação por área, tecnologia (ex: Excel, Python, IA, Canva) ou entidade..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs border border-neutral-300 rounded-lg focus:ring-1 focus:ring-amber-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-neutral-600 mb-1">Área de Aprendizagem</label>
            <select
              value={selectedArea}
              onChange={e => setSelectedArea(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
            >
              {areas.map(a => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-neutral-600 mb-1">Custo</label>
            <select
              value={selectedCost}
              onChange={e => setSelectedCost(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
            >
              {costs.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1 border-t border-neutral-100">
          <span>{filteredCourses.length} cursos disponíveis</span>
          {(selectedArea !== 'Todas' || selectedCost !== 'Todos' || searchTerm) && (
            <button
              onClick={() => {
                setSelectedArea('Todas');
                setSelectedCost('Todos');
                setSearchTerm('');
              }}
              className="text-amber-700 hover:underline cursor-pointer font-medium"
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div
            key={course.id}
            className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                <span className="font-semibold text-amber-700">{course.costType}</span>
                <span aria-hidden="true">·</span>
                <span>{course.area}</span>
              </div>

              <h3 className="text-base font-bold text-neutral-900 leading-snug">
                {course.title}
              </h3>

              <p className="text-xs text-neutral-600 font-semibold">
                Entidade Provedora: <span className="font-normal text-neutral-800">{course.provider}</span>
              </p>

              <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                {course.description}
              </p>

              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-[11px] space-y-1">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Duração:</span>
                  <span className="font-medium text-neutral-800">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Modalidade:</span>
                  <span className="font-medium text-neutral-800">{course.modality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Certificado:</span>
                  <span className="font-medium text-[#159447]">
                    {course.hasCertificate ? 'Sim (Verificado)' : 'Material de Autoestudo'}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions: Começar a Aprender */}
            <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] text-neutral-500">
                Acesso gratuito
              </span>
              <a
                href={course.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <span>Começar a Aprender</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
