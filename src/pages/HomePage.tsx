import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  Sparkles,
  Home,
  Building2,
  Hammer,
  Wrench,
  Layers,
  Paintbrush,
  Brush,
  Clock,
  AlertCircle,
  MessageCircle,
  Check,
  Maximize2
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const {
    homepage,
    settings,
    services,
    projects,
    testimonials,
    navigate,
    openQuoteModal,
    openLightbox
  } = useApp();

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [selectedProjectFilter, setSelectedProjectFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Exterior'>('All');

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex] || testimonials[0];

  const filteredProjects = selectedProjectFilter === 'All'
    ? projects.slice(0, 3)
    : projects.filter(p => p.category.toLowerCase().includes(selectedProjectFilter.toLowerCase())).slice(0, 3);

  const oddJobItems = [
    'Hanging mirrors, pictures & heavy artwork',
    'Replacing door handles, latches, locks & hinges',
    'Bathroom & kitchen silicone sealant resealing',
    'Fitting curtains, blinds, curtain poles & tracks',
    'TV wall mounting & concealed cable management',
    'Alcove shelving & bracket installation',
    'Flat-pack cupboard adjustments & drawer realignment',
    'Grouting touch-ups, minor carpentry & draft proofing'
  ];

  return (
    <div className="w-full text-[#202820]">
      {/* 1. HERO SECTION ("Expert Painters and Decorators in London") */}
      <section className="relative bg-[#F8FAF8] border-b border-[#DCEBDD] overflow-hidden pt-10 pb-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left: Headline, Lead & Primary CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5EC] border border-[#DCEBDD] text-xs font-semibold text-[#315C3A]">
                <Sparkles className="w-4 h-4 text-[#6FAF7B]" />
                <span>London & Surrey’s Trusted Decorators • Over 20 Years Experience</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#202820] leading-[1.15]">
                {homepage.heroHeadline || 'Expert Painters and Decorators in London'}
              </h1>

              {/* Lead Paragraph 1 */}
              <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-normal">
                {homepage.heroSubheading ||
                  'Welcome to Green Refurb – your trusted team of professional painters and decorators serving London and the surrounding areas. We specialise in residential and commercial painting and decorating, delivering high-quality workmanship, reliable service, and attention to detail on every project.'}
              </p>

              {/* Lead Paragraph 2 */}
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                Whether you’re looking to refresh a single room or completely renovate your property, we offer a reliable, high-quality, and cost-effective service tailored to your needs. From preparation to the final coat, we ensure clean lines, durable finishes, and minimal disruption to your home or business.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => openQuoteModal()}
                  className="px-8 py-4 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full font-semibold text-base shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{homepage.heroCtaQuoteText || 'Get a Free Quote'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                  className="px-8 py-4 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] border border-[#DCEBDD] rounded-full font-semibold text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#6FAF7B]" />
                  <span>Call {settings.phone}</span>
                </a>
              </div>

              {/* Trust Metric Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#DCEBDD]/80">
                <div className="bg-white/80 rounded-2xl p-3.5 border border-[#DCEBDD]">
                  <div className="text-2xl font-extrabold text-[#315C3A]">20+</div>
                  <div className="text-xs text-stone-600 font-medium mt-0.5">Years Experience</div>
                </div>
                <div className="bg-white/80 rounded-2xl p-3.5 border border-[#DCEBDD]">
                  <div className="text-2xl font-extrabold text-[#315C3A]">850+</div>
                  <div className="text-xs text-stone-600 font-medium mt-0.5">Projects Delivered</div>
                </div>
                <div className="bg-white/80 rounded-2xl p-3.5 border border-[#DCEBDD]">
                  <div className="text-2xl font-extrabold text-[#315C3A]">99%</div>
                  <div className="text-xs text-stone-600 font-medium mt-0.5">Client Satisfaction</div>
                </div>
                <div className="bg-white/80 rounded-2xl p-3.5 border border-[#DCEBDD]">
                  <div className="text-2xl font-extrabold text-[#315C3A]">£5M</div>
                  <div className="text-xs text-stone-600 font-medium mt-0.5">Fully Insured</div>
                </div>
              </div>
            </div>

            {/* Right: Visual Showcase Card with Trust Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xl bg-white aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5]">
                <img
                  src={homepage.heroImage || 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80'}
                  alt="Expert painters and decorators in London"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Bottom Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#315C3A]/90 backdrop-blur-xs text-xs font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
                    <span>Certified Quality Finish</span>
                  </div>
                  <p className="text-sm font-medium text-white/95 leading-snug">
                    Specialist trade preparation, dust-free sanding, and precision decorative finishes for London properties.
                  </p>
                </div>
              </div>

              {/* Floating Guarantee Badge */}
              <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white rounded-2xl p-4 shadow-lg border border-[#DCEBDD] flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#6FAF7B]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#202820]">2-Year Workmanship</div>
                  <div className="text-[11px] text-stone-500">Comprehensive warranty included</div>
                </div>
              </div>

              {/* Floating 5-Star Rating Badge */}
              <div className="absolute -top-4 -right-4 sm:right-4 bg-white rounded-2xl p-3.5 shadow-lg border border-[#DCEBDD] flex items-center gap-2.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs font-bold text-[#202820]">5.0 London Rated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERIOR PAINTING SECTION */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A]">
                <Paintbrush className="w-3.5 h-3.5 text-[#6FAF7B]" />
                <span>Specialist Interior Painting Services</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202820] tracking-tight">
                Interior Painting
              </h2>

              <p className="text-stone-600 text-base leading-relaxed">
                We provide professional interior painting services for clients in London, serving local businesses and nationwide contractors. Our team of experienced painters specializes in sectors such as healthcare, hotels, education, and leisure, ensuring the highest quality finish without unnecessary delays – we complete works outside regular hours to minimize disruption.
              </p>

              {/* Feature Highlights with Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'Walls, ceilings & high-opacity emulsions',
                  'Woodwork, skirting boards & architraves',
                  'Kitchen cabinet respraying & hand finishing',
                  'Feature walls & luxury architectural finishes',
                  'Dustless sanding with Festool HEPA extraction',
                  'Full room protection & clean daily wrap-up'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 rounded-xl bg-[#F8FAF8] border border-[#DCEBDD]/70">
                    <CheckCircle className="w-4 h-4 text-[#6FAF7B] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#202820]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/services/interior-painting')}
                  className="px-6 py-3 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Explore Interior Painting</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => openQuoteModal('interior-painting')}
                  className="px-6 py-3 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] rounded-full text-sm font-semibold transition-colors cursor-pointer"
                >
                  Get Interior Quote
                </button>
              </div>
            </div>

            {/* Right Images (Dual Visual Stack) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-md aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                  alt="Interior painting London townhouse"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-md aspect-[4/5] mt-8">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Contemporary painted living space"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US? SECTION */}
      <section className="py-20 lg:py-24 bg-[#F8FAF8] border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6FAF7B]" />
              <span>The Green Refurb Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202820] tracking-tight mb-4">
              Why Choose Us?
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              With decades of combined experience across London homes and commercial buildings, we take pride in delivering pristine finishes, complete reliability, and customer peace of mind.
            </p>
          </div>

          {/* 6 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Over 20 Years Experience',
                desc: 'Over 20 years of experience in painting, decorating, and home improvement services across London and Surrey.',
                icon: Clock
              },
              {
                title: 'Interior & Exterior Specialists',
                desc: 'Specialists in interior and exterior painting, wallpapering, plaster repair, woodwork, and timber sash restoration.',
                icon: Paintbrush
              },
              {
                title: 'Fully Insured (£5,000,000)',
                desc: 'Fully insured with comprehensive public liability cover for complete peace of mind on every residential or commercial project.',
                icon: ShieldCheck
              },
              {
                title: 'Premium Trade Materials',
                desc: 'We use premium-grade materials like Dulux Heritage, Johnstone’s Trade, Farrow & Ball, and Zinsser for a long-lasting, wipeable finish.',
                icon: Sparkles
              },
              {
                title: 'Dustless Extraction Tools',
                desc: 'Advanced tools such as Festool HEPA dust-extraction sanders and airless sprayers ensure precision, speed, and clean air.',
                icon: Wrench
              },
              {
                title: 'Punctual, Tidy & Dedicated',
                desc: 'Punctual, tidy, and fully committed to customer satisfaction with transparent fixed-price quotes and zero hidden extras.',
                icon: CheckCircle
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-[#DCEBDD] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#6FAF7B]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#202820] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WALLPAPERING SECTION */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-lg aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional wallpaper hanging in London"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider font-semibold bg-[#315C3A]/90 px-3 py-1 rounded-full backdrop-blur-xs">
                    Artisan Paperhanging
                  </span>
                  <p className="mt-2 text-sm font-medium text-white/95">
                    Bespoke wallpapering for homes and businesses across London.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A]">
                <Layers className="w-3.5 h-3.5 text-[#6FAF7B]" />
                <span>Feature Walls & Designer Coverings</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202820] tracking-tight">
                Wallpapering
              </h2>

              <p className="text-stone-600 text-base leading-relaxed">
                Professional wallpapering services in London. Our team of experienced specialists delivers precise wallpaper installations, from accurate measurements to flawless finishing, using premium materials for a stunning effect in your space. Bespoke wallpapering for homes and businesses in London.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Designer & luxury wallcoverings (Farrow & Ball, Cole & Son, Morris & Co.)',
                  'Wide-width commercial vinyls & textured fabric papers',
                  'Digital murals & complex geometric pattern matching with invisible seams',
                  'Thorough substrate preparation, old paper stripping & 1400-grade lining'
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#6FAF7B] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#202820]">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/services/wallpapering')}
                  className="px-6 py-3 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Explore Wallpapering</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => openQuoteModal('wallpapering')}
                  className="px-6 py-3 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] rounded-full text-sm font-semibold transition-colors cursor-pointer"
                >
                  Request Wallpapering Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXTERIOR PAINTING SECTION */}
      <section className="py-20 lg:py-24 bg-[#F8FAF8] border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
              <Brush className="w-3.5 h-3.5 text-[#6FAF7B]" />
              <span>Weather-Resistant Masonry & Facades</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202820] tracking-tight mb-4">
              Exterior painting
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Professional exterior painting in London – doors, facades, windows with special care for sash windows, railings, and fences. We use premium weather-resistant paints for durable and aesthetic finishes on every element.
            </p>
            <p className="text-sm font-semibold text-[#315C3A] mt-2">
              We specialise in precise painting of traditional sash windows and heritage facades, preserving historical character with modern protective coatings.
            </p>
          </div>

          {/* 3 Columns for Exterior Specialties */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xs hover:shadow-md transition-all">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                  alt="Traditional sash windows painting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#202820] mb-2">
                  Traditional Sash Windows
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Careful rot repair, draft proofing, putty restoration, and smooth weather-shield coatings on classic multi-pane timber frames.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xs hover:shadow-md transition-all">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80"
                  alt="London townhouse exterior masonry"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#202820] mb-2">
                  Masonry & Render Coatings
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Fungicidal wash, crack sealing, and breathable micro-porous masonry paint engineered to repel harsh UK rain and frost.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xs hover:shadow-md transition-all">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                  alt="Front doors, railings and fences"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#202820] mb-2">
                  Doors, Railings & Fences
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  High-gloss front door refinishing, wrought iron railings rust treatment, gates, and timber perimeter fences.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/services/exterior-painting')}
              className="px-8 py-3.5 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full font-semibold text-sm shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Full Exterior Painting Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. INSTALLATIONS AND BESPOKE WARDROBES SECTION */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
              <Hammer className="w-3.5 h-3.5 text-[#6FAF7B]" />
              <span>Tailored Timber Joinery & Assembly</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202820] tracking-tight mb-4">
              Installations and Bespoke wardrobes
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              From precision flat-pack assembly to bespoke architectural wardrobe cabinetry built around your exact alcoves and ceiling heights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Flat Pack Assembly */}
            <div className="bg-[#F8FAF8] rounded-3xl p-8 sm:p-10 border border-[#DCEBDD] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6 text-[#6FAF7B]" />
                </div>
                <h3 className="text-2xl font-bold text-[#202820] mb-3">
                  Flat Pack Furniture Assembly
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  We provide professional flat pack furniture assembly, following manufacturer guidelines and high quality standards. We ensure accuracy, stability, and a clean, finished look.
                </p>

                <div className="space-y-2.5 mb-8">
                  {[
                    'Assembly for IKEA (PAX, Hemnes, BESTÅ), Wayfair, John Lewis & MADE',
                    'Safe structural anchoring to plasterboard or brick walls',
                    'Precise door alignment, level adjustment & drawer tracks',
                    'All cardboard, plastic & packaging cleanly removed'
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#6FAF7B] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-stone-700">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openQuoteModal('flat-pack-assembly')}
                className="w-full py-3 px-6 rounded-full font-semibold text-xs bg-white hover:bg-[#EAF5EC] text-[#315C3A] border border-[#DCEBDD] transition-colors cursor-pointer"
              >
                Book Furniture Assembly
              </button>
            </div>

            {/* Card 2: Bespoke Wardrobes */}
            <div className="bg-[#F8FAF8] rounded-3xl p-8 sm:p-10 border border-[#DCEBDD] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center mb-6">
                  <Hammer className="w-6 h-6 text-[#6FAF7B]" />
                </div>
                <h3 className="text-2xl font-bold text-[#202820] mb-3">
                  Bespoke Fitted Wardrobes
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  We design and build bespoke wardrobes, perfectly tailored to your space and personal requirements. Our focus is on functionality, seamless alcove fitting, and luxury finishes.
                </p>

                <div className="space-y-2.5 mb-8">
                  {[
                    'Floor-to-ceiling built-ins fitting period chimney alcoves',
                    'Integrated warm-white LED lighting with sensor triggers',
                    'Shaker, minimalist flat, or reeded door finishes with premium brassware',
                    'Custom interior hanging rails, shoe racks & velvet drawer inserts'
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#6FAF7B] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-stone-700">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => navigate('/services/bespoke-wardrobes')}
                className="w-full py-3 px-6 rounded-full font-semibold text-xs bg-[#315C3A] hover:bg-[#202820] text-white transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explore Bespoke Wardrobes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOME IMPROVEMENTS SECTION */}
      <section className="py-20 lg:py-24 bg-[#F8FAF8] border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
              <Home className="w-3.5 h-3.5 text-[#6FAF7B]" />
              <span>General Building & Property Upgrades</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202820] tracking-tight mb-4">
              Home Improvements
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              We provide a wide range of interior and exterior home improvement services, including tiling, partition walls, and general building works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1: Tiling */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                    alt="Wall and floor tiling"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#202820] mb-2">
                    Floor & Wall Tiling
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Precision installation of porcelain, ceramic, natural stone, metro, and herringbone tiles for bathrooms, kitchens, and hallway floors.
                  </p>
                  <ul className="text-xs text-stone-500 space-y-1.5">
                    <li>• Subfloor levelling & waterproofing tanking</li>
                    <li>• Precision cuts around pipework & sanitaryware</li>
                    <li>• Anti-mould epoxy and flexible cement grouting</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => openQuoteModal('tiling')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] transition-colors cursor-pointer"
                >
                  Request Tiling Quote
                </button>
              </div>
            </div>

            {/* 2: Partition Walls */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                    alt="Partition walls and drylining"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#202820] mb-2">
                    Partition Walls & Drylining
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Timber and metal stud wall construction, acoustic insulation batts, drylining, and ultra-smooth plasterboard skim finishes.
                  </p>
                  <ul className="text-xs text-stone-500 space-y-1.5">
                    <li>• Creating ensuite bathrooms & home offices</li>
                    <li>• Acoustic rockwool sound insulation</li>
                    <li>• Skim plastering ready for immediate painting</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => openQuoteModal('partition-walls')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] transition-colors cursor-pointer"
                >
                  Request Drylining Quote
                </button>
              </div>
            </div>

            {/* 3: General Building Works */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                    alt="General building and refurbishment"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#202820] mb-2">
                    General Building Works
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Turnkey property improvements including door hanging, skirting replacement, architraves, minor plumbing, and whole-home modernisations.
                  </p>
                  <ul className="text-xs text-stone-500 space-y-1.5">
                    <li>• Complete room refurbishment and joinery</li>
                    <li>• Kitchen fitting and worktop installations</li>
                    <li>• Dedicated project supervisor on every job</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => navigate('/services/home-improvements')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#315C3A] hover:bg-[#202820] text-white transition-colors cursor-pointer"
                >
                  View All Improvements
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. REPAIRS AND EMERGENCIES SECTION */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAF8] rounded-3xl p-8 sm:p-12 border border-[#DCEBDD] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
                  <AlertCircle className="w-3.5 h-3.5 text-red-600" />
                  <span>Fast Response Service</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202820] tracking-tight">
                  Repairs and Emergencies
                </h2>

                <p className="text-stone-700 text-base leading-relaxed">
                  We provide fast and reliable repair services following water damage, leaks, and other unexpected property issues. Our team handles damp treatment, mould removal, and restoration work to protect your property and restore a healthy environment. We respond promptly to minimise further damage and ensure safe, long-lasting repairs.
                </p>

                {/* 4 Emergency Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-2xl border border-[#DCEBDD]">
                    <div className="text-xs font-bold text-[#315C3A]">1. Prompt Assessment</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">Rapid inspection & moisture source isolation</div>
                  </div>
                  <div className="p-3 bg-white rounded-2xl border border-[#DCEBDD]">
                    <div className="text-xs font-bold text-[#315C3A]">2. Mould & Stain Treatment</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">Anti-fungal wash & stain-blocking primers</div>
                  </div>
                  <div className="p-3 bg-white rounded-2xl border border-[#DCEBDD]">
                    <div className="text-xs font-bold text-[#315C3A]">3. Plaster Restoration</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">Cutting out damaged drywall & re-skimming</div>
                  </div>
                  <div className="p-3 bg-white rounded-2xl border border-[#DCEBDD]">
                    <div className="text-xs font-bold text-[#315C3A]">4. Decorative Blending</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">Seamless colour-matched paint application</div>
                  </div>
                </div>
              </div>

              {/* Action Hotline */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-[#DCEBDD] text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center mx-auto">
                  <Phone className="w-7 h-7 text-[#6FAF7B]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#202820]">Emergency Contact</h3>
                  <p className="text-xs text-stone-500 mt-1">Direct line for urgent property repairs</p>
                  <div className="text-xl font-extrabold text-[#315C3A] mt-2">
                    {settings.phone}
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <a
                    href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                    className="w-full py-3 px-4 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <button
                    onClick={() => openQuoteModal('emergency-repairs')}
                    className="w-full py-3 px-4 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] rounded-full text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Book Urgent Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ODD JOBS SECTION */}
      <section className="py-20 lg:py-24 bg-[#F8FAF8] border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A]">
                <Wrench className="w-3.5 h-3.5 text-[#6FAF7B]" />
                <span>Handyman & Maintenance</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202820] tracking-tight">
                Odd Jobs
              </h2>

              <p className="text-stone-600 text-base leading-relaxed">
                We take care of small but important household tasks, from hanging mirrors and pictures to replacing hinges, handles, and fittings. Our handyman services are ideal for quick fixes and finishing touches around your home or property. Every job is completed efficiently, neatly, and with attention to detail.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => openQuoteModal('odd-jobs')}
                  className="px-8 py-3.5 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full font-semibold text-sm shadow-xs hover:shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Handyman / Odd Job Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Checklist Box */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-[#DCEBDD] shadow-xs">
              <h3 className="text-base font-bold text-[#202820] mb-4 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6FAF7B]" />
                <span>Common Tasks We Regularly Handle:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {oddJobItems.map((job, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F8FAF8] border border-[#DCEBDD]/80">
                    <CheckCircle className="w-4 h-4 text-[#6FAF7B] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-stone-700">{job}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. OUR SERVICES (THE 4 CORE PILLARS GRID) */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
              <span>Trade Divisions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202820] tracking-tight mb-4">
              Our services
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Comprehensive property solutions delivered by certified London trade professionals with strict quality controls.
            </p>
          </div>

          {/* 4 Primary Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1: Professional Exterior Painters London */}
            <div className="bg-[#F8FAF8] rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-stone-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80"
                    alt="Professional Exterior Painters London"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#315C3A]">
                    <Brush className="w-4 h-4 text-[#315C3A]" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#202820] group-hover:text-[#315C3A] transition-colors mb-2">
                    Professional Exterior Painters London
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    From preparation to the final coat, we deliver long-lasting exterior painting and decorating services across London.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="text-[10px] px-2 py-0.5 bg-white rounded border border-[#DCEBDD] text-stone-600">Sash Windows</span>
                    <span className="text-[10px] px-2 py-0.5 bg-white rounded border border-[#DCEBDD] text-stone-600">Weather-Shield</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => navigate('/services/exterior-painting')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#EAF5EC] group-hover:bg-[#315C3A] group-hover:text-white text-[#315C3A] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 2: London Interior Painting & Decorating */}
            <div className="bg-[#F8FAF8] rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-stone-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
                    alt="London Interior Painting & Decorating"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#315C3A]">
                    <Paintbrush className="w-4 h-4 text-[#315C3A]" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#202820] group-hover:text-[#315C3A] transition-colors mb-2">
                    London Interior Painting & Decorating
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    From touch-ups and repairs to complete interior transformations, we’ve got you covered.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="text-[10px] px-2 py-0.5 bg-white rounded border border-[#DCEBDD] text-stone-600">Dustless Sanding</span>
                    <span className="text-[10px] px-2 py-0.5 bg-white rounded border border-[#DCEBDD] text-stone-600">Woodwork</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => navigate('/services/interior-painting')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#EAF5EC] group-hover:bg-[#315C3A] group-hover:text-white text-[#315C3A] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 3: Home Painting & Decorating Services */}
            <div className="bg-[#F8FAF8] rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-stone-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
                    alt="Home Painting & Decorating Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#315C3A]">
                    <Home className="w-4 h-4 text-[#315C3A]" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#202820] group-hover:text-[#315C3A] transition-colors mb-2">
                    Home Painting & Decorating Services
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    Our team provides expert painting and decorating solutions for houses, flats, apartments, and bungalows across London.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="text-[10px] px-2 py-0.5 bg-white rounded border border-[#DCEBDD] text-stone-600">Residential</span>
                    <span className="text-[10px] px-2 py-0.5 bg-white rounded border border-[#DCEBDD] text-stone-600">Period Homes</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => navigate('/services/residential-painting')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#EAF5EC] group-hover:bg-[#315C3A] group-hover:text-white text-[#315C3A] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 4: Commercial Painters & Decorators */}
            <div className="bg-[#F8FAF8] rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-stone-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                    alt="Commercial Painters & Decorators"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#315C3A]">
                    <Building2 className="w-4 h-4 text-[#315C3A]" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#202820] group-hover:text-[#315C3A] transition-colors mb-2">
                    Commercial Painters & Decorators
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    We specialise in bespoke painting and decorating for businesses of all kinds, with expert project management from start to finish.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="text-[10px] px-2 py-0.5 bg-white rounded border border-[#DCEBDD] text-stone-600">Out of Hours</span>
                    <span className="text-[10px] px-2 py-0.5 bg-white rounded border border-[#DCEBDD] text-stone-600">Offices & Retail</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => navigate('/services/commercial-painting')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#EAF5EC] group-hover:bg-[#315C3A] group-hover:text-white text-[#315C3A] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/services')}
              className="text-xs font-bold text-[#315C3A] hover:text-[#202820] transition-colors inline-flex items-center gap-1"
            >
              <span>View all 14 specialist refurbishment & decoration services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 11. FEATURED PROJECTS PORTFOLIO */}
      <section className="py-20 lg:py-24 bg-[#F8FAF8] border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
                <span>Recent London Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202820] tracking-tight">
                Featured Projects
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              {(['All', 'Residential', 'Commercial', 'Exterior'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedProjectFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    selectedProjectFilter === cat
                      ? 'bg-[#315C3A] text-white'
                      : 'bg-white text-stone-600 border border-[#DCEBDD] hover:bg-[#EAF5EC]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xs hover:shadow-md transition-all group"
              >
                <div
                  className="aspect-[16/11] overflow-hidden cursor-pointer relative"
                  onClick={() => openLightbox(project.coverImage, project.title)}
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-white/90 text-[#315C3A] shadow-md">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-xs font-bold text-[#315C3A] px-3 py-1 rounded-full shadow-xs">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-xs font-medium text-stone-400 mb-1">
                    {project.location} • {project.completionDate}
                  </div>
                  <h3 className="text-lg font-bold text-[#202820] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <button
                    onClick={() => openLightbox(project.coverImage, project.title)}
                    className="text-xs font-semibold text-[#315C3A] hover:underline cursor-pointer"
                  >
                    View Project Details & Images →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/our-work')}
              className="px-8 py-3.5 bg-white hover:bg-[#EAF5EC] text-[#315C3A] border border-[#DCEBDD] rounded-full font-semibold text-xs transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Full Work Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 12. TESTIMONIALS SLIDER SECTION */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCEBDD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
              <Star className="w-3.5 h-3.5 fill-[#6FAF7B] text-[#6FAF7B]" />
              <span>Verified Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202820] tracking-tight">
              What Our London Clients Say
            </h2>
          </div>

          {currentTestimonial && (
            <div className="relative bg-[#F8FAF8] border border-[#DCEBDD] rounded-3xl p-8 sm:p-12 shadow-xs transition-all duration-300">
              <div className="flex items-center gap-1 mb-6 text-amber-500">
                {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-[#202820] leading-relaxed font-normal mb-8 italic">
                "{currentTestimonial.testimonial}"
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[#DCEBDD]">
                <div className="flex items-center gap-3">
                  {currentTestimonial.photo && (
                    <img
                      src={currentTestimonial.photo}
                      alt={currentTestimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-[#6FAF7B]"
                    />
                  )}
                  <div>
                    <h4 className="font-bold text-sm text-[#202820]">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-xs text-stone-500">
                      {currentTestimonial.location} • {currentTestimonial.serviceUsed}
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-white border border-[#DCEBDD] text-stone-700 hover:bg-[#EAF5EC] hover:text-[#315C3A] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-semibold text-stone-500 px-2">
                    {currentTestimonialIndex + 1} / {testimonials.length}
                  </span>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-white border border-[#DCEBDD] text-stone-700 hover:bg-[#EAF5EC] hover:text-[#315C3A] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 13. FINAL CTA BANNER */}
      <section className="py-16 bg-[#EAF5EC] border-t border-[#DCEBDD] text-[#202820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DCEBDD] text-xs font-semibold text-[#315C3A] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
              <span>Free In-Person Site Survey & Written Estimate</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#202820]">
              Ready to Transform Your London Property?
            </h3>
            <p className="mt-2 text-stone-600 text-sm max-w-xl">
              Get an accurate, transparent, and fixed-price quotation for your painting, decorating, or refurbishment project today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="px-7 py-3.5 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full font-semibold text-sm shadow-sm transition-all whitespace-nowrap cursor-pointer"
            >
              Get a Free Quote Now
            </button>
            <a
              href={`tel:${settings.phone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 bg-white hover:bg-[#F8FAF8] text-[#202820] border border-[#DCEBDD] rounded-full font-semibold text-sm transition-all whitespace-nowrap flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#6FAF7B]" />
              <span>Call {settings.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
