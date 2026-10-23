import React, { useState } from 'react';
import { X, Printer, Download, Plus, Trash2, CheckCircle2, User, BookOpen, Briefcase, Award } from 'lucide-react';
import { MozambiqueProvince } from '../types';

interface CVBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EducationItem {
  institution: string;
  course: string;
  year: string;
}

interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  description: string;
}

export const CVBuilderModal: React.FC<CVBuilderModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('Edson Manuel Machava');
  const [birthDate, setBirthDate] = useState('2002-05-14');
  const [province, setProvince] = useState<MozambiqueProvince>('Zambézia');
  const [district, setDistrict] = useState('Quelimane');
  const [phone, setPhone] = useState('+258 84 123 4567');
  const [email, setEmail] = useState('edson.machava@email.mz');
  const [biNumber, setBiNumber] = useState('040100123456B');
  const [summary, setSummary] = useState(
    'Jovem dinâmico e proativo, com formação em Informática e Gestão. Elevada facilidade de adaptação, bom relacionamento interpessoal e paixão pelo uso de tecnologias digitais para resolver problemas práticos na comunidade e nas empresas.'
  );

  const [education, setEducation] = useState<EducationItem[]>([
    {
      institution: 'Instituto Comercial de Quelimane',
      course: 'Técnico Médio em Informática de Gestão',
      year: '2022 - 2024'
    },
    {
      institution: 'Escola Secundária Geral 25 de Junho - Quelimane',
      course: 'Ensino Secundário Geral (12ª Classe)',
      year: '2021'
    }
  ]);

  const [experience, setExperience] = useState<ExperienceItem[]>([
    {
      organization: 'Centro Comunitário Digital de Quelimane',
      role: 'Estagiário de Assistência Técnica e Atendimento',
      period: 'Janeiro 2025 - Julho 2025',
      description: 'Atendimento aos utentes, apoio na digitação e impressão de documentos, formatação de relatórios e manutenção básica de computadores.'
    }
  ]);

  const [skills, setSkills] = useState<string[]>([
    'Microsoft Word e Excel Intermédio',
    'Atendimento ao Público e Comunicação',
    'Digitação Rápida e Redação Formal',
    'Gestão de Redes Sociais e WhatsApp Business',
    'Trabalho em Equipa e Pontualidade'
  ]);
  const [newSkill, setNewSkill] = useState('');

  const [languages, setLanguages] = useState<string[]>([
    'Português (Língua Materna / Fluente)',
    'Chuabo (Fluente falado)',
    'Inglês (Compreensão e Leitura Básica/Técnica)'
  ]);

  const [references, setReferences] = useState<string>(
    'Disponíveis mediante solicitação da entidade empregadora.'
  );

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { institution: '', course: '', year: '' }
    ]);
  };

  const handleRemoveEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      { organization: '', role: '', period: '', description: '' }
    ]);
  };

  const handleRemoveExperience = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="no-print px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/70">
          <div>
            <h3 className="text-base font-bold text-[#123A70] flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#159447]" />
              Criar o Meu Currículo (CV Profissional Moçambicano)
            </h3>
            <p className="text-xs text-neutral-500">
              Preenche os teus dados abaixo para gerar um CV estruturado e pronto para imprimir ou guardar em PDF.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#123A70] hover:bg-[#0c274d] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Split Editor and Live Preview */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
          
          {/* Form Editor Column */}
          <div className="no-print p-6 space-y-6 overflow-y-auto max-h-[78vh]">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1.5 flex items-center gap-2">
                <User className="w-4 h-4 text-[#123A70]" />
                1. Dados Pessoais
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] focus:border-[#123A70] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">Contacto Telefónico / WhatsApp</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">Endereço de E-mail</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">Província de Residência</label>
                  <select
                    value={province}
                    onChange={e => setProvince(e.target.value as MozambiqueProvince)}
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none bg-white"
                  >
                    <option value="Zambézia">Zambézia</option>
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
                  <label className="block text-xs font-medium text-neutral-700 mb-1">Distrito / Bairro</label>
                  <input
                    type="text"
                    value={district}
                    onChange={e => setDistrict(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">Nº do B.I. (Opcional)</label>
                  <input
                    type="text"
                    value={biNumber}
                    onChange={e => setBiNumber(e.target.value)}
                    placeholder="Ex: 040100..."
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">Data de Nascimento</label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={e => setBirthDate(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Perfil Profissional / Resumo</label>
                <textarea
                  rows={3}
                  value={summary}
                  onChange={e => setSummary(e.target.value)}
                  className="w-full text-xs p-2.5 border border-neutral-300 rounded-lg focus:ring-1 focus:ring-[#123A70] outline-none leading-relaxed"
                />
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#159447]" />
                  2. Habilitações Literárias
                </h4>
                <button
                  type="button"
                  onClick={handleAddEducation}
                  className="text-xs text-[#123A70] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Adicionar
                </button>
              </div>
              {education.map((item, idx) => (
                <div key={idx} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2 relative">
                  {education.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveEducation(idx)}
                      className="absolute top-2 right-2 text-neutral-400 hover:text-red-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <input
                    type="text"
                    placeholder="Instituição (Ex: Instituto Comercial de Quelimane)"
                    value={item.institution}
                    onChange={e => {
                      const copy = [...education];
                      copy[idx].institution = e.target.value;
                      setEducation(copy);
                    }}
                    className="w-full text-xs px-2.5 py-1.5 border border-neutral-300 rounded bg-white outline-none"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Curso / Nível"
                      value={item.course}
                      onChange={e => {
                        const copy = [...education];
                        copy[idx].course = e.target.value;
                        setEducation(copy);
                      }}
                      className="text-xs px-2.5 py-1.5 border border-neutral-300 rounded bg-white outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Ano / Período (Ex: 2022 - 2024)"
                      value={item.year}
                      onChange={e => {
                        const copy = [...education];
                        copy[idx].year = e.target.value;
                        setEducation(copy);
                      }}
                      className="text-xs px-2.5 py-1.5 border border-neutral-300 rounded bg-white outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#123A70]" />
                  3. Experiência / Estágios / Atividades
                </h4>
                <button
                  type="button"
                  onClick={handleAddExperience}
                  className="text-xs text-[#123A70] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Adicionar
                </button>
              </div>
              {experience.map((item, idx) => (
                <div key={idx} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2 relative">
                  <button
                    type="button"
                    onClick={() => handleRemoveExperience(idx)}
                    className="absolute top-2 right-2 text-neutral-400 hover:text-red-600"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Organização / Empresa"
                      value={item.organization}
                      onChange={e => {
                        const copy = [...experience];
                        copy[idx].organization = e.target.value;
                        setExperience(copy);
                      }}
                      className="text-xs px-2.5 py-1.5 border border-neutral-300 rounded bg-white outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Cargo / Função"
                      value={item.role}
                      onChange={e => {
                        const copy = [...experience];
                        copy[idx].role = e.target.value;
                        setExperience(copy);
                      }}
                      className="text-xs px-2.5 py-1.5 border border-neutral-300 rounded bg-white outline-none"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Período (Ex: 2024 - 2025)"
                    value={item.period}
                    onChange={e => {
                      const copy = [...experience];
                      copy[idx].period = e.target.value;
                      setExperience(copy);
                    }}
                    className="w-full text-xs px-2.5 py-1.5 border border-neutral-300 rounded bg-white outline-none"
                  />
                  <textarea
                    rows={2}
                    placeholder="Principais tarefas e realizações..."
                    value={item.description}
                    onChange={e => {
                      const copy = [...experience];
                      copy[idx].description = e.target.value;
                      setExperience(copy);
                    }}
                    className="w-full text-xs p-2 border border-neutral-300 rounded bg-white outline-none"
                  />
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1.5 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FFC928]" />
                4. Competências e Habilidades
              </h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Nova competência..."
                  value={newSkill}
                  onChange={e => setNewSkill(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill(); } }}
                  className="flex-1 text-xs px-3 py-1.5 border border-neutral-300 rounded-lg outline-none"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="px-3 py-1.5 bg-neutral-900 text-white rounded-lg text-xs font-medium cursor-pointer"
                >
                  Adicionar
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md"
                  >
                    <span>{skill}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(idx)}
                      className="text-neutral-400 hover:text-red-500"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Live Document Preview Column */}
          <div className="p-8 bg-neutral-100/70 overflow-y-auto max-h-[78vh] flex justify-center">
            <div className="w-full max-w-[210mm] bg-white p-8 sm:p-12 shadow-md rounded-lg border border-neutral-300 text-neutral-900 text-[13px] leading-relaxed font-sans print:shadow-none print:border-none print:p-0">
              
              {/* CV Header */}
              <div className="border-b-2 border-[#123A70] pb-4 mb-6 flex justify-between items-start gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-[#123A70] uppercase">
                    {fullName || 'Nome Completo'}
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-600 mt-2">
                    <span>{district}, {province} · Moçambique</span>
                    <span>·</span>
                    <span>{phone}</span>
                    <span>·</span>
                    <span>{email}</span>
                    {biNumber && (
                      <>
                        <span>·</span>
                        <span>B.I.: {biNumber}</span>
                      </>
                    )}
                  </div>
                </div>
                <img
                  src="/assets/aistudio/IMG-20261024-WA0000_dc5ff260.jpg"
                  alt="JUVENTUDE DIGITAL 360°"
                  className="h-14 w-auto object-contain rounded shrink-0 hidden sm:block"
                />
              </div>

              {/* Summary */}
              {summary && (
                <div className="mb-6">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#123A70] border-b border-neutral-200 pb-1 mb-2">
                    Perfil Profissional
                  </h2>
                  <p className="text-xs text-neutral-700 leading-relaxed text-justify">
                    {summary}
                  </p>
                </div>
              )}

              {/* Education */}
              {education.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#123A70] border-b border-neutral-200 pb-1 mb-3">
                    Habilitações Literárias e Formação
                  </h2>
                  <div className="space-y-3">
                    {education.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-baseline gap-4 text-xs">
                        <div>
                          <p className="font-bold text-neutral-900">{item.course || 'Curso / Especialidade'}</p>
                          <p className="text-neutral-600">{item.institution || 'Instituição de Ensino'}</p>
                        </div>
                        <span className="text-neutral-500 font-mono text-[11px] shrink-0">{item.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience */}
              {experience.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#123A70] border-b border-neutral-200 pb-1 mb-3">
                    Experiência Profissional e Estágios
                  </h2>
                  <div className="space-y-3.5">
                    {experience.map((item, idx) => (
                      <div key={idx} className="text-xs">
                        <div className="flex justify-between items-baseline gap-4">
                          <p className="font-bold text-neutral-900">{item.role || 'Cargo'}</p>
                          <span className="text-neutral-500 font-mono text-[11px] shrink-0">{item.period}</span>
                        </div>
                        <p className="text-[#159447] font-medium mb-1">{item.organization}</p>
                        {item.description && (
                          <p className="text-neutral-600 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {skills.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#123A70] border-b border-neutral-200 pb-1 mb-2">
                    Competências Digitais e Interpessoais
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-neutral-700">
                    {skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#159447]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Languages */}
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#123A70] border-b border-neutral-200 pb-1 mb-2">
                  Domínio de Línguas
                </h2>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-700">
                  {languages.map((lang, idx) => (
                    <span key={idx}>• {lang}</span>
                  ))}
                </div>
              </div>

              {/* References */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#123A70] border-b border-neutral-200 pb-1 mb-1">
                  Referências
                </h2>
                <p className="text-xs text-neutral-600 italic">
                  {references}
                </p>
              </div>

              {/* Bottom badge */}
              <div className="mt-8 pt-4 border-t border-neutral-200 text-center text-[10px] text-neutral-400">
                Modelo estruturado através da plataforma JUVENTUDE DIGITAL 360° · Moçambique
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
