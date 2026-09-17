import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  CheckCircle,
  Award,
  Users,
  Clock,
  Sparkles,
  ArrowRight,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { settings, team, navigate, openQuoteModal } = useApp();

  return (
    <div className="w-full bg-[#F8FAF8]">
      {/* 1. HERO */}
      <section className="relative py-20 lg:py-28 bg-white border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
                <span>Established UK Craftsmen</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#202820] tracking-tight mb-6">
                About Green Refurb
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Based in Croydon and operating throughout Greater London, Green Refurb was founded on a simple premise: to deliver exceptional painting, decorating, and property refurbishment with integrity, punctuality, and pride of workmanship.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed mb-8">
                Over two decades, we have evolved from a specialist decorating firm into a multi-disciplinary property refurbishment contractor. Today, our in-house teams of decorators, carpenters, electricians, and plumbers handle everything from single-room revamps to high-value whole-property transformations.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openQuoteModal()}
                  className="px-7 py-3.5 bg-[#315C3A] hover:bg-[#202820] text-white rounded-full font-semibold text-sm shadow-sm transition-colors"
                >
                  Work With Us
                </button>
                <button
                  onClick={() => navigate('/our-work')}
                  className="px-6 py-3.5 bg-[#EAF5EC] hover:bg-[#DCEBDD] text-[#315C3A] rounded-full font-semibold text-sm transition-colors"
                >
                  View Our Portfolio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#DCEBDD] aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Green Refurb Team Workmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-2xl p-4 shadow-xl border border-[#DCEBDD] flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#6FAF7B] text-white flex items-center justify-center font-bold">
                  20+
                </div>
                <div>
                  <div className="text-xs font-bold text-[#202820]">Years in Business</div>
                  <div className="text-[11px] text-stone-500">Trusted across London & Surrey</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY STATISTICS (Editable from Admin) */}
      <section className="py-14 bg-[#EAF5EC] border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#DCEBDD]">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#315C3A] mb-1">
                {settings.stats.yearsExperience}+
              </div>
              <div className="text-xs font-semibold text-[#202820] uppercase tracking-wider">
                Years Experience
              </div>
              <div className="text-[11px] text-stone-500 mt-1">Professional Workmanship</div>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#DCEBDD]">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#315C3A] mb-1">
                {settings.stats.completedProjects}+
              </div>
              <div className="text-xs font-semibold text-[#202820] uppercase tracking-wider">
                Projects Completed
              </div>
              <div className="text-[11px] text-stone-500 mt-1">Residential & Commercial</div>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#DCEBDD]">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#315C3A] mb-1">
                {settings.stats.satisfactionRate}%
              </div>
              <div className="text-xs font-semibold text-[#202820] uppercase tracking-wider">
                Satisfaction Rate
              </div>
              <div className="text-[11px] text-stone-500 mt-1">Verified Client Reviews</div>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-[#DCEBDD]">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#315C3A] mb-1">
                {settings.stats.qualifiedTradesmen}+
              </div>
              <div className="text-xs font-semibold text-[#202820] uppercase tracking-wider">
                Quality Materials
              </div>
              <div className="text-[11px] text-stone-500 mt-1">Qualified Tradesmen</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH & CRAFTSMANSHIP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#202820] mb-3">
              Our Approach to Every Refurbishment
            </h2>
            <p className="text-stone-600 text-sm">
              We eliminate the stress usually associated with building and decorating works through structured processes and daily communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF8] border border-[#DCEBDD]">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center font-bold text-lg mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-[#202820] mb-3">
                Preparation & Protection
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                A lasting finish is 80% preparation. Before opening a tin of paint or cutting a timber board, we protect your property with heavy-duty floor coverings, seal off dust zones, and repair every hairline imperfection.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF8] border border-[#DCEBDD]">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center font-bold text-lg mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-[#202820] mb-3">
                Quality & Craftsmanship
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We use premium trade materials—including Dulux Trade, Farrow & Ball, Little Greene, and certified structural timbers. Our tradespeople take genuine pride in laser-straight lines, flat plastering, and seamless woodwork joints.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF8] border border-[#DCEBDD]">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center font-bold text-lg mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-[#202820] mb-3">
                Customer Satisfaction & Handover
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We never leave a job with open questions. We walk through the completed property with you, conduct thorough snagging, deep clean the workspace, and provide our 24-month workmanship guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET THE CORE TEAM */}
      <section className="py-20 bg-[#F8FAF8] border-t border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-2">
              <Users className="w-3.5 h-3.5 text-[#6FAF7B]" />
              <span>Leadership</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#202820]">
              The Team Behind Green Refurb
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(member => (
              <div
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#DCEBDD] p-6 text-center shadow-xs"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-[#6FAF7B]"
                />
                <h3 className="text-lg font-bold text-[#202820]">{member.name}</h3>
                <div className="text-xs font-semibold text-[#315C3A] mb-3">{member.role}</div>
                <p className="text-xs text-stone-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US CHECKLIST */}
      <section className="py-20 bg-white border-t border-[#DCEBDD]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EAF5EC] border border-[#DCEBDD] rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-[#202820] mb-6 text-center">
              The Green Refurb Guarantee
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Full Public Liability Insurance up to £5,000,000',
                '24-Month Written Guarantee on all workmanship',
                'Fixed Written Estimates with transparent pricing',
                'Punctual tradespeople on site at 8:00 AM daily',
                'Dustless sanding tools for clean, healthy homes',
                'Eco-friendly and low-VOC paint options available',
                'Waste Carrier License with 95% recycling compliance',
                'Dedicated Project Manager for clear point of contact'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-[#DCEBDD]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#6FAF7B] shrink-0" />
                  <span className="text-xs font-semibold text-[#202820]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
