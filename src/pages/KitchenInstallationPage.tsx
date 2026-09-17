import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  Maximize2,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Utensils,
  Award
} from 'lucide-react';

export const KitchenInstallationPage: React.FC = () => {
  const { openQuoteModal, openLightbox } = useApp();

  const kitchenImages = [
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Kitchen-Installation-3-1024x573.png',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Kitchen-Installation-2-1024x769.jpg',
    'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Kitchen-Installation-1.png'
  ];

  const packagePoints = [
    'Bespoke design and planning of luxury kitchens tailored to your specifications;',
    'Installation to professional standards by time-served master craftsmen;',
    'All accessories supplied and fitted within our all-inclusive service package.'
  ];

  return (
    <div className="w-full bg-[#F8FAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center bg-[#202820] text-white overflow-hidden">
        <img
          src={kitchenImages[0]}
          alt="Kitchen Installation"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172218]/95 via-[#202820]/85 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#315C3A]/40 backdrop-blur-xs text-xs font-semibold text-[#6FAF7B] border border-[#6FAF7B]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
              <span>Custom Interior Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Kitchen Installation
            </h1>
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed mb-6 font-normal">
              Order professional kitchen installation tailored to your space in London and surroundings. Our team of experienced specialists handles complete installations from design to finish, using premium materials and modern technology to create functional and stylish spaces.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => openQuoteModal('Kitchen Installation')}
                className="px-6 py-3 bg-[#6FAF7B] hover:bg-[#5E9E6A] text-[#172218] font-bold text-sm rounded-full shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book Kitchen Consultation</span>
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

      {/* 2. THREE KITCHEN IMAGES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#DCEBDD]">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#202820]">
              Kitchen Installation Projects
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              End-to-end luxury kitchen fitting, quartz worktops, and integrated appliances in London.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#315C3A] bg-[#EAF5EC] px-3.5 py-1.5 rounded-full border border-[#DCEBDD]">
            Premium Workmanship
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kitchenImages.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(imgUrl)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-[#DCEBDD] cursor-pointer shadow-xs hover:shadow-xl transition-all"
            >
              <img
                src={imgUrl}
                alt={`Kitchen Installation ${idx + 1}`}
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

      {/* 3. DETAILED CONTENT & COMPREHENSIVE SERVICE PACKAGE */}
      <section className="bg-white border-y border-[#DCEBDD] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left explanation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-bold text-[#315C3A]">
                <Utensils className="w-4 h-4 text-[#6FAF7B]" />
                <span>End-To-End Delivery</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202820]">
                Modern Functionality & Masterful Craftsmanship
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                We provide end-to-end services – from precise design and cabinetry fitting to appliance integration and flawless finishing, prioritising ergonomics, functionality, and elegant design.
              </p>

              <p className="text-stone-600 text-sm leading-relaxed">
                At Green Refurb, we ensure our clients receive top-quality services. We guarantee a seamless process from start to finish – your custom kitchen will be crafted to premium standards, serving you and your family for years to come.
              </p>
            </div>

            {/* Right package card */}
            <div className="lg:col-span-6">
              <div className="bg-[#F8FAF8] rounded-3xl p-8 border border-[#DCEBDD] shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#6FAF7B]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#202820]">
                      Our Comprehensive Service Package
                    </h3>
                    <p className="text-xs text-stone-500">
                      Guaranteed satisfaction from tear-out to final polish
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {packagePoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#DCEBDD]/70 shadow-2xs">
                      <CheckCircle2 className="w-5 h-5 text-[#6FAF7B] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openQuoteModal('Kitchen Installation')}
                    className="w-full py-3 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    Request Kitchen Quotation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="bg-[#202820] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-[#6FAF7B] uppercase tracking-wider block mb-1">
              London & Surrounding Areas
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Ready To Create Your Dream Kitchen?
            </h3>
            <p className="text-xs text-stone-300 mt-1 max-w-xl">
              Contact our design and installation team today for a free design visit and competitive quotation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => openQuoteModal('Kitchen Installation')}
              className="px-6 py-3 bg-[#6FAF7B] hover:bg-[#5E9E6A] text-[#172218] font-bold text-xs rounded-full whitespace-nowrap shadow-sm transition-colors cursor-pointer"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
