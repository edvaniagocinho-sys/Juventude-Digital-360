import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageType } from '../types';
import { PWAInstallButton } from './PWAInstallButton';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import {
  Menu,
  X,
  Briefcase,
  GraduationCap,
  BookOpen,
  Rocket,
  Cpu,
  Lightbulb,
  Newspaper,
  Info,
  Mail,
  ShieldCheck,
  FileText,
  Lock,
  Wifi,
  WifiOff,
  Download
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenIdeaModal: () => void;
  onOpenOfflineCenter?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenIdeaModal,
  onOpenOfflineCenter
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isOnline } = useOnlineStatus();

  const handleNav = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primaryNavLinks: { id: PageType; label: string }[] = [
    { id: 'inicio', label: 'Início' },
    { id: 'emprego', label: 'Emprego' },
    { id: 'bolsas', label: 'Bolsas' },
    { id: 'cursos', label: 'Cursos' },
    { id: 'laboratorio', label: 'Laboratório' }
  ];

  const allNavLinks: { id: PageType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'inicio', label: 'Início', icon: Rocket },
    { id: 'emprego', label: 'Emprego e Estágios', icon: Briefcase },
    { id: 'bolsas', label: 'Bolsas de Estudo', icon: GraduationCap },
    { id: 'cursos', label: 'Cursos e Formação', icon: BookOpen },
    { id: 'empreendedorismo', label: 'Empreendedorismo e Financiamento', icon: Rocket },
    { id: 'tecnologia', label: 'Tecnologia e Inovação', icon: Cpu },
    { id: 'laboratorio', label: 'Laboratório de Ideias Juvenis', icon: Lightbulb },
    { id: 'noticias', label: 'Notícias e Iniciativas', icon: Newspaper },
    { id: 'sobre', label: 'Sobre Nós', icon: Info },
    { id: 'contactos', label: 'Contactos', icon: Mail }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNav('inicio')}
          className="flex items-center text-left focus:outline-none cursor-pointer shrink-0"
        >
          <Logo size="md" showSubtitle={true} />
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-700">
          {primaryNavLinks.map(link => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 font-medium ${
                  isActive
                    ? 'border-[#123A70] text-[#123A70] font-semibold'
                    : 'border-transparent hover:text-[#123A70] hover:border-neutral-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          {/* More menu trigger for extra pages */}
          <div className="relative group">
            <button className="flex items-center gap-1 py-1 text-neutral-600 hover:text-[#123A70] whitespace-nowrap cursor-pointer">
              <span>Mais</span>
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <button
                onClick={() => handleNav('empreendedorismo')}
                className="w-full text-left px-4 py-2.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[#123A70] flex items-center gap-2.5"
              >
                <Rocket className="w-4 h-4 text-[#159447]" />
                Empreendedorismo
              </button>
              <button
                onClick={() => handleNav('tecnologia')}
                className="w-full text-left px-4 py-2.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[#123A70] flex items-center gap-2.5"
              >
                <Cpu className="w-4 h-4 text-[#123A70]" />
                Tecnologia & Inovação
              </button>
              <button
                onClick={() => handleNav('noticias')}
                className="w-full text-left px-4 py-2.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[#123A70] flex items-center gap-2.5"
              >
                <Newspaper className="w-4 h-4 text-[#FFC928]" />
                Notícias & Iniciativas
              </button>
              <button
                onClick={() => handleNav('sobre')}
                className="w-full text-left px-4 py-2.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[#123A70] flex items-center gap-2.5"
              >
                <Info className="w-4 h-4 text-neutral-500" />
                Sobre Nós
              </button>
              <button
                onClick={() => handleNav('contactos')}
                className="w-full text-left px-4 py-2.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[#123A70] flex items-center gap-2.5"
              >
                <Mail className="w-4 h-4 text-neutral-500" />
                Contactos & Propostas
              </button>
              <div className="border-t border-neutral-100 my-1 pt-1">
                <button
                  onClick={() => handleNav('admin')}
                  className="w-full text-left px-4 py-2 text-[11px] font-medium text-neutral-500 hover:text-[#123A70] flex items-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5 text-neutral-400" />
                  Painel de Gestão
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Zone 3: 1 primary action + PWA install & Connectivity Indicator */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Offline/Online Status Badge Button */}
          {onOpenOfflineCenter && (
            <button
              onClick={onOpenOfflineCenter}
              title={isOnline ? 'Ligado à Internet (clica para detalhes do modo offline)' : 'Modo Offline Ativo'}
              className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium border cursor-pointer transition-colors ${
                isOnline
                  ? 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                  : 'bg-amber-50 text-amber-900 border-amber-300 font-bold'
              }`}
            >
              {isOnline ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#159447]" />
                  <span>Online</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                  <span>Offline</span>
                </>
              )}
            </button>
          )}

          {/* In-app PWA install button */}
          <PWAInstallButton variant="navbar" />

          {/* Primary CTA button */}
          <button
            onClick={onOpenIdeaModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#159447] hover:bg-[#12803c] rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer active:scale-95"
          >
            <Lightbulb className="w-3.5 h-3.5 text-[#FFC928]" />
            <span>Enviar Ideia</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-[#123A70] hover:bg-neutral-100 rounded-lg transition-colors focus:outline-none cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          
          {/* Mobile Offline & Install Quick Bar */}
          <div className="flex items-center justify-between p-2.5 mb-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenOfflineCenter) onOpenOfflineCenter();
              }}
              className="flex items-center gap-1.5 font-medium text-neutral-700 cursor-pointer"
            >
              {isOnline ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#159447]" />
                  <span>Online / Cache Ativo</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-amber-700" />
                  <span className="font-bold text-amber-900">Modo Offline Ativo</span>
                </>
              )}
            </button>

            <PWAInstallButton variant="compact" />
          </div>

          <div className="space-y-1">
            {allNavLinks.map(link => {
              const Icon = link.icon;
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer text-left ${
                    isActive
                      ? 'bg-blue-50 text-[#123A70] font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#123A70]' : 'text-neutral-500'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenIdeaModal();
              }}
              className="w-full py-2.5 px-4 bg-[#159447] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Lightbulb className="w-4 h-4 text-[#FFC928]" />
              <span>Enviar uma Ideia Juvenil</span>
            </button>
            <div className="flex items-center justify-between text-xs text-neutral-500 pt-2 px-1">
              <button
                onClick={() => handleNav('guia-publicacao')}
                className="hover:text-[#123A70] underline cursor-pointer"
              >
                Guia de Publicação Web
              </button>
              <button
                onClick={() => handleNav('admin')}
                className="flex items-center gap-1 hover:text-[#123A70] cursor-pointer"
              >
                <Lock className="w-3 h-3" />
                Painel Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
