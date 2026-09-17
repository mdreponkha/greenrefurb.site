import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Maximize2,
  Hammer,
  Zap,
  Wrench
} from 'lucide-react';

export const CarpentryElectricPlumbingPage: React.FC = () => {
  const { openQuoteModal, openLightbox } = useApp();

  const services = [
    {
      title: 'Professional Carpentry',
      iconEmoji: '🪚',
      icon: Hammer,
      lead: 'From bespoke storage solutions to structural repairs, our carpentry services add character and functionality to your space.',
      image: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Professional-Carpentry.png',
      items: [
        {
          name: 'Built-in Furniture',
          desc: 'Custom wardrobes, shelving units, and cupboards tailored to your alcoves.'
        },
        {
          name: 'Flooring',
          desc: 'Installation of laminate, engineered wood, and solid wood floors.'
        },
        {
          name: 'Doors & Windows',
          desc: 'Fitting, trimming, and repairing internal and external doors.'
        },
        {
          name: 'Skirting & Architraves',
          desc: 'Precise finishing touches that define a room with architectural quality.'
        }
      ]
    },
    {
      title: 'Reliable Electrical Services',
      iconEmoji: '⚡',
      icon: Zap,
      lead: 'Safety is our priority. Our team handles essential electrical work to ensure your home is modern, efficient, and fully compliant.',
      image: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Reliable-Electrical-Services.png',
      items: [
        {
          name: 'Lighting Installation',
          desc: 'From stylish spotlights and pendant fixtures to outdoor security lighting.'
        },
        {
          name: 'Socket & Switch Upgrades',
          desc: 'Replacing old fittings with modern brushed metal and USB finishes.'
        },
        {
          name: 'Fault Finding',
          desc: 'Identifying and fixing electrical issues safely and promptly.'
        },
        {
          name: 'Full/Partial Rewiring',
          desc: 'Supporting your home renovation and extensions from the ground up.'
        }
      ]
    },
    {
      title: 'Expert Plumbing Maintenance',
      iconEmoji: '🔧',
      icon: Wrench,
      lead: 'Whether it’s a small leak or a bathroom update, our plumbing services keep your property running smoothly.',
      image: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Expert-Plumbing-Maintenance.png',
      items: [
        {
          name: 'General Repairs',
          desc: 'Fixing leaks, drips, water pressure issues, and blocked pipes.'
        },
        {
          name: 'Fixture Installation',
          desc: 'Fitting new sinks, designer mixer taps, shower enclosures, and toilets.'
        },
        {
          name: 'Radiator Services',
          desc: 'Moving or replacing radiators and towel rails to suit your new room layout.'
        },
        {
          name: 'Kitchen & Bathroom Plumbing',
          desc: 'Complete pipework, waste connections, and appliance feeds for renovation projects.'
        }
      ]
    }
  ];

  return (
    <div className="w-full bg-[#F8FAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center bg-[#202820] text-white overflow-hidden">
        <img
          src="https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Professional-Carpentry.png"
          alt="Carpentry, Electric & Plumbing"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172218]/95 via-[#202820]/85 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#315C3A]/40 backdrop-blur-xs text-xs font-semibold text-[#6FAF7B] border border-[#6FAF7B]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
              <span>Full Refurbishment Solutions in London</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Carpentry, Electric & Plumbing
            </h1>
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed mb-6 font-normal">
              At Green Refurb, we believe that a beautiful home is built on more than just a fresh coat of paint. To provide our clients in London with a truly seamless renovation experience, we have expanded our core decorating services to include expert Carpentry, Electrical, and Plumbing solutions.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => openQuoteModal('Carpentry, Electric & Plumbing')}
                className="px-6 py-3 bg-[#6FAF7B] hover:bg-[#5E9E6A] text-[#172218] font-bold text-sm rounded-full shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book Service Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:07908173549"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-full border border-white/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#6FAF7B]" />
                <span>07908 173 549</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE CORE SECTIONS: CARPENTRY, ELECTRICAL, PLUMBING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
        {services.map((srv, idx) => {
          const isEven = idx % 2 === 1;
          const IconComponent = srv.icon;

          return (
            <div
              key={idx}
              className={`bg-white rounded-3xl border border-[#DCEBDD] p-8 lg:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div
                  onClick={() => openLightbox(srv.image)}
                  className="relative group rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-[#DCEBDD] cursor-pointer shadow-sm"
                >
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-[#315C3A] flex items-center justify-center shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-bold text-[#315C3A]">
                  <IconComponent className="w-4 h-4 text-[#6FAF7B]" />
                  <span>{srv.iconEmoji} Division {idx + 1}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202820]">
                  {srv.title}
                </h2>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {srv.lead}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {srv.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-4 rounded-xl bg-[#F8FAF8] border border-[#DCEBDD]/80 hover:border-[#6FAF7B] transition-colors"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-[#202820] mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6FAF7B] shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      <p className="text-xs text-stone-500 pl-5.5">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openQuoteModal(srv.title)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>Get a Quote for {srv.title.replace('Professional ', '').replace('Reliable ', '').replace('Expert ', '')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. BOTTOM CTA BANNER */}
      <section className="bg-[#202820] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-[#6FAF7B] uppercase tracking-wider block mb-1">
              One Team, Complete Renovation
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Need Multi-Trade Refurbishment in London?
            </h3>
            <p className="text-xs text-stone-300 mt-1 max-w-xl">
              Save time and eliminate hassle by hiring our synchronized team of carpenters, electricians, plumbers, and decorators.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => openQuoteModal('Carpentry, Electric & Plumbing')}
              className="px-6 py-3 bg-[#6FAF7B] hover:bg-[#5E9E6A] text-[#172218] font-bold text-xs rounded-full whitespace-nowrap shadow-sm transition-colors cursor-pointer"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
