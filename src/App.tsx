/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType, JobOpportunity, Scholarship, Course, YouthIdea, NewsItem } from './types';
import { StorageService } from './services/storage';

// Navigation & Structure
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Modals
import { CVBuilderModal } from './components/CVBuilderModal';
import { IdeaLabModal } from './components/IdeaLabModal';
import { ReportJobModal } from './components/ReportJobModal';
import { SuggestCourseModal } from './components/SuggestCourseModal';
import { BusinessPlanCanvasModal } from './components/BusinessPlanCanvasModal';
import { DeployGuideModal } from './components/DeployGuideModal';
import { OfflineCenterModal } from './components/OfflineCenterModal';
import { OfflineIndicator } from './components/OfflineIndicator';

// Pages
import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { CoursesPage } from './pages/CoursesPage';
import { EntrepreneurshipPage } from './pages/EntrepreneurshipPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { IdeaLabPage } from './pages/IdeaLabPage';
import { NewsPage } from './pages/NewsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('inicio');

  // Core reactive data loaded from StorageService
  const [jobs, setJobs] = useState<JobOpportunity[]>([]);
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [ideas, setIdeas] = useState<YouthIdea[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [funding, setFunding] = useState(() => StorageService.getFunding());
  const [businessGuides, setBusinessGuides] = useState(() => StorageService.getBusinessGuides());
  const [techGuides, setTechGuides] = useState(() => StorageService.getTechGuides());

  // Modal triggers
  const [isCVBuilderOpen, setIsCVBuilderOpen] = useState(false);
  const [isIdeaModalOpen, setIsIdeaModalOpen] = useState(false);
  const [isReportJobOpen, setIsReportJobOpen] = useState(false);
  const [isSuggestCourseOpen, setIsSuggestCourseOpen] = useState(false);
  const [isBusinessPlanOpen, setIsBusinessPlanOpen] = useState(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);
  const [isOfflineCenterOpen, setIsOfflineCenterOpen] = useState(false);

  // Load and refresh data
  const refreshData = () => {
    setJobs(StorageService.getJobs());
    setScholarships(StorageService.getScholarships());
    setCourses(StorageService.getCourses());
    setIdeas(StorageService.getIdeas());
    setNews(StorageService.getNews());
    setFunding(StorageService.getFunding());
    setBusinessGuides(StorageService.getBusinessGuides());
    setTechGuides(StorageService.getTechGuides());
  };

  useEffect(() => {
    refreshData();

    // Check hash for direct link navigation
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      const validPages: PageType[] = [
        'inicio',
        'emprego',
        'bolsas',
        'cursos',
        'empreendedorismo',
        'tecnologia',
        'laboratorio',
        'noticias',
        'sobre',
        'contactos',
        'privacidade',
        'termos',
        'admin',
        'guia-publicacao'
      ];
      if (validPages.includes(hash)) {
        if (hash === 'guia-publicacao') {
          setIsDeployGuideOpen(true);
        } else {
          setCurrentPage(hash);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    if (page === 'guia-publicacao') {
      setIsDeployGuideOpen(true);
      return;
    }
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLikeIdea = (id: string) => {
    StorageService.likeIdea(id);
    setIdeas(StorageService.getIdeas());
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-[#151515] antialiased">
      
      {/* Zambézia Focus & National Initiative Top Banner */}
      <div className="bg-[#123A70] text-white text-[11px] py-1.5 px-4 text-center font-medium border-b border-[#0c274d]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline">
            🇲🇿 <strong>JUVENTUDE DIGITAL 360°</strong>: Tecnologia, Conhecimento e Oportunidades para Todos os Jovens
          </span>
          <span className="mx-auto sm:mx-0 text-[#FFC928]">
            Foco Inicial: Província da Zambézia (Quelimane, Mocuba, Gurué) · Aberto a todo Moçambique
          </span>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsOfflineCenterOpen(true)}
              className="text-amber-300 hover:text-white underline cursor-pointer text-[10px] font-semibold"
            >
              Versão Offline Ativa (PWA)
            </button>
            <span className="text-blue-300">·</span>
            <button
              onClick={() => setIsDeployGuideOpen(true)}
              className="text-neutral-300 hover:text-white underline cursor-pointer text-[10px]"
            >
              Guia de Publicação
            </button>
          </div>
        </div>
      </div>

      {/* Main Responsive Top Bar Contract Navbar with Official Logo */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenIdeaModal={() => setIsIdeaModalOpen(true)}
        onOpenOfflineCenter={() => setIsOfflineCenterOpen(true)}
      />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {currentPage === 'inicio' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenCVBuilder={() => setIsCVBuilderOpen(true)}
            onOpenIdeaModal={() => setIsIdeaModalOpen(true)}
            onOpenBusinessPlan={() => setIsBusinessPlanOpen(true)}
            onSelectJob={job => {
              setCurrentPage('emprego');
              window.location.hash = 'emprego';
            }}
            onSelectScholarship={scholarship => {
              setCurrentPage('bolsas');
              window.location.hash = 'bolsas';
            }}
            jobs={jobs}
            scholarships={scholarships}
            courses={courses}
            ideas={ideas}
            news={news}
            onLikeIdea={handleLikeIdea}
          />
        )}

        {currentPage === 'emprego' && (
          <JobsPage
            jobs={jobs}
            onOpenCVBuilder={() => setIsCVBuilderOpen(true)}
            onOpenReportJob={() => setIsReportJobOpen(true)}
          />
        )}

        {currentPage === 'bolsas' && (
          <ScholarshipsPage
            scholarships={scholarships}
          />
        )}

        {currentPage === 'cursos' && (
          <CoursesPage
            courses={courses}
            onOpenSuggestCourse={() => setIsSuggestCourseOpen(true)}
          />
        )}

        {currentPage === 'empreendedorismo' && (
          <EntrepreneurshipPage
            fundingPrograms={funding}
            businessGuides={businessGuides}
            onOpenBusinessPlan={() => setIsBusinessPlanOpen(true)}
            onOpenIdeaModal={() => setIsIdeaModalOpen(true)}
            onNavigateToContacts={() => handleNavigate('contactos')}
          />
        )}

        {currentPage === 'tecnologia' && (
          <TechnologyPage
            techGuides={techGuides}
            onOpenIdeaModal={() => setIsIdeaModalOpen(true)}
            onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
            onNavigateToCourses={() => handleNavigate('cursos')}
          />
        )}

        {currentPage === 'laboratorio' && (
          <IdeaLabPage
            ideas={ideas}
            onOpenIdeaModal={() => setIsIdeaModalOpen(true)}
            onLikeIdea={handleLikeIdea}
          />
        )}

        {currentPage === 'noticias' && (
          <NewsPage news={news} />
        )}

        {currentPage === 'sobre' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contactos' && (
          <ContactsPage />
        )}

        {currentPage === 'privacidade' && (
          <PrivacyPolicyPage />
        )}

        {currentPage === 'termos' && (
          <TermsPage />
        )}

        {currentPage === 'admin' && (
          <AdminPage
            jobs={jobs}
            scholarships={scholarships}
            courses={courses}
            ideas={ideas}
            onDataChanged={refreshData}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onOpenOfflineCenter={() => setIsOfflineCenterOpen(true)}
      />

      {/* Global Interactive Modals */}
      <CVBuilderModal
        isOpen={isCVBuilderOpen}
        onClose={() => setIsCVBuilderOpen(false)}
      />

      <IdeaLabModal
        isOpen={isIdeaModalOpen}
        onClose={() => setIsIdeaModalOpen(false)}
        onIdeaSubmitted={() => refreshData()}
      />

      <ReportJobModal
        isOpen={isReportJobOpen}
        onClose={() => setIsReportJobOpen(false)}
      />

      <SuggestCourseModal
        isOpen={isSuggestCourseOpen}
        onClose={() => setIsSuggestCourseOpen(false)}
      />

      <BusinessPlanCanvasModal
        isOpen={isBusinessPlanOpen}
        onClose={() => setIsBusinessPlanOpen(false)}
      />

      <DeployGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />

      <OfflineCenterModal
        isOpen={isOfflineCenterOpen}
        onClose={() => setIsOfflineCenterOpen(false)}
      />

      {/* Floating Offline Indicator */}
      <OfflineIndicator onOpenOfflineInfo={() => setIsOfflineCenterOpen(true)} />

    </div>
  );
}
