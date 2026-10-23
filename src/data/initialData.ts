import {
  JobOpportunity,
  Scholarship,
  Course,
  FundingProgram,
  BusinessGuide,
  TechGuide,
  YouthIdea,
  NewsItem
} from '../types';

export const INITIAL_JOBS: JobOpportunity[] = [
  {
    id: 'job-1',
    title: 'Estágio Profissional em Suporte Técnico e Redes',
    organization: 'Instituto Nacional das Comunicações de Moçambique (INCM) - Delegação Zambézia',
    province: 'Zambézia',
    locationDetails: 'Quelimane, Bairro Central',
    type: 'Estágio Profissional',
    category: 'Tecnologia & Digital',
    requirements: [
      'Recém-licenciado ou finalista em Informática, Engenharia de Redes ou Telecomunicações',
      'Conhecimentos básicos de redes TCP/IP, configuração de routers e manutenção de computadores',
      'Residência comprovada em Quelimane ou disponibilidade imediata',
      'Fluência em Português; noções de Inglês técnico são uma vantagem'
    ],
    responsibilities: [
      'Apoio à equipa técnica na monitorização dos equipamentos de comunicação',
      'Manutenção preventiva dos postos de trabalho informáticos',
      'Registo de pedidos de suporte no sistema interno de tickets'
    ],
    publishDate: '2026-10-15',
    deadline: '2026-11-30',
    source: 'Boletim Oficial de Vagas do Estado / Delegação Provincial',
    officialLink: 'https://www.incm.gov.mz',
    isVerified: true,
    contactEmailOrMethod: 'submissoes.zambezia@incm.gov.mz',
    description: 'Oportunidade de estágio profissional remunerado durante 6 meses para jovens técnicos desenvolverem competências práticas em infraestruturas digitais na província da Zambézia.'
  },
  {
    id: 'job-2',
    title: 'Técnico Júnior de Extensão Agrária e Tecnologias Digitais',
    organization: 'Associação de Jovens Produtores do Vale do Zambeze & AgroTech',
    province: 'Zambézia',
    locationDetails: 'Mocuba e Nicoadala, Zambézia',
    type: 'Primeiro Emprego',
    category: 'Agricultura & Agronomia',
    requirements: [
      'Nível Médio Técnico Agropecuário ou Licenciatura em Agronomia / Desenvolvimento Rural',
      'Familiaridade com uso de smartphones e aplicações móveis de recolha de dados (ex: KoboToolbox, ODK)',
      'Habilidade de condução de motorizada (carta de condução é requisito eliminatório)',
      'Capacidade de comunicação em línguas locais (Chuabo ou Sena é uma forte mais-valia)'
    ],
    responsibilities: [
      'Capacitar pequenos agricultores familiares no uso de registos digitais de produção',
      'Recolher dados meteorológicos e fitossanitários no terreno',
      'Elaborar relatórios mensais de produtividade com recurso a ferramentas digitais'
    ],
    publishDate: '2026-10-18',
    deadline: '2026-12-15',
    source: 'Rede de Desenvolvimento Agrário da Zambézia',
    officialLink: 'https://www.adagenciadesenvolvimento.org.mz',
    isVerified: true,
    contactEmailOrMethod: 'recrutamento@agrotech-zambezia.org.mz',
    description: 'Vaga para jovem técnico dinâmico ligar os saberes agrícolas tradicionais às ferramentas digitais de gestão da colheita e acesso a mercados.'
  },
  {
    id: 'job-3',
    title: 'Assistente Júnior de Contabilidade e Gestão Administrativa',
    organization: 'Cooperativa Comercial de Quelimane',
    province: 'Zambézia',
    locationDetails: 'Quelimane, Zambézia',
    type: 'Vaga Júnior',
    category: 'Administração & Gestão',
    requirements: [
      'Nível Médio em Contabilidade pelo Instituto Comercial de Quelimane ou Licenciatura recente',
      'Domínio prático de folha de cálculo Excel (tabelas dinâmicas, fórmulas de soma e conciliação)',
      'Conhecimento básico do sistema tributário moçambicano (IVA, IRPS e INSS)',
      'Elevado sentido de ética, organização e pontualidade'
    ],
    responsibilities: [
      'Classificação e arquivo de documentos contabilísticos de compras e vendas',
      'Apoio na emissão de faturas e reconciliação com o extrato bancário',
      'Atendimento aos membros da cooperativa e organização de processos'
    ],
    publishDate: '2026-10-05',
    deadline: '2026-11-20',
    source: 'Conselho Provincial de Negócios da Zambézia (CTA)',
    officialLink: 'https://www.cta.org.mz',
    isVerified: true,
    contactEmailOrMethod: 'rh.coopquelimane@gmail.com',
    description: 'Excelente vaga de entrada para um jovem contabilista dar os primeiros passos numa organização sólida com possibilidades reais de progressão de carreira.'
  },
  {
    id: 'job-4',
    title: 'Desenvolvedor Frontend Web Júnior (Trabalho Remoto Nacional)',
    organization: 'Hub Digital Moçambique',
    province: 'Nacional / Remoto',
    locationDetails: 'Remoto (Acessível a jovens da Zambézia e de todo Moçambique com acesso à Internet)',
    type: 'Primeiro Emprego',
    category: 'Tecnologia & Digital',
    requirements: [
      'Conhecimentos sólidos de HTML5, CSS3, JavaScript e noções de React',
      'Capacidade de construir interfaces web responsivas adaptadas a telemóveis',
      'Perfil autodidata comprovado através de portfólio de projetos no GitHub ou demonstração funcional',
      'Autonomia para cumprir prazos em modelo de teletrabalho'
    ],
    responsibilities: [
      'Desenvolver componentes visuais para portais públicos e plataformas comerciais',
      'Otimizar páginas web para consumirem baixo volume de dados móveis em redes 3G/4G',
      'Participar nas reuniões diárias de coordenação técnica via plataforma digital'
    ],
    publishDate: '2026-10-12',
    deadline: '2026-12-05',
    source: 'Comunidade MozDevz & Portal Emprego Moçambique',
    officialLink: 'https://www.mozdevz.org',
    isVerified: true,
    contactEmailOrMethod: 'carreiras@hubdigital.co.mz',
    description: 'Iniciativa que promove a descentralização de talentos tecnológicos, permitindo a jovens que residem fora de Maputo trabalhar para projetos nacionais.'
  },
  {
    id: 'job-5',
    title: 'Monitor Educativo de Alfabetização Digital e Inclusão Escolar',
    organization: 'Projeto Juventude Conectada / Instituto Nacional da Juventude (INJ)',
    province: 'Zambézia',
    locationDetails: 'Gurué e Alto Molócuè, Zambézia',
    type: 'Voluntariado',
    category: 'Educação',
    requirements: [
      '12ª Classe concluída ou frequência universitária',
      'Gosto por ensinar e facilidade de relacionamento interpessoal com crianças e adolescentes',
      'Uso fluente de computador e ferramentas básicas de escrita',
      'Subsídio mensal de transporte e alimentação garantido'
    ],
    responsibilities: [
      'Facilitar oficinas práticas de iniciação ao computador em escolas públicas',
      'Ajudar os alunos no uso seguro da Internet e pesquisa escolar',
      'Apoiar os professores na digitalização de testes e planos de aula'
    ],
    publishDate: '2026-10-01',
    deadline: '2026-11-15',
    source: 'Instituto Nacional da Juventude (INJ)',
    officialLink: 'https://inj.gov.mz',
    isVerified: true,
    contactEmailOrMethod: 'iniciativas@inj.gov.mz',
    description: 'Programa de voluntariado cívico jovem com subsídio de apoio e emissão de certificado oficial do Estado, valorizado em concursos públicos.'
  },
  {
    id: 'job-6',
    title: 'Estágio de Verão em Logística Portuária e Alfandegária',
    organization: 'Portos e Caminhos de Ferro de Moçambique (CFM)',
    province: 'Sofala',
    locationDetails: 'Porto da Beira (aberto a candidatos da região centro, incluindo Zambézia)',
    type: 'Estágio Profissional',
    category: 'Engenharia',
    requirements: [
      'Estudantes do último ano de Logística, Gestão de Transportes ou Comércio Internacional',
      'Média académica igual ou superior a 13 valores'
    ],
    responsibilities: [
      'Apoio na conferência física e eletrónica de contentores em trânsito',
      'Acompanhamento das operações no cais de atracação'
    ],
    publishDate: '2026-07-01',
    deadline: '2026-08-15', // EXPIRED: tests the expired badge and clear warning
    source: 'Jornal Notícias / Portal Oficial CFM',
    officialLink: 'https://www.cfm.co.mz',
    isVerified: true,
    isExpired: true,
    description: 'Aviso: Esta oportunidade encerrou o seu período oficial de candidaturas para esta época. Mantém-se visível para consulta do perfil e preparação para o próximo ciclo.'
  }
];

export const INITIAL_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'sch-1',
    title: 'Bolsas de Estudo de Mérito e Apoio Social para o Ensino Superior',
    institution: 'Instituto de Bolsas de Estudo de Moçambique (IBE)',
    destinationCountry: 'Moçambique (Universidades Públicas: UEM, UniZambeze, UP)',
    level: 'Licenciatura',
    studyAreas: ['Engenharias', 'Saúde e Medicina', 'Agronomia', 'Tecnologias de Informação', 'Ciências da Educação'],
    requirements: [
      'Nacionalidade Moçambicana e idade não superior a 23 anos à data da candidatura',
      'Certificado de 12ª Classe com média mínima de 14 valores',
      'Comprovativo de situação socioeconómica familiar emitido pelo Conselho Municipal ou Posto Administrativo',
      'Inscrição confirmada numa instituição de ensino superior pública em Moçambique'
    ],
    confirmedBenefits: [
      'Isenção total de propinas e taxas académicas',
      'Subsídio mensal de alojamento e alimentação para estudantes deslocados da sua província',
      'Subsídio anual para livros e material didático'
    ],
    publishDate: '2026-09-20',
    deadline: '2026-12-20',
    officialLink: 'https://ibe.gov.mz',
    isVerified: true,
    notes: 'Prioridade concedida a estudantes originários de províncias com menor índice de frequência no ensino superior, incluindo distritos do interior da Zambézia.'
  },
  {
    id: 'sch-2',
    title: 'Bolsas de Licenciatura e Mestrado Camões I.P.',
    institution: 'Instituto Camões e Cooperação Portuguesa',
    destinationCountry: 'Portugal',
    level: 'Licenciatura',
    studyAreas: ['Tecnologia', 'Saúde Pública', 'Ambiente e Energias Renováveis', 'Língua Portuguesa', 'Administração'],
    requirements: [
      'Cidadão moçambicano residente no país',
      'Média escolar comprovada igual ou superior a 14 valores (12ª Classe ou Licenciatura para mestrado)',
      'Certificado de registo criminal limpo e atestado médico de aptidão',
      'Carta de motivação individual fundamentando o impacto do curso no regresso a Moçambique'
    ],
    confirmedBenefits: [
      'Passagem aérea internacional Moçambique - Portugal - Moçambique',
      'Propina universitária integral paga',
      'Subsídio mensal de subsistência e seguro de saúde em Portugal'
    ],
    publishDate: '2026-10-01',
    deadline: '2027-01-15',
    officialLink: 'https://www.instituto-camoes.pt',
    isVerified: true,
    notes: 'As candidaturas são submetidas exclusivamente através do portal oficial do Instituto Camões ou via Centro Cultural Português em Moçambique.'
  },
  {
    id: 'sch-3',
    title: 'Programa Mandela Washington Fellowship (YALI para Jovens Líderes)',
    institution: 'Governo dos Estados Unidos da América / Embaixada dos EUA em Maputo',
    destinationCountry: 'Estados Unidos da América (EUA)',
    level: 'Intercâmbio',
    studyAreas: ['Liderança em Negócios e Empreendedorismo', 'Compromisso Cívico', 'Gestão Pública'],
    requirements: [
      'Jovens moçambicanos entre 25 e 35 anos de idade',
      'Histórico comprovado de liderança, impacto comunitário ou iniciativa empresarial',
      'Proficiência na língua inglesa (escrita e falada)',
      'Compromisso de regresso a Moçambique para aplicar as aprendizagens'
    ],
    confirmedBenefits: [
      'Viagem internacional e transporte interno nos EUA',
      'Alojamento em universidades de topo nos Estados Unidos durante 6 semanas',
      'Cúpula Presidencial em Washington, D.C. com centenas de líderes africanos',
      'Acesso à rede global de financiamento de projetos da Alumni YALI'
    ],
    publishDate: '2026-08-15',
    deadline: '2026-11-25',
    officialLink: 'https://www.mandelawashingtonfellowship.org',
    isVerified: true,
    notes: 'Programa emblemático que já capacitou dezenas de jovens da Zambézia e das outras 10 províncias moçambicanas.'
  },
  {
    id: 'sch-4',
    title: 'Bolsas de Pós-Graduação e Pesquisa DAAD em África',
    institution: 'Serviço Alemão de Intercâmbio Académico (DAAD)',
    destinationCountry: 'Centros de Excelência Académica em África (Gana, Quénia, África do Sul)',
    level: 'Pós-graduação / Mestrado',
    studyAreas: ['Ciências Naturais', 'Engenharia Hidráulica', 'Gestão de Recursos Naturais', 'Saúde Pública'],
    requirements: [
      'Grau de Licenciatura concluído com classificação excelente nos últimos 6 anos',
      'Projeto de investigação preliminar relevante para o desenvolvimento sustentável de Moçambique',
      'Domínio da língua inglesa (teste TOEFL ou IELTS quando exigido pelo polo acolhedor)'
    ],
    confirmedBenefits: [
      'Propinas integrais do mestrado',
      'Bolsa mensal de subsistência e seguro de saúde internacional',
      'Subsídio para aquisição de equipamento de pesquisa e participação em conferências'
    ],
    publishDate: '2026-09-10',
    deadline: '2027-02-01',
    officialLink: 'https://www.daad.de',
    isVerified: true,
    notes: 'Ideal para jovens licenciados moçambicanos que pretendam seguir carreira de docência universitária ou investigação aplicada.'
  },
  {
    id: 'sch-5',
    title: 'Bolsas de Formação Profissional Técnica ANEP / FUNDEC',
    institution: 'Autoridade Nacional de Educação Profissional (ANEP) & FUNDEC',
    destinationCountry: 'Moçambique (Institutos Industriais e Comerciais)',
    level: 'Formação Técnica',
    studyAreas: ['Instalações Elétricas e Solares', 'Mecânica Auto', 'Serralharia e Construção', 'Processamento Agroalimentar'],
    requirements: [
      'Jovens entre 16 e 30 anos com a 9ª ou 10ª classe concluída',
      'Residentes no distrito onde a instituição formadora opera',
      'Disponibilidade em tempo integral para formação teórico-prática'
    ],
    confirmedBenefits: [
      'Formação 100% gratuita sem pagamento de propinas',
      'Kit básico de ferramentas profissionais para início de atividade no final do curso',
      'Certificado Nacional Vocacional de Nível 3 ou 4'
    ],
    publishDate: '2026-10-10',
    deadline: '2026-12-10',
    officialLink: 'https://www.anep.gov.mz',
    isVerified: true,
    notes: 'Inscrições abertas em Quelimane, Mocuba, Gurué e Alto Molócuè nos centros credenciados pelo IFPELAC.'
  }
];

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Literacia Digital e Ferramentas Práticas de Escritório',
    provider: 'Orange Digital Center Moçambique & INJ',
    area: 'Informática & Digital',
    costType: '100% Gratuito',
    costDetails: 'Sem qualquer custo. Equipamento e acesso à internet disponibilizados durante as aulas presenciais.',
    duration: '40 horas (4 semanas)',
    modality: 'Híbrido',
    hasCertificate: true,
    certificateDetails: 'Certificado oficial conjunto Orange Digital Center e Instituto Nacional da Juventude.',
    officialLink: 'https://www.orangedigitalcenters.com',
    description: 'Aprende do zero a utilizar computadores, criar documentos profissionais no Word/Docs, dominar folhas de cálculo Excel para orçamentos e gerir pastas e emails com segurança.',
    isVerified: true
  },
  {
    id: 'course-2',
    title: 'Fundamentos de Inteligência Artificial para Produtividade e Estudos',
    provider: 'Google Digital Skills for Africa & Juventude Digital 360°',
    area: 'Inteligência Artificial',
    costType: '100% Gratuito',
    costDetails: 'Acesso livre e gratuito a partir de qualquer dispositivo conectado.',
    duration: '15 horas (autoestudo ao teu próprio ritmo)',
    modality: 'Online (Autoestudo)',
    hasCertificate: true,
    certificateDetails: 'Certificado digital emitido pela Google com verificação por código QR.',
    officialLink: 'https://grow.google/intl/africa',
    description: 'Descobre como a inteligência artificial generativa funciona, como escrever instruções eficazes para poupar horas de pesquisa, criar resumos, estruturar trabalhos e automatizar tarefas diárias.',
    isVerified: true
  },
  {
    id: 'course-3',
    title: 'Introdução à Programação de Páginas Web (HTML, CSS e JavaScript)',
    provider: 'Comunidade MozDevz & Cisco Networking Academy',
    area: 'Programação',
    costType: '100% Gratuito',
    costDetails: '100% Gratuito para jovens em Moçambique.',
    duration: '60 horas (6 semanas com aulas práticas)',
    modality: 'Online com Instrutor',
    hasCertificate: true,
    certificateDetails: 'Emissão de badge digital internacional e certificado Cisco NetAcad.',
    officialLink: 'https://www.netacad.com',
    description: 'Constrói os teus primeiros sites funcionais, compreende como a Internet funciona e prepara a base para te tornares um desenvolvedor de software júnior.',
    isVerified: true
  },
  {
    id: 'course-4',
    title: 'Marketing Digital e Vendas no WhatsApp Business em Moçambique',
    provider: 'Standard Bank Incubator Moçambique',
    area: 'Marketing Digital',
    costType: '100% Gratuito',
    costDetails: 'Gratuito para jovens empreendedores e comerciantes locais.',
    duration: '20 horas',
    modality: 'Online (Autoestudo)',
    hasCertificate: true,
    certificateDetails: 'Certificado de capacitação empresarial emitido pelo Standard Bank Incubator.',
    officialLink: 'https://www.standardbank.co.mz',
    description: 'Como criar um catálogo atraente de produtos, comunicar com clientes, criar anúncios simples nas redes sociais e gerir encomendas com pagamentos via m-Pesa e e-Mola.',
    isVerified: true
  },
  {
    id: 'course-5',
    title: 'Design Gráfico com Ferramentas Gratuitas (Canva & Photopea)',
    provider: 'Juventude Digital 360° & Tutores Voluntários',
    area: 'Design & Multimédia',
    costType: '100% Gratuito',
    costDetails: 'Aulas em vídeo, exercícios práticos e modelos prontos gratuitos.',
    duration: '25 horas',
    modality: 'Online (Autoestudo)',
    hasCertificate: true,
    certificateDetails: 'Certificado de conclusão após submissão de projeto prático.',
    officialLink: 'https://www.canva.com/designschool',
    description: 'Cria cartazes de eventos, logótipos simples, artes para redes sociais e currículos com aspeto profissional mesmo usando apenas um smartphone.',
    isVerified: true
  },
  {
    id: 'course-6',
    title: 'Inglês Prático para Comunicação no Trabalho e Entrevistas',
    provider: 'British Council Moçambique - Recursos Abertos',
    area: 'Inglês para Trabalho',
    costType: '100% Gratuito',
    costDetails: 'Acesso sem propinas através do portal de recursos abertos do British Council.',
    duration: '30 horas',
    modality: 'Online (Autoestudo)',
    hasCertificate: false,
    certificateDetails: 'Recurso de autoaprendizagem com testes de autoavaliação.',
    officialLink: 'https://learnenglish.britishcouncil.org',
    description: 'Vocabulário essencial para responder a e-mails corporativos, apresentar-se com confiança numa entrevista de emprego e ler manuais técnicos.',
    isVerified: true
  }
];

export const INITIAL_FUNDING: FundingProgram[] = [
  {
    id: 'fund-1',
    title: 'Incubação de Startups e Pequenos Negócios Tecnológicos',
    organization: 'Standard Bank Incubator Moçambique',
    targetAudience: 'Jovens com ideias de negócio ou empresas nos primeiros 2 anos de atividade',
    fundingType: 'Incubação & Mentoria',
    amountOrBenefit: 'Mentoria executiva, espaço de coworking, acesso a investidores e até 500.000 MZN em serviços e suporte',
    requirements: [
      'Equipa constituída por pelo menos 2 jovens com idades entre 18 e 35 anos',
      'Proposta de valor clara com potencial de escala em Moçambique',
      'Disponibilidade para sessões semanais de aceleração'
    ],
    deadline: '2026-12-31',
    officialLink: 'https://www.standardbank.co.mz/incubator',
    isVerified: true,
    region: 'Nacional (com acolhimento online de equipas da Zambézia)',
    description: 'Um dos programas de incubação mais respeitados de Moçambique, focado em transformar ideias em negócios sustentáveis e rentáveis.'
  },
  {
    id: 'fund-2',
    title: 'Programa de Apoio à Juventude Agrária e Cadeias de Valor',
    organization: 'Fundo de Desenvolvimento Agrário (FDA) & Parceiros',
    targetAudience: 'Jovens agricultores e associações juvenis produtoras',
    fundingType: 'Subsídio a Fundo Perdido',
    amountOrBenefit: 'Apoio em sementes certificadas, sistemas de rega gota-a-gota e motobombas solares',
    requirements: [
      'Posse de terra ou DUAT em processo de regularização com mínimo de 1 hectare',
      'Residência fixa comprovada no distrito de intervenção (foco em Mocuba, Gurué, Nicoadala)',
      'Plano de exploração agrícola viável'
    ],
    deadline: '2027-01-30',
    officialLink: 'https://www.fda.gov.mz',
    isVerified: true,
    region: 'Zambézia e Províncias do Centro/Norte',
    description: 'Iniciativa governamental que apoia a mecanização e modernização tecnológica da produção agrícola liderada por jovens.'
  },
  {
    id: 'fund-3',
    title: 'Linha de Crédito Jovem Empreendedor Gapi-SI',
    organization: 'Gapi - Sociedade de Investimentos',
    targetAudience: 'Micro e pequenas empresas constituídas por jovens moçambicanos',
    fundingType: 'Crédito Jovem',
    amountOrBenefit: 'Financiamento bonificado entre 50.000 MZN e 750.000 MZN com taxas de juro subsidiadas',
    requirements: [
      'Negócio em funcionamento com faturação mínima demonstrável nos últimos 6 meses',
      'Plano de aplicação dos fundos para compra de maquinaria ou capital de giro',
      'Garantias simplificadas adequadas à realidade de jovens empreendedores'
    ],
    deadline: 'Fluxo Contínuo',
    officialLink: 'https://www.gapi.co.mz',
    isVerified: true,
    region: 'Nacional (com balcões em Quelimane e principais capitais)',
    description: 'Linha financeira desenhada para impulsionar jovens que já iniciaram uma atividade comercial e necessitam de capital para dar o próximo salto.'
  }
];

export const INITIAL_BUSINESS_GUIDES: BusinessGuide[] = [
  {
    id: 'guide-1',
    title: 'Guia Completo: Como Obter o NUIT e Registar uma Empresa em Moçambique',
    category: 'Legalização & NUIT',
    readTime: '6 min',
    summary: 'O passo-a-passo oficial no Balcão de Atendimento Único (BAÚ) e na Autoridade Tributária sem burocracias desnecessárias.',
    steps: [
      {
        title: '1. Obtenção do NUIT Pessoal e Comercial',
        content: 'Dirige-te ao balcão da Autoridade Tributária ou BAÚ mais próximo com o teu Bilhete de Identidade. O NUIT é gratuito e é emitido no próprio dia.'
      },
      {
        title: '2. Certidão Negativa de Nome da Empresa',
        content: 'Na Conservatória do Registo das Entidades Legais (ou no BAÚ), solicita a pesquisa e reserva do nome da tua empresa. Tem um custo tabelado e validade de 90 dias.'
      },
      {
        title: '3. Escritura Pública ou Estatuto Simplificado',
        content: 'Para Sociedades Unipessoais ou por Quotas, podes utilizar os modelos de estatutos simplificados aprovados pelo Código Comercial moçambicano.'
      },
      {
        title: '4. Licenciamento e Declaração de Início de Atividade',
        content: 'Comunica o início de atividade na Repartição de Finanças e solicita a Mera Comunicação Prévia ou Alvará no Município/Distrito.'
      }
    ],
    officialResources: [
      { name: 'Portal Oficial do Balcão de Atendimento Único (BAÚ)', url: 'https://www.portaldogoverno.gov.mz' },
      { name: 'Autoridade Tributária de Moçambique', url: 'https://www.at.gov.mz' }
    ]
  },
  {
    id: 'guide-2',
    title: 'Como Fazer um Plano de Negócios em 6 Passos Práticos',
    category: 'Plano de Negócios',
    readTime: '8 min',
    summary: 'Estrutura simples e direta para apresentar a tua ideia a incubadoras, bancos ou parceiros.',
    steps: [
      {
        title: '1. O Problema e a Proposta de Valor',
        content: 'Explica claramente qual a dor ou necessidade real que existe na tua comunidade (ex: falta de transporte seguro, escassez de hortícolas frescas, falta de suporte informático) e como o teu produto resolve isso melhor do que as alternativas.'
      },
      {
        title: '2. Quem é o Teu Cliente Alvo',
        content: 'Define quem tem poder de compra e interesse no teu produto: mães de família, estudantes universitários, agricultores ou pequenas lojas do bairro.'
      },
      {
        title: '3. Análise da Concorrência e Vantagem Competitiva',
        content: 'Quem já faz algo parecido em Quelimane ou Moçambique? Por que razão as pessoas vão preferir comprar a ti (qualidade, pontualidade, atendimento, facilidade de pagamento móvel)?'
      },
      {
        title: '4. Como Vais Vender e Entregar',
        content: 'Ponto fixo, entregas ao domicílio, venda direta pelo WhatsApp Business ou através de parcerias com comerciantes locais.'
      },
      {
        title: '5. Plano Operacional e Recursos Necessários',
        content: 'Lista exatamente o que precisas para arrancar: ferramentas, telemóvel, motorizada, stock inicial e matérias-primas.'
      },
      {
        title: '6. Finanças: Custos, Preço e Lucro Esperado',
        content: 'Calcula o custo real por unidade, define a tua margem de lucro e projeta quantas vendas precisas de fazer por mês para cobrir as despesas (ponto de equilíbrio).'
      }
    ],
    officialResources: [
      { name: 'Modelo Oficial de Canvas de Negócio (ANJE Moçambique)', url: 'https://www.anje.org.mz' }
    ]
  },
  {
    id: 'guide-3',
    title: 'Gestão Financeira para Pequenos Negócios: Nunca Mistures as Contas',
    category: 'Finanças para Jovens',
    readTime: '5 min',
    summary: 'Aprende a separar o dinheiro pessoal do dinheiro da empresa e a controlar as entradas e saídas no caderno ou telemóvel.',
    steps: [
      {
        title: '1. A Regra de Ouro: Duas Carteiras Diferentes',
        content: 'O maior erro de um jovem empreendedor é tirar dinheiro do caixa do negócio para despesas pessoais. Define um salário mensal fixo para ti (mesmo que modesto) e nunca toques no dinheiro de giro.'
      },
      {
        title: '2. Registo Diário do Livro de Caixa',
        content: 'Aponta todos os dias: data, descrição da venda ou compra, valor que entrou e valor que saiu. Sem registo, é impossível saber se estás a ter lucro real.'
      },
      {
        title: '3. Fundo de Emergência do Negócio',
        content: 'Guarda pelo menos 10% do lucro líquido num fundo de reserva para reparações de equipamentos, quebras inesperadas ou meses de menores vendas.'
      }
    ],
    officialResources: [
      { name: 'Manual de Educação Financeira do Banco de Moçambique', url: 'https://www.bancomoc.mz' }
    ]
  }
];

export const INITIAL_TECH_GUIDES: TechGuide[] = [
  {
    id: 'tech-1',
    title: 'Inteligência Artificial Prática: Como Usar no Dia a Dia com Ética e Eficiência',
    category: 'Inteligência Artificial',
    level: 'Iniciante',
    practicalSummary: 'A inteligência artificial não faz milagres, mas acelera em 10x a tua capacidade de aprender, redigir cartas formais, programar e resolver problemas complexos quando usada como assistente colaborativo.',
    keyTools: ['Gemini', 'ChatGPT', 'Claude', 'Canva Magic Studio', 'Perplexity'],
    stepsOrTips: [
      'Dá contexto claro: diz quem tu és, qual o público da tua mensagem e qual o tom pretendido.',
      'Nunca coloques dados privados de terceiros, palavras-passe ou números de B.I. em ferramentas de IA.',
      'Verifica sempre os factos e referências: a IA pode inventar datas e leis que não existem em Moçambique.',
      'Usa a IA para testar a tua lógica e criar simuladores de entrevistas de emprego.'
    ]
  },
  {
    id: 'tech-2',
    title: 'Cibersegurança e Proteção Pessoal: Evita Burlas em Carteiras Móveis e Redes Sociais',
    category: 'Cibersegurança',
    level: 'Iniciante',
    practicalSummary: 'Em Moçambique, as tentativas de burla via SMS falsos do m-Pesa, e-Mola e clonagem de contas de WhatsApp aumentaram. Conhece as regras básicas para blindares os teus dados.',
    keyTools: ['Autenticação de Dois Fatores (2FA)', 'Bitwarden', 'Google Authenticator'],
    stepsOrTips: [
      'O teu PIN do m-Pesa ou e-Mola NUNCA deve ser partilhado com ninguém, nem mesmo com quem afirme ser funcionário da operadora.',
      'Ativa a verificação em duas etapas (código PIN de 6 dígitos) nas definições de conta do teu WhatsApp.',
      'Desconfia de mensagens que prometem empregos milagrosos com exigência de depósito antecipado para "exames médicos" ou "uniformes" (é sempre burla).',
      'Não cliques em links recebidos por SMS a dizer que a tua conta foi bloqueada.'
    ]
  },
  {
    id: 'tech-3',
    title: 'Como Criar o Teu Primeiro Site ou Portfólio sem Custos de Alojamento',
    category: 'Criação de Sites',
    level: 'Iniciante',
    practicalSummary: 'Hoje podes publicar o teu currículo interativo, portfólio de fotografia ou o site do teu projeto comunitário 100% grátis usando serviços globais fiáveis.',
    keyTools: ['GitHub Pages', 'Vercel Free Tier', 'Netlify', 'Google Sites', 'Tailwind CSS'],
    stepsOrTips: [
      'Começa por desenhar a estrutura num papel antes de começar a programar.',
      'Utiliza imagens comprimidas em formato WebP para garantir que o teu site abre rápido mesmo em ligações lentas 3G.',
      'Garante que o site é legível em telemóveis de ecrã pequeno (mobile-first).',
      'Aloja o código no GitHub e liga ao Vercel para publicação automática com certificado SSL HTTPS grátis.'
    ]
  },
  {
    id: 'tech-4',
    title: 'Comércio Eletrónico e Vendas Digitais Adaptadas a Moçambique',
    category: 'E-Commerce & Pagamentos Móveis',
    level: 'Intermédio',
    practicalSummary: 'O comércio eletrónico em Moçambique funciona com base na proximidade, confiança e meios de pagamento móveis.',
    keyTools: ['WhatsApp Business', 'Instagram Shopping', 'm-Pesa API', 'e-Mola', 'Google Maps Local'],
    stepsOrTips: [
      'Configura o perfil do WhatsApp Business com horário de funcionamento, morada e catálogo atualizado.',
      'Regista a tua localização no Google Meu Negócio / Google Maps para apareceres quando as pessoas pesquisam em Quelimane.',
      'Oferece opções de pagamento transparentes e confirma sempre a receção do valor na tua conta antes de expedir mercadoria.',
      'Cria protocolos de entrega fiáveis com estafetas locais de confiança.'
    ]
  }
];

export const INITIAL_IDEAS: YouthIdea[] = [
  {
    id: 'idea-1',
    projectName: 'EcoLuz Zambézia: Lâmpadas Solares a Partir de Materiais Reciclados',
    area: 'Ambiente & Sustentabilidade',
    province: 'Zambézia',
    district: 'Quelimane',
    problem: 'Muitos estudantes em bairros periurbanos de Quelimane sem eletricidade regular recorrem a candeeiros a petróleo (petromax) ou velas, o que provoca problemas respiratórios e risco de incêndio.',
    solution: 'Construção de candeeiros de mesa solares recarregáveis utilizando garrafas PET, placas solares de baixa voltagem e baterias de lítio recuperadas de computadores fora de uso.',
    beneficiaries: 'Mais de 150 famílias e estudantes secundários dos bairros de Namuinho e Icídua.',
    requiredResources: 'Oficina de soldadura, formação básica de montagem para 10 jovens e pequenos lotes de painéis solares miniatura.',
    stage: 'Protótipo / Em Teste',
    authorName: 'Arlindo Manuel e Equipa Jovem',
    authorContact: 'arlindo.solar@exemplo.mz',
    publicConsentGiven: true,
    submissionDate: '2026-10-10',
    status: 'Aprovada',
    likesCount: 38
  },
  {
    id: 'idea-2',
    projectName: 'AgroAlert Quelimane: Alertas Fitossanitários via SMS para Camponeses',
    area: 'Agricultura & Agroprocessamento',
    province: 'Zambézia',
    district: 'Mocuba e Nicoadala',
    problem: 'Pequenos produtores de mandioca e milho perdem até 40% da safra por pragas detetadas tarde demais e falta de canais de comunicação rápidos.',
    solution: 'Plataforma móvel comunitária que envia alertas via SMS simples (sem necessidade de internet) com recomendações de prevenção biológica e ligação com extensionistas agrários locais.',
    beneficiaries: 'Cerca de 600 pequenos camponeses associados em Mocuba.',
    requiredResources: 'Créditos de gateway de SMS, parceria com o serviço distrital de atividades económicas e validação científica dos alertas.',
    stage: 'Em Operação Piloto',
    authorName: 'Fátima Alberto Machava',
    authorContact: 'fatima.machava@exemplo.mz',
    publicConsentGiven: true,
    submissionDate: '2026-10-12',
    status: 'Aprovada',
    likesCount: 52
  },
  {
    id: 'idea-3',
    projectName: 'Escola Conectada Zambézia: Biblioteca Digital Offline com Servidores Raspberry Pi',
    area: 'Educação',
    province: 'Zambézia',
    district: 'Gurué',
    problem: 'Escolas secundárias em distritos do interior da Zambézia carecem de livros escolares físicos e não possuem cobertura de Internet fiável para pesquisas.',
    solution: 'Instalação de micro-servidores de baixo consumo (Raspberry Pi com Wi-Fi local) que distribuem gratuitamente enciclopédias abertas, manuais escolares em PDF e videoaulas para qualquer telemóvel num raio de 100 metros sem gastar saldo de dados.',
    beneficiaries: 'Mais de 2.000 alunos e professores da Escola Secundária de Gurué.',
    requiredResources: '3 mini-computadores Raspberry Pi, cartões de memória de 128GB e baterias externas para autonomia energética.',
    stage: 'Ideia Inicial',
    authorName: 'Eusébio Santos',
    authorContact: 'eusebio.edu@exemplo.mz',
    publicConsentGiven: true,
    submissionDate: '2026-10-16',
    status: 'Aprovada',
    likesCount: 44
  }
];

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Lançamento Oficial da Juventude Digital 360° em Quelimane, Província da Zambézia',
    category: 'Zambézia em Foco',
    summary: 'A iniciativa tem como propósito central aproximar as oportunidades de formação tecnológica, emprego e bolsas de estudo dos jovens das cidades e distritos da Zambézia, abrindo pontes para todo o país.',
    fullContent: 'Foi apresentado hoje o projeto JUVENTUDE DIGITAL 360°, uma plataforma colaborativa orientada para apoiar os jovens moçambicanos na transição para a economia digital. Com um foco inicial na província da Zambézia — envolvendo Quelimane, Mocuba, Gurué, Alto Molócuè e distritos vizinhos —, a plataforma disponibiliza um diretório rigorosamente verificado de ofertas de trabalho, programas de bolsas académicas, cursos gratuitos e um Laboratório de Ideias onde jovens criadores podem expor os seus projetos.',
    date: '2026-10-20',
    source: 'Gabinete de Comunicação da Iniciativa Juventude Digital 360°',
    sourceUrl: 'https://juventudedigital360.mz',
    imageUrl: '/src/assets/images/hero_mozambique_youth_1792793463704.jpg',
    isOfficialAnnouncement: true
  },
  {
    id: 'news-2',
    title: 'Abertura do Ciclo de Bolsas de Estudo Universitárias para o Ano Académico',
    category: 'Oportunidades',
    summary: 'O Instituto de Bolsas de Estudo de Moçambique (IBE) e entidades parceiras divulgaram os prazos oficiais de candidatura para estudantes que pretendem ingressar no ensino superior.',
    fullContent: 'O Instituto de Bolsas de Estudo (IBE) publicou as diretrizes para as candidaturas a bolsas de mérito e bolsas sociais em instituições de ensino superior moçambicanas e no estrangeiro. Os candidatos devem prestar especial atenção à documentação obrigatória, que inclui a certidão de notas da 12ª classe devidamente autenticada, certidão de nascimento ou bilhete de identidade e atestado de residência.',
    date: '2026-10-18',
    source: 'Instituto de Bolsas de Estudo (IBE)',
    sourceUrl: 'https://ibe.gov.mz',
    imageUrl: '/src/assets/images/tech_lab_coding_youth_1792793465763.jpg',
    isOfficialAnnouncement: true
  },
  {
    id: 'news-3',
    title: 'Jovens Empreendedores da Zambézia Destacam-se no Uso de Tecnologia para Agroprocessamento',
    category: 'Iniciativas Juvenis',
    summary: 'Encontro regional em Quelimane reúne criadores de projetos de sustentabilidade alimentar e destaca o papel da juventude na modernização da economia agrária.',
    fullContent: 'Durante o recente fórum de inovação agrícola na província da Zambézia, jovens inovadores apresentaram soluções que vão desde a desidratação solar de frutos tropicais até a gestão de stocks via mensagens SMS. O evento reforçou a urgência de apoiar pequenas ideias locais com mentoria prática e acesso a capital semente transparente.',
    date: '2026-10-14',
    source: 'Boletim Regional de Juventude e Desenvolvimento',
    sourceUrl: 'https://www.cta.org.mz',
    imageUrl: '/src/assets/images/youth_entrepreneur_mozambique_1792793464363.jpg',
    isOfficialAnnouncement: true
  }
];
