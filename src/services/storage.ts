import {
  JobOpportunity,
  Scholarship,
  Course,
  FundingProgram,
  BusinessGuide,
  TechGuide,
  YouthIdea,
  NewsItem,
  ContactMessage,
  SuggestedJob
} from '../types';
import {
  INITIAL_JOBS,
  INITIAL_SCHOLARSHIPS,
  INITIAL_COURSES,
  INITIAL_FUNDING,
  INITIAL_BUSINESS_GUIDES,
  INITIAL_TECH_GUIDES,
  INITIAL_IDEAS,
  INITIAL_NEWS
} from '../data/initialData';

const STORAGE_KEYS = {
  JOBS: 'jd360_jobs',
  SCHOLARSHIPS: 'jd360_scholarships',
  COURSES: 'jd360_courses',
  FUNDING: 'jd360_funding',
  BUSINESS_GUIDES: 'jd360_business_guides',
  TECH_GUIDES: 'jd360_tech_guides',
  IDEAS: 'jd360_ideas',
  NEWS: 'jd360_news',
  CONTACT_MESSAGES: 'jd360_contact_messages',
  SUGGESTED_JOBS: 'jd360_suggested_jobs',
  ADMIN_PIN: 'jd360_admin_pin',
  ADMIN_SESSION: 'jd360_admin_logged_in'
};

const DEFAULT_ADMIN_PIN = '3602026';

function safeGet<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw);
  } catch (e) {
    console.error(`Error loading key ${key} from storage:`, e);
    return defaultValue;
  }
}

function safeSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving key ${key} to storage:`, e);
  }
}

export const StorageService = {
  // Jobs
  getJobs(): JobOpportunity[] {
    return safeGet<JobOpportunity[]>(STORAGE_KEYS.JOBS, INITIAL_JOBS);
  },
  saveJobs(jobs: JobOpportunity[]): void {
    safeSet(STORAGE_KEYS.JOBS, jobs);
  },
  addJob(job: JobOpportunity): void {
    const jobs = this.getJobs();
    jobs.unshift(job);
    this.saveJobs(jobs);
  },
  deleteJob(id: string): void {
    const jobs = this.getJobs().filter(j => j.id !== id);
    this.saveJobs(jobs);
  },

  // Scholarships
  getScholarships(): Scholarship[] {
    return safeGet<Scholarship[]>(STORAGE_KEYS.SCHOLARSHIPS, INITIAL_SCHOLARSHIPS);
  },
  saveScholarships(scholarships: Scholarship[]): void {
    safeSet(STORAGE_KEYS.SCHOLARSHIPS, scholarships);
  },
  addScholarship(scholarship: Scholarship): void {
    const list = this.getScholarships();
    list.unshift(scholarship);
    this.saveScholarships(list);
  },
  deleteScholarship(id: string): void {
    const list = this.getScholarships().filter(s => s.id !== id);
    this.saveScholarships(list);
  },

  // Courses
  getCourses(): Course[] {
    return safeGet<Course[]>(STORAGE_KEYS.COURSES, INITIAL_COURSES);
  },
  saveCourses(courses: Course[]): void {
    safeSet(STORAGE_KEYS.COURSES, courses);
  },
  addCourse(course: Course): void {
    const list = this.getCourses();
    list.unshift(course);
    this.saveCourses(list);
  },
  deleteCourse(id: string): void {
    const list = this.getCourses().filter(c => c.id !== id);
    this.saveCourses(list);
  },

  // Funding & Guides
  getFunding(): FundingProgram[] {
    return safeGet<FundingProgram[]>(STORAGE_KEYS.FUNDING, INITIAL_FUNDING);
  },
  getBusinessGuides(): BusinessGuide[] {
    return safeGet<BusinessGuide[]>(STORAGE_KEYS.BUSINESS_GUIDES, INITIAL_BUSINESS_GUIDES);
  },
  getTechGuides(): TechGuide[] {
    return safeGet<TechGuide[]>(STORAGE_KEYS.TECH_GUIDES, INITIAL_TECH_GUIDES);
  },

  // Youth Ideas
  getIdeas(): YouthIdea[] {
    return safeGet<YouthIdea[]>(STORAGE_KEYS.IDEAS, INITIAL_IDEAS);
  },
  saveIdeas(ideas: YouthIdea[]): void {
    safeSet(STORAGE_KEYS.IDEAS, ideas);
  },
  addIdea(idea: YouthIdea): void {
    const list = this.getIdeas();
    list.unshift(idea);
    this.saveIdeas(list);
  },
  likeIdea(id: string): number {
    const list = this.getIdeas();
    const target = list.find(item => item.id === id);
    if (target) {
      target.likesCount = (target.likesCount || 0) + 1;
      this.saveIdeas(list);
      return target.likesCount;
    }
    return 0;
  },
  updateIdeaStatus(id: string, status: 'Aprovada' | 'Pendente'): void {
    const list = this.getIdeas();
    const target = list.find(i => i.id === id);
    if (target) {
      target.status = status;
      this.saveIdeas(list);
    }
  },
  deleteIdea(id: string): void {
    const list = this.getIdeas().filter(i => i.id !== id);
    this.saveIdeas(list);
  },

  // News
  getNews(): NewsItem[] {
    return safeGet<NewsItem[]>(STORAGE_KEYS.NEWS, INITIAL_NEWS);
  },
  saveNews(news: NewsItem[]): void {
    safeSet(STORAGE_KEYS.NEWS, news);
  },
  addNews(item: NewsItem): void {
    const list = this.getNews();
    list.unshift(item);
    this.saveNews(list);
  },
  deleteNews(id: string): void {
    const list = this.getNews().filter(n => n.id !== id);
    this.saveNews(list);
  },

  // Contact Messages
  getContactMessages(): ContactMessage[] {
    return safeGet<ContactMessage[]>(STORAGE_KEYS.CONTACT_MESSAGES, []);
  },
  saveContactMessage(message: ContactMessage): void {
    const list = this.getContactMessages();
    list.unshift(message);
    safeSet(STORAGE_KEYS.CONTACT_MESSAGES, list);
  },
  deleteContactMessage(id: string): void {
    const list = this.getContactMessages().filter(m => m.id !== id);
    safeSet(STORAGE_KEYS.CONTACT_MESSAGES, list);
  },

  // Suggested Jobs
  getSuggestedJobs(): SuggestedJob[] {
    return safeGet<SuggestedJob[]>(STORAGE_KEYS.SUGGESTED_JOBS, []);
  },
  addSuggestedJob(job: SuggestedJob): void {
    const list = this.getSuggestedJobs();
    list.unshift(job);
    safeSet(STORAGE_KEYS.SUGGESTED_JOBS, list);
  },
  deleteSuggestedJob(id: string): void {
    const list = this.getSuggestedJobs().filter(j => j.id !== id);
    safeSet(STORAGE_KEYS.SUGGESTED_JOBS, list);
  },

  // Admin Auth
  verifyAdminPin(pin: string): boolean {
    const currentPin = localStorage.getItem(STORAGE_KEYS.ADMIN_PIN) || DEFAULT_ADMIN_PIN;
    return pin.trim() === currentPin.trim();
  },
  isAdminLoggedIn(): boolean {
    return sessionStorage.getItem(STORAGE_KEYS.ADMIN_SESSION) === 'true';
  },
  setAdminLoggedIn(status: boolean): void {
    if (status) {
      sessionStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, 'true');
    } else {
      sessionStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
    }
  },
  updateAdminPin(newPin: string): boolean {
    if (newPin && newPin.length >= 4) {
      localStorage.setItem(STORAGE_KEYS.ADMIN_PIN, newPin);
      return true;
    }
    return false;
  },

  // Backup & Restore
  exportDatabase(): string {
    const payload = {
      exportedAt: new Date().toISOString(),
      platform: 'JUVENTUDE DIGITAL 360°',
      jobs: this.getJobs(),
      scholarships: this.getScholarships(),
      courses: this.getCourses(),
      ideas: this.getIdeas(),
      news: this.getNews(),
      messages: this.getContactMessages(),
      suggestedJobs: this.getSuggestedJobs()
    };
    return JSON.stringify(payload, null, 2);
  },
  importDatabase(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString);
      if (data && typeof data === 'object') {
        if (Array.isArray(data.jobs)) this.saveJobs(data.jobs);
        if (Array.isArray(data.scholarships)) this.saveScholarships(data.scholarships);
        if (Array.isArray(data.courses)) this.saveCourses(data.courses);
        if (Array.isArray(data.ideas)) this.saveIdeas(data.ideas);
        if (Array.isArray(data.news)) this.saveNews(data.news);
        return true;
      }
      return false;
    } catch (e) {
      console.error('Import error:', e);
      return false;
    }
  },
  resetToDefaults(): void {
    localStorage.removeItem(STORAGE_KEYS.JOBS);
    localStorage.removeItem(STORAGE_KEYS.SCHOLARSHIPS);
    localStorage.removeItem(STORAGE_KEYS.COURSES);
    localStorage.removeItem(STORAGE_KEYS.FUNDING);
    localStorage.removeItem(STORAGE_KEYS.IDEAS);
    localStorage.removeItem(STORAGE_KEYS.NEWS);
  }
};
