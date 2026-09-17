import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  Maximize2,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkle
} from 'lucide-react';

export const CustomWardrobesPage: React.FC = () => {
  const { openQuoteModal, openLightbox } = useApp();

  const wardrobeSections = [
    {
      title: 'Wardrobe',
      subtitle: 'Order a wardrobe custom-fitted to your space.',
      description: 'Order a wardrobe custom-fitted to your space. Made from high-quality materials, it maximizes storage efficiency. Personalize colors, handles, and shelf layouts to your needs.',
      image: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/1000029485-edited-1024x768.png',
      features: [
        'Custom floor-to-ceiling fit for London alcoves',
        'Soft-close hinges and drawer runners',
        'Personalized internal layout (rails, shelves, pull-outs)',
        'Durable, premium finish in your choice of color'
      ]
    },
    {
      title: 'Walk-in closet',
      subtitle: 'Create a luxurious walk-in closet tailored to your requirements.',
      description: 'Create a luxurious walk-in closet tailored to your requirements. It features spacious interiors with LED lighting and organization systems. Perfect for fashion enthusiasts, with full arrangement freedom.',
      image: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Wardrobe-6.png',
      features: [
        'Integrated sensor-activated LED lighting systems',
        'Velvet-lined jewelry and accessory drawers',
        'Open-plan boutique display hanging racks',
        'Matching island drawer units with glass tops'
      ]
    },
    {
      title: 'Bespoke Storage',
      subtitle: 'Maximise storage efficiency and style with specialist joinery.',
      description: 'Order a wardrobe custom-fitted to your space. Our specialist team designs and installs bespoke wardrobes in London and across the UK, using premium materials to maximise storage and style.',
      image: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/closet-with-wardrobe.jpg',
      features: [
        'Loft and sloped ceiling bespoke integration',
        'Traditional Shaker, fluted, or contemporary flat doors',
        'Under-bed and recessed wardrobe compartments',
        'Master joiner craftsmanship with guarantee'
      ]
    }
  ];

  return (
    <div className="w-full bg-[#F8FAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] flex items-center bg-[#202820] text-white overflow-hidden">
        <img
          src={wardrobeSections[0].image}
          alt="Custom Wardrobes"
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
              Custom Wardrobes
            </h1>
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed mb-6 font-normal">
              Order a wardrobe custom-fitted to your space. Our specialist team designs and installs bespoke wardrobes in London and across the UK, using premium materials to maximise storage and style.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => openQuoteModal('Custom Wardrobes')}
                className="px-6 py-3 bg-[#6FAF7B] hover:bg-[#5E9E6A] text-[#172218] font-bold text-sm rounded-full shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book Wardrobe Consultation</span>
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

      {/* 2. THREE WARDROBE TIERS (Wardrobe, Walk-in closet, Bespoke Storage) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
        {wardrobeSections.map((item, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <div
              key={idx}
              className={`bg-white rounded-3xl border border-[#DCEBDD] p-8 lg:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div
                  onClick={() => openLightbox(item.image)}
                  className="relative group rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-[#DCEBDD] cursor-pointer shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
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
              <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-bold text-[#315C3A]">
                  <Layers className="w-4 h-4 text-[#6FAF7B]" />
                  <span>Option {idx + 1}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202820]">
                  {item.title}
                </h2>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#6FAF7B] shrink-0" />
                      <span className="text-xs sm:text-sm text-stone-700 font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => openQuoteModal(`Custom Wardrobe: ${item.title}`)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>Order {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. BOTTOM BANNER */}
      <section className="bg-[#202820] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-[#6FAF7B] uppercase tracking-wider block mb-1">
              Bespoke Fitting in London & Across UK
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Every Wardrobe Made To Your Exact Dimensions
            </h3>
            <p className="text-xs text-stone-300 mt-1 max-w-xl">
              From compact chimney-breast alcoves to grand master bedroom walk-ins, we measure, manufacture, and assemble with millimeter accuracy.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => openQuoteModal('Custom Wardrobes')}
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
