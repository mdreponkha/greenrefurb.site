import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Clock,
  MapPin,
  Sparkles,
  ShieldCheck,
  Lock
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate, settings, openQuoteModal, services } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);
  const [interiorsDropdown, setInteriorsDropdown] = useState(false);

  // Mobile submenu toggles
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const [mobileInteriorsOpen, setMobileInteriorsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setWorkDropdown(false);
    setInteriorsDropdown(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const displayCompanyName = (!settings.companyName || /limited/i.test(settings.companyName))
    ? 'Green Refurb'
    : settings.companyName;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main navigation bar */}
      <div
        className={`w-full bg-white/95 backdrop-blur-md border-b border-[#DCEBDD]/70 transition-all duration-200 ${
          isScrolled ? 'py-3 shadow-sm' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2.5 group text-left cursor-pointer"
          >
            {settings.logoUrl ? (
              <img
                src={settings.logoUrl}
                alt={displayCompanyName}
                className="h-10 max-w-[200px] object-contain group-hover:opacity-90 transition-opacity"
              />
            ) : (
              <>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6FAF7B] to-[#315C3A] flex items-center justify-center shadow-xs text-white group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block text-xl font-bold tracking-tight text-[#202820] leading-none">
                    {displayCompanyName}
                  </span>
                  <span className="block text-[11px] font-medium tracking-wide text-[#6FAF7B] uppercase mt-0.5">
                    {settings.tagline || 'Painting & Property Refurbishment'}
                  </span>
                </div>
              </>
            )}
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#202820]">
            <button
              onClick={() => handleLinkClick('/')}
              className={`transition-colors cursor-pointer py-1 ${
                isActive('/') && currentPath === '/'
                  ? 'text-[#315C3A] font-semibold border-b-2 border-[#6FAF7B]'
                  : 'hover:text-[#315C3A]'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                onClick={() => handleLinkClick('/services/commercial-painting')}
                className={`flex items-center gap-1 cursor-pointer py-2 transition-colors ${
                  currentPath.includes('/services') || currentPath.includes('-painting') || currentPath.includes('carpentry')
                    ? 'text-[#315C3A] font-semibold'
                    : 'hover:text-[#315C3A]'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdown ? 'rotate-180 text-[#315C3A]' : ''
                  }`}
                />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-[#DCEBDD] p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <button
                    onClick={() => handleLinkClick('/services/commercial-painting')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#EAF5EC] text-xs font-medium text-[#202820] transition-colors cursor-pointer block group"
                  >
                    <span className="font-semibold block text-stone-800 group-hover:text-[#315C3A]">Commercial Painting</span>
                    <span className="text-stone-500 text-[11px]">Offices, retail, and business properties</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/residential-painting')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#EAF5EC] text-xs font-medium text-[#202820] transition-colors cursor-pointer block group"
                  >
                    <span className="font-semibold block text-stone-800 group-hover:text-[#315C3A]">Residential Painting</span>
                    <span className="text-stone-500 text-[11px]">Homes, apartments, and full renovations</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/carpentry-electric-plumbing')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#EAF5EC] text-xs font-medium text-[#202820] transition-colors cursor-pointer block group"
                  >
                    <span className="font-semibold block text-stone-800 group-hover:text-[#315C3A]">Carpentry, Electric &amp; Plumbing</span>
                    <span className="text-stone-500 text-[11px]">Bespoke joinery, lighting &amp; plumbing services</span>
                  </button>
                </div>
              )}
            </div>

            {/* Our Work Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWorkDropdown(true)}
              onMouseLeave={() => setWorkDropdown(false)}
            >
              <button
                onClick={() => handleLinkClick('/our-work/commercial')}
                className={`flex items-center gap-1 cursor-pointer py-2 transition-colors ${
                  currentPath.includes('/our-work') || currentPath === '/commercial' || currentPath === '/residential'
                    ? 'text-[#315C3A] font-semibold'
                    : 'hover:text-[#315C3A]'
                }`}
              >
                <span>Our Work</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    workDropdown ? 'rotate-180 text-[#315C3A]' : ''
                  }`}
                />
              </button>

              {workDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-[#DCEBDD] p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <button
                    onClick={() => handleLinkClick('/our-work/commercial')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#EAF5EC] text-xs font-medium text-[#202820] transition-colors cursor-pointer block group"
                  >
                    <span className="font-semibold block text-stone-800 group-hover:text-[#315C3A]">Commercial</span>
                    <span className="text-stone-500 text-[11px]">Offices, hospitality &amp; business projects</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('/our-work/residential')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#EAF5EC] text-xs font-medium text-[#202820] transition-colors cursor-pointer block group"
                  >
                    <span className="font-semibold block text-stone-800 group-hover:text-[#315C3A]">Residential</span>
                    <span className="text-stone-500 text-[11px]">Homes, living spaces &amp; renovations</span>
                  </button>
                </div>
              )}
            </div>

            {/* Custom Interior Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setInteriorsDropdown(true)}
              onMouseLeave={() => setInteriorsDropdown(false)}
            >
              <button
                onClick={() => handleLinkClick('/custom-interior/custom-wardrobes')}
                className={`flex items-center gap-1 cursor-pointer py-2 transition-colors ${
                  currentPath.includes('/custom-interior') || currentPath.includes('wardrobe') || currentPath.includes('kitchen')
                    ? 'text-[#315C3A] font-semibold'
                    : 'hover:text-[#315C3A]'
                }`}
              >
                <span>Custom Interior Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    interiorsDropdown ? 'rotate-180 text-[#315C3A]' : ''
                  }`}
                />
              </button>

              {interiorsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-[#DCEBDD] p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <button
                    onClick={() => handleLinkClick('/custom-interior/custom-wardrobes')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#EAF5EC] text-xs font-medium text-[#202820] transition-colors cursor-pointer block group"
                  >
                    <span className="font-semibold block text-stone-800 group-hover:text-[#315C3A]">Custom Wardrobes</span>
                    <span className="text-stone-500 text-[11px]">Bespoke alcove, walk-in &amp; storage wardrobes</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('/custom-interior/kitchen-installation')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-[#EAF5EC] text-xs font-medium text-[#202820] transition-colors cursor-pointer block group"
                  >
                    <span className="font-semibold block text-stone-800 group-hover:text-[#315C3A]">Kitchen Installation</span>
                    <span className="text-stone-500 text-[11px]">Complete luxury fitted kitchens &amp; cabinetry</span>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="bg-[#315C3A] hover:bg-[#202820] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              Get a Quote
            </button>

            {/* Mobile hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Off-Canvas Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#6FAF7B] text-white flex items-center justify-center font-bold">
                    GR
                  </div>
                  <span className="font-bold text-stone-900 text-lg">Green Refurb</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleLinkClick('/')}
                  className={`text-left px-3 py-2.5 rounded-xl font-semibold text-sm ${
                    currentPath === '/' ? 'bg-[#EAF5EC] text-[#315C3A]' : 'text-stone-700'
                  }`}
                >
                  Home
                </button>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-semibold text-sm text-stone-700 hover:bg-stone-50"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 pr-1 py-1 space-y-1">
                      <button
                        onClick={() => handleLinkClick('/services/commercial-painting')}
                        className="w-full text-left text-xs font-semibold text-stone-700 py-2 px-2 hover:bg-[#EAF5EC] hover:text-[#315C3A] rounded-lg block"
                      >
                        Commercial Painting
                      </button>
                      <button
                        onClick={() => handleLinkClick('/services/residential-painting')}
                        className="w-full text-left text-xs font-semibold text-stone-700 py-2 px-2 hover:bg-[#EAF5EC] hover:text-[#315C3A] rounded-lg block"
                      >
                        Residential Painting
                      </button>
                      <button
                        onClick={() => handleLinkClick('/services/carpentry-electric-plumbing')}
                        className="w-full text-left text-xs font-semibold text-stone-700 py-2 px-2 hover:bg-[#EAF5EC] hover:text-[#315C3A] rounded-lg block"
                      >
                        Carpentry, Electric &amp; Plumbing
                      </button>
                    </div>
                  )}
                </div>

                {/* Mobile Our Work Accordion */}
                <div>
                  <button
                    onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-semibold text-sm text-stone-700 hover:bg-stone-50"
                  >
                    <span>Our Work</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileWorkOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileWorkOpen && (
                    <div className="pl-4 pr-1 py-1 space-y-1">
                      <button
                        onClick={() => handleLinkClick('/our-work/commercial')}
                        className="w-full text-left text-xs font-semibold text-stone-700 py-2 px-2 hover:bg-[#EAF5EC] hover:text-[#315C3A] rounded-lg block"
                      >
                        Commercial
                      </button>
                      <button
                        onClick={() => handleLinkClick('/our-work/residential')}
                        className="w-full text-left text-xs font-semibold text-stone-700 py-2 px-2 hover:bg-[#EAF5EC] hover:text-[#315C3A] rounded-lg block"
                      >
                        Residential
                      </button>
                    </div>
                  )}
                </div>

                {/* Mobile Custom Interiors Accordion */}
                <div>
                  <button
                    onClick={() => setMobileInteriorsOpen(!mobileInteriorsOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-semibold text-sm text-stone-700 hover:bg-stone-50"
                  >
                    <span>Custom Interior Solutions</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileInteriorsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileInteriorsOpen && (
                    <div className="pl-4 pr-1 py-1 space-y-1">
                      <button
                        onClick={() => handleLinkClick('/custom-interior/custom-wardrobes')}
                        className="w-full text-left text-xs font-semibold text-stone-700 py-2 px-2 hover:bg-[#EAF5EC] hover:text-[#315C3A] rounded-lg block"
                      >
                        Custom Wardrobes
                      </button>
                      <button
                        onClick={() => handleLinkClick('/custom-interior/kitchen-installation')}
                        className="w-full text-left text-xs font-semibold text-stone-700 py-2 px-2 hover:bg-[#EAF5EC] hover:text-[#315C3A] rounded-lg block"
                      >
                        Kitchen Installation
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleLinkClick('/admin')}
                  className="text-left px-3 py-2.5 rounded-xl text-xs font-semibold text-stone-400 hover:text-[#315C3A] flex items-center gap-1.5 mt-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Admin CMS Portal
                </button>
              </div>
            </div>

            {/* Mobile Drawer Bottom Contact */}
            <div className="pt-6 border-t border-stone-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3 bg-[#315C3A] text-white rounded-xl font-semibold text-sm shadow-sm"
              >
                Request Free Quote
              </button>
              <a
                href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 bg-[#EAF5EC] text-[#315C3A] rounded-xl font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call {settings.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
