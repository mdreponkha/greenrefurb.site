import {
  firestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot
} from './firebase';
import {
  SiteSettings,
  HomepageContent,
  ServiceItem,
  ProjectItem,
  GalleryItem,
  TestimonialItem,
  ContactEnquiry,
  PageSEO
} from '../types';
import {
  INITIAL_SETTINGS,
  INITIAL_HOMEPAGE,
  INITIAL_SERVICES,
  INITIAL_PROJECTS,
  INITIAL_GALLERY,
  INITIAL_TESTIMONIALS,
  INITIAL_ENQUIRIES,
  INITIAL_SEO
} from '../data/initialData';

const COLLECTION_NAME = 'site_content';

// Helper to write to Firestore safely without crashing
async function safeSetDoc(docId: string, data: Record<string, unknown>) {
  try {
    const docRef = doc(firestore, COLLECTION_NAME, docId);
    await setDoc(docRef, data, { merge: true });
    return true;
  } catch (err) {
    console.warn(`[Firebase] Failed to write doc ${docId}:`, err);
    return false;
  }
}

export const firestoreSync = {
  // --- Push updates to Firestore (called on admin edit or user quote submission) ---
  saveSettings: async (settings: SiteSettings) => {
    return safeSetDoc('settings', { data: settings, updatedAt: new Date().toISOString() });
  },

  saveHomepage: async (homepage: HomepageContent) => {
    return safeSetDoc('homepage', { data: homepage, updatedAt: new Date().toISOString() });
  },

  saveServices: async (services: ServiceItem[]) => {
    return safeSetDoc('services', { list: services, updatedAt: new Date().toISOString() });
  },

  saveProjects: async (projects: ProjectItem[]) => {
    return safeSetDoc('projects', { list: projects, updatedAt: new Date().toISOString() });
  },

  saveGallery: async (gallery: GalleryItem[]) => {
    return safeSetDoc('gallery', { list: gallery, updatedAt: new Date().toISOString() });
  },

  saveTestimonials: async (testimonials: TestimonialItem[]) => {
    return safeSetDoc('testimonials', { list: testimonials, updatedAt: new Date().toISOString() });
  },

  saveEnquiries: async (enquiries: ContactEnquiry[]) => {
    return safeSetDoc('enquiries', { list: enquiries, updatedAt: new Date().toISOString() });
  },

  saveSEO: async (seo: PageSEO[]) => {
    return safeSetDoc('seo', { list: seo, updatedAt: new Date().toISOString() });
  },

  // --- Real-time Listeners across the globe ---
  subscribeAll: (callbacks: {
    onSettings?: (s: SiteSettings) => void;
    onHomepage?: (h: HomepageContent) => void;
    onServices?: (s: ServiceItem[]) => void;
    onProjects?: (p: ProjectItem[]) => void;
    onGallery?: (g: GalleryItem[]) => void;
    onTestimonials?: (t: TestimonialItem[]) => void;
    onEnquiries?: (e: ContactEnquiry[]) => void;
    onSEO?: (seo: PageSEO[]) => void;
    onConnectionChange?: (connected: boolean) => void;
  }) => {
    const unsubscribers: (() => void)[] = [];

    // 1. Settings Listener
    try {
      const unsub = onSnapshot(doc(firestore, COLLECTION_NAME, 'settings'), snap => {
        if (snap.exists()) {
          const val = snap.data();
          if (val?.data && callbacks.onSettings) {
            let incoming = val.data as SiteSettings;
            let dirty = false;
            if (!incoming.companyName || /limited/i.test(incoming.companyName) || incoming.companyName.trim().toUpperCase() === 'GREENREFURB LIMITED' || incoming.companyName.trim().toLowerCase() === 'greenrefurb') {
              incoming = { ...incoming, companyName: 'Green Refurb' };
              dirty = true;
            }
            if (incoming.email && /limited/i.test(incoming.email)) {
              incoming = { ...incoming, email: 'info@greenrefurb.site' };
              dirty = true;
            }
            if (incoming.footerText && /limited/i.test(incoming.footerText)) {
              incoming = { ...incoming, footerText: incoming.footerText.replace(/greenrefurb\s*limited/gi, 'Green Refurb').replace(/greenrefurb/gi, 'Green Refurb') };
              dirty = true;
            }
            if (incoming.copyrightText && /limited/i.test(incoming.copyrightText)) {
              incoming = { ...incoming, copyrightText: incoming.copyrightText.replace(/greenrefurb\s*limited/gi, 'Green Refurb') };
              dirty = true;
            }
            if (dirty) {
              safeSetDoc('settings', { data: incoming, updatedAt: new Date().toISOString() });
            }
            callbacks.onSettings(incoming);
          }
        } else {
          // Initialize in Firestore if empty
          safeSetDoc('settings', { data: INITIAL_SETTINGS, updatedAt: new Date().toISOString() });
        }
        callbacks.onConnectionChange?.(true);
      }, err => {
        console.warn('[Firebase] Settings subscription error:', err);
        callbacks.onConnectionChange?.(false);
      });
      unsubscribers.push(unsub);
    } catch (e) {
      console.warn('[Firebase] Could not subscribe to settings', e);
    }

    // 2. Homepage Listener
    try {
      const unsub = onSnapshot(doc(firestore, COLLECTION_NAME, 'homepage'), snap => {
        if (snap.exists()) {
          const val = snap.data();
          if (val?.data && callbacks.onHomepage) {
            callbacks.onHomepage(val.data as HomepageContent);
          }
        } else {
          safeSetDoc('homepage', { data: INITIAL_HOMEPAGE, updatedAt: new Date().toISOString() });
        }
      }, err => console.warn('[Firebase] Homepage subscription error:', err));
      unsubscribers.push(unsub);
    } catch (e) {
      console.warn('[Firebase] Could not subscribe to homepage', e);
    }

    // 3. Services Listener
    try {
      const unsub = onSnapshot(doc(firestore, COLLECTION_NAME, 'services'), snap => {
        if (snap.exists()) {
          const val = snap.data();
          if (Array.isArray(val?.list) && callbacks.onServices) {
            callbacks.onServices(val.list as ServiceItem[]);
          }
        } else {
          safeSetDoc('services', { list: INITIAL_SERVICES, updatedAt: new Date().toISOString() });
        }
      }, err => console.warn('[Firebase] Services subscription error:', err));
      unsubscribers.push(unsub);
    } catch (e) {
      console.warn('[Firebase] Could not subscribe to services', e);
    }

    // 4. Projects Listener
    try {
      const unsub = onSnapshot(doc(firestore, COLLECTION_NAME, 'projects'), snap => {
        if (snap.exists()) {
          const val = snap.data();
          if (Array.isArray(val?.list) && callbacks.onProjects) {
            callbacks.onProjects(val.list as ProjectItem[]);
          }
        } else {
          safeSetDoc('projects', { list: INITIAL_PROJECTS, updatedAt: new Date().toISOString() });
        }
      }, err => console.warn('[Firebase] Projects subscription error:', err));
      unsubscribers.push(unsub);
    } catch (e) {
      console.warn('[Firebase] Could not subscribe to projects', e);
    }

    // 5. Gallery Listener
    try {
      const unsub = onSnapshot(doc(firestore, COLLECTION_NAME, 'gallery'), snap => {
        if (snap.exists()) {
          const val = snap.data();
          if (Array.isArray(val?.list) && callbacks.onGallery) {
            callbacks.onGallery(val.list as GalleryItem[]);
          }
        } else {
          safeSetDoc('gallery', { list: INITIAL_GALLERY, updatedAt: new Date().toISOString() });
        }
      }, err => console.warn('[Firebase] Gallery subscription error:', err));
      unsubscribers.push(unsub);
    } catch (e) {
      console.warn('[Firebase] Could not subscribe to gallery', e);
    }

    // 6. Testimonials Listener
    try {
      const unsub = onSnapshot(doc(firestore, COLLECTION_NAME, 'testimonials'), snap => {
        if (snap.exists()) {
          const val = snap.data();
          if (Array.isArray(val?.list) && callbacks.onTestimonials) {
            callbacks.onTestimonials(val.list as TestimonialItem[]);
          }
        } else {
          safeSetDoc('testimonials', { list: INITIAL_TESTIMONIALS, updatedAt: new Date().toISOString() });
        }
      }, err => console.warn('[Firebase] Testimonials subscription error:', err));
      unsubscribers.push(unsub);
    } catch (e) {
      console.warn('[Firebase] Could not subscribe to testimonials', e);
    }

    // 7. Enquiries Listener
    try {
      const unsub = onSnapshot(doc(firestore, COLLECTION_NAME, 'enquiries'), snap => {
        if (snap.exists()) {
          const val = snap.data();
          if (Array.isArray(val?.list) && callbacks.onEnquiries) {
            callbacks.onEnquiries(val.list as ContactEnquiry[]);
          }
        } else {
          safeSetDoc('enquiries', { list: INITIAL_ENQUIRIES, updatedAt: new Date().toISOString() });
        }
      }, err => console.warn('[Firebase] Enquiries subscription error:', err));
      unsubscribers.push(unsub);
    } catch (e) {
      console.warn('[Firebase] Could not subscribe to enquiries', e);
    }

    // 8. SEO Listener
    try {
      const unsub = onSnapshot(doc(firestore, COLLECTION_NAME, 'seo'), snap => {
        if (snap.exists()) {
          const val = snap.data();
          if (Array.isArray(val?.list) && callbacks.onSEO) {
            callbacks.onSEO(val.list as PageSEO[]);
          }
        } else {
          safeSetDoc('seo', { list: INITIAL_SEO, updatedAt: new Date().toISOString() });
        }
      }, err => console.warn('[Firebase] SEO subscription error:', err));
      unsubscribers.push(unsub);
    } catch (e) {
      console.warn('[Firebase] Could not subscribe to seo', e);
    }

    return () => {
      unsubscribers.forEach(u => {
        try {
          u();
        } catch {}
      });
    };
  }
};
