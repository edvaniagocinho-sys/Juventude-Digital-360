import React, { useState } from 'react';
import { X, Briefcase, CheckCircle2, AlertCircle } from 'lucide-react';
import { MozambiqueProvince, SuggestedJob } from '../types';
import { StorageService } from '../services/storage';

interface ReportJobModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportJobModal: React.FC<ReportJobModalProps> = ({ isOpen, onClose }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [province, setProvince] = useState<MozambiqueProvince>('Zambézia');
  const [officialLink, setOfficialLink] = useState('');
  const [submitterEmail, setSubmitterEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!jobTitle.trim() || !organization.trim()) {
      setError('Por favor preenche o título da vaga e a instituição.');
      return;
    }
    if (!officialLink.trim()) {
      setError('Por favor indica o link oficial ou fonte da publicação da vaga.');
      return;
    }

    const payload: SuggestedJob = {
      id: `suggested-${Date.now()}`,
      jobTitle: jobTitle.trim(),
      organization: organization.trim(),
      province,
      officialLink: officialLink.trim(),
      submitterEmail: submitterEmail.trim(),
      notes: notes.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    StorageService.addSuggestedJob(payload);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setJobTitle('');
    setOrganization('');
    setOfficialLink('');
    setSubmitterEmail('');
    setNotes('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#123A70]" />
            <h3 className="text-base font-bold text-[#123A70]">Comunicar uma Vaga</h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#159447] mx-auto" />
              <h4 className="text-base font-bold text-neutral-900">Vaga Comunicada com Sucesso!</h4>
              <p className="text-xs text-neutral-600 leading-relaxed max-w-sm mx-auto">
                A equipa do JUVENTUDE DIGITAL 360° irá verificar a veracidade do anúncio no link oficial fornecido antes de a publicar no portal. Obrigado pela colaboração!
              </p>
              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="px-5 py-2 bg-[#123A70] text-white text-xs font-semibold rounded-lg"
                >
                  Fechar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              {error && (
                <div className="p-2.5 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
              <div>
                <label className="block font-semibold text-neutral-800 mb-1">Título da Oportunidade *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Estágio em Administração / Técnico de TI"
                  value={jobTitle}
                  onChange={e => setJobTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-neutral-800 mb-1">Empresa ou Entidade Contratante *</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Empresa Pública, ONG, PME Local..."
                  value={organization}
                  onChange={e => setOrganization(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">Província *</label>
                  <select
                    value={province}
                    onChange={e => setProvince(e.target.value as MozambiqueProvince)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white"
                  >
                    <option value="Zambézia">Zambézia</option>
                    <option value="Maputo Cidade">Maputo Cidade</option>
                    <option value="Maputo Província">Maputo Província</option>
                    <option value="Sofala">Sofala</option>
                    <option value="Nampula">Nampula</option>
                    <option value="Nacional / Remoto">Nacional / Remoto</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">O Teu E-mail (Opcional)</label>
                  <input
                    type="email"
                    placeholder="contacto@exemplo.mz"
                    value={submitterEmail}
                    onChange={e => setSubmitterEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold text-neutral-800 mb-1">Link Oficial ou Fonte do Anúncio *</label>
                <input
                  type="url"
                  required
                  placeholder="https://empresa.co.mz/carreiras ou publicação oficial"
                  value={officialLink}
                  onChange={e => setOfficialLink(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-neutral-800 mb-1">Observações ou Requisitos Principais</label>
                <textarea
                  rows={2}
                  placeholder="Indica detalhes como prazo limite, contacto de envio do CV..."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                />
              </div>
              <div className="pt-2 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-neutral-600 hover:text-neutral-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#123A70] hover:bg-[#0d284f] text-white font-semibold rounded-lg shadow-sm"
                >
                  Enviar Vaga para Verificação
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
