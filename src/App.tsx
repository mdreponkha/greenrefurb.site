import React from 'react';
import { AppContextProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { QuoteModal } from './components/QuoteModal';
import { Lightbox } from './components/Lightbox';
import { SEOHead } from './components/SEOHead';

// Public Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { CustomInteriorPage } from './pages/CustomInteriorPage';
import { ContactPage } from './pages/ContactPage';
import { CommercialPaintingPage } from './pages/CommercialPaintingPage';
import { ResidentialPaintingPage } from './pages/ResidentialPaintingPage';
import { CarpentryElectricPlumbingPage } from './pages/CarpentryElectricPlumbingPage';
import { CommercialWorkPage } from './pages/CommercialWorkPage';
import { ResidentialWorkPage } from './pages/ResidentialWorkPage';
import { CustomWardrobesPage } from './pages/CustomWardrobesPage';
import { KitchenInstallationPage } from './pages/KitchenInstallationPage';

// Admin Pages
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminLogin } from './pages/admin/AdminLogin';

const MainContent: React.FC = () => {
  const { currentPath, isAdminAuthenticated, navigate, settings } = useApp();

  // Dynamically update document favicon if configured
  React.useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    if (settings.faviconUrl && settings.faviconUrl.trim() !== '') {
      link.href = settings.faviconUrl;
    } else {
      link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2246%22 fill=%22%23315C3A%22/><text font-size=%2255%22 font-family=%22system-ui,sans-serif%22 font-weight=%22bold%22 fill=%22white%22 x=%2228%22 y=%2268%22>G</text></svg>';
    }
  }, [settings.faviconUrl]);

  // Admin routing
  if (currentPath === '/admin' || currentPath.startsWith('/admin/')) {
    if (!isAdminAuthenticated) {
      return <AdminLogin />;
    }
    return <AdminLayout />;
  }

  // Public routing
  const renderPublicPage = () => {
    if (currentPath === '/') {
      return <HomePage />;
    }
    // Services requested routes
    if (currentPath === '/services/commercial-painting' || currentPath === '/commercial-painting') {
      return <CommercialPaintingPage />;
    }
    if (currentPath === '/services/residential-painting' || currentPath === '/residential-painting') {
      return <ResidentialPaintingPage />;
    }
    if (currentPath === '/services/carpentry-electric-plumbing' || currentPath === '/carpentry-electric-plumbing') {
      return <CarpentryElectricPlumbingPage />;
    }
    // Our Work requested routes
    if (currentPath === '/our-work/commercial' || currentPath === '/commercial') {
      return <CommercialWorkPage />;
    }
    if (currentPath === '/our-work/residential' || currentPath === '/residential') {
      return <ResidentialWorkPage />;
    }
    // Custom Interior Solutions requested routes
    if (currentPath === '/custom-interior/custom-wardrobes' || currentPath === '/custom-wardrobes' || currentPath === '/services/custom-wardrobes' || currentPath === '/services/bespoke-wardrobes') {
      return <CustomWardrobesPage />;
    }
    if (currentPath === '/custom-interior/kitchen-installation' || currentPath === '/kitchen-installation' || currentPath === '/services/kitchen-installation') {
      return <KitchenInstallationPage />;
    }
    if (currentPath === '/about') {
      return <AboutPage />;
    }
    if (currentPath === '/services') {
      return <ServicesPage />;
    }
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').split('?')[0].split('#')[0];
      return <ServiceDetailPage slug={slug} />;
    }
    if (currentPath === '/our-work') {
      return <OurWorkPage />;
    }
    if (currentPath === '/custom-interior-solutions') {
      return <CustomInteriorPage />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // Default fallback (404 Page)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 text-center">
        <h2 className="text-4xl font-extrabold text-[#202820] mb-3">404 - Page Not Found</h2>
        <p className="text-stone-600 mb-8 max-w-md">
          The requested page could not be located. Explore our services or return to the Green Refurb homepage.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3.5 bg-[#315C3A] text-white rounded-full font-bold text-sm hover:bg-[#202820] transition-colors"
        >
          Return to Homepage
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF8] text-[#202820] selection:bg-[#EAF5EC] selection:text-[#315C3A]">
      <SEOHead />
      <Header />
      <main className="flex-1">
        {renderPublicPage()}
      </main>
      <Footer />
      <FloatingActions />
      <QuoteModal />
      <Lightbox />
    </div>
  );
};

export default function App() {
  return (
    <AppContextProvider>
      <MainContent />
    </AppContextProvider>
  );
}
