export type PageType =
  | 'inicio'
  | 'emprego'
  | 'bolsas'
  | 'cursos'
  | 'empreendedorismo'
  | 'tecnologia'
  | 'laboratorio'
  | 'noticias'
  | 'sobre'
  | 'contactos'
  | 'privacidade'
  | 'termos'
  | 'admin'
  | 'guia-publicacao';

export type MozambiqueProvince =
  | 'Zambézia'
  | 'Maputo Cidade'
  | 'Maputo Província'
  | 'Gaza'
  | 'Inhambane'
  | 'Sofala'
  | 'Manica'
  | 'Tete'
  | 'Nampula'
  | 'Cabo Delgado'
  | 'Niassa'
  | 'Nacional / Remoto';

export interface JobOpportunity {
  id: string;
  title: string;
  organization: string;
  province: MozambiqueProvince;
  locationDetails: string;
  type: 'Estágio Profissional' | 'Primeiro Emprego' | 'Trabalho Técnico' | 'Vaga Júnior' | 'Voluntariado';
  category: 'Tecnologia & Digital' | 'Administração & Gestão' | 'Agricultura & Agronomia' | 'Educação' | 'Saúde' | 'Engenharia';
  requirements: string[];
  responsibilities: string[];
  publishDate: string;
  deadline: string; // YYYY-MM-DD
  source: string;
  officialLink: string;
  isVerified: boolean;
  isExpired?: boolean;
  contactEmailOrMethod?: string;
  description: string;
}

export interface Scholarship {
  id: string;
  title: string;
  institution: string;
  destinationCountry: string;
  level: 'Licenciatura' | 'Pós-graduação / Mestrado' | 'Doutoramento' | 'Intercâmbio' | 'Formação Técnica';
  studyAreas: string[];
  requirements: string[];
  confirmedBenefits: string[];
  publishDate: string;
  deadline: string;
  officialLink: string;
  isVerified: boolean;
  notes?: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  area:
    | 'Informática & Digital'
    | 'Inglês para Trabalho'
    | 'Design & Multimédia'
    | 'Fotografia & Vídeo'
    | 'Marketing Digital'
    | 'Programação'
    | 'Inteligência Artificial'
    | 'Gestão & Negócios';
  costType: '100% Gratuito' | 'Com Bolsa Disponível' | 'Subsidiado';
  costDetails: string;
  duration: string;
  modality: 'Online (Autoestudo)' | 'Online com Instrutor' | 'Presencial (Quelimane/Zambézia)' | 'Híbrido';
  hasCertificate: boolean;
  certificateDetails: string;
  officialLink: string;
  description: string;
  isVerified: boolean;
}

export interface FundingProgram {
  id: string;
  title: string;
  organization: string;
  targetAudience: string;
  fundingType: 'Subsídio a Fundo Perdido' | 'Incubação & Mentoria' | 'Crédito Jovem' | 'Concurso de Inovação';
  amountOrBenefit: string;
  requirements: string[];
  deadline: string;
  officialLink: string;
  isVerified: boolean;
  region: string;
  description: string;
}

export interface BusinessGuide {
  id: string;
  title: string;
  category: 'Legalização & NUIT' | 'Plano de Negócios' | 'Finanças para Jovens' | 'Vendas & Marketing';
  readTime: string;
  summary: string;
  steps: { title: string; content: string }[];
  officialResources: { name: string; url: string }[];
}

export interface TechGuide {
  id: string;
  title: string;
  category: 'Inteligência Artificial' | 'Cibersegurança' | 'Criação de Sites' | 'E-Commerce & Pagamentos Móveis' | 'Ferramentas de Produtividade';
  level: 'Iniciante' | 'Intermédio';
  practicalSummary: string;
  keyTools: string[];
  stepsOrTips: string[];
}

export interface YouthIdea {
  id: string;
  projectName: string;
  area:
    | 'Educação'
    | 'Agricultura & Agroprocessamento'
    | 'Ambiente & Sustentabilidade'
    | 'Cultura & Artes Digitais'
    | 'Tecnologia & Inovação'
    | 'Empreendedorismo Local'
    | 'Desenvolvimento Comunitário';
  province: MozambiqueProvince;
  district: string;
  problem: string;
  solution: string;
  beneficiaries: string;
  requiredResources: string;
  stage: 'Ideia Inicial' | 'Protótipo / Em Teste' | 'Em Operação Piloto' | 'Em Expansão';
  authorName?: string;
  authorContact?: string;
  publicConsentGiven: boolean;
  submissionDate: string;
  status: 'Aprovada' | 'Pendente';
  likesCount: number;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Oportunidades' | 'Iniciativas Juvenis' | 'Tecnologia' | 'Zambézia em Foco';
  summary: string;
  fullContent: string;
  date: string;
  source: string;
  sourceUrl: string;
  imageUrl?: string;
  isOfficialAnnouncement: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  emailOrPhone: string;
  type: 'Mensagem Geral' | 'Correção de Informação' | 'Sugestão' | 'Proposta de Parceria';
  province: string;
  subject: string;
  message: string;
  date: string;
  status: 'Recebido' | 'Respondido';
}

export interface SuggestedJob {
  id: string;
  jobTitle: string;
  organization: string;
  province: MozambiqueProvince;
  officialLink: string;
  submitterEmail: string;
  notes: string;
  date: string;
}
