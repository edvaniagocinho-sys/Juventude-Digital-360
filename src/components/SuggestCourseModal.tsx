import React, { useState } from 'react';
import { X, BookOpen, CheckCircle2 } from 'lucide-react';

interface SuggestCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuggestCourseModal: React.FC<SuggestCourseModalProps> = ({ isOpen, onClose }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [provider, setProvider] = useState('');
  const [url, setUrl] = useState('');
  const [isFree, setIsFree] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCourseTitle('');
    setProvider('');
    setUrl('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#159447]" />
            <h3 className="text-base font-bold text-[#123A70]">Sugerir um Curso Gratuito</h3>
          </div>
          <button onClick={handleReset} className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#159447] mx-auto" />
              <h4 className="text-base font-bold text-neutral-900">Sugestão Recebida!</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                A nossa equipa vai avaliar a relevância e gratuitidade da formação para os jovens moçambicanos e adicioná-la ao catálogo.
              </p>
              <button onClick={handleReset} className="mt-3 px-5 py-2 bg-[#123A70] text-white text-xs font-semibold rounded-lg">
                Fechar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-neutral-800 mb-1">Nome do Curso / Formação *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Introdução à Programação Python"
                  value={courseTitle}
                  onChange={e => setCourseTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-neutral-800 mb-1">Entidade / Plataforma Provedora *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Cisco, Coursera, Harvard, INJ..."
                  value={provider}
                  onChange={e => setProvider(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-neutral-800 mb-1">Link de Acesso Oficial *</label>
                <input
                  type="url"
                  required
                  placeholder="https://plataforma.org/curso"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="freeCheck"
                  checked={isFree}
                  onChange={e => setIsFree(e.target.checked)}
                  className="rounded border-neutral-300 text-[#159447] focus:ring-[#159447]"
                />
                <label htmlFor="freeCheck" className="text-neutral-700">O curso é 100% gratuito ou oferece bolsa comprovada?</label>
              </div>
              <div className="pt-2 flex justify-end gap-2.5">
                <button type="button" onClick={handleReset} className="px-4 py-2 text-neutral-600">
                  Cancelar
                </button>
                <button type="submit" className="px-5 py-2 bg-[#159447] text-white font-semibold rounded-lg shadow-sm">
                  Enviar Sugestão
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
