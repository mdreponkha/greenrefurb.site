import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Paintbrush,
  Building2,
  Phone,
  ArrowRight,
  Maximize2
} from 'lucide-react';

export const CommercialPaintingPage: React.FC = () => {
  const { openQuoteModal, openLightbox } = useApp();

  const commercialImages = [
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/11/1000029485-1024x769.png',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/11/1000029585-1024x769.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/11/1000029568-1024x769.png',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/11/1000029587-1024x769.png',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/11/1000029578-1024x769.png',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/11/1000029572-1024x769.png'
  ];

  const whyChooseUs = [
    {
      title: 'Professional Finish',
      description: 'Our experienced painters use premium-quality materials and proven techniques to deliver smooth, durable, and professional results for every commercial project.',
      icon: Paintbrush
    },
    {
      title: 'Minimal Disruption',
      description: "We understand that your business needs to remain operational. That's why we offer flexible scheduling, including evenings and weekends, to minimise disruption to your daily activities.",
      icon: Clock
    },
    {
      title: 'Tailored Solutions',
      description: 'Every commercial property is different. We assess your requirements and provide customised painting solutions that suit your budget, schedule, and business needs.',
      icon: Building2
    },
    {
      title: 'High Safety Standards',
      description: 'We follow strict health and safety procedures while using high-quality materials to ensure a clean, safe, and efficient working environment.',
      icon: ShieldCheck
    }
  ];

  const servicesInclude = [
    'Interior & exterior commercial painting',
    'Office and workspace repainting',
    'Retail and hospitality painting',
    'Industrial coatings and protective finishes',
    'Surface preparation and minor plaster repairs',
    'Floor painting and specialist coatings',
    'Colour consultation',
    'Planned maintenance and touch-up services'
  ];

  return (
    <div className="w-full bg-[#F8FAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center bg-[#202820] text-white overflow-hidden">
        <img
          src={commercialImages[1]}
          alt="Commercial Painting"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172218]/95 via-[#202820]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#315C3A]/40 backdrop-blur-xs text-xs font-semibold text-[#6FAF7B] border border-[#6FAF7B]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
              <span>Green Refurb Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Commercial Painting
            </h1>
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed mb-6 font-normal">
              At Green Refurb, we provide high-quality commercial painting services designed to refresh, protect, and enhance your business space. Whether you manage an office, retail store, restaurant, warehouse, or any other commercial property, we deliver professional results that improve both appearance and durability.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => openQuoteModal('Commercial Painting')}
                className="px-6 py-3 bg-[#6FAF7B] hover:bg-[#5E9E6A] text-[#172218] font-bold text-sm rounded-full shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Get a Free Quote</span>
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

      {/* 2. PROJECT SHOWCASE GALLERY (6 IMAGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#202820]">
              Commercial Projects Gallery
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Recent office, commercial, and property decoration completed across London.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#315C3A] bg-[#EAF5EC] px-3 py-1 rounded-full border border-[#DCEBDD]">
            6 Showcase Photos
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commercialImages.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(imgUrl)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-[#DCEBDD] cursor-pointer shadow-xs hover:shadow-lg transition-all"
            >
              <img
                src={imgUrl}
                alt={`Commercial Project ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 text-[#315C3A] flex items-center justify-center shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY CHOOSE US (4 FEATURES) */}
      <section className="bg-white border-y border-[#DCEBDD] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202820] tracking-tight mb-3">
              Why Choose Us?
            </h2>
            <p className="text-sm text-stone-600">
              Reliable contractors trusted by corporate offices, restaurants, and retail stores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAF8] rounded-2xl p-6 border border-[#DCEBDD] hover:border-[#6FAF7B] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EAF5EC] group-hover:bg-[#315C3A] text-[#315C3A] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#202820] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SERVICES INCLUDE & TRUSTED BY BUSINESSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* List of included services */}
          <div className="bg-white p-8 rounded-3xl border border-[#DCEBDD] shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-[#202820] mb-6 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#6FAF7B] rounded-full inline-block" />
              <span>Our Commercial Painting Services Include:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {servicesInclude.map((service, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#6FAF7B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-stone-700 font-medium">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trusted by businesses card */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#EAF5EC] to-[#DCEBDD] p-8 rounded-3xl border border-[#CDE3CF]">
              <h3 className="text-xl font-bold text-[#202820] mb-3">
                Trusted by Businesses Across London
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                Green Refurb is committed to delivering reliable, high-quality commercial painting services for businesses of all sizes. Our focus on excellent workmanship, attention to detail, and customer satisfaction has helped us build lasting relationships with business owners, property managers, and commercial clients.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#315C3A]">
                <ShieldCheck className="w-4 h-4 text-[#6FAF7B]" />
                <span>Fully Insured & Health and Safety Compliant</span>
              </div>
            </div>

            {/* Free Quote Banner */}
            <div className="bg-[#202820] text-white p-8 rounded-3xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Get a Free Quote
                </h3>
                <p className="text-xs text-stone-300">
                  Ready to transform your commercial property? Contact Green Refurb today for a free, no-obligation quotation.
                </p>
              </div>
              <button
                onClick={() => openQuoteModal('Commercial Painting')}
                className="px-6 py-3 bg-[#6FAF7B] hover:bg-[#5E9E6A] text-[#172218] font-bold text-xs rounded-full whitespace-nowrap shadow-sm transition-colors cursor-pointer"
              >
                Request Quotation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
