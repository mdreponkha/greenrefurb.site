import {
  ServiceItem,
  ProjectItem,
  GalleryItem,
  TestimonialItem,
  ContactEnquiry,
  SiteSettings,
  HomepageContent,
  TeamMember,
  PageSEO,
  AdminUser
} from '../types';
import {
  INITIAL_SERVICES,
  INITIAL_PROJECTS,
  INITIAL_GALLERY,
  INITIAL_TESTIMONIALS,
  INITIAL_SETTINGS,
  INITIAL_HOMEPAGE,
  INITIAL_TEAM,
  INITIAL_ENQUIRIES,
  INITIAL_SEO
} from '../data/initialData';
import { firestoreSync } from './firestoreSync';

const DB_PREFIX = 'greenrefurb_db_';

const DEFAULT_ADMIN: AdminUser = {
  id: 'admin-1',
  username: 'admin@greenrefurb.site',
  name: 'Site Administrator',
  role: 'super_admin'
};

const DEFAULT_ADMIN_PASS = 'Admin@2244@';

class LocalDatabase {
  private getItem<T>(key: string, fallback: T): T {
    try {
      const val = localStorage.getItem(DB_PREFIX + key);
      if (val) {
        return JSON.parse(val);
      }
    } catch (e) {
      console.warn(`Error reading from localStorage key ${key}`, e);
    }
    return fallback;
  }

  private setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(DB_PREFIX + key, JSON.stringify(value));
      window.dispatchEvent(new CustomEvent('greenrefurb_db_updated', { detail: { key } }));
    } catch (e) {
      console.error(`Error saving to localStorage key ${key}`, e);
    }
  }

  // --- Services ---
  getServices(): ServiceItem[] {
    return this.getItem<ServiceItem[]>('services', INITIAL_SERVICES);
  }

  getServiceBySlug(slug: string): ServiceItem | undefined {
    return this.getServices().find(s => s.slug === slug);
  }

  saveService(service: ServiceItem): void {
    const list = this.getServices();
    const idx = list.findIndex(s => s.id === service.id);
    if (idx >= 0) {
      list[idx] = service;
    } else {
      list.push(service);
    }
    this.setItem('services', list);
    firestoreSync.saveServices(list).catch(err => console.warn('[FirestoreSync] saveService error', err));
  }

  deleteService(id: string): void {
    const list = this.getServices().filter(s => s.id !== id);
    this.setItem('services', list);
    firestoreSync.saveServices(list).catch(err => console.warn('[FirestoreSync] deleteService error', err));
  }

  // --- Projects ---
  getProjects(): ProjectItem[] {
    return this.getItem<ProjectItem[]>('projects', INITIAL_PROJECTS);
  }

  getProjectById(id: string): ProjectItem | undefined {
    return this.getProjects().find(p => p.id === id);
  }

  saveProject(project: ProjectItem): void {
    const list = this.getProjects();
    const idx = list.findIndex(p => p.id === project.id);
    if (idx >= 0) {
      list[idx] = project;
    } else {
      list.unshift(project);
    }
    this.setItem('projects', list);
    firestoreSync.saveProjects(list).catch(err => console.warn('[FirestoreSync] saveProject error', err));
  }

  deleteProject(id: string): void {
    const list = this.getProjects().filter(p => p.id !== id);
    this.setItem('projects', list);
    firestoreSync.saveProjects(list).catch(err => console.warn('[FirestoreSync] deleteProject error', err));
  }

  // --- Gallery ---
  getGallery(): GalleryItem[] {
    return this.getItem<GalleryItem[]>('gallery', INITIAL_GALLERY);
  }

  saveGalleryItem(item: GalleryItem): void {
    const list = this.getGallery();
    const idx = list.findIndex(g => g.id === item.id);
    if (idx >= 0) {
      list[idx] = item;
    } else {
      list.unshift(item);
    }
    this.setItem('gallery', list);
    firestoreSync.saveGallery(list).catch(err => console.warn('[FirestoreSync] saveGalleryItem error', err));
  }

  deleteGalleryItem(id: string): void {
    const list = this.getGallery().filter(g => g.id !== id);
    this.setItem('gallery', list);
    firestoreSync.saveGallery(list).catch(err => console.warn('[FirestoreSync] deleteGalleryItem error', err));
  }

  // --- Testimonials ---
  getTestimonials(): TestimonialItem[] {
    return this.getItem<TestimonialItem[]>('testimonials', INITIAL_TESTIMONIALS);
  }

  saveTestimonial(item: TestimonialItem): void {
    const list = this.getTestimonials();
    const idx = list.findIndex(t => t.id === item.id);
    if (idx >= 0) {
      list[idx] = item;
    } else {
      list.unshift(item);
    }
    this.setItem('testimonials', list);
    firestoreSync.saveTestimonials(list).catch(err => console.warn('[FirestoreSync] saveTestimonial error', err));
  }

  deleteTestimonial(id: string): void {
    const list = this.getTestimonials().filter(t => t.id !== id);
    this.setItem('testimonials', list);
    firestoreSync.saveTestimonials(list).catch(err => console.warn('[FirestoreSync] deleteTestimonial error', err));
  }

  // --- Contact Enquiries ---
  getEnquiries(): ContactEnquiry[] {
    return this.getItem<ContactEnquiry[]>('enquiries', INITIAL_ENQUIRIES);
  }

  addEnquiry(enquiry: Omit<ContactEnquiry, 'id' | 'createdAt' | 'status'> & Partial<ContactEnquiry>): ContactEnquiry {
    const list = this.getEnquiries();
    const newEnquiry: ContactEnquiry = {
      id: 'enq-' + Date.now(),
      createdAt: new Date().toISOString(),
      status: 'New',
      ...enquiry
    };
    list.unshift(newEnquiry);
    this.setItem('enquiries', list);
    firestoreSync.saveEnquiries(list).catch(err => console.warn('[FirestoreSync] addEnquiry error', err));
    return newEnquiry;
  }

  updateEnquiryStatus(id: string, status: 'New' | 'Contacted' | 'Completed'): void {
    const list = this.getEnquiries();
    const item = list.find(e => e.id === id);
    if (item) {
      item.status = status;
      this.setItem('enquiries', list);
      firestoreSync.saveEnquiries(list).catch(err => console.warn('[FirestoreSync] updateEnquiryStatus error', err));
    }
  }

  deleteEnquiry(id: string): void {
    const list = this.getEnquiries().filter(e => e.id !== id);
    this.setItem('enquiries', list);
    firestoreSync.saveEnquiries(list).catch(err => console.warn('[FirestoreSync] deleteEnquiry error', err));
  }

  // --- Site Settings ---
  getSettings(): SiteSettings {
    const s = this.getItem<SiteSettings>('settings', INITIAL_SETTINGS);
    let dirty = false;
    if (!s.companyName || /limited/i.test(s.companyName) || s.companyName.trim().toUpperCase() === 'GREENREFURB LIMITED' || s.companyName.trim().toLowerCase() === 'greenrefurb') {
      s.companyName = 'Green Refurb';
      dirty = true;
    }
    if (s.email && /limited/i.test(s.email)) {
      s.email = 'info@greenrefurb.site';
      dirty = true;
    }
    if (s.footerText && /limited/i.test(s.footerText)) {
      s.footerText = s.footerText.replace(/greenrefurb\s*limited/gi, 'Green Refurb').replace(/greenrefurb/gi, 'Green Refurb');
      dirty = true;
    }
    if (s.copyrightText && /limited/i.test(s.copyrightText)) {
      s.copyrightText = s.copyrightText.replace(/greenrefurb\s*limited/gi, 'Green Refurb');
      dirty = true;
    }
    if (dirty) {
      try {
        localStorage.setItem(DB_PREFIX + 'settings', JSON.stringify(s));
      } catch (e) {
        console.warn('Could not persist sanitized settings', e);
      }
    }
    return s;
  }

  saveSettings(settings: SiteSettings): void {
    const cleanSettings: SiteSettings = {
      ...settings,
      companyName: (!settings.companyName || /limited/i.test(settings.companyName)) ? 'Green Refurb' : settings.companyName,
      email: (settings.email && /limited/i.test(settings.email)) ? 'info@greenrefurb.site' : settings.email,
      footerText: settings.footerText ? settings.footerText.replace(/greenrefurb\s*limited/gi, 'Green Refurb') : settings.footerText,
      copyrightText: settings.copyrightText ? settings.copyrightText.replace(/greenrefurb\s*limited/gi, 'Green Refurb') : settings.copyrightText
    };
    this.setItem('settings', cleanSettings);
    firestoreSync.saveSettings(cleanSettings).catch(err => console.warn('[FirestoreSync] saveSettings error', err));
  }

  // --- Homepage Content ---
  getHomepage(): HomepageContent {
    return this.getItem<HomepageContent>('homepage', INITIAL_HOMEPAGE);
  }

  saveHomepage(content: HomepageContent): void {
    this.setItem('homepage', content);
    firestoreSync.saveHomepage(content).catch(err => console.warn('[FirestoreSync] saveHomepage error', err));
  }

  // --- Team ---
  getTeam(): TeamMember[] {
    return this.getItem<TeamMember[]>('team', INITIAL_TEAM);
  }

  saveTeam(team: TeamMember[]): void {
    this.setItem('team', team);
  }

  // --- SEO ---
  getAllSEO(): PageSEO[] {
    return this.getItem<PageSEO[]>('seo', INITIAL_SEO);
  }

  getSEO(path: string): PageSEO | undefined {
    return this.getAllSEO().find(s => s.path === path);
  }

  saveSEO(seoItem: PageSEO): void {
    const list = this.getAllSEO();
    const idx = list.findIndex(s => s.path === seoItem.path);
    if (idx >= 0) {
      list[idx] = seoItem;
    } else {
      list.push(seoItem);
    }
    this.setItem('seo', list);
    firestoreSync.saveSEO(list).catch(err => console.warn('[FirestoreSync] saveSEO error', err));
  }

  // --- Auth & Admin ---
  getAdminPasswordHash(): string {
    const pass = this.getItem<string>('admin_pass', DEFAULT_ADMIN_PASS);
    // Automatically migrate from old default password to new user-requested password
    if (!pass || pass === 'greenrefurb2026!') {
      this.setItem('admin_pass', DEFAULT_ADMIN_PASS);
      return DEFAULT_ADMIN_PASS;
    }
    return pass;
  }

  login(identifier: string, password: string): { success: boolean; user?: AdminUser; error?: string } {
    const storedPass = this.getAdminPasswordHash();
    const cleanId = identifier.trim().toLowerCase();
    if ((cleanId === 'admin@greenrefurb.site' || cleanId === 'admin') && password === storedPass) {
      const user = { ...DEFAULT_ADMIN, username: 'admin@greenrefurb.site' };
      this.setItem('session_user', user);
      return { success: true, user };
    }
    return { success: false, error: 'Invalid administrator credentials. Please check your email and password.' };
  }

  logout(): void {
    localStorage.removeItem(DB_PREFIX + 'session_user');
    window.dispatchEvent(new CustomEvent('greenrefurb_db_updated', { detail: { key: 'session_user' } }));
  }

  getCurrentUser(): AdminUser | null {
    return this.getItem<AdminUser | null>('session_user', null);
  }

  changeAdminPassword(oldPass: string, newPass: string): { success: boolean; error?: string } {
    const current = this.getAdminPasswordHash();
    if (oldPass !== current) {
      return { success: false, error: 'Current password does not match.' };
    }
    if (newPass.length < 6) {
      return { success: false, error: 'New password must be at least 6 characters.' };
    }
    this.setItem('admin_pass', newPass);
    return { success: true };
  }

  // --- Database Utility ---
  resetAll(): void {
    Object.keys(localStorage)
      .filter(k => k.startsWith(DB_PREFIX))
      .forEach(k => localStorage.removeItem(k));
    window.dispatchEvent(new CustomEvent('greenrefurb_db_updated', { detail: { key: 'all' } }));
  }

  exportBackup(): string {
    const data: Record<string, unknown> = {};
    Object.keys(localStorage)
      .filter(k => k.startsWith(DB_PREFIX))
      .forEach(k => {
        const sub = k.replace(DB_PREFIX, '');
        try {
          data[sub] = JSON.parse(localStorage.getItem(k) || '');
        } catch {
          data[sub] = localStorage.getItem(k);
        }
      });
    return JSON.stringify(data, null, 2);
  }

  importBackup(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      Object.entries(parsed).forEach(([key, val]) => {
        localStorage.setItem(DB_PREFIX + key, JSON.stringify(val));
      });
      window.dispatchEvent(new CustomEvent('greenrefurb_db_updated', { detail: { key: 'all' } }));
      return true;
    } catch (e) {
      console.error('Import failed', e);
      return false;
    }
  }
}

export const db = new LocalDatabase();
