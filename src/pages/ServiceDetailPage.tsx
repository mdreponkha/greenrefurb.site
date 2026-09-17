import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ServiceIcon } from '../components/ServiceIcon';
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Phone,
  Sparkles,
  Layers,
  HelpCircle,
  Clock,
  Award
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const { services, settings, navigate, openQuoteModal, openLightbox } = useApp();
  const service = services.find(s => s.slug === slug);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-[#202820] mb-4">Service Not Found</h2>
        <p className="text-stone-600 mb-6">The requested service page does not exist.</p>
        <button
          onClick={() => navigate('/services')}
          className="px-6 py-2.5 bg-[#315C3A] text-white rounded-full text-sm font-semibold"
        >
          View All Services
        </button>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-[#F8FAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[420px] flex items-center bg-stone-900 text-white overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#202820]/90 via-[#315C3A]/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold text-white mb-4">
              <ServiceIcon name={service.icon} className="w-4 h-4 text-[#6FAF7B]" />
              <span>Green Refurb Specialised Trade Service</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-stone-200 mb-8 leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openQuoteModal(service.title)}
                className="px-7 py-3.5 bg-[#6FAF7B] hover:bg-[#5ea16a] text-white rounded-full font-semibold text-sm shadow-md transition-colors flex items-center gap-2"
              >
                <span>Get a Free Quote for {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {settings.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & WHAT WE PROVIDE */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Introduction */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
                <span>Service Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202820] mb-4">
                Professional {service.title} in London & Croydon
              </h2>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base mb-6">
                {service.fullDescription}
              </p>

              {/* Service Features checklist */}
              <div className="p-6 bg-[#F8FAF8] rounded-2xl border border-[#DCEBDD]">
                <h3 className="text-sm font-bold text-[#202820] mb-3 uppercase tracking-wider">
                  Key Service Features
                </h3>
                <div className="space-y-2.5">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-[#6FAF7B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: What We Provide */}
            <div>
              <div className="bg-[#EAF5EC]/60 border border-[#DCEBDD] rounded-3xl p-8">
                <h3 className="text-xl font-bold text-[#202820] mb-2">
                  What We Provide With Every Project
                </h3>
                <p className="text-xs text-stone-600 mb-6">
                  Our systematic approach ensures total satisfaction, reliable execution, and zero mess.
                </p>

                <div className="space-y-4">
                  {service.whatWeProvide.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#DCEBDD] shadow-2xs">
                      <div className="w-6 h-6 rounded-full bg-[#315C3A] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#202820] mt-0.5">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[#DCEBDD] flex items-center justify-between">
                  <div className="text-xs text-stone-500">
                    Need a bespoke specification?
                  </div>
                  <button
                    onClick={() => openQuoteModal(service.title)}
                    className="text-xs font-bold text-[#315C3A] hover:underline flex items-center gap-1"
                  >
                    Request Custom Scope →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS & WHY CHOOSE US */}
      <section className="py-16 lg:py-20 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202820] mb-3">
              Why Choose Green Refurb for {service.title}
            </h2>
            <p className="text-stone-600 text-sm">
              We stand apart through experienced craftspeople, clear fixed quotations, and a genuine commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#DCEBDD] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center mb-4">
                    <Award className="w-5 h-5 text-[#6FAF7B]" />
                  </div>
                  <h3 className="font-bold text-sm text-[#202820] mb-2">
                    {benefit}
                  </h3>
                </div>
                <div className="text-xs text-stone-500 pt-2 border-t border-stone-100 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-[#6FAF7B]" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICE GALLERY */}
      {service.galleryImages && service.galleryImages.length > 0 && (
        <section className="py-16 bg-white border-y border-[#DCEBDD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#202820]">
                  Recent {service.title} Projects
                </h3>
                <p className="text-xs text-stone-500">
                  Click any image to view in high resolution
                </p>
              </div>
              <button
                onClick={() => navigate('/our-work')}
                className="text-xs font-semibold text-[#315C3A] hover:underline"
              >
                View Full Portfolio →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {service.galleryImages.map((imgUrl, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#DCEBDD] cursor-pointer group shadow-2xs"
                  onClick={() => openLightbox(imgUrl)}
                >
                  <img
                    src={imgUrl}
                    alt={`${service.title} project`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQ SECTION */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#F8FAF8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#6FAF7B]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202820]">
                Got Questions About {service.title}?
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#DCEBDD] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold text-sm text-[#202820] hover:text-[#315C3A]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 transition-transform ${
                        openFaq === index ? 'rotate-180 text-[#315C3A]' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. CALL TO ACTION STRIP */}
      <section className="py-16 bg-[#315C3A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Request Your Free Quote for {service.title}
          </h2>
          <p className="text-sm text-stone-200 max-w-xl mx-auto mb-8">
            Contact Green Refurb today to book your no-obligation site visit or receive an itemized estimate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal(service.title)}
              className="px-8 py-3.5 bg-white text-[#315C3A] hover:bg-[#EAF5EC] rounded-full font-bold text-sm shadow-md transition-colors"
            >
              Get Free Estimate
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 bg-transparent border border-white text-white hover:bg-white/10 rounded-full font-bold text-sm transition-colors"
            >
              Contact Our Croydon Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
