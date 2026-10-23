import React from 'react';
import { ShieldCheck, Lock, Eye, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-neutral-800 text-xs sm:text-sm leading-relaxed">
      
      <div className="space-y-3 pb-6 border-b border-neutral-200">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#159447]">
          <ShieldCheck className="w-4 h-4 text-[#159447]" />
          <span>Proteção e Sigilo de Informação</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123A70] tracking-tight">
          Política de Privacidade e Proteção de Dados
        </h1>
        <p className="text-xs text-neutral-500">
          Última atualização: Outubro de 2026 · Válida para a Província da Zambézia e República de Moçambique
        </p>
      </div>

      <div className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xs">
        
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">
            1. Compromisso com os Jovens
          </h2>
          <p>
            A plataforma <strong>JUVENTUDE DIGITAL 360°</strong> tem como compromisso basilar o respeito integral pelos direitos de privacidade, confidencialidade e autodeterminação informativa de todos os utilizadores, com especial ênfase na proteção de estudantes e jovens em início de carreira em Moçambique.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">
            2. Recolha de Dados nos Formulários
          </h2>
          <p>
            A navegação informativa no portal é 100% anónima e não exige registo prévio. Apenas recolhemos dados pessoais estritamente voluntários nas seguintes circunstâncias:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-neutral-600">
            <li><strong>Laboratório de Ideias Juvenis:</strong> Nome, contacto e detalhes do projeto submetido pelo jovem inovador.</li>
            <li><strong>Criar o Meu CV:</strong> As informações inseridas no gerador de currículo são processadas exclusivamente no teu navegador local e não são enviadas nem armazenadas em servidores de terceiros.</li>
            <li><strong>Formulários de Contacto e Vagas:</strong> Nome, província e e-mail ou telefone para efeitos de resposta direta e verificação de autenticidade.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">
            3. Consentimento Explícito para Divulgação de Ideias
          </h2>
          <p>
            No Laboratório de Ideias Juvenis, nenhuma proposta é tornada pública sem que o utilizador assinale ativamente a caixa de consentimento específico e separado. As ideias submetidas sem consentimento público são tratadas como comunicações estritamente privadas com a coordenação do projeto.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">
            4. Não Partilha Comercial com Terceiros
          </h2>
          <p>
            A JUVENTUDE DIGITAL 360° <strong>nunca vende, aluga ou cede dados pessoais</strong> a agências de publicidade, empresas de marketing telefónico ou intermediários. Qualquer contacto com entidades parceiras ou mentores ocorre apenas com o teu conhecimento prévio.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">
            5. Direitos do Titular dos Dados
          </h2>
          <p>
            A qualquer momento, podes solicitar a retificação, atualização ou eliminação definitiva de qualquer projeto, ideia ou mensagem submetida através do nosso canal de contacto oficial ou diretamente com a equipa de moderação.
          </p>
        </section>

      </div>

    </div>
  );
};
