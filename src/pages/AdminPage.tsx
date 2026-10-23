import React, { useState } from 'react';
import { StorageService } from '../services/storage';
import {
  JobOpportunity,
  Scholarship,
  Course,
  YouthIdea,
  ContactMessage,
  SuggestedJob,
  MozambiqueProvince
} from '../types';
import {
  Lock,
  Unlock,
  KeyRound,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Download,
  Upload,
  Briefcase,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Mail,
  ShieldAlert,
  RotateCcw
} from 'lucide-react';

interface AdminPageProps {
  jobs: JobOpportunity[];
  scholarships: Scholarship[];
  courses: Course[];
  ideas: YouthIdea[];
  onDataChanged: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({
  jobs,
  scholarships,
  courses,
  ideas,
  onDataChanged
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() =>
    StorageService.isAdminLoggedIn()
  );
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'vagas' | 'bolsas' | 'cursos' | 'ideias' | 'mensagens' | 'sugestoes' | 'backup'>('vagas');
  const [statusMessage, setStatusMessage] = useState('');

  // Form states for adding a new job
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobOrg, setNewJobOrg] = useState('');
  const [newJobProvince, setNewJobProvince] = useState<MozambiqueProvince>('Zambézia');
  const [newJobType, setNewJobType] = useState<JobOpportunity['type']>('Estágio Profissional');
  const [newJobCategory, setNewJobCategory] = useState<JobOpportunity['category']>('Tecnologia & Digital');
  const [newJobDeadline, setNewJobDeadline] = useState('2026-12-31');
  const [newJobLink, setNewJobLink] = useState('');
  const [newJobDesc, setNewJobDesc] = useState('');
  const [newJobReqs, setNewJobReqs] = useState('');

  // Messages and suggested jobs
  const messages = StorageService.getContactMessages();
  const suggestedJobs = StorageService.getSuggestedJobs();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    if (StorageService.verifyAdminPin(pinInput)) {
      StorageService.setAdminLoggedIn(true);
      setIsAuthenticated(true);
      setPinInput('');
    } else {
      setAuthError('Código PIN incorreto. O PIN de administração inicial é 3602026.');
    }
  };

  const handleLogout = () => {
    StorageService.setAdminLoggedIn(false);
    setIsAuthenticated(false);
  };

  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJobTitle.trim() || !newJobOrg.trim() || !newJobLink.trim()) {
      setStatusMessage('Preencha os campos obrigatórios da vaga.');
      return;
    }

    const jobItem: JobOpportunity = {
      id: `job-${Date.now()}`,
      title: newJobTitle.trim(),
      organization: newJobOrg.trim(),
      province: newJobProvince,
      locationDetails: `${newJobProvince}, Moçambique`,
      type: newJobType,
      category: newJobCategory,
      requirements: newJobReqs
        ? newJobReqs.split('\n').filter(r => r.trim().length > 0)
        : ['Perfil jovem dinâmico', 'Habilitações na área relevante'],
      responsibilities: ['Funções de acordo com os termos de referência oficiais da instituição'],
      publishDate: new Date().toISOString().split('T')[0],
      deadline: newJobDeadline,
      source: 'Portal Administrativo Juventude Digital 360°',
      officialLink: newJobLink.trim(),
      isVerified: true,
      description: newJobDesc.trim() || 'Vaga oficial verificada pela equipa.'
    };

    StorageService.addJob(jobItem);
    onDataChanged();
    setNewJobTitle('');
    setNewJobOrg('');
    setNewJobLink('');
    setNewJobDesc('');
    setNewJobReqs('');
    setStatusMessage('Vaga adicionada com sucesso ao portal!');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  const handleDeleteJob = (id: string) => {
    if (confirm('Tens a certeza de que desejas remover esta oportunidade?')) {
      StorageService.deleteJob(id);
      onDataChanged();
    }
  };

  const handleModerateIdea = (id: string, newStatus: 'Aprovada' | 'Pendente') => {
    StorageService.updateIdeaStatus(id, newStatus);
    onDataChanged();
    setStatusMessage(`Estado da ideia atualizado para: ${newStatus}`);
    setTimeout(() => setStatusMessage(''), 3000);
  };

  const handleDeleteIdea = (id: string) => {
    if (confirm('Tens a certeza de que desejas eliminar esta proposta do Laboratório?')) {
      StorageService.deleteIdea(id);
      onDataChanged();
    }
  };

  const handleDeleteMessage = (id: string) => {
    StorageService.deleteContactMessage(id);
    onDataChanged();
  };

  const handleDeleteSuggestedJob = (id: string) => {
    StorageService.deleteSuggestedJob(id);
    onDataChanged();
  };

  const handleExportBackup = () => {
    const json = StorageService.exportDatabase();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `juventude_digital_360_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        const text = event.target?.result as string;
        if (StorageService.importDatabase(text)) {
          onDataChanged();
          setStatusMessage('Base de dados restaurada com sucesso!');
        } else {
          setStatusMessage('Erro ao importar ficheiro JSON.');
        }
      };
      reader.readAsText(file);
    }
  };

  const handleResetDefaults = () => {
    if (confirm('Atenção: isto irá restaurar todas as vagas, bolsas e ideias para os dados padrão iniciais verificados. Continuar?')) {
      StorageService.resetToDefaults();
      onDataChanged();
      setStatusMessage('Dados padrão restaurados!');
    }
  };

  // If not authenticated, show PIN login screen
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-md space-y-6 text-center">
          <div className="flex justify-center pb-1">
            <img
              src="/assets/aistudio/IMG-20261024-WA0000_dc5ff260.jpg"
              alt="JUVENTUDE DIGITAL 360°"
              className="h-16 w-auto object-contain rounded-lg"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold text-[#123A70]">
              Área Administrativa
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Acesso reservado à equipa de moderação da Juventude Digital 360°.
            </p>
          </div>

          {authError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-left font-semibold text-neutral-800 mb-1">
                Código PIN de Administração
              </label>
              <input
                type="password"
                required
                placeholder="Insere o PIN de acesso..."
                value={pinInput}
                onChange={e => setPinInput(e.target.value)}
                className="w-full px-3 py-2.5 border border-neutral-300 rounded-lg text-center tracking-widest text-base font-mono outline-none focus:ring-2 focus:ring-[#123A70]"
              />
              <span className="block text-[11px] text-neutral-400 mt-1">
                PIN padrão inicial: <strong>3602026</strong>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg font-semibold transition-colors cursor-pointer shadow-sm text-xs"
            >
              Autenticar e Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#159447] mb-1">
            <Unlock className="w-4 h-4 text-[#159447]" />
            <span>Sessão de Administrador Ativa</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123A70] tracking-tight">
            Painel de Gestão e Moderação
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportBackup}
            className="px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Backup JSON</span>
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-50 hover:bg-red-100 text-[#E53935] rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            Terminar Sessão
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-[#159447]" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 p-1 bg-neutral-100 rounded-xl text-xs font-semibold">
        <button
          onClick={() => setActiveTab('vagas')}
          className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
            activeTab === 'vagas' ? 'bg-white text-[#123A70] shadow-xs' : 'text-neutral-600'
          }`}
        >
          Gerir Vagas ({jobs.length})
        </button>
        <button
          onClick={() => setActiveTab('ideias')}
          className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
            activeTab === 'ideias' ? 'bg-white text-[#123A70] shadow-xs' : 'text-neutral-600'
          }`}
        >
          Moderar Ideias ({ideas.length})
        </button>
        <button
          onClick={() => setActiveTab('mensagens')}
          className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
            activeTab === 'mensagens' ? 'bg-white text-[#123A70] shadow-xs' : 'text-neutral-600'
          }`}
        >
          Mensagens Recebidas ({messages.length})
        </button>
        <button
          onClick={() => setActiveTab('sugestoes')}
          className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
            activeTab === 'sugestoes' ? 'bg-white text-[#123A70] shadow-xs' : 'text-neutral-600'
          }`}
        >
          Vagas Comunicadas ({suggestedJobs.length})
        </button>
        <button
          onClick={() => setActiveTab('backup')}
          className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
            activeTab === 'backup' ? 'bg-white text-[#123A70] shadow-xs' : 'text-neutral-600'
          }`}
        >
          Manutenção & Segurança
        </button>
      </div>

      {/* Tab: Gerir Vagas */}
      {activeTab === 'vagas' && (
        <div className="space-y-8">
          
          {/* Add Job Form */}
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-4 text-xs">
            <h3 className="text-sm font-bold text-[#123A70] uppercase tracking-wide flex items-center gap-2">
              <Plus className="w-4 h-4 text-[#159447]" />
              Publicar Nova Vaga de Emprego ou Estágio
            </h3>

            <form onSubmit={handleAddJob} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">Título da Oportunidade *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Assistente Técnico de TI"
                    value={newJobTitle}
                    onChange={e => setNewJobTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">Entidade / Organização *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Empresa Pública / Delegação Zambézia"
                    value={newJobOrg}
                    onChange={e => setNewJobOrg(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">Província</label>
                  <select
                    value={newJobProvince}
                    onChange={e => setNewJobProvince(e.target.value as MozambiqueProvince)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
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
                  <label className="block font-semibold text-neutral-800 mb-1">Tipo</label>
                  <select
                    value={newJobType}
                    onChange={e => setNewJobType(e.target.value as JobOpportunity['type'])}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
                  >
                    <option value="Estágio Profissional">Estágio Profissional</option>
                    <option value="Primeiro Emprego">Primeiro Emprego</option>
                    <option value="Trabalho Técnico">Trabalho Técnico</option>
                    <option value="Vaga Júnior">Vaga Júnior</option>
                    <option value="Voluntariado">Voluntariado</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">Categoria</label>
                  <select
                    value={newJobCategory}
                    onChange={e => setNewJobCategory(e.target.value as JobOpportunity['category'])}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none bg-white font-medium"
                  >
                    <option value="Tecnologia & Digital">Tecnologia & Digital</option>
                    <option value="Administração & Gestão">Administração & Gestão</option>
                    <option value="Agricultura & Agronomia">Agricultura & Agronomia</option>
                    <option value="Educação">Educação</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Engenharia">Engenharia</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-neutral-800 mb-1">Prazo Limite *</label>
                  <input
                    type="date"
                    required
                    value={newJobDeadline}
                    onChange={e => setNewJobDeadline(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-neutral-800 mb-1">Link Oficial da Vaga *</label>
                <input
                  type="url"
                  required
                  placeholder="https://..."
                  value={newJobLink}
                  onChange={e => setNewJobLink(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-800 mb-1">Descrição</label>
                <textarea
                  rows={2}
                  placeholder="Breve resumo da oportunidade..."
                  value={newJobDesc}
                  onChange={e => setNewJobDesc(e.target.value)}
                  className="w-full p-2 border border-neutral-300 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-800 mb-1">Requisitos (um por linha)</label>
                <textarea
                  rows={2}
                  placeholder="Ex: Licenciatura ou finalista em Informática&#10;Residência na Zambézia"
                  value={newJobReqs}
                  onChange={e => setNewJobReqs(e.target.value)}
                  className="w-full p-2 border border-neutral-300 rounded-lg outline-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#159447] hover:bg-[#12803c] text-white rounded-lg font-semibold shadow-sm cursor-pointer"
                >
                  Publicar Vaga
                </button>
              </div>
            </form>
          </div>

          {/* Existing Jobs Table */}
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden text-xs">
            <div className="p-4 bg-neutral-50 border-b border-neutral-200 font-bold text-neutral-800">
              Vagas Atuais no Sistema ({jobs.length})
            </div>
            <div className="divide-y divide-neutral-200">
              {jobs.map(job => (
                <div key={job.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-neutral-900">{job.title}</h4>
                    <p className="text-neutral-500 text-[11px]">
                      {job.organization} · {job.province} · Prazo: {job.deadline}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDeleteJob(job.id)}
                      className="p-1.5 text-neutral-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                      title="Eliminar vaga"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Tab: Moderar Ideias */}
      {activeTab === 'ideias' && (
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden text-xs space-y-4 p-6">
          <h3 className="font-bold text-neutral-900 text-sm">
            Propostas do Laboratório de Ideias Juvenis ({ideas.length})
          </h3>
          <div className="space-y-4">
            {ideas.map(idea => (
              <div key={idea.id} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-semibold text-[#159447]">{idea.area}</span>
                    <h4 className="text-sm font-bold text-neutral-900">{idea.projectName}</h4>
                    <p className="text-[11px] text-neutral-500">
                      {idea.district}, {idea.province} · Autor: {idea.authorName || 'Anónimo'} ({idea.authorContact || 'Sem contacto'})
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${idea.status === 'Aprovada' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                      {idea.status}
                    </span>
                    <span className="text-[10px] text-neutral-500">
                      {idea.publicConsentGiven ? 'Consentimento Público OK' : 'Confidencial'}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-600 text-xs">
                  <strong>Problema:</strong> {idea.problem}
                </p>
                <p className="text-neutral-600 text-xs">
                  <strong>Solução:</strong> {idea.solution}
                </p>

                <div className="pt-2 flex justify-end gap-2 border-t border-neutral-200">
                  {idea.status === 'Pendente' ? (
                    <button
                      onClick={() => handleModerateIdea(idea.id, 'Aprovada')}
                      className="px-3 py-1 bg-emerald-600 text-white rounded text-xs font-semibold cursor-pointer"
                    >
                      Aprovar para o Mural
                    </button>
                  ) : (
                    <button
                      onClick={() => handleModerateIdea(idea.id, 'Pendente')}
                      className="px-3 py-1 bg-amber-600 text-white rounded text-xs font-semibold cursor-pointer"
                    >
                      Colocar como Pendente
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteIdea(idea.id)}
                    className="px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200 rounded text-xs font-semibold cursor-pointer"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Mensagens Recebidas */}
      {activeTab === 'mensagens' && (
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden text-xs p-6 space-y-4">
          <h3 className="font-bold text-neutral-900 text-sm">
            Mensagens Recebidas nos Formulários de Contacto ({messages.length})
          </h3>
          {messages.length === 0 ? (
            <p className="text-neutral-500 py-6 text-center">Nenhuma mensagem recebida até ao momento.</p>
          ) : (
            <div className="space-y-3">
              {messages.map(msg => (
                <div key={msg.id} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-semibold text-[#123A70]">{msg.type}</span>
                      <h4 className="font-bold text-neutral-900 text-xs">{msg.subject}</h4>
                      <p className="text-[11px] text-neutral-500">
                        De: {msg.name} ({msg.emailOrPhone}) · Província: {msg.province} · Data: {msg.date}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteMessage(msg.id)}
                      className="text-neutral-400 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-neutral-700 leading-relaxed bg-white p-2.5 rounded border border-neutral-200">
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab: Vagas Comunicadas pela Comunidade */}
      {activeTab === 'sugestoes' && (
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden text-xs p-6 space-y-4">
          <h3 className="font-bold text-neutral-900 text-sm">
            Vagas Submetidas pela Comunidade para Moderação ({suggestedJobs.length})
          </h3>
          {suggestedJobs.length === 0 ? (
            <p className="text-neutral-500 py-6 text-center">Nenhuma vaga sugerida pendente de análise.</p>
          ) : (
            <div className="space-y-3">
              {suggestedJobs.map(job => (
                <div key={job.id} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h4 className="font-bold text-neutral-900">{job.jobTitle}</h4>
                      <p className="text-[11px] text-neutral-500">
                        Empresa: {job.organization} · Província: {job.province} · Submetido em: {job.date}
                      </p>
                      <p className="text-[11px] text-[#123A70]">
                        Link oficial indicado: <a href={job.officialLink} target="_blank" rel="noreferrer" className="underline">{job.officialLink}</a>
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteSuggestedJob(job.id)}
                      className="text-neutral-400 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  {job.notes && (
                    <p className="text-neutral-600 text-xs italic">
                      Notas do submissor: {job.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab: Manutenção & Segurança */}
      {activeTab === 'backup' && (
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden text-xs p-6 space-y-6">
          <h3 className="font-bold text-neutral-900 text-sm">
            Manutenção de Dados e Cópia de Segurança
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <h4 className="font-bold text-neutral-900">Exportar Cópia Completa (JSON)</h4>
              <p className="text-neutral-600 text-xs">
                Descarrega todos os dados do portal num único ficheiro seguro para não perder nenhuma vaga ou ideia.
              </p>
              <button
                onClick={handleExportBackup}
                className="px-4 py-2 bg-[#123A70] text-white rounded-lg font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Descarregar Backup</span>
              </button>
            </div>

            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <h4 className="font-bold text-neutral-900">Restaurar Cópia de Segurança</h4>
              <p className="text-neutral-600 text-xs">
                Carrega um ficheiro JSON previamente exportado.
              </p>
              <input
                type="file"
                accept=".json"
                onChange={handleImportBackup}
                className="text-xs text-neutral-500 file:mr-2 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-neutral-200 file:text-neutral-700 hover:file:bg-neutral-300"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200">
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="font-bold text-red-900">Restaurar Dados Padrão Verificados</h4>
                <p className="text-red-700 text-xs">
                  Repõe o catálogo oficial com as oportunidades verificadas na Zambézia e em Moçambique.
                </p>
              </div>
              <button
                onClick={handleResetDefaults}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restaurar Padrão</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
