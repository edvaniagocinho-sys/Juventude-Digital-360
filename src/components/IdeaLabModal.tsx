import React, { useState } from 'react';
import { X, Lightbulb, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { MozambiqueProvince, YouthIdea } from '../types';
import { StorageService } from '../services/storage';

interface IdeaLabModalProps {
  isOpen: boolean;
  onClose: () => void;
  onIdeaSubmitted?: (newIdea: YouthIdea) => void;
}

export const IdeaLabModal: React.FC<IdeaLabModalProps> = ({
  isOpen,
  onClose,
  onIdeaSubmitted
}) => {
  const [projectName, setProjectName] = useState('');
  const [area, setArea] = useState<YouthIdea['area']>('Agricultura & Agroprocessamento');
  const [province, setProvince] = useState<MozambiqueProvince>('Zambézia');
  const [district, setDistrict] = useState('Quelimane');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [beneficiaries, setBeneficiaries] = useState('');
  const [requiredResources, setRequiredResources] = useState('');
  const [stage, setStage] = useState<YouthIdea['stage']>('Ideia Inicial');
  const [authorName, setAuthorName] = useState('');
  const [authorContact, setAuthorContact] = useState('');
  const [publicConsentGiven, setPublicConsentGiven] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!projectName.trim()) {
      setErrorMessage('Por favor, indica o nome do teu projeto.');
      return;
    }
    if (!problem.trim() || problem.length < 20) {
      setErrorMessage('Por favor, descreve o problema com pelo menos 20 caracteres.');
      return;
    }
    if (!solution.trim() || solution.length < 20) {
      setErrorMessage('Por favor, descreve a tua solução proposta com pelo menos 20 caracteres.');
      return;
    }
    if (!beneficiaries.trim()) {
      setErrorMessage('Por favor, indica quem são os beneficiários do projeto.');
      return;
    }

    // Notice: if publicConsentGiven is false, the idea will be saved as private / moderation pending
    const newIdea: YouthIdea = {
      id: `idea-${Date.now()}`,
      projectName: projectName.trim(),
      area,
      province,
      district: district.trim() || 'Zambézia',
      problem: problem.trim(),
      solution: solution.trim(),
      beneficiaries: beneficiaries.trim(),
      requiredResources: requiredResources.trim() || 'Apoio técnico e mentoria inicial',
      stage,
      authorName: authorName.trim() || 'Jovem Inovador(a)',
      authorContact: authorContact.trim() || undefined,
      publicConsentGiven,
      submissionDate: new Date().toISOString().split('T')[0],
      status: publicConsentGiven ? 'Aprovada' : 'Pendente',
      likesCount: 1
    };

    StorageService.addIdea(newIdea);
    if (onIdeaSubmitted) {
      onIdeaSubmitted(newIdea);
    }
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setProjectName('');
    setProblem('');
    setSolution('');
    setBeneficiaries('');
    setRequiredResources('');
    setAuthorName('');
    setAuthorContact('');
    setPublicConsentGiven(false);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-100 text-[#159447] rounded-lg">
              <Lightbulb className="w-5 h-5 text-[#159447]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#123A70]">
                Laboratório de Ideias Juvenis
              </h3>
              <p className="text-xs text-neutral-500">
                Apresenta a tua proposta para a Zambézia e todo Moçambique
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Confirmation */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-[#159447] rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-[#123A70]">
                Ideia Submetida com Sucesso!
              </h4>
              <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                O teu projeto <strong>"{projectName}"</strong> foi registado na base do Laboratório de Ideias.
                {publicConsentGiven ? (
                  <span className="block mt-1 text-[#159447] font-medium">
                    Como deste consentimento explícito, a tua ideia já está visível para a comunidade apoiar e partilhar.
                  </span>
                ) : (
                  <span className="block mt-1 text-amber-700 font-medium">
                    Como não selecionaste a divulgação pública, a tua ideia foi guardada com privacidade apenas para análise direta da equipa do projeto.
                  </span>
                )}
              </p>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg text-xs font-semibold cursor-pointer shadow-sm transition-colors"
                >
                  Concluir e Ver Ideias
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Nome do Projeto */}
              <div>
                <label className="block font-semibold text-neutral-900 mb-1">
                  Nome do Projeto ou Ideia <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Sistema Solar Comunitário de Quelimane"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                />
              </div>

              {/* Área e Fase */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-neutral-900 mb-1">
                    Área Temática <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={area}
                    onChange={e => setArea(e.target.value as YouthIdea['area'])}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none bg-white"
                  >
                    <option value="Agricultura & Agroprocessamento">Agricultura & Agroprocessamento</option>
                    <option value="Educação">Educação</option>
                    <option value="Ambiente & Sustentabilidade">Ambiente & Sustentabilidade</option>
                    <option value="Tecnologia & Inovação">Tecnologia & Inovação</option>
                    <option value="Cultura & Artes Digitais">Cultura & Artes Digitais</option>
                    <option value="Empreendedorismo Local">Empreendedorismo Local</option>
                    <option value="Desenvolvimento Comunitário">Desenvolvimento Comunitário</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-900 mb-1">
                    Fase Atual do Projeto <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={stage}
                    onChange={e => setStage(e.target.value as YouthIdea['stage'])}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none bg-white"
                  >
                    <option value="Ideia Inicial">Ideia Inicial (Apenas conceito)</option>
                    <option value="Protótipo / Em Teste">Protótipo / Em Teste (Primeiro modelo)</option>
                    <option value="Em Operação Piloto">Em Operação Piloto (Já a funcionar)</option>
                    <option value="Em Expansão">Em Expansão (A crescer)</option>
                  </select>
                </div>
              </div>

              {/* Localização: Província e Distrito */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-neutral-900 mb-1">
                    Província <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={province}
                    onChange={e => setProvince(e.target.value as MozambiqueProvince)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none bg-white"
                  >
                    <option value="Zambézia">Zambézia (Foco Prioritário)</option>
                    <option value="Maputo Cidade">Maputo Cidade</option>
                    <option value="Maputo Província">Maputo Província</option>
                    <option value="Sofala">Sofala</option>
                    <option value="Nampula">Nampula</option>
                    <option value="Manica">Manica</option>
                    <option value="Tete">Tete</option>
                    <option value="Inhambane">Inhambane</option>
                    <option value="Gaza">Gaza</option>
                    <option value="Cabo Delgado">Cabo Delgado</option>
                    <option value="Niassa">Niassa</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-900 mb-1">
                    Distrito / Bairro <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Quelimane, Mocuba, Gurué..."
                    value={district}
                    onChange={e => setDistrict(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                  />
                </div>
              </div>

              {/* Problema Identificado */}
              <div>
                <label className="block font-semibold text-neutral-900 mb-1">
                  Qual é o Problema que queres resolver? <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Descreve a dificuldade ou carência que existe na comunidade..."
                  value={problem}
                  onChange={e => setProblem(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                />
              </div>

              {/* Solução Proposta */}
              <div>
                <label className="block font-semibold text-neutral-900 mb-1">
                  Qual é a tua Solução Proposta? <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Como é que o teu projeto resolve esse problema de forma prática e inovadora..."
                  value={solution}
                  onChange={e => setSolution(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                />
              </div>

              {/* Público Beneficiário e Recursos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-neutral-900 mb-1">
                    Público Beneficiário <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 200 estudantes, agricultores familiares..."
                    value={beneficiaries}
                    onChange={e => setBeneficiaries(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-900 mb-1">
                    Recursos Necessários para Começar
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Mentoria, 2 painéis solares, espaço físico..."
                    value={requiredResources}
                    onChange={e => setRequiredResources(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                  />
                </div>
              </div>

              {/* Dados do Autor (Opcionais) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-neutral-200">
                <div>
                  <label className="block font-medium text-neutral-700 mb-1">
                    Nome do(a) Autor(a) ou Equipa (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="O teu nome ou nome do grupo"
                    value={authorName}
                    onChange={e => setAuthorName(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-neutral-700 mb-1">
                    Contacto Telefónico / WhatsApp ou E-mail (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Para potenciais mentores te contactarem"
                    value={authorContact}
                    onChange={e => setAuthorContact(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                  />
                </div>
              </div>

              {/* MANDATORY EXPLICIT SEPARATE CONSENT CHECKBOX */}
              <div className="p-3.5 bg-blue-50/60 border border-blue-200/80 rounded-xl space-y-1.5">
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="consentCheckbox"
                    checked={publicConsentGiven}
                    onChange={e => setPublicConsentGiven(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-[#123A70] rounded border-neutral-300 focus:ring-[#123A70] cursor-pointer"
                  />
                  <label htmlFor="consentCheckbox" className="font-medium text-neutral-800 leading-snug cursor-pointer select-none">
                    <strong>Consentimento de Divulgação Pública:</strong> Autorizo expressamente que esta ideia seja publicada e divulgada no mural público do Laboratório de Ideias do JUVENTUDE DIGITAL 360° para visualização e apoio comunitário.
                  </label>
                </div>
                <p className="text-[11px] text-neutral-500 pl-6 leading-relaxed">
                  (Se deixares esta opção desmarcada, a tua ideia será registada apenas de forma confidencial para avaliação interna da coordenação e não aparecerá publicamente).
                </p>
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-neutral-600 hover:text-neutral-900 cursor-pointer font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#159447] hover:bg-[#12803c] text-white rounded-lg font-semibold shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Lightbulb className="w-4 h-4 text-[#FFC928]" />
                  <span>Enviar a Minha Ideia</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
