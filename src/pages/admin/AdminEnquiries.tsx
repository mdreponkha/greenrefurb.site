import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ContactEnquiry } from '../../types';
import {
  Trash2,
  Mail,
  Phone,
  Calendar,
  MapPin,
  CheckCircle,
  Clock,
  Search,
  MessageCircle,
  Inbox
} from 'lucide-react';

export const AdminEnquiries: React.FC = () => {
  const { enquiries, updateEnquiryStatus, deleteEnquiry, settings } = useApp();
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [search, setSearch] = useState('');

  const filtered = enquiries.filter(item => {
    if (filterStatus !== 'All' && item.status !== filterStatus) return false;
    if (
      search &&
      !item.name.toLowerCase().includes(search.toLowerCase()) &&
      !item.email.toLowerCase().includes(search.toLowerCase()) &&
      !item.phone.toLowerCase().includes(search.toLowerCase()) &&
      !item.service.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete the enquiry from "${name}"?`)) {
      deleteEnquiry(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#202820]">Customer Enquiries & Leads</h2>
          <p className="text-xs text-stone-500">
            Real-time quote requests and messages submitted by homeowners and business clients
          </p>
        </div>

        <div className="flex items-center gap-2">
          {['All', 'New', 'Contacted', 'Completed'].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                filterStatus === status
                  ? 'bg-[#315C3A] text-white'
                  : 'bg-white border border-[#DCEBDD] text-stone-600 hover:bg-[#EAF5EC]'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Search box */}
      <div className="bg-white p-3.5 rounded-2xl border border-[#DCEBDD] flex items-center gap-2">
        <Search className="w-4 h-4 text-stone-400" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by client name, email, phone, or service..."
          className="w-full text-xs text-[#202820] focus:outline-none"
        />
      </div>

      {/* Enquiries List */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#DCEBDD]">
          <Inbox className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="text-sm font-bold text-[#202820]">No Enquiries Found</h3>
          <p className="text-xs text-stone-500 mt-1">
            {search ? 'Try adjusting your search criteria.' : 'Quote requests submitted through the website will appear here instantly.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(enq => {
            const cleanPhone = enq.phone.replace(/[^0-9]/g, '');
            return (
              <div
                key={enq.id}
                className="bg-white rounded-3xl p-6 border border-[#DCEBDD] shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-bold text-[#202820]">{enq.name}</h3>
                      <select
                        value={enq.status}
                        onChange={e =>
                          updateEnquiryStatus(
                            enq.id,
                            e.target.value as 'New' | 'Contacted' | 'Completed'
                          )
                        }
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full border cursor-pointer ${
                          enq.status === 'New'
                            ? 'bg-rose-50 text-rose-700 border-rose-200'
                            : enq.status === 'Contacted'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        }`}
                      >
                        <option value="New">Status: New</option>
                        <option value="Contacted">Status: Contacted</option>
                        <option value="Completed">Status: Completed</option>
                      </select>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 mt-2">
                      <a
                        href={`tel:${cleanPhone}`}
                        className="flex items-center gap-1.5 hover:text-[#315C3A] font-medium"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#6FAF7B]" />
                        <span>{enq.phone}</span>
                      </a>
                      <a
                        href={`mailto:${enq.email}`}
                        className="flex items-center gap-1.5 hover:text-[#315C3A] font-medium"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#6FAF7B]" />
                        <span>{enq.email}</span>
                      </a>
                      {enq.postcode && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#6FAF7B]" />
                          <span>{enq.postcode}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-stone-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          {enq.createdAt
                            ? new Date(enq.createdAt).toLocaleString('en-GB')
                            : 'Recent'}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`https://wa.me/${cleanPhone}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp Client</span>
                    </a>

                    <button
                      onClick={() => handleDelete(enq.id, enq.name)}
                      className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                      title="Delete Lead"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Scope & Message */}
                <div className="bg-[#F8FAF8] p-4 rounded-2xl border border-stone-100 text-xs">
                  <div className="flex items-center gap-2 mb-2 font-bold text-[#315C3A]">
                    <span>Requested: {enq.service}</span>
                    {enq.propertyType && (
                      <span className="text-stone-400 font-normal">
                        ({enq.propertyType})
                      </span>
                    )}
                  </div>
                  <p className="text-stone-700 leading-relaxed whitespace-pre-wrap">
                    {enq.message}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
