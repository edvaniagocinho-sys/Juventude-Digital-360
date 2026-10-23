import React, { useState } from 'react';
import { PageType, JobOpportunity, Scholarship, Course, YouthIdea, NewsItem } from '../types';
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Rocket,
  Cpu,
  Lightbulb,
  Newspaper,
  ArrowRight,
  Search,
  ExternalLink,
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Heart
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenCVBuilder: () => void;
  onOpenIdeaModal: () => void;
  onOpenBusinessPlan: () => void;
  onSelectJob: (job: JobOpportunity) => void;
  onSelectScholarship: (scholarship: Scholarship) => void;
  jobs: JobOpportunity[];
  scholarships: Scholarship[];
  courses: Course[];
  ideas: YouthIdea[];
  news: NewsItem[];
  onLikeIdea: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenCVBuilder,
  onOpenIdeaModal,
  onOpenBusinessPlan,
  onSelectJob,
  onSelectScholarship,
  jobs,
  scholarships,
  courses,
  ideas,
  news,
  onLikeIdea
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleGlobalSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    // Route to jobs page or relevant category based on query
    onNavigate('emprego');
  };

  const activeJobs = jobs.filter(j => !j.isExpired).slice(0, 3);
  const featuredScholarships = scholarships.slice(0, 3);
  const freeCourses = courses.slice(0, 3);
  const featuredIdeas = ideas.filter(i => i.status === 'Aprovada' && i.publicConsentGiven).slice(0, 3);
  const latestNews = news.slice(0, 2);

  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#123A70]/6 via-white to-neutral-50/50 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Regional Editorial Trust Marker */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#123A70] bg-[#123A70]/8 px-3 py-1.5 rounded-md">
                <MapPin className="w-3.5 h-3.5 text-[#159447]" />
                <span>Foco Inicial na Zambézia · Expansão para Todo Moçambique</span>
              </div>

              {/* Headline with text-wrap: balance */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#123A70] leading-[1.15]" style={{ textWrap: 'balance' }}>
                O teu futuro começa com uma oportunidade!
              </h1>

              {/* Subheading / Description */}
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                Descobre oportunidades de emprego, bolsas de estudo, formação, empreendedorismo e inovação para jovens em Moçambique.
              </p>

              {/* Slogan and Brand Motto */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-neutral-700 pt-1">
                <span className="font-bold text-[#159447]">Tecnologia, Conhecimento e Oportunidades</span>
                <span>·</span>
                <span className="text-[#E53935] font-bold">Descobre. Aprende. Empreende. Inova.</span>
              </div>

              {/* Functional Search Bar */}
              <form onSubmit={handleGlobalSearch} className="max-w-xl relative">
                <div className="relative flex items-center">
                  <Search className="w-5 h-5 text-neutral-400 absolute left-4 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Pesquisar vagas, estágios, bolsas em Quelimane ou cursos..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-32 py-3.5 bg-white border border-neutral-300 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#123A70] focus:border-transparent shadow-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 px-4 py-2 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Pesquisar
                  </button>
                </div>
              </form>

              {/* 8 Requested Functional Action Buttons in 2 disciplined CTA blocks */}
              <div className="pt-2 space-y-3">
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Ações Rápidas para Jovens:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => onNavigate('emprego')}
                    className="px-4 py-2.5 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg text-xs font-semibold transition-all cursor-pointer shadow-sm active:scale-95 flex items-center gap-1.5"
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Explorar Oportunidades</span>
                  </button>

                  <button
                    onClick={() => onNavigate('emprego')}
                    className="px-4 py-2.5 bg-white border border-neutral-300 hover:border-[#123A70] text-[#123A70] rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
                  >
                    <span>Procurar Emprego</span>
                  </button>

                  <button
                    onClick={() => onNavigate('bolsas')}
                    className="px-4 py-2.5 bg-white border border-neutral-300 hover:border-[#159447] text-[#159447] rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Encontrar Bolsas</span>
                  </button>

                  <button
                    onClick={() => onNavigate('cursos')}
                    className="px-4 py-2.5 bg-white border border-neutral-300 hover:border-amber-600 text-amber-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Aprender Gratuitamente</span>
                  </button>

                  <button
                    onClick={() => onNavigate('empreendedorismo')}
                    className="px-4 py-2.5 bg-white border border-neutral-300 hover:border-[#159447] text-neutral-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
                  >
                    <Rocket className="w-3.5 h-3.5 text-[#159447]" />
                    <span>Criar o Meu Negócio</span>
                  </button>

                  <button
                    onClick={() => onNavigate('tecnologia')}
                    className="px-4 py-2.5 bg-white border border-neutral-300 hover:border-[#123A70] text-neutral-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
                  >
                    <Cpu className="w-3.5 h-3.5 text-[#123A70]" />
                    <span>Explorar Tecnologia</span>
                  </button>

                  <button
                    onClick={onOpenIdeaModal}
                    className="px-4 py-2.5 bg-[#159447] hover:bg-[#12803c] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-[#FFC928]" />
                    <span>Enviar uma Ideia</span>
                  </button>

                  <button
                    onClick={() => onNavigate('contactos')}
                    className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Contactar a Equipa</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset (Authentic African Youth) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200/90 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] bg-neutral-100">
                <img
                  src="/src/assets/images/hero_mozambique_youth_1792793463704.jpg"
                  alt="Jovens moçambicanos a colaborar com computadores e tecnologia na aprendizagem"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-semibold text-[#FFC928] tracking-wide uppercase">
                    Comunidade Jovem de Inovação
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mt-1 text-white leading-snug">
                    Capacitando os talentos de Quelimane e de Moçambique para o mercado global
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-200 mt-2">
                    <span>Acesso Livre e Gratuito</span>
                    <span>·</span>
                    <span>Fontes Oficiais Verificadas</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#123A70]">
              Principais Áreas de Oportunidade
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Navega diretamente pelos setores fundamentais para a tua autonomia e crescimento.
            </p>
          </div>
          <button
            onClick={() => onNavigate('emprego')}
            className="text-xs font-bold text-[#123A70] hover:underline flex items-center gap-1 cursor-pointer self-start md:self-auto"
          >
            <span>Ver Todas as Oportunidades</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Card 1: Emprego e Estágios */}
          <div
            onClick={() => onNavigate('emprego')}
            className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-[#123A70] hover:shadow-md transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#123A70] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Briefcase className="w-5 h-5 text-[#123A70]" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#123A70] transition-colors">
              Emprego e Estágios
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Vagas para recém-licenciados, estágios profissionais remunerados e primeiros empregos na Zambézia e a nível nacional.
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100">
              <span className="font-semibold text-[#123A70]">{jobs.length} ofertas listadas</span>
              <span className="text-[#123A70] font-semibold group-hover:translate-x-1 transition-transform">Aceder →</span>
            </div>
          </div>

          {/* Card 2: Bolsas de Estudo */}
          <div
            onClick={() => onNavigate('bolsas')}
            className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-[#159447] hover:shadow-md transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#159447] flex items-center justify-center group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 text-[#159447]" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#159447] transition-colors">
              Bolsas de Estudo
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Programas de financiamento para Licenciatura, Mestrado, Intercâmbio e Formação Técnica (IBE, Camões, DAAD, YALI).
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100">
              <span className="font-semibold text-[#159447]">{scholarships.length} programas abertos</span>
              <span className="text-[#159447] font-semibold group-hover:translate-x-1 transition-transform">Aceder →</span>
            </div>
          </div>

          {/* Card 3: Cursos e Formação Gratuita */}
          <div
            onClick={() => onNavigate('cursos')}
            className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-amber-500 hover:shadow-md transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
              Cursos e Formação
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Capacitação prática em informática, programação, inglês corporativo, design gráfico e marketing digital com certificado.
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100">
              <span className="font-semibold text-amber-800">{courses.length} cursos disponíveis</span>
              <span className="text-amber-800 font-semibold group-hover:translate-x-1 transition-transform">Aceder →</span>
            </div>
          </div>

          {/* Card 4: Empreendedorismo e Financiamento */}
          <div
            onClick={() => onNavigate('empreendedorismo')}
            className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-[#159447] hover:shadow-md transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#159447] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Rocket className="w-5 h-5 text-[#159447]" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#159447] transition-colors">
              Empreendedorismo
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Guias oficiais para legalização de empresas no BAÚ, obtenção do NUIT, elaboração de planos de negócio e linhas de crédito jovem.
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100">
              <span className="font-semibold text-[#159447]">Guias e Incubadoras</span>
              <span className="text-[#159447] font-semibold group-hover:translate-x-1 transition-transform">Aceder →</span>
            </div>
          </div>

          {/* Card 5: Tecnologia e Inovação */}
          <div
            onClick={() => onNavigate('tecnologia')}
            className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-[#123A70] hover:shadow-md transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#123A70] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Cpu className="w-5 h-5 text-[#123A70]" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#123A70] transition-colors">
              Tecnologia e Inovação
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Fundamentos práticos de Inteligência Artificial, segurança contra burlas de carteiras móveis e tutoriais de criação de sites.
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100">
              <span className="font-semibold text-[#123A70]">Ferramentas Digitais</span>
              <span className="text-[#123A70] font-semibold group-hover:translate-x-1 transition-transform">Aceder →</span>
            </div>
          </div>

          {/* Card 6: Laboratório de Ideias Juvenis */}
          <div
            onClick={() => onNavigate('laboratorio')}
            className="p-6 bg-gradient-to-br from-neutral-900 to-[#123A70] text-white rounded-xl border border-neutral-800 hover:shadow-lg transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-white/10 text-[#FFC928] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-[#FFC928] transition-colors">
              Laboratório de Ideias Juvenis
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Mural aberto onde jovens da Zambézia e de Moçambique apresentam soluções para agricultura, energia, educação e comunidade.
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-neutral-300 border-t border-white/10">
              <span className="font-semibold text-[#FFC928]">{ideas.length} ideias ativas</span>
              <span className="text-white font-semibold group-hover:translate-x-1 transition-transform">Partilhar Ideia →</span>
            </div>
          </div>

        </div>
      </section>

      {/* Recent Opportunities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#123A70]">
              Oportunidades Recentes Verificadas
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Últimas publicações oficiais de postos de trabalho e estágios profissionais.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCVBuilder}
              className="px-3.5 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-[#123A70] rounded-lg text-xs font-semibold cursor-pointer transition-colors"
            >
              Criar o Meu CV
            </button>
            <button
              onClick={() => onNavigate('emprego')}
              className="text-xs font-bold text-[#123A70] hover:underline cursor-pointer"
            >
              Ver todas ({jobs.length})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {activeJobs.map(job => (
            <div
              key={job.id}
              className="p-5 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                {/* Clean unboxed metadata with · separator (Zero-Pill discipline) */}
                <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                  <span className="font-semibold text-[#123A70]">{job.type}</span>
                  <span aria-hidden="true">·</span>
                  <span>{job.province}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#159447] font-medium">Verificado</span>
                </div>

                <h3 className="text-sm font-bold text-neutral-900 leading-snug line-clamp-2">
                  {job.title}
                </h3>

                <p className="text-xs text-neutral-600 font-medium">
                  {job.organization}
                </p>

                <p className="text-xs text-neutral-500 line-clamp-2">
                  {job.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <div className="text-[11px] text-neutral-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Prazo: {job.deadline}</span>
                </div>
                <button
                  onClick={() => onSelectJob(job)}
                  className="font-bold text-[#123A70] hover:underline cursor-pointer"
                >
                  Ver Detalhes →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Scholarships & Courses Split Section */}
      <section className="bg-neutral-50 border-y border-neutral-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Bolsas em Destaque */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#159447]">
                  Bolsas de Estudo em Destaque
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  Editais de mérito e cooperação internacional com benefícios e alojamento confirmados.
                </p>
              </div>
              <button
                onClick={() => onNavigate('bolsas')}
                className="text-xs font-bold text-[#159447] hover:underline cursor-pointer"
              >
                Ver Todas as Bolsas →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featuredScholarships.map(scholarship => (
                <div
                  key={scholarship.id}
                  className="p-5 bg-white rounded-xl border border-neutral-200 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                      <span className="font-semibold text-[#159447]">{scholarship.level}</span>
                      <span aria-hidden="true">·</span>
                      <span>{scholarship.destinationCountry}</span>
                    </div>

                    <h3 className="text-sm font-bold text-neutral-900 leading-snug">
                      {scholarship.title}
                    </h3>

                    <p className="text-xs text-neutral-600 font-medium">
                      {scholarship.institution}
                    </p>

                    <div className="space-y-1 pt-1 text-[11px] text-neutral-600">
                      <p className="font-medium text-neutral-800">Benefícios confirmados:</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-neutral-500">
                        {scholarship.confirmedBenefits.slice(0, 2).map((ben, idx) => (
                          <li key={idx} className="line-clamp-1">{ben}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-neutral-500">
                      Prazo: {scholarship.deadline}
                    </span>
                    <button
                      onClick={() => onSelectScholarship(scholarship)}
                      className="font-bold text-[#159447] hover:underline cursor-pointer"
                    >
                      Consultar Requisitos →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cursos Gratuitos */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#123A70]">
                  Cursos e Formações Gratuitas
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  Competências práticas de alta procura no mercado com certificados oficiais.
                </p>
              </div>
              <button
                onClick={() => onNavigate('cursos')}
                className="text-xs font-bold text-[#123A70] hover:underline cursor-pointer"
              >
                Explorar Todos os Cursos →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {freeCourses.map(course => (
                <div
                  key={course.id}
                  className="p-5 bg-white rounded-xl border border-neutral-200 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                      <span className="font-semibold text-amber-700">{course.costType}</span>
                      <span aria-hidden="true">·</span>
                      <span>{course.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span>{course.modality}</span>
                    </div>

                    <h3 className="text-sm font-bold text-neutral-900 leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-neutral-600 font-medium">
                      Entidade: {course.provider}
                    </p>

                    <p className="text-xs text-neutral-500 line-clamp-2">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-neutral-500">
                      {course.hasCertificate ? 'Com Certificado Oficial' : 'Autoestudo Prático'}
                    </span>
                    <a
                      href={course.officialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#123A70] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Aprender</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Laboratório de Ideias Spotlight with Zambézia Community Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#123A70] to-[#0c274d] rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFC928]">
                <Lightbulb className="w-4 h-4 text-[#FFC928]" />
                <span>Laboratório de Ideias Juvenis · Zambézia & Moçambique</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Tens uma ideia que pode transformar a tua comunidade?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed max-w-xl">
                Apresenta projetos nas áreas de educação, agricultura, ambiente, cultura, tecnologia ou desenvolvimento social. Conecta-te com potenciais mentores e dá visibilidade à criatividade dos jovens moçambicanos.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={onOpenIdeaModal}
                  className="px-5 py-2.5 bg-[#159447] hover:bg-[#12803c] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
                >
                  <Lightbulb className="w-4 h-4 text-[#FFC928]" />
                  <span>Enviar a Minha Ideia</span>
                </button>
                <button
                  onClick={() => onNavigate('laboratorio')}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer border border-white/20"
                >
                  Ver Ideias em Destaque ({ideas.length})
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-lg border border-white/15 aspect-[4/3] bg-neutral-900">
                <img
                  src="/src/assets/images/community_innovation_zambezia_1792793465116.jpg"
                  alt="Estudantes universitários em Quelimane a discutir projeto de desenvolvimento comunitário sustentável"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Verified News & Initiatives Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#123A70]">
              Notícias e Iniciativas Juvenis
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Informação oficial e comunicados públicos sem conteúdos fictícios.
            </p>
          </div>
          <button
            onClick={() => onNavigate('noticias')}
            className="text-xs font-bold text-[#123A70] hover:underline cursor-pointer"
          >
            Ver Todas as Notícias →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestNews.map(item => (
            <div
              key={item.id}
              className="p-5 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xs transition-all flex flex-col sm:flex-row gap-4"
            >
              {item.imageUrl && (
                <div className="sm:w-36 h-28 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div className="flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 mb-1">
                    <span className="font-semibold text-[#123A70]">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 mt-1">
                    {item.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-neutral-100">
                  <span className="text-[11px] text-neutral-500 truncate max-w-[180px]">
                    Fonte: {item.source}
                  </span>
                  <button
                    onClick={() => onNavigate('noticias')}
                    className="font-bold text-[#123A70] hover:underline cursor-pointer shrink-0"
                  >
                    Ler Mais →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Call to Action & Trust Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-neutral-100 rounded-2xl border border-neutral-200 text-center space-y-4">
          <ShieldCheck className="w-8 h-8 text-[#159447] mx-auto" />
          <h3 className="text-lg font-bold text-[#123A70]">
            Compromisso com a Juventude Moçambicana
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            O JUVENTUDE DIGITAL 360° é uma plataforma independente em desenvolvimento contínuo, construída para dar acesso igualitário ao conhecimento e às oportunidades em Moçambique. Não cobramos taxas por nenhuma vaga, edital ou bolsa.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('sobre')}
              className="text-xs font-semibold text-[#123A70] hover:underline cursor-pointer"
            >
              Conhecer a Nossa Missão
            </button>
            <span className="text-neutral-300">|</span>
            <button
              onClick={() => onNavigate('contactos')}
              className="text-xs font-semibold text-[#159447] hover:underline cursor-pointer"
            >
              Propor Parceria ou Voluntariado
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
