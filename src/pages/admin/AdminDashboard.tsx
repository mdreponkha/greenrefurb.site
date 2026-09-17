import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Wrench,
  Briefcase,
  Star,
  Image,
  Inbox,
  PlusCircle,
  Edit,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

interface AdminDashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigateTab }) => {
  const {
    services,
    projects,
    testimonials,
    gallery,
    enquiries,
    settings,
    navigate
  } = useApp();

  const newEnquiriesCount = enquiries.filter(e => e.status === 'New').length;

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#EAF5EC] to-white p-6 sm:p-8 rounded-3xl border border-[#DCEBDD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DCEBDD] text-xs font-semibold text-[#315C3A] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
            <span>Green Refurb Web Administration</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#202820]">
            Welcome Back, Admin
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Manage your London services, portfolio projects, client testimonials, and incoming customer leads.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2.5 bg-white border border-[#DCEBDD] text-xs font-bold text-[#202820] hover:bg-[#F8FAF8] rounded-xl flex items-center gap-1.5 shadow-2xs cursor-pointer"
          >
            <span>Preview Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* KPI Cards Grid (5 cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          onClick={() => onNavigateTab('services')}
          className="bg-white p-5 rounded-2xl border border-[#DCEBDD] shadow-2xs hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center">
              <Wrench className="w-5 h-5 text-[#6FAF7B]" />
            </div>
            <span className="text-xs font-semibold text-stone-400 group-hover:text-[#315C3A] transition-colors">
              Manage →
            </span>
          </div>
          <div className="text-2xl font-bold text-[#202820]">{services.length}</div>
          <div className="text-xs font-medium text-stone-500 mt-0.5">Total Services</div>
        </div>

        <div
          onClick={() => onNavigateTab('projects')}
          className="bg-white p-5 rounded-2xl border border-[#DCEBDD] shadow-2xs hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#6FAF7B]" />
            </div>
            <span className="text-xs font-semibold text-stone-400 group-hover:text-[#315C3A] transition-colors">
              Manage →
            </span>
          </div>
          <div className="text-2xl font-bold text-[#202820]">{projects.length}</div>
          <div className="text-xs font-medium text-stone-500 mt-0.5">Projects / Work</div>
        </div>

        <div
          onClick={() => onNavigateTab('testimonials')}
          className="bg-white p-5 rounded-2xl border border-[#DCEBDD] shadow-2xs hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center">
              <Star className="w-5 h-5 text-[#6FAF7B]" />
            </div>
            <span className="text-xs font-semibold text-stone-400 group-hover:text-[#315C3A] transition-colors">
              Manage →
            </span>
          </div>
          <div className="text-2xl font-bold text-[#202820]">{testimonials.length}</div>
          <div className="text-xs font-medium text-stone-500 mt-0.5">Reviews & Ratings</div>
        </div>

        <div
          onClick={() => onNavigateTab('gallery')}
          className="bg-white p-5 rounded-2xl border border-[#DCEBDD] shadow-2xs hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center">
              <Image className="w-5 h-5 text-[#6FAF7B]" />
            </div>
            <span className="text-xs font-semibold text-stone-400 group-hover:text-[#315C3A] transition-colors">
              Manage →
            </span>
          </div>
          <div className="text-2xl font-bold text-[#202820]">{gallery.length}</div>
          <div className="text-xs font-medium text-stone-500 mt-0.5">Gallery Media</div>
        </div>

        <div
          onClick={() => onNavigateTab('enquiries')}
          className="bg-white p-5 rounded-2xl border border-[#DCEBDD] shadow-2xs hover:shadow-md transition-all cursor-pointer group col-span-2 sm:col-span-1"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center">
              <Inbox className="w-5 h-5 text-[#6FAF7B]" />
            </div>
            {newEnquiriesCount > 0 && (
              <span className="px-2 py-0.5 bg-rose-500 text-white text-[10px] font-bold rounded-full animate-pulse">
                {newEnquiriesCount} New
              </span>
            )}
          </div>
          <div className="text-2xl font-bold text-[#202820]">{enquiries.length}</div>
          <div className="text-xs font-medium text-stone-500 mt-0.5">Quote Enquiries</div>
        </div>
      </div>

      {/* Quick Action Shortcuts */}
      <div className="bg-white p-6 rounded-3xl border border-[#DCEBDD]">
        <h2 className="text-sm font-bold text-[#202820] uppercase tracking-wider mb-4">
          Quick Management Actions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <button
            onClick={() => onNavigateTab('services')}
            className="p-3 bg-[#F8FAF8] hover:bg-[#EAF5EC] text-[#202820] hover:text-[#315C3A] border border-[#DCEBDD] rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-[#6FAF7B]" />
            <span>Add New Service</span>
          </button>

          <button
            onClick={() => onNavigateTab('projects')}
            className="p-3 bg-[#F8FAF8] hover:bg-[#EAF5EC] text-[#202820] hover:text-[#315C3A] border border-[#DCEBDD] rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-[#6FAF7B]" />
            <span>Add New Project</span>
          </button>

          <button
            onClick={() => onNavigateTab('gallery')}
            className="p-3 bg-[#F8FAF8] hover:bg-[#EAF5EC] text-[#202820] hover:text-[#315C3A] border border-[#DCEBDD] rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-[#6FAF7B]" />
            <span>Add Gallery Image</span>
          </button>

          <button
            onClick={() => onNavigateTab('testimonials')}
            className="p-3 bg-[#F8FAF8] hover:bg-[#EAF5EC] text-[#202820] hover:text-[#315C3A] border border-[#DCEBDD] rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-[#6FAF7B]" />
            <span>Add Testimonial</span>
          </button>

          <button
            onClick={() => onNavigateTab('homepage')}
            className="p-3 bg-[#F8FAF8] hover:bg-[#EAF5EC] text-[#202820] hover:text-[#315C3A] border border-[#DCEBDD] rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Edit className="w-4 h-4 text-[#6FAF7B]" />
            <span>Edit Homepage Hero</span>
          </button>
        </div>
      </div>

      {/* Recent Contact Enquiries */}
      <div className="bg-white rounded-3xl border border-[#DCEBDD] overflow-hidden shadow-2xs">
        <div className="p-6 border-b border-[#DCEBDD] flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-[#202820]">
              Recent Contact & Quote Inquiries
            </h2>
            <p className="text-xs text-stone-500">
              Customer inquiries submitted via the website quote forms
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('enquiries')}
            className="text-xs font-bold text-[#315C3A] hover:underline"
          >
            View All ({enquiries.length}) →
          </button>
        </div>

        {enquiries.length === 0 ? (
          <div className="p-8 text-center text-xs text-stone-500">
            No inquiries logged yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8FAF8] text-stone-500 font-semibold border-b border-[#DCEBDD]">
                <tr>
                  <th className="px-6 py-3">Client</th>
                  <th className="px-6 py-3">Service & Postcode</th>
                  <th className="px-6 py-3">Message</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {enquiries.slice(0, 5).map(enq => (
                  <tr key={enq.id} className="hover:bg-[#F8FAF8]">
                    <td className="px-6 py-4">
                      <div className="font-bold text-[#202820]">{enq.name}</div>
                      <div className="text-stone-500 text-[11px] flex items-center gap-2 mt-0.5">
                        <span>{enq.phone}</span>
                        <span>•</span>
                        <span>{enq.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-[#315C3A]">{enq.service}</div>
                      <div className="text-stone-400 text-[11px]">{enq.postcode || 'London'}</div>
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate text-stone-600">
                      {enq.message}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          enq.status === 'New'
                            ? 'bg-rose-100 text-rose-700'
                            : enq.status === 'Contacted'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-[#EAF5EC] text-[#315C3A]'
                        }`}
                      >
                        {enq.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-stone-400 text-[11px]">
                      {enq.createdAt ? new Date(enq.createdAt).toLocaleDateString('en-GB') : 'Recent'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
