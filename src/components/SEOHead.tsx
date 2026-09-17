import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const SEOHead: React.FC = () => {
  const { currentPath, allSEO, settings } = useApp();

  useEffect(() => {
    // Find matching SEO or fallback to root
    const currentSEO = allSEO.find(s => s.path === currentPath) ||
      allSEO.find(s => s.path === '/') || {
        title: `${settings.companyName} | Painting, Decorating & Refurbishment`,
        metaDescription: 'Professional painting, decorating and property refurbishment services in London and Croydon.',
        keywords: 'painting, decorating, property refurbishment, London',
        ogTitle: `${settings.companyName} London`,
        ogDescription: 'Quality workmanship, reliable service and beautifully finished spaces.',
        ogImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
        canonicalUrl: `https://${settings.domain}${currentPath}`
      };

    const baseTitle = currentSEO.title || `${settings.companyName || 'Green Refurb'} | Painting & Decorating London`;
    const cleanTitle = baseTitle.replace(/GREENREFURB LIMITED/gi, 'Green Refurb');
    document.title = cleanTitle;

    // Update Meta Tags safely
    const setMeta = (attr: string, val: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${val}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', currentSEO.metaDescription);
    setMeta('name', 'keywords', currentSEO.keywords);
    setMeta('property', 'og:title', currentSEO.ogTitle);
    setMeta('property', 'og:description', currentSEO.ogDescription);
    setMeta('property', 'og:image', currentSEO.ogImage);
    setMeta('property', 'og:url', currentSEO.canonicalUrl || `https://${settings.domain}${currentPath}`);
  }, [currentPath, allSEO, settings]);

  return null;
};
