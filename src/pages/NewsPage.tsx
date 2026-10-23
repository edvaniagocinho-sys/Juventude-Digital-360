import React, { useState } from 'react';
import { NewsItem } from '../types';
import {
  Newspaper,
  Search,
  ExternalLink,
  Calendar,
  X,
  ShieldCheck,
  Building
} from 'lucide-react';

interface NewsPageProps {
  news: NewsItem[];
}

export const NewsPage: React.FC<NewsPageProps> = ({ news }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const categories = [
    'Todas',
    'Oportunidades',
    'Iniciativas Juvenis',
    'Tecnologia',
    'Zambézia em Foco'
  ];

  const filteredNews = news.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.source.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'Todas' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#123A70] mb-2">
            <Newspaper className="w-4 h-4 text-[#FFC928]" />
            <span>Informação Rigorosa e Verificada</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123A70] tracking-tight">
            Notícias e Iniciativas Juvenis
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
            Avisos de bolsas, concursos de inovação, feiras de emprego e comunicados do Instituto Nacional da Juventude com fontes identificadas.
          </p>
        </div>
      </div>

      {/* Transparency Banner */}
      <div className="p-3.5 bg-neutral-100 rounded-xl border border-neutral-200 flex items-center gap-2.5 text-xs text-neutral-600">
        <ShieldCheck className="w-4 h-4 text-[#159447] shrink-0" />
        <span>
          <strong>Padrão de Veracidade:</strong> Todos os artigos contêm a hiperligação original para a instituição ou órgão emissor. Não publicamos rumores nem notícias não verificadas.
        </span>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Pesquisar por título, edital ou instituição fonte..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#123A70] text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredNews.map(item => (
          <article
            key={item.id}
            className="bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xs transition-all overflow-hidden flex flex-col justify-between"
          >
            <div>
              {item.imageUrl && (
                <div className="h-44 w-full bg-neutral-100 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div className="p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                  <span className="font-semibold text-[#123A70]">{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>

                <div className="pt-1 text-[11px] text-neutral-500 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="truncate">Fonte: {item.source}</span>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-neutral-100 flex items-center justify-between mt-4">
              <button
                onClick={() => setActiveArticle(item)}
                className="text-xs font-bold text-[#123A70] hover:underline cursor-pointer"
              >
                Ler Mais →
              </button>
              {item.sourceUrl && (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-neutral-500 hover:text-neutral-900 flex items-center gap-1"
                >
                  <span>Fonte Oficial</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
              <span className="text-[11px] font-bold text-[#123A70] uppercase">
                {activeArticle.category} · {activeArticle.date}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs text-neutral-700 leading-relaxed">
              <h2 className="text-lg font-bold text-neutral-900 leading-snug">
                {activeArticle.title}
              </h2>

              {activeArticle.imageUrl && (
                <div className="w-full h-56 rounded-xl overflow-hidden bg-neutral-100">
                  <img
                    src={activeArticle.imageUrl}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <p className="text-xs sm:text-sm font-medium text-neutral-800 leading-relaxed bg-neutral-50 p-3.5 rounded-lg border border-neutral-200">
                {activeArticle.summary}
              </p>

              <div className="space-y-3 leading-relaxed text-xs sm:text-sm text-neutral-700">
                <p>{activeArticle.fullContent}</p>
              </div>

              <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-lg text-[11px] text-neutral-600 flex justify-between items-center">
                <span>Fonte institucional: <strong>{activeArticle.source}</strong></span>
                {activeArticle.sourceUrl && (
                  <a
                    href={activeArticle.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#123A70] font-bold underline flex items-center gap-1"
                  >
                    <span>Ver Anúncio na Íntegra</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-[#123A70] text-white text-xs font-semibold rounded-lg cursor-pointer"
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
