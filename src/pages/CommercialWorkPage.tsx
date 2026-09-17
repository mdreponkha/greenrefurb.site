import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  Maximize2,
  Building2,
  Phone,
  ShieldCheck
} from 'lucide-react';

export const CommercialWorkPage: React.FC = () => {
  const { openQuoteModal, openLightbox } = useApp();

  const commercialPhotos = [
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-1-768x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-2-768x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-3-768x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-4-768x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/commercial-5-768x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/commercial-6-768x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/commercial-7-768x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/commercial-8-768x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/commercial-9-768x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/commercial-10-768x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-1-1024x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/commercial-11.jpg'
  ];

  return (
    <div className="w-full bg-[#F8FAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[360px] sm:min-h-[400px] flex items-center bg-[#202820] text-white overflow-hidden">
        <img
          src={commercialPhotos[0]}
          alt="Commercial Projects"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172218]/95 via-[#202820]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#315C3A]/40 backdrop-blur-xs text-xs font-semibold text-[#6FAF7B] border border-[#6FAF7B]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
              <span>Our Work • Commercial</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Commercial
            </h1>
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed mb-6 font-normal">
              We carry out professional commercial painting and decorating projects for offices, retail spaces, and commercial properties across London. Our team works efficiently to meet deadlines while maintaining a consistently high standard of finish. We understand the importance of minimal disruption and deliver reliable results tailored to business environments.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => openQuoteModal('Commercial Project')}
                className="px-6 py-3 bg-[#6FAF7B] hover:bg-[#5E9E6A] text-[#172218] font-bold text-sm rounded-full shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Request Commercial Consultation</span>
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

      {/* 2. PHOTO GALLERY (12 PHOTOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-[#DCEBDD]">
          <div>
            <h2 className="text-2xl font-bold text-[#202820]">
              Commercial Gallery Showcase
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Click any photo to view full resolution. High specification corporate, retail & hospitality finishes.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#315C3A] bg-[#EAF5EC] px-3.5 py-1.5 rounded-full border border-[#DCEBDD]">
              {commercialPhotos.length} Completed Projects
            </span>
          </div>
        </div>

        {/* Masonry/Grid of images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {commercialPhotos.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(imgUrl)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-[#DCEBDD] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 aspect-[3/4]"
            >
              <img
                src={imgUrl}
                alt={`Commercial Project Work ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <div className="flex items-center justify-between text-white">
                  <span className="text-xs font-semibold">Commercial Finish {idx + 1}</span>
                  <div className="w-8 h-8 rounded-full bg-white/90 text-[#315C3A] flex items-center justify-center shadow-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BUSINESS ASSURANCE & CTA */}
      <section className="bg-white border-t border-[#DCEBDD] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#202820] text-white rounded-3xl p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#315C3A]/50 text-xs font-bold text-[#6FAF7B]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Commercial Contractor Guarantee</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Planning a Commercial Fit-out or Refurbishment?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                We work out of hours, weekends, or in phased sequences to eliminate business downtime. Contact us today for a free on-site tender visit.
              </p>
            </div>
            <button
              onClick={() => openQuoteModal('Commercial')}
              className="px-7 py-3.5 bg-[#6FAF7B] hover:bg-[#5E9E6A] text-[#172218] font-bold text-xs sm:text-sm rounded-full whitespace-nowrap shadow-md transition-colors cursor-pointer"
            >
              Get a Free Tender Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
