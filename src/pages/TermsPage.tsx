import React from 'react';
import { FileText, ShieldCheck, AlertCircle } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-neutral-800 text-xs sm:text-sm leading-relaxed">
      
      <div className="space-y-3 pb-6 border-b border-neutral-200">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#123A70]">
          <FileText className="w-4 h-4 text-[#123A70]" />
          <span>Regras de Utilização do Portal</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123A70] tracking-tight">
          Termos de Utilização
        </h1>
        <p className="text-xs text-neutral-500">
          Válidos para todos os serviços digitais da iniciativa JUVENTUDE DIGITAL 360° em Moçambique
        </p>
      </div>

      <div className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xs">
        
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">
            1. Caráter Gratuito e Não Lucrativo
          </h2>
          <p>
            O acesso a todas as informações, diretórios de bolsas, ferramentas de criação de currículo (CV) e laboratório de ideias na plataforma <strong>JUVENTUDE DIGITAL 360°</strong> é totalmente gratuito. É expressamente proibida a cobrança de quaisquer valores a terceiros para acesso às oportunidades aqui publicadas.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">
            2. Natureza Informativa e Fontes Oficiais
          </h2>
          <p>
            As publicações relativas a empregos, estágios, bolsas de estudo e cursos provêm de canais públicos oficiais de entidades governamentais, embaixadas, universidades e empresas em Moçambique. O portal atua como um agregador e facilitador de acesso, não substituindo a consulta direta aos regulamentos oficiais disponibilizados pelos respetivos promotores através das hiperligações indicadas.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">
            3. Propriedade Intelectual das Ideias dos Jovens
          </h2>
          <p>
            A submissão de projetos no <strong>Laboratório de Ideias Juvenis</strong> não transfere quaisquer direitos de propriedade intelectual ou comercial para a plataforma. A titularidade da ideia pertence integralmente ao jovem ou equipa criadora. A divulgação comunitária destina-se unicamente a dar visibilidade, incentivar o diálogo e apoiar o desenvolvimento do projeto.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">
            4. Conduta Ética e Proibição de Fraude
          </h2>
          <p>
            É estritamente proibido submeter informações falsas, anúncios fraudulentos com solicitações de dinheiro, ou conteúdos ofensivos. A equipa de moderação reserva-se o direito de remover sumariamente qualquer publicação que viole as normas legais de Moçambique ou coloque em risco os jovens utilizadores.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#123A70]">
            5. Legislação Aplicável
          </h2>
          <p>
            Os presentes Termos de Utilização regem-se pela ordem jurídica da República de Moçambique.
          </p>
        </section>

      </div>

    </div>
  );
};
