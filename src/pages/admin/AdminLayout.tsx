import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AdminDashboard } from './AdminDashboard';
import { AdminServices } from './AdminServices';
import { AdminProjects } from './AdminProjects';
import { AdminGallery } from './AdminGallery';
import { AdminTestimonials } from './AdminTestimonials';
import { AdminEnquiries } from './AdminEnquiries';
import { AdminHomepage } from './AdminHomepage';
import { AdminSettings } from './AdminSettings';
import { AdminSEO } from './AdminSEO';
import { AdminUsers } from './AdminUsers';
import {
  LayoutDashboard,
  Home,
  Wrench,
  Briefcase,
  Image,
  Star,
  Inbox,
  Settings,
  Globe,
  KeyRound,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

export const AdminLayout: React.FC = () => {
  const { logout, navigate, enquiries, settings, isFirebaseConnected } = useApp();
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const newEnquiriesCount = enquiries.filter(e => e.status === 'New').length;

  const navItems = [
    {
      group: 'OVERVIEW',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard }
      ]
    },
    {
      group: 'WEBSITE CONTENT',
      items: [
        { id: 'homepage', label: 'Homepage Editor', icon: Home },
        { id: 'services', label: 'Services (14)', icon: Wrench },
        { id: 'projects', label: 'Our Work / Projects', icon: Briefcase },
        { id: 'gallery', label: 'Media Library', icon: Image },
        { id: 'testimonials', label: 'Testimonials', icon: Star }
      ]
    },
    {
      group: 'LEADS & CRM',
      items: [
        {
          id: 'enquiries',
          label: 'Quote Inquiries',
          icon: Inbox,
          badge: newEnquiriesCount > 0 ? `${newEnquiriesCount} New` : undefined
        }
      ]
    },
    {
      group: 'SETTINGS & SYSTEM',
      items: [
        { id: 'settings', label: 'Logo, Favicon & Brand', icon: Settings },
        { id: 'seo', label: 'SEO & Sitemap', icon: Globe },
        { id: 'users', label: 'Admin Security', icon: KeyRound }
      ]
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard onNavigateTab={tab => setActiveTab(tab)} />;
      case 'services':
        return <AdminServices />;
      case 'projects':
        return <AdminProjects />;
      case 'gallery':
        return <AdminGallery />;
      case 'testimonials':
        return <AdminTestimonials />;
      case 'enquiries':
        return <AdminEnquiries />;
      case 'homepage':
        return <AdminHomepage />;
      case 'settings':
        return <AdminSettings />;
      case 'seo':
        return <AdminSEO />;
      case 'users':
        return <AdminUsers />;
      default:
        return <AdminDashboard onNavigateTab={tab => setActiveTab(tab)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] flex">
      {/* Mobile Drawer Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#202820] text-white flex flex-col justify-between transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Logo & Brand */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {settings.logoUrl ? (
                <img
                  src={settings.logoUrl}
                  alt={settings.companyName}
                  className="h-8 max-w-[120px] object-contain brightness-110"
                />
              ) : (
                <div className="w-8 h-8 rounded-xl bg-[#6FAF7B] text-white flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
              )}
              <div>
                <span className="font-extrabold text-sm tracking-tight text-white block">
                  {settings.companyName || 'Green Refurb'}
                </span>
                <span className="text-[10px] text-stone-400 block tracking-wider uppercase font-semibold">
                  CMS Control Panel
                </span>
              </div>
            </div>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Groups */}
          <div className="p-4 space-y-6 overflow-y-auto max-h-[calc(100vh-140px)]">
            {navItems.map((group, gIdx) => (
              <div key={gIdx} className="space-y-1">
                <div className="px-3 text-[10px] font-bold text-stone-400 tracking-wider">
                  {group.group}
                </div>
                {group.items.map(item => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#315C3A] text-white'
                          : 'text-stone-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-[#6FAF7B]' : 'text-stone-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="px-2 py-0.5 bg-rose-500 text-white text-[10px] font-bold rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-stone-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-[#6FAF7B]" />
            <span>View Live Website</span>
          </button>

          <button
            onClick={() => logout()}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-rose-300 hover:bg-rose-500/10 hover:text-rose-200 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* MAIN ADMIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-white border-b border-[#DCEBDD] px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="text-xs font-semibold text-stone-400 capitalize">
              Green Refurb Administration •{' '}
              <span className="text-[#315C3A] font-bold capitalize">
                {activeTab}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold ${
              isFirebaseConnected ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isFirebaseConnected ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span>{isFirebaseConnected ? 'Firestore Real-time Active' : 'Local Fallback'}</span>
            </div>

            <button
              onClick={() => navigate('/')}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] hover:bg-[#DCEBDD] transition-colors"
            >
              <span>Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => logout()}
              className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold text-stone-600 hover:bg-stone-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content Body */}
        <main className="p-4 sm:p-8 flex-1 max-w-7xl w-full mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};
