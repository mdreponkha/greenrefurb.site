import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Home,
  Heart,
  Palette,
  Eye,
  Phone,
  ArrowRight,
  Maximize2
} from 'lucide-react';

export const ResidentialPaintingPage: React.FC = () => {
  const { openQuoteModal, openLightbox } = useApp();

  const residentialImages = [
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/11/1000029568-1024x769.png',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/11/1000029572-1024x769.png',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/11/1000029585-1024x769.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/11/1000029500-1024x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/11/1000029619-1024x1024.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/11/1000029617-1024x1009.jpg'
  ];

  const whyChooseUs = [
    {
      title: 'Exceptional Quality',
      description: 'We use premium paints and industry-leading techniques to ensure smooth, flawless, and durable results that enhance the look and value of your home.',
      icon: Home
    },
    {
      title: 'Clean & Respectful Work',
      description: 'Your home is your personal space, and we treat it with the highest respect. We ensure a clean working environment, protect your furniture and flooring, and leave everything spotless once the job is done.',
      icon: Heart
    },
    {
      title: 'Personalised Approach',
      description: 'Every home is unique. We offer colour guidance, material recommendations, and a tailored plan based on your style, budget, and timeline.',
      icon: Palette
    },
    {
      title: 'Attention to Detail',
      description: 'From carefully preparing surfaces to perfecting the finish, we focus on every detail to achieve a beautiful and consistent result.',
      icon: Eye
    }
  ];

  const servicesInclude = [
    'Interior wall and ceiling painting',
    'Exterior painting and weather protection',
    'Kitchen cabinet painting',
    'Doors, trims, and woodwork',
    'Wallpaper removal and installation',
    'Surface preparation and repairs',
    'Feature walls and decorative finishes',
    'Whole-home repainting'
  ];

  return (
    <div className="w-full bg-[#F8FAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center bg-[#202820] text-white overflow-hidden">
        <img
          src={residentialImages[0]}
          alt="Residential Painting"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172218]/95 via-[#202820]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#315C3A]/40 backdrop-blur-xs text-xs font-semibold text-[#6FAF7B] border border-[#6FAF7B]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
              <span>Green Refurb in London</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Residential Painting
            </h1>
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed mb-6 font-normal">
              Transform your home with professional residential painting services from Green Refurb. We bring precision, care, and high-quality craftsmanship to every project — from single-room refreshes to full property renovations. Our goal is to create beautiful, long-lasting finishes that make your home feel welcoming, comfortable, and truly yours.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => openQuoteModal('Residential Painting')}
                className="px-6 py-3 bg-[#6FAF7B] hover:bg-[#5E9E6A] text-[#172218] font-bold text-sm rounded-full shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Request Free Estimate</span>
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
              Residential Homes Gallery
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Fine interior & exterior home renovations, Victorian terraces and apartments across London.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#315C3A] bg-[#EAF5EC] px-3 py-1 rounded-full border border-[#DCEBDD]">
            6 Showcase Photos
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {residentialImages.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(imgUrl)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-[#DCEBDD] cursor-pointer shadow-xs hover:shadow-lg transition-all"
            >
              <img
                src={imgUrl}
                alt={`Residential Project ${idx + 1}`}
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

      {/* 3. WHY HOMEOWNERS CHOOSE GREEN REFURB (4 FEATURES) */}
      <section className="bg-white border-y border-[#DCEBDD] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202820] tracking-tight mb-3">
              Why Homeowners Choose Green Refurb
            </h2>
            <p className="text-sm text-stone-600">
              Clean, courteous decorators dedicated to perfection in every living space.
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

      {/* 4. RESIDENTIAL SERVICES INCLUDE & BEAUTIFUL HOMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* List of included services */}
          <div className="bg-white p-8 rounded-3xl border border-[#DCEBDD] shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-[#202820] mb-6 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#6FAF7B] rounded-full inline-block" />
              <span>Our Residential Painting Services Include:</span>
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

          {/* Beautiful Homes card */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#EAF5EC] to-[#DCEBDD] p-8 rounded-3xl border border-[#CDE3CF]">
              <h3 className="text-xl font-bold text-[#202820] mb-3">
                Beautiful Homes, Expertly Painted
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                We’ve helped countless homeowners refresh their interiors and improve their property’s curb appeal. Whether you’re preparing to sell or simply want to enjoy a more stylish living space, our team delivers results you can see and quality you can trust.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#315C3A]">
                <ShieldCheck className="w-4 h-4 text-[#6FAF7B]" />
                <span>Clean Workmanship & Complete Furniture Protection</span>
              </div>
            </div>

            {/* Request Free Estimate Banner */}
            <div className="bg-[#202820] text-white p-8 rounded-3xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Request Your Free Estimate
                </h3>
                <p className="text-xs text-stone-300">
                  Ready to transform your home? Contact Green Refurb today for a free, no-obligation estimate and discover how our residential painting services can bring new life to your space.
                </p>
              </div>
              <button
                onClick={() => openQuoteModal('Residential Painting')}
                className="px-6 py-3 bg-[#6FAF7B] hover:bg-[#5E9E6A] text-[#172218] font-bold text-xs rounded-full whitespace-nowrap shadow-sm transition-colors cursor-pointer"
              >
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
