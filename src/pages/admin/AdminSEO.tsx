import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PageSEO } from '../../types';
import { Check, Globe, FileText, Code2, Search, Sparkles } from 'lucide-react';

export const AdminSEO: React.FC = () => {
  const { allSEO, updateSEO, settings } = useApp();
  const [selectedPath, setSelectedPath] = useState(allSEO[0]?.path || '/');
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<'meta' | 'sitemap' | 'robots' | 'schema'>('meta');

  const currentItem = allSEO.find(s => s.path === selectedPath) || allSEO[0];
  const [formData, setFormData] = useState<PageSEO>(currentItem);

  // Sync if path switches
  React.useEffect(() => {
    const item = allSEO.find(s => s.path === selectedPath) || allSEO[0];
    if (item) {
      setFormData(item);
    }
  }, [selectedPath, allSEO]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSEO(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  // Generate dynamic XML sitemap
  const generateSitemapXml = () => {
    const pages = allSEO.map(s => {
      const url = `https://${settings.domain}${s.path === '/' ? '' : s.path}`;
      return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${s.path === '/' ? '1.0' : '0.8'}</priority>\n  </url>`;
    }).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages}\n</urlset>`;
  };

  // Generate robots.txt
  const generateRobotsTxt = () => {
    return `User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: https://${settings.domain}/sitemap.xml`;
  };

  // Generate Schema.org JSON-LD
  const generateSchemaJson = () => {
    return JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'HomeAndConstructionBusiness',
        name: settings.companyName,
        url: `https://${settings.domain}`,
        telephone: settings.phone,
        email: settings.email,
        priceRange: '££',
        address: {
          '@type': 'PostalAddress',
          streetAddress: settings.address.line1,
          addressLocality: settings.address.city,
          postalCode: settings.address.postcode,
          addressCountry: 'GB'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '51.3813',
          longitude: '-0.1065'
        },
        areaServed: [
          'London',
          'Croydon',
          'Bromley',
          'Sutton',
          'Wimbledon',
          'Dulwich',
          'Richmond',
          'Kingston upon Thames',
          'Surrey'
        ],
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '18:00'
        }
      },
      null,
      2
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#202820]">SEO & Search Engine Optimization</h2>
          <p className="text-xs text-stone-500">
            Configure Google indexing, meta descriptions, OpenGraph social cards, XML sitemaps, and robots.txt
          </p>
        </div>

        <div className="flex items-center gap-2">
          {saved && (
            <div className="px-3 py-1.5 bg-[#EAF5EC] text-[#315C3A] border border-[#DCEBDD] rounded-xl text-xs font-bold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Saved!</span>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-[#DCEBDD] pb-3">
        <button
          onClick={() => setActiveTab('meta')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            activeTab === 'meta'
              ? 'bg-[#315C3A] text-white'
              : 'bg-white border border-[#DCEBDD] text-stone-600 hover:bg-[#EAF5EC]'
          }`}
        >
          Page Meta Tags
        </button>
        <button
          onClick={() => setActiveTab('sitemap')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            activeTab === 'sitemap'
              ? 'bg-[#315C3A] text-white'
              : 'bg-white border border-[#DCEBDD] text-stone-600 hover:bg-[#EAF5EC]'
          }`}
        >
          XML Sitemap
        </button>
        <button
          onClick={() => setActiveTab('robots')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            activeTab === 'robots'
              ? 'bg-[#315C3A] text-white'
              : 'bg-white border border-[#DCEBDD] text-stone-600 hover:bg-[#EAF5EC]'
          }`}
        >
          Robots.txt
        </button>
        <button
          onClick={() => setActiveTab('schema')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            activeTab === 'schema'
              ? 'bg-[#315C3A] text-white'
              : 'bg-white border border-[#DCEBDD] text-stone-600 hover:bg-[#EAF5EC]'
          }`}
        >
          Schema JSON-LD
        </button>
      </div>

      {activeTab === 'meta' && (
        <div className="space-y-6">
          {/* Select Page Dropdown */}
          <div className="bg-white p-4 rounded-2xl border border-[#DCEBDD] flex items-center justify-between gap-4">
            <span className="text-xs font-bold text-[#202820]">Target Page Route:</span>
            <select
              value={selectedPath}
              onChange={e => setSelectedPath(e.target.value)}
              className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-mono bg-[#F8FAF8] focus:outline-none focus:border-[#6FAF7B]"
            >
              {allSEO.map(s => (
                <option key={s.path} value={s.path}>
                  {s.path} ({s.title.slice(0, 30)}...)
                </option>
              ))}
            </select>
          </div>

          <form onSubmit={handleSave} className="space-y-6 text-xs">
            {/* Meta Tags Card */}
            <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
              <h3 className="text-sm font-bold text-[#202820] uppercase tracking-wider pb-2 border-b border-stone-100">
                Search Engine Meta Tags
              </h3>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Browser Title Tag (&lt;title&gt;) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
                <span className="text-[10px] text-stone-400 mt-1 block">
                  Recommended length: 50-60 characters ({formData.title.length} characters)
                </span>
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Meta Description *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.metaDescription}
                  onChange={e => setFormData({ ...formData, metaDescription: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
                <span className="text-[10px] text-stone-400 mt-1 block">
                  Recommended length: 140-160 characters ({formData.metaDescription.length} characters)
                </span>
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Focus Keywords (comma separated)
                </label>
                <input
                  type="text"
                  value={formData.keywords}
                  onChange={e => setFormData({ ...formData, keywords: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  Canonical URL
                </label>
                <input
                  type="url"
                  value={formData.canonicalUrl}
                  onChange={e => setFormData({ ...formData, canonicalUrl: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>
            </div>

            {/* Social Share / OpenGraph Card */}
            <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
              <h3 className="text-sm font-bold text-[#202820] uppercase tracking-wider pb-2 border-b border-stone-100">
                OpenGraph Social Sharing (Facebook, WhatsApp, LinkedIn, X)
              </h3>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  OG Title
                </label>
                <input
                  type="text"
                  value={formData.ogTitle}
                  onChange={e => setFormData({ ...formData, ogTitle: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  OG Description
                </label>
                <textarea
                  rows={2}
                  value={formData.ogDescription}
                  onChange={e => setFormData({ ...formData, ogDescription: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#202820] mb-1">
                  OG Image Preview URL
                </label>
                <input
                  type="url"
                  value={formData.ogImage}
                  onChange={e => setFormData({ ...formData, ogImage: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                Save Meta Configuration for {selectedPath}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* XML Sitemap Tab */}
      {activeTab === 'sitemap' && (
        <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#202820]">
              Dynamic XML Sitemap Preview
            </h3>
            <span className="text-xs text-stone-500 font-mono">/sitemap.xml</span>
          </div>
          <p className="text-xs text-stone-600">
            This XML structure allows search engines like Google and Bing to crawl all 14 service routes, project pages, and main content areas.
          </p>
          <pre className="p-4 bg-stone-900 text-emerald-400 rounded-2xl text-[11px] font-mono overflow-x-auto">
            {generateSitemapXml()}
          </pre>
        </div>
      )}

      {/* Robots.txt Tab */}
      {activeTab === 'robots' && (
        <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#202820]">
              Robots.txt Configuration
            </h3>
            <span className="text-xs text-stone-500 font-mono">/robots.txt</span>
          </div>
          <p className="text-xs text-stone-600">
            Tells crawler bots to index all public customer pages while protecting the /admin CMS panel.
          </p>
          <pre className="p-4 bg-stone-900 text-emerald-400 rounded-2xl text-[11px] font-mono overflow-x-auto">
            {generateRobotsTxt()}
          </pre>
        </div>
      )}

      {/* Schema JSON-LD Tab */}
      {activeTab === 'schema' && (
        <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#202820]">
              Schema.org Structured Data (HomeAndConstructionBusiness)
            </h3>
            <span className="text-xs text-stone-500 font-mono">JSON-LD</span>
          </div>
          <p className="text-xs text-stone-600">
            Rich snippet JSON-LD automatically embedded into index.html to show Google knowledge panels and local 65 Lodge Road Croydon business markers.
          </p>
          <pre className="p-4 bg-stone-900 text-emerald-400 rounded-2xl text-[11px] font-mono overflow-x-auto">
            {generateSchemaJson()}
          </pre>
        </div>
      )}
    </div>
  );
};
