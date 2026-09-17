import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  Maximize2,
  Utensils,
  Layers,
  Hammer,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

export const CustomInteriorPage: React.FC = () => {
  const { navigate, openQuoteModal, openLightbox } = useApp();

  const interiorSolutions = [
    {
      title: 'Bespoke Fitted Wardrobes',
      subtitle: 'Floor-to-ceiling alcove & dressing room joinery',
      description: 'Custom manufactured to fit the unique geometry of London period properties and loft extensions. Featuring integrated LED sensor lighting, soft-close Blum hardware, custom shoe racks, and hand-painted finishes in your chosen designer shade.',
      image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
      serviceSlug: 'bespoke-wardrobes',
      features: [
        'Built-in chimney breast alcove integration',
        'Shaker, fluted, slatted, or contemporary flat doors',
        'Internal LED strip lighting and velvet drawer dividers',
        'Hand-finished with low-VOC eggshell or satin lacquer'
      ]
    },
    {
      title: 'Turnkey Kitchen Installation',
      subtitle: 'Modern & traditional fitted kitchens tailored for living',
      description: 'Precision kitchen fitting from initial strip-out to final splashback sealing. We handle first-fix electrical re-routing, plumbing, bespoke quartz and solid oak worktops, and premium integrated appliances.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      serviceSlug: 'kitchen-installation',
      features: [
        'Howdens, Magnet, Wren, or bespoke cabinetry assembly',
        'Seamless quartz waterfall islands & granite worktops',
        'Full plumbing, gas, and electrical appliance certification',
        'Herringbone, metro, and feature splashback tiling'
      ]
    },
    {
      title: 'Built-in Architectural Storage',
      subtitle: 'Living room alcoves, bookcases & under-stair units',
      description: 'Transform dead space into beautiful, functional storage. We build custom media walls with concealed cabling, traditional floating bookshelves, and push-to-open under-stair pullout shoe and coat drawers.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      serviceSlug: 'carpentry',
      features: [
        'Living room floating media walls with hidden wire channels',
        'Floor-to-ceiling library shelving and reading nooks',
        'Under-stair sliding pull-out pantry & shoe storage',
        'Moisture-resistant Medite Premier MDF construction'
      ]
    },
    {
      title: 'Custom Furniture & Timber Joinery',
      subtitle: 'Handcrafted tables, banquette seating & radiator covers',
      description: 'Made-to-order timber elements crafted by our London joiners. From custom dining banquettes with lift-up storage to architectural radiator cabinets with brass mesh grilles and decorative cornice trims.',
      image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80',
      serviceSlug: 'carpentry',
      features: [
        'Bespoke dining banquette seating with upholstered cushions',
        'Made-to-measure decorative radiator cabinets with grille inserts',
        'Solid oak and walnut worktops with durable oil sealants',
        'Custom partition slatted room dividers and acoustic panelling'
      ]
    },
    {
      title: 'Complete Interior Renovation',
      subtitle: 'End-to-end space transformation and modernisations',
      description: 'From layout overhauls to luxury finishes, our multi-skilled team coordinates structural knock-throughs, plastering, custom woodwork, lighting design, and decorating into a seamless project experience.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      serviceSlug: 'property-refurbishment',
      features: [
        'Partition wall reconfiguration & open-plan living',
        'Level 5 skim plastering and microcement feature walls',
        'Architectural lighting schemes and smart switching',
        'Comprehensive project management with milestone inspections'
      ]
    }
  ];

  return (
    <div className="w-full py-12 lg:py-20 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
            <span>Tailored Living Spaces</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#202820] tracking-tight mb-4">
            Custom Interior Solutions
          </h1>
          <p className="text-stone-600 text-base">
            Bespoke fitted furniture, custom architectural joinery, and tailored interior renovation crafted to make the most of every square foot of your London home.
          </p>
        </div>

        {/* Interior Cards List */}
        <div className="space-y-12">
          {interiorSolutions.map((solution, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 relative aspect-[16/11] lg:aspect-auto overflow-hidden bg-stone-100 cursor-pointer ${
                  idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}
                onClick={() => openLightbox(solution.image)}
              >
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Column */}
              <div
                className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between ${
                  idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
                    {solution.subtitle}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#202820] mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {solution.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                        <CheckCircle className="w-4 h-4 text-[#6FAF7B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#DCEBDD]">
                  <button
                    onClick={() => openQuoteModal(solution.title)}
                    className="px-6 py-2.5 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full font-semibold text-xs shadow-xs transition-colors"
                  >
                    Request Custom Design Consultation
                  </button>
                  <button
                    onClick={() => navigate(`/services/${solution.serviceSlug}`)}
                    className="px-5 py-2.5 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] rounded-full font-semibold text-xs transition-colors flex items-center gap-1.5"
                  >
                    <span>Full Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
