import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ArrowRight, Eye, MapPin, Calendar, Tag } from 'lucide-react';

interface OurWorkPageProps {
  initialCategory?: 'Residential' | 'Commercial';
}

export const OurWorkPage: React.FC<OurWorkPageProps> = ({ initialCategory }) => {
  const { projects, openLightbox, openQuoteModal } = useApp();
  const [selectedFilter, setSelectedFilter] = useState<string>(initialCategory || 'All');

  useEffect(() => {
    if (initialCategory) {
      setSelectedFilter(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    'All',
    'Residential',
    'Commercial',
    'Interior',
    'Exterior',
    'Refurbishment'
  ];

  const filteredProjects = projects
    .filter(p => p.published)
    .filter(p => selectedFilter === 'All' || p.category === selectedFilter);

  return (
    <div className="w-full py-12 lg:py-20 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
            <span>London Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#202820] tracking-tight mb-4">
            Our Work & Recent Projects
          </h1>
          <p className="text-stone-600 text-base">
            Explore our showcase of residential renovations, commercial office fit-outs, heritage decorating, and custom joinery completed across London and Surrey.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#315C3A] text-white shadow-sm'
                  : 'bg-white border border-[#DCEBDD] text-stone-700 hover:bg-[#EAF5EC] hover:text-[#315C3A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Main Cover Image */}
                <div
                  className="relative aspect-[16/11] overflow-hidden cursor-pointer bg-stone-100"
                  onClick={() => openLightbox(project.coverImage)}
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-xs text-[#202820] text-xs font-bold rounded-full flex items-center gap-1.5 shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      View Lightbox
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-xs font-bold text-[#315C3A] px-3 py-1 rounded-full shadow-xs">
                    {project.category}
                  </span>
                </div>

                {/* Additional thumbnail strip if multiple images */}
                {project.images && project.images.length > 1 && (
                  <div className="flex gap-1.5 p-3 pb-0 bg-stone-50 border-b border-stone-100 overflow-x-auto">
                    {project.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Project shot ${idx + 1}`}
                        onClick={() => openLightbox(img)}
                        className="w-14 h-11 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border border-stone-200 shrink-0"
                      />
                    ))}
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#6FAF7B]" />
                      {project.location}
                    </span>
                    {project.completionDate && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#6FAF7B]" />
                        {project.completionDate}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#202820] group-hover:text-[#315C3A] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => openQuoteModal(`Refurbishment similar to: ${project.title}`)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#EAF5EC] text-[#315C3A] group-hover:bg-[#315C3A] group-hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Similar Refurbishment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Call to action */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-[#DCEBDD] text-center max-w-4xl mx-auto shadow-xs">
          <h3 className="text-2xl font-bold text-[#202820] mb-3">
            Have a Specific Refurbishment Project in Mind?
          </h3>
          <p className="text-sm text-stone-600 max-w-xl mx-auto mb-6">
            We are always happy to review architectural drawings, property surveys, or scope specifications for residential and commercial works.
          </p>
          <button
            onClick={() => openQuoteModal()}
            className="px-8 py-3.5 bg-[#315C3A] text-white rounded-full font-semibold text-sm hover:bg-[#202820] transition-colors"
          >
            Request In-Person Site Assessment
          </button>
        </div>
      </div>
    </div>
  );
};
