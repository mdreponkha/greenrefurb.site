import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ServiceIcon } from '../components/ServiceIcon';
import { ArrowRight, Search, Sparkles, CheckCircle2 } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { services, navigate, openQuoteModal } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = services
    .filter(s => s.published)
    .filter(s => {
      if (selectedCategory !== 'all' && s.category !== selectedCategory) {
        return false;
      }
      if (
        searchQuery &&
        !s.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    });

  return (
    <div className="w-full py-12 lg:py-20 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
            <span>London & Croydon Property Specialists</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#202820] tracking-tight mb-4">
            Our Refurbishment & Decorating Services
          </h1>
          <p className="text-stone-600 text-base">
            From single-room painting to multi-trade turnkey house refurbishments, explore our complete scope of services delivered by certified UK professionals.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white p-4 rounded-2xl border border-[#DCEBDD] shadow-xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'painting', label: 'Painting & Decorating' },
              { id: 'refurbishment', label: 'Refurbishment & Upgrades' },
              { id: 'carpentry', label: 'Carpentry & Joinery' },
              { id: 'trades', label: 'Plumbing & Electrical' },
              { id: 'interiors', label: 'Wardrobes & Kitchens' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#315C3A] text-white'
                    : 'bg-[#F8FAF8] text-stone-600 hover:bg-[#EAF5EC] hover:text-[#315C3A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#DCEBDD]">
            <p className="text-stone-500 text-sm">No services found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-2xl bg-white/95 backdrop-blur-xs text-[#315C3A] flex items-center justify-center shadow-md">
                      <ServiceIcon name={service.icon} className="w-5 h-5 text-[#315C3A]" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-[#202820] group-hover:text-[#315C3A] transition-colors mb-2">
                      {service.title}
                    </h2>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6FAF7B] shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-2">
                  <button
                    onClick={() => navigate(`/services/${service.slug}`)}
                    className="flex-1 py-2.5 px-4 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 bg-[#EAF5EC] text-[#315C3A] group-hover:bg-[#315C3A] group-hover:text-white cursor-pointer"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => openQuoteModal(service.title)}
                    className="py-2.5 px-3 rounded-xl font-semibold text-xs border border-[#DCEBDD] text-[#202820] hover:bg-[#F8FAF8]"
                    title="Get Free Quote"
                  >
                    Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
