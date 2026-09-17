import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { db } from '../db';
import { firestoreSync } from '../db/firestoreSync';
import {
  ServiceItem,
  ProjectItem,
  GalleryItem,
  TestimonialItem,
  SiteSettings,
  HomepageContent,
  TeamMember,
  ContactEnquiry,
  PageSEO,
  AdminUser
} from '../types';

interface AppContextType {
  // Navigation
  currentPath: string;
  navigate: (path: string) => void;

  // Data
  services: ServiceItem[];
  projects: ProjectItem[];
  gallery: GalleryItem[];
  testimonials: TestimonialItem[];
  settings: SiteSettings;
  homepage: HomepageContent;
  team: TeamMember[];
  enquiries: ContactEnquiry[];
  allSEO: PageSEO[];
  currentUser: AdminUser | null;
  currentAdminUser: AdminUser | null;
  isAdminAuthenticated: boolean;
  isFirebaseConnected: boolean;
  firebaseLastSync: Date | null;

  // Modals & Overlays
  isQuoteModalOpen: boolean;
  openQuoteModal: (serviceTitle?: string) => void;
  closeQuoteModal: () => void;
  quotePreselectedService?: string;

  lightboxUrl: string | null;
  openLightbox: (url: string) => void;
  closeLightbox: () => void;

  // Actions
  saveService: (service: ServiceItem) => void;
  addService: (service: ServiceItem) => void;
  updateService: (service: ServiceItem) => void;
  deleteService: (id: string) => void;
  saveProject: (project: ProjectItem) => void;
  addProject: (project: ProjectItem) => void;
  updateProject: (project: ProjectItem) => void;
  deleteProject: (id: string) => void;
  saveGalleryItem: (item: GalleryItem) => void;
  addGalleryItem: (item: Omit<GalleryItem, 'id' | 'uploadedAt'> & Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;
  saveTestimonial: (item: TestimonialItem) => void;
  addTestimonial: (item: TestimonialItem) => void;
  updateTestimonial: (item: TestimonialItem) => void;
  deleteTestimonial: (id: string) => void;
  saveSettings: (settings: SiteSettings) => void;
  updateSettings: (settings: SiteSettings) => void;
  saveHomepage: (homepage: HomepageContent) => void;
  updateHomepage: (homepage: HomepageContent) => void;
  saveTeam: (team: TeamMember[]) => void;
  saveSEO: (seo: PageSEO) => void;
  updateSEO: (seo: PageSEO) => void;
  addEnquiry: (enquiry: Omit<ContactEnquiry, 'id' | 'createdAt' | 'status'> & Partial<ContactEnquiry>) => ContactEnquiry;
  updateEnquiryStatus: (id: string, status: 'New' | 'Contacted' | 'Completed') => void;
  deleteEnquiry: (id: string) => void;
  login: (u: string, p: string) => { success: boolean; user?: AdminUser; error?: string };
  logout: () => void;
  changePassword: (o: string, n: string) => { success: boolean; error?: string };
  changeAdminPassword: (o: string, n: string) => { success: boolean; error?: string };
  resetDatabase: () => void;
  exportBackup: () => string;
  importBackup: (json: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Routing state based on browser pathname
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // DB States
  const [services, setServices] = useState<ServiceItem[]>(() => db.getServices());
  const [projects, setProjects] = useState<ProjectItem[]>(() => db.getProjects());
  const [gallery, setGallery] = useState<GalleryItem[]>(() => db.getGallery());
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => db.getTestimonials());
  const [settings, setSettings] = useState<SiteSettings>(() => db.getSettings());
  const [homepage, setHomepage] = useState<HomepageContent>(() => db.getHomepage());
  const [team, setTeam] = useState<TeamMember[]>(() => db.getTeam());
  const [enquiries, setEnquiries] = useState<ContactEnquiry[]>(() => db.getEnquiries());
  const [allSEO, setAllSEO] = useState<PageSEO[]>(() => db.getAllSEO());
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(() => db.getCurrentUser());
  const [isFirebaseConnected, setIsFirebaseConnected] = useState<boolean>(true);
  const [firebaseLastSync, setFirebaseLastSync] = useState<Date | null>(() => new Date());

  // Overlays
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string | undefined>(undefined);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  // Sync with window history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Listen to DB updates
  useEffect(() => {
    const handleDbUpdate = () => {
      setServices(db.getServices());
      setProjects(db.getProjects());
      setGallery(db.getGallery());
      setTestimonials(db.getTestimonials());
      setSettings(db.getSettings());
      setHomepage(db.getHomepage());
      setTeam(db.getTeam());
      setEnquiries(db.getEnquiries());
      setAllSEO(db.getAllSEO());
      setCurrentUser(db.getCurrentUser());
    };
    window.addEventListener('greenrefurb_db_updated', handleDbUpdate);
    return () => window.removeEventListener('greenrefurb_db_updated', handleDbUpdate);
  }, []);

  // Real-time Cloud Sync with Firebase Firestore
  useEffect(() => {
    // One-time cleanup to ensure any legacy 'limited' in localStorage is purged
    try {
      const raw = localStorage.getItem('greenrefurb_db_settings');
      if (raw && (/limited/i.test(raw) || /greenrefurb\s*limited/i.test(raw))) {
        const parsed = JSON.parse(raw);
        parsed.companyName = 'Green Refurb';
        if (parsed.email && /limited/i.test(parsed.email)) {
          parsed.email = 'info@greenrefurb.site';
        }
        if (parsed.footerText) {
          parsed.footerText = parsed.footerText.replace(/greenrefurb\s*limited/gi, 'Green Refurb');
        }
        if (parsed.copyrightText) {
          parsed.copyrightText = parsed.copyrightText.replace(/greenrefurb\s*limited/gi, 'Green Refurb');
        }
        localStorage.setItem('greenrefurb_db_settings', JSON.stringify(parsed));
        setSettings(parsed);
        firestoreSync.saveSettings(parsed);
      }
    } catch (e) {
      console.warn('Settings purge error', e);
    }

    const unsubscribe = firestoreSync.subscribeAll({
      onSettings: (newSettings) => {
        const cleanSettings = {
          ...newSettings,
          companyName: (!newSettings.companyName || /limited/i.test(newSettings.companyName)) ? 'Green Refurb' : newSettings.companyName,
          email: (newSettings.email && /limited/i.test(newSettings.email)) ? 'info@greenrefurb.site' : newSettings.email,
          footerText: newSettings.footerText ? newSettings.footerText.replace(/greenrefurb\s*limited/gi, 'Green Refurb') : newSettings.footerText,
          copyrightText: newSettings.copyrightText ? newSettings.copyrightText.replace(/greenrefurb\s*limited/gi, 'Green Refurb') : newSettings.copyrightText
        };
        setSettings(cleanSettings);
        localStorage.setItem('greenrefurb_db_settings', JSON.stringify(cleanSettings));
      },
      onHomepage: (newHomepage) => {
        setHomepage(newHomepage);
        localStorage.setItem('greenrefurb_db_homepage', JSON.stringify(newHomepage));
      },
      onServices: (newServices) => {
        setServices(newServices);
        localStorage.setItem('greenrefurb_db_services', JSON.stringify(newServices));
      },
      onProjects: (newProjects) => {
        setProjects(newProjects);
        localStorage.setItem('greenrefurb_db_projects', JSON.stringify(newProjects));
      },
      onGallery: (newGallery) => {
        setGallery(newGallery);
        localStorage.setItem('greenrefurb_db_gallery', JSON.stringify(newGallery));
      },
      onTestimonials: (newTestimonials) => {
        setTestimonials(newTestimonials);
        localStorage.setItem('greenrefurb_db_testimonials', JSON.stringify(newTestimonials));
      },
      onEnquiries: (newEnquiries) => {
        setEnquiries(newEnquiries);
        localStorage.setItem('greenrefurb_db_enquiries', JSON.stringify(newEnquiries));
      },
      onSEO: (newSEO) => {
        setAllSEO(newSEO);
        localStorage.setItem('greenrefurb_db_seo', JSON.stringify(newSEO));
      },
      onConnectionChange: (connected) => {
        setIsFirebaseConnected(connected);
        if (connected) {
          setFirebaseLastSync(new Date());
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openQuoteModal = (serviceTitle?: string) => {
    setQuotePreselectedService(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuotePreselectedService(undefined);
  };

  const openLightbox = (url: string) => setLightboxUrl(url);
  const closeLightbox = () => setLightboxUrl(null);

  const saveService = (s: ServiceItem) => db.saveService(s);
  const deleteService = (id: string) => db.deleteService(id);

  const saveProject = (p: ProjectItem) => db.saveProject(p);
  const deleteProject = (id: string) => db.deleteProject(id);

  const saveGalleryItem = (g: GalleryItem) => db.saveGalleryItem(g);
  const deleteGalleryItem = (id: string) => db.deleteGalleryItem(id);

  const saveTestimonial = (t: TestimonialItem) => db.saveTestimonial(t);
  const deleteTestimonial = (id: string) => db.deleteTestimonial(id);

  const saveSettings = (s: SiteSettings) => db.saveSettings(s);
  const saveHomepage = (h: HomepageContent) => db.saveHomepage(h);
  const saveTeam = (t: TeamMember[]) => db.saveTeam(t);
  const saveSEO = (s: PageSEO) => db.saveSEO(s);

  const addEnquiry = (enquiry: Omit<ContactEnquiry, 'id' | 'createdAt' | 'status'> & Partial<ContactEnquiry>) => {
    return db.addEnquiry(enquiry);
  };

  const updateEnquiryStatus = (id: string, status: 'New' | 'Contacted' | 'Completed') => {
    db.updateEnquiryStatus(id, status);
  };

  const deleteEnquiry = (id: string) => db.deleteEnquiry(id);

  const login = (u: string, p: string) => db.login(u, p);
  const logout = () => db.logout();
  const changePassword = (o: string, n: string) => db.changeAdminPassword(o, n);

  const resetDatabase = () => db.resetAll();
  const exportBackup = () => db.exportBackup();
  const importBackup = (json: string) => db.importBackup(json);

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigate,
        services,
        projects,
        gallery,
        testimonials,
        settings,
        homepage,
        team,
        enquiries,
        allSEO,
        currentUser,
        currentAdminUser: currentUser,
        isAdminAuthenticated: !!currentUser,
        isFirebaseConnected,
        firebaseLastSync,
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        quotePreselectedService,
        lightboxUrl,
        openLightbox,
        closeLightbox,
        saveService,
        addService: saveService,
        updateService: saveService,
        deleteService,
        saveProject,
        addProject: saveProject,
        updateProject: saveProject,
        deleteProject,
        saveGalleryItem,
        addGalleryItem: (item) => db.saveGalleryItem({
          ...item,
          id: item.id || `gal-${Date.now()}`,
          uploadedAt: item.uploadedAt || new Date().toISOString()
        } as GalleryItem),
        deleteGalleryItem,
        saveTestimonial,
        addTestimonial: saveTestimonial,
        updateTestimonial: saveTestimonial,
        deleteTestimonial,
        saveSettings,
        updateSettings: saveSettings,
        saveHomepage,
        updateHomepage: saveHomepage,
        saveTeam,
        saveSEO,
        updateSEO: saveSEO,
        addEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        login,
        logout,
        changePassword,
        changeAdminPassword: changePassword,
        resetDatabase,
        exportBackup,
        importBackup
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppContextProvider = AppProvider;

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
