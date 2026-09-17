import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Check,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  BarChart3,
  Cloud,
  RefreshCw,
  Image as ImageIcon,
  Upload,
  Globe,
  Sparkles
} from 'lucide-react';
import { firestoreSync } from '../../db/firestoreSync';

import { compressImageFile } from '../../utils/imageCompressor';

export const AdminSettings: React.FC = () => {
  const { settings, updateSettings, isFirebaseConnected, firebaseLastSync, services, projects, gallery, testimonials, enquiries, allSEO, homepage } = useApp();
  const [formData, setFormData] = useState({ ...settings });
  const [saved, setSaved] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  // Sync with context if settings loaded from Firestore
  React.useEffect(() => {
    if (settings) {
      setFormData(prev => ({ ...settings, ...prev }));
    }
  }, [settings]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleLogoFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressed = await compressImageFile(file, { maxWidth: 600, maxHeight: 600, quality: 0.85 });
        setFormData(prev => ({ ...prev, logoUrl: compressed }));
      } catch (err) {
        console.error('Failed to compress logo', err);
      }
    }
  };

  const handleFaviconFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressed = await compressImageFile(file, { maxWidth: 128, maxHeight: 128, quality: 0.85 });
        setFormData(prev => ({ ...prev, faviconUrl: compressed }));
      } catch (err) {
        console.error('Failed to compress favicon', err);
      }
    }
  };

  const handleForceCloudSync = async () => {
    setIsSyncing(true);
    setSyncMessage(null);
    try {
      await Promise.all([
        firestoreSync.saveSettings(formData),
        firestoreSync.saveHomepage(homepage),
        firestoreSync.saveServices(services),
        firestoreSync.saveProjects(projects),
        firestoreSync.saveGallery(gallery),
        firestoreSync.saveTestimonials(testimonials),
        firestoreSync.saveEnquiries(enquiries),
        firestoreSync.saveSEO(allSEO)
      ]);
      setSyncMessage('All database content synced with Google Firebase Firestore successfully!');
    } catch (err) {
      console.error(err);
      setSyncMessage('Failed to sync to Firestore. Check internet connection.');
    } finally {
      setIsSyncing(false);
      setTimeout(() => setSyncMessage(null), 4000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#202820]">Website & Business Settings</h2>
          <p className="text-xs text-stone-500">
            Configure company branding, logo, contact numbers, UK address, social handles, and Google Cloud Firestore status
          </p>
        </div>

        {saved && (
          <div className="px-4 py-2 bg-[#EAF5EC] text-[#315C3A] border border-[#DCEBDD] rounded-xl text-xs font-bold flex items-center gap-1.5 animate-in fade-in">
            <Check className="w-4 h-4 text-[#6FAF7B]" />
            <span>Settings saved successfully!</span>
          </div>
        )}
      </div>

      {/* CLOUD DATABASE STATUS CARD */}
      <div className="bg-gradient-to-r from-[#EAF5EC] via-white to-[#F0F7F1] p-5 rounded-3xl border border-[#DCEBDD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[#315C3A] text-white flex items-center justify-center shadow-xs">
            <Cloud className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-[#202820]">Firebase Firestore Realtime Database</h3>
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                isFirebaseConnected ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isFirebaseConnected ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                {isFirebaseConnected ? 'Live Cloud Connected' : 'Local Fallback'}
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              Updates in admin or online quote submissions propagate in real-time across all browser sessions.
              {firebaseLastSync && (
                <span className="ml-1.5 text-[#315C3A] font-medium">
                  Last sync: {firebaseLastSync.toLocaleTimeString()}
                </span>
              )}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleForceCloudSync}
          disabled={isSyncing}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-stone-50 text-[#315C3A] border border-[#DCEBDD] font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-[#6FAF7B] ${isSyncing ? 'animate-spin' : ''}`} />
          <span>{isSyncing ? 'Syncing...' : 'Force Full Cloud Push'}</span>
        </button>
      </div>

      {syncMessage && (
        <div className="p-3 bg-[#EAF5EC] border border-[#DCEBDD] text-[#315C3A] text-xs font-semibold rounded-2xl flex items-center gap-2 animate-in fade-in">
          <Check className="w-4 h-4 text-[#6FAF7B]" />
          <span>{syncMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 text-xs">
        {/* BRAND IDENTITY & LOGO */}
        <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-5">
          <h3 className="text-sm font-bold text-[#202820] uppercase tracking-wider pb-2 border-b border-stone-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#6FAF7B]" />
            <span>Brand Identity & Logo Configuration</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Logo input & upload */}
            <div className="space-y-3">
              <label className="block font-bold text-[#202820]">
                Company Header & Footer Logo
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="https://... or upload image"
                  value={formData.logoUrl || ''}
                  onChange={e => setFormData({ ...formData, logoUrl: e.target.value })}
                  className="flex-1 px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
                <label className="px-3 py-2 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer border border-[#DCEBDD] transition-colors">
                  <Upload className="w-3.5 h-3.5 text-[#6FAF7B]" />
                  <span>Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, logoUrl: '' })}
                  className="text-[11px] text-stone-500 hover:text-stone-800 underline cursor-pointer"
                >
                  Reset to default text & vector emblem
                </button>
              </div>

              {/* Tagline */}
              <div className="pt-2">
                <label className="block font-bold text-[#202820] mb-1">
                  Tagline / Header Subtitle
                </label>
                <input
                  type="text"
                  value={formData.tagline || ''}
                  onChange={e => setFormData({ ...formData, tagline: e.target.value })}
                  placeholder="Painting & Property Refurbishment"
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>
            </div>

            {/* Logo Preview box */}
            <div>
              <label className="block font-bold text-[#202820] mb-2">
                Live Logo Preview
              </label>
              <div className="grid grid-cols-2 gap-3">
                {/* Light preview */}
                <div className="p-4 rounded-2xl bg-white border border-[#DCEBDD] flex flex-col items-center justify-center min-h-[90px] text-center">
                  <span className="text-[10px] text-stone-400 font-semibold mb-2">Light Background (Header)</span>
                  {formData.logoUrl ? (
                    <img
                      src={formData.logoUrl}
                      alt="Logo Preview"
                      className="max-h-10 max-w-full object-contain"
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6FAF7B] to-[#315C3A] flex items-center justify-center text-white">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="block text-sm font-bold text-[#202820] leading-none">
                          {formData.companyName || 'Green Refurb'}
                        </span>
                        <span className="block text-[9px] font-medium text-[#6FAF7B] uppercase">
                          {formData.tagline || 'Painting & Decorating'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dark preview */}
                <div className="p-4 rounded-2xl bg-[#152317] border border-stone-800 flex flex-col items-center justify-center min-h-[90px] text-center">
                  <span className="text-[10px] text-stone-400 font-semibold mb-2">Dark Background (Hero/Footer)</span>
                  {formData.logoUrl ? (
                    <img
                      src={formData.logoUrl}
                      alt="Logo Dark Preview"
                      className="max-h-10 max-w-full object-contain brightness-105"
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#6FAF7B] flex items-center justify-center text-white">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="block text-sm font-bold text-white leading-none">
                          {formData.companyName || 'Green Refurb'}
                        </span>
                        <span className="block text-[9px] font-medium text-[#6FAF7B] uppercase">
                          {formData.tagline || 'Painting & Decorating'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Favicon URL / upload */}
          <div className="pt-4 border-t border-stone-100">
            <div className="flex items-center justify-between mb-1.5">
              <label className="block font-bold text-[#202820]">
                Browser Tab Favicon (Shortcut Icon)
              </label>
              {formData.faviconUrl && (
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, faviconUrl: '' })}
                  className="text-[11px] text-rose-600 hover:text-rose-800 underline cursor-pointer"
                >
                  Remove custom favicon
                </button>
              )}
            </div>
            <p className="text-[11px] text-stone-500 mb-2">
              This icon appears in the browser tab next to the website title: <strong>{formData.companyName || 'Green Refurb'}</strong>.
            </p>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Favicon image URL (or upload below)"
                value={formData.faviconUrl || ''}
                onChange={e => setFormData({ ...formData, faviconUrl: e.target.value })}
                className="flex-1 px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
              <label className="px-3.5 py-2 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] rounded-xl font-bold text-xs flex items-center gap-1.5 cursor-pointer border border-[#DCEBDD] transition-colors shrink-0">
                <Upload className="w-3.5 h-3.5 text-[#6FAF7B]" />
                <span>Upload Favicon</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFaviconFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Browser Tab Mockup Preview */}
            <div className="mt-3 p-3 bg-stone-100 rounded-2xl border border-stone-200 inline-block max-w-full">
              <span className="text-[10px] text-stone-500 font-semibold block mb-1.5">Browser Tab Preview:</span>
              <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-lg border border-stone-300 shadow-xs">
                {formData.faviconUrl ? (
                  <img
                    src={formData.faviconUrl}
                    alt="Favicon"
                    className="w-4 h-4 object-contain rounded-xs"
                  />
                ) : (
                  <div className="w-4 h-4 rounded-xs bg-[#315C3A] text-white flex items-center justify-center text-[9px] font-bold">
                    G
                  </div>
                )}
                <span className="text-xs font-medium text-stone-800 truncate max-w-[200px]">
                  {formData.companyName || 'Green Refurb'} | Painting & Decorating
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* COMPANY IDENTITY & CONTACT */}
        <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
          <h3 className="text-sm font-bold text-[#202820] uppercase tracking-wider pb-2 border-b border-stone-100 flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#6FAF7B]" />
            <span>Company Contact Details</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Live Domain Name
              </label>
              <input
                type="text"
                required
                value={formData.domain}
                onChange={e => setFormData({ ...formData, domain: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Telephone Number *
              </label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                WhatsApp Phone Number *
              </label>
              <input
                type="text"
                required
                value={formData.whatsappNumber}
                onChange={e => setFormData({ ...formData, whatsappNumber: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              Working Hours Notice
            </label>
            <input
              type="text"
              value={formData.openingHours}
              onChange={e => setFormData({ ...formData, openingHours: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>
        </div>

        {/* OFFICE ADDRESS */}
        <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
          <h3 className="text-sm font-bold text-[#202820] uppercase tracking-wider pb-2 border-b border-stone-100 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#6FAF7B]" />
            <span>Registered UK Office Address</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Address Line 1
              </label>
              <input
                type="text"
                value={formData.address.line1}
                onChange={e =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, line1: e.target.value }
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Town / City
              </label>
              <input
                type="text"
                value={formData.address.city}
                onChange={e =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, city: e.target.value }
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Postcode
              </label>
              <input
                type="text"
                value={formData.address.postcode}
                onChange={e =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, postcode: e.target.value }
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Country
              </label>
              <input
                type="text"
                value={formData.address.country}
                onChange={e =>
                  setFormData({
                    ...formData,
                    address: { ...formData.address, country: e.target.value }
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>
          </div>
        </div>

        {/* STATS COUNTERS */}
        <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
          <h3 className="text-sm font-bold text-[#202820] uppercase tracking-wider pb-2 border-b border-stone-100 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[#6FAF7B]" />
            <span>Key Achievement Numbers (About & Homepage)</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Years Experience
              </label>
              <input
                type="number"
                value={formData.stats.yearsExperience}
                onChange={e =>
                  setFormData({
                    ...formData,
                    stats: { ...formData.stats, yearsExperience: Number(e.target.value) }
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Completed Projects
              </label>
              <input
                type="number"
                value={formData.stats.completedProjects}
                onChange={e =>
                  setFormData({
                    ...formData,
                    stats: { ...formData.stats, completedProjects: Number(e.target.value) }
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Satisfaction Rate (%)
              </label>
              <input
                type="number"
                value={formData.stats.satisfactionRate}
                onChange={e =>
                  setFormData({
                    ...formData,
                    stats: { ...formData.stats, satisfactionRate: Number(e.target.value) }
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Qualified Tradesmen
              </label>
              <input
                type="number"
                value={formData.stats.qualifiedTradesmen}
                onChange={e =>
                  setFormData({
                    ...formData,
                    stats: { ...formData.stats, qualifiedTradesmen: Number(e.target.value) }
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>
          </div>
        </div>

        {/* SOCIAL LINKS & FOOTER */}
        <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
          <h3 className="text-sm font-bold text-[#202820] uppercase tracking-wider pb-2 border-b border-stone-100">
            Social Media & Footer
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Instagram URL
              </label>
              <input
                type="url"
                value={formData.socialLinks.instagram}
                onChange={e =>
                  setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, instagram: e.target.value }
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                Facebook URL
              </label>
              <input
                type="url"
                value={formData.socialLinks.facebook}
                onChange={e =>
                  setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, facebook: e.target.value }
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                LinkedIn URL
              </label>
              <input
                type="url"
                value={formData.socialLinks.linkedin}
                onChange={e =>
                  setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, linkedin: e.target.value }
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#202820] mb-1">
                YouTube URL
              </label>
              <input
                type="url"
                value={formData.socialLinks.youtube}
                onChange={e =>
                  setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, youtube: e.target.value }
                  })
                }
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              Footer Description Paragraph
            </label>
            <textarea
              rows={2}
              value={formData.footerText}
              onChange={e => setFormData({ ...formData, footerText: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>

          <div>
            <label className="block font-bold text-[#202820] mb-1">
              Copyright Notice
            </label>
            <input
              type="text"
              value={formData.copyrightText}
              onChange={e => setFormData({ ...formData, copyrightText: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full font-bold text-xs shadow-md transition-colors cursor-pointer"
          >
            Save All Settings
          </button>
        </div>
      </form>
    </div>
  );
};
