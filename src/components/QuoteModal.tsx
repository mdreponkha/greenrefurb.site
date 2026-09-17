import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle, Sparkles, Send, ShieldCheck } from 'lucide-react';

export const QuoteModal: React.FC = () => {
  const {
    isQuoteModalOpen,
    closeQuoteModal,
    quotePreselectedService,
    services,
    addEnquiry
  } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: quotePreselectedService || 'Interior Painting',
    propertyType: 'Residential Flat / House',
    postcode: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Update service if preselected changed
  React.useEffect(() => {
    if (quotePreselectedService) {
      setFormData(prev => ({ ...prev, service: quotePreselectedService }));
    }
  }, [quotePreselectedService]);

  if (!isQuoteModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      addEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        propertyType: formData.propertyType,
        postcode: formData.postcode,
        message: formData.message || `Quote request for ${formData.service} at ${formData.postcode}`
      });

      setSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    closeQuoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#DCEBDD] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#EAF5EC] to-[#F8FAF8] p-6 border-b border-[#DCEBDD] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#6FAF7B] text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#202820]">Request a Free Quote</h3>
              <p className="text-xs text-stone-500">Fast, itemised estimates within 24 hours</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white text-stone-400 hover:text-stone-700 flex items-center justify-center border border-stone-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#EAF5EC] text-[#315C3A] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9 text-[#6FAF7B]" />
              </div>
              <h4 className="text-xl font-bold text-[#202820]">Thank You!</h4>
              <p className="text-sm text-stone-600 max-w-sm mx-auto">
                Your request has been received by our estimating team. An estimator will review your details and contact you shortly.
              </p>
              <div className="p-4 bg-[#F8FAF8] rounded-2xl border border-[#DCEBDD] text-xs text-stone-600 inline-block text-left">
                <p><strong>Service:</strong> {formData.service}</p>
                <p><strong>Postcode:</strong> {formData.postcode || 'London & Surrounding'}</p>
                <p><strong>Direct Desk:</strong> 020 8123 4567</p>
              </div>
              <div>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 bg-[#315C3A] text-white text-sm font-semibold rounded-full hover:bg-[#202820] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#6FAF7B] focus:ring-1 focus:ring-[#6FAF7B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 07700 900123"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#6FAF7B] focus:ring-1 focus:ring-[#6FAF7B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.co.uk"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#6FAF7B] focus:ring-1 focus:ring-[#6FAF7B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    Property Postcode
                  </label>
                  <input
                    type="text"
                    value={formData.postcode}
                    onChange={e => setFormData({ ...formData, postcode: e.target.value })}
                    placeholder="e.g. CR0 2PH"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#6FAF7B] focus:ring-1 focus:ring-[#6FAF7B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    Required Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm bg-white focus:outline-none focus:border-[#6FAF7B] focus:ring-1 focus:ring-[#6FAF7B]"
                  >
                    {services.map(s => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Property Refurbishment">
                      Full Property Refurbishment
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm bg-white focus:outline-none focus:border-[#6FAF7B] focus:ring-1 focus:ring-[#6FAF7B]"
                  >
                    <option value="Residential Flat / House">Residential Flat / House</option>
                    <option value="Victorian / Period Home">Victorian / Period Home</option>
                    <option value="Commercial Office / Retail">Commercial Office / Retail</option>
                    <option value="Rental / Landlord Property">Rental / Landlord Property</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202820] mb-1">
                  Brief Project Description
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the rooms, approximate dimensions, or any specific deadlines..."
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#6FAF7B] focus:ring-1 focus:ring-[#6FAF7B]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-[#315C3A] hover:bg-[#202820] text-white font-semibold text-sm rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? 'Sending Request...' : 'Send Free Quote Request'}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6FAF7B]" />
                <span>No spam. Your contact details are kept strictly private.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
