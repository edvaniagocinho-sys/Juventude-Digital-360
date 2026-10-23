import React from 'react';
import { Logo } from './Logo';
import { PageType } from '../types';
import { ShieldCheck, Lock, ExternalLink, MapPin, Wifi, Download } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenDeployGuide: () => void;
  onOpenOfflineCenter?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDeployGuide,
  onOpenOfflineCenter
}) => {
  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151515] text-neutral-300 border-t border-neutral-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => handleNav('inicio')} className="cursor-pointer text-left">
              <Logo variant="light" size="lg" showSubtitle={true} />
            </button>
            <p className="text-sm text-neutral-400 font-medium leading-relaxed max-w-md">
              <strong className="text-white">Slogan:</strong> Tecnologia, Conhecimento e Oportunidades para Todos os Jovens.
            </p>
            <p className="text-xs text-[#FFC928] font-semibold tracking-wide">
              Descobre. Aprende. Empreende. Inova.
            </p>
            <div className="flex items-start gap-2.5 text-xs text-neutral-400 pt-2 bg-neutral-900/80 p-3 rounded-lg border border-neutral-800/80">
              <MapPin className="w-4 h-4 text-[#159447] shrink-0 mt-0.5" />
              <span>
                Foco inicial: <strong>Província da Zambézia</strong> (Quelimane, Mocuba, Gurué, Alto Molócuè e distritos) em expansão para as 11 províncias de <strong>Moçambique</strong>.
              </span>
            </div>
          </div>

          {/* Oportunidades & Formação */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Oportunidades
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('emprego')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Emprego e Estágios
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('bolsas')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bolsas de Estudo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cursos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cursos e Formação Gratuita
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('empreendedorismo')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Financiamento & Incubadoras
                </button>
              </li>
            </ul>
          </div>

          {/* Inovação & Comunidade */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Inovação Juvenil
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('laboratorio')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Laboratório de Ideias
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tecnologia')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tecnologia & IA Prática
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('noticias')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Notícias e Editais Oficiais
                </button>
              </li>
              {onOpenOfflineCenter && (
                <li>
                  <button
                    onClick={onOpenOfflineCenter}
                    className="text-[#FFC928] hover:underline transition-colors cursor-pointer text-left font-semibold flex items-center gap-1.5"
                  >
                    <Wifi className="w-3.5 h-3.5" />
                    <span>Versão Offline & App (PWA)</span>
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={onOpenDeployGuide}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left font-medium"
                >
                  Como Publicar na Web (Grátis)
                </button>
              </li>
            </ul>
          </div>

          {/* Institucional & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('sobre')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sobre o Projeto
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contactos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contactos & Parcerias
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('privacidade')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('termos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Termos de Utilização
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleNav('admin')}
                  className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white text-[11px] transition-colors cursor-pointer"
                >
                  <Lock className="w-3 h-3 text-neutral-500" />
                  <span>Área Administrativa</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Sources Commitment & Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2 text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-[#159447] shrink-0" />
            <span>
              Compromisso de Veracidade: Informação rigorosa com hiperligações para fontes oficiais em Moçambique.
            </span>
          </div>

          <div className="text-center md:text-right">
            <p>
              © {new Date().getFullYear()} JUVENTUDE DIGITAL 360°. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
