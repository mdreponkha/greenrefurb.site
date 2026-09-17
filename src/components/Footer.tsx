import React from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Lock
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, settings } = useApp();

  const companyName = (!settings.companyName || /limited/i.test(settings.companyName))
    ? 'Green Refurb'
    : settings.companyName;

  const emailAddress = (settings.email && !/limited/i.test(settings.email))
    ? settings.email
    : 'info@greenrefurb.site';

  const footerBio = settings.footerText
    ? settings.footerText.replace(/greenrefurb\s*limited/gi, 'Green Refurb')
    : 'Green Refurb is a premier UK painting, decorating, home improvement, and property refurbishment contractor serving private homeowners and commercial clients across London and surrounding areas.';

  const copyrightNotice = settings.copyrightText
    ? settings.copyrightText.replace(/greenrefurb\s*limited/gi, 'Green Refurb')
    : '© 2026 Green Refurb. All Rights Reserved. Registered in England & Wales (Company No. 17378871).';

  return (
    <footer className="bg-[#EAF5EC] border-t border-[#DCEBDD] text-[#202820] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            {settings.logoUrl ? (
              <img
                src={settings.logoUrl}
                alt={companyName}
                className="h-10 max-w-[200px] object-contain"
              />
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#6FAF7B] text-white flex items-center justify-center shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl font-bold text-[#202820] tracking-tight block leading-none">
                    {companyName}
                  </span>
                  <span className="text-[11px] font-medium text-[#315C3A] tracking-wider uppercase block mt-0.5">
                    {settings.tagline || 'Painting & Refurbishment'}
                  </span>
                </div>
              </div>
            )}
            <p className="text-sm text-stone-600 leading-relaxed">
              {footerBio}
            </p>
            <div className="pt-2 flex flex-col gap-1.5 text-xs text-stone-600">
              <span className="flex items-center gap-1.5 font-medium text-[#315C3A]">
                <ShieldCheck className="w-4 h-4 text-[#6FAF7B]" />
                £5M Public Liability Insurance
              </span>
              <span className="flex items-center gap-1.5 font-medium text-[#315C3A]">
                <CheckCircle2 className="w-4 h-4 text-[#6FAF7B]" />
                24-Month Workmanship Warranty
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#315C3A] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-600">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all flex items-center gap-1"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all flex items-center gap-1"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all flex items-center gap-1"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/our-work')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all flex items-center gap-1"
                >
                  Our Work & Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/custom-interior-solutions')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all flex items-center gap-1"
                >
                  Custom Interior Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all flex items-center gap-1"
                >
                  Contact & Free Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#315C3A] mb-4">
              Services &amp; Solutions
            </h4>
            <ul className="space-y-2 text-sm text-stone-600">
              <li>
                <button
                  onClick={() => navigate('/services/commercial-painting')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all block text-left"
                >
                  Commercial Painting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/residential-painting')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all block text-left"
                >
                  Residential Painting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/carpentry-electric-plumbing')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all block text-left"
                >
                  Carpentry, Electric &amp; Plumbing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/custom-interior/custom-wardrobes')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all block text-left"
                >
                  Custom Wardrobes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/custom-interior/kitchen-installation')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all block text-left"
                >
                  Kitchen Installation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/our-work/commercial')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all block text-left"
                >
                  Commercial Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/our-work/residential')}
                  className="hover:text-[#315C3A] hover:translate-x-1 transition-all block text-left"
                >
                  Residential Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#315C3A] mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-stone-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6FAF7B] shrink-0 mt-1" />
                <span>
                  <strong>{settings.companyName}</strong><br />
                  {settings.address.line1}<br />
                  {settings.address.line2 && <>{settings.address.line2}<br /></>}
                  {settings.address.postcode}<br />
                  {settings.address.country}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#6FAF7B] shrink-0" />
                <a
                  href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#315C3A] font-semibold transition-colors"
                >
                  {settings.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#6FAF7B] shrink-0" />
                <a
                  href={`mailto:${emailAddress}`}
                  className="hover:text-[#315C3A] transition-colors"
                >
                  {emailAddress}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#6FAF7B] shrink-0" />
                <a
                  href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#315C3A] font-semibold hover:underline flex items-center gap-1"
                >
                  WhatsApp Us
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={settings.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#DCEBDD] flex items-center justify-center text-[#315C3A] hover:bg-[#6FAF7B] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href={settings.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#DCEBDD] flex items-center justify-center text-[#315C3A] hover:bg-[#6FAF7B] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href={settings.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#DCEBDD] flex items-center justify-center text-[#315C3A] hover:bg-[#6FAF7B] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#DCEBDD] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>{settings.copyrightText || '© 2026 Green Refurb. All Rights Reserved.'}</p>
          <div className="flex items-center gap-6">
            <span>Company Reg: 17378871</span>
            <span>61 Bridge Street, Kington, HR5 3DJ &amp; London</span>
            <button
              onClick={() => navigate('/admin')}
              className="text-stone-400 hover:text-[#315C3A] underline transition-colors cursor-pointer flex items-center gap-1"
            >
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
