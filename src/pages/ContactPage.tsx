import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Building,
  ExternalLink
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { settings, services, addEnquiry } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Interior Painting',
    propertyType: 'Residential',
    postcode: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
        message: formData.message
      });

      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Interior Painting',
        propertyType: 'Residential',
        postcode: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  const cleanWhatsApp = settings.whatsappNumber.replace(/[^0-9]/g, '');
  const cleanPhone = settings.phone.replace(/\s+/g, '');

  return (
    <div className="w-full py-12 lg:py-20 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5EC] text-xs font-semibold text-[#315C3A] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#6FAF7B]" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#202820] tracking-tight mb-4">
            Contact Green Refurb
          </h1>
          <p className="text-stone-600 text-base">
            Request your free quotation, discuss an upcoming project, or arrange a site visit at your property in London or Croydon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Details & Quick Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-[#DCEBDD] shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-[#202820]">
                Company Information
              </h2>

              <div className="space-y-4 text-sm text-stone-700">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#6FAF7B]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#202820]">
                      {settings.companyName}
                    </div>
                    <div className="text-stone-600 text-xs mt-0.5 leading-relaxed">
                      {settings.address.line1}<br />
                      {settings.address.line2 && <>{settings.address.line2}<br /></>}
                      {settings.address.postcode}<br />
                      {settings.address.country}
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#6FAF7B]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#202820]">Phone Desk</div>
                    <a
                      href={`tel:${cleanPhone}`}
                      className="text-xs text-[#315C3A] font-semibold hover:underline block mt-0.5"
                    >
                      {settings.phone}
                    </a>
                    <span className="text-[11px] text-stone-400">Direct office & estimators</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#6FAF7B]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#202820]">Email Inquiries</div>
                    <a
                      href={`mailto:${settings.email}`}
                      className="text-xs text-[#315C3A] font-semibold hover:underline block mt-0.5"
                    >
                      {settings.email}
                    </a>
                    <span className="text-[11px] text-stone-400">Response within 24 hours</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#202820]">WhatsApp Direct</div>
                    <a
                      href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
                        'Hi Green Refurb, I would like to request a quote.'
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#25D366] font-semibold hover:underline block mt-0.5"
                    >
                      {settings.whatsappNumber} (Chat Now)
                    </a>
                    <span className="text-[11px] text-stone-400">Send property photos & videos</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EC] text-[#315C3A] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#6FAF7B]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#202820]">Working Hours</div>
                    <div className="text-xs text-stone-600 mt-0.5">
                      {settings.openingHours}
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick CTA Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${cleanWhatsApp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            {/* Quick trust assurances */}
            <div className="bg-[#EAF5EC] p-6 rounded-3xl border border-[#DCEBDD] space-y-2.5 text-xs text-stone-700">
              <div className="flex items-center gap-2 font-bold text-[#315C3A]">
                <ShieldCheck className="w-4 h-4 text-[#6FAF7B]" />
                <span>Green Refurb Commitments:</span>
              </div>
              <p>• Zero obligation, transparent quotations</p>
              <p>• Fast turnaround on all survey visits</p>
              <p>• Fully insured UK trade personnel</p>
            </div>
          </div>

          {/* Right Column: Contact & Quote Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DCEBDD] shadow-xs">
              <h2 className="text-2xl font-bold text-[#202820] mb-2">
                Send Us a Message
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm mb-6">
                Fill in the form below and one of our project estimators will get back to you with guidance and pricing.
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-[#EAF5EC] text-[#315C3A] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-9 h-9 text-[#6FAF7B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#202820]">
                    Thank You for Your Enquiry!
                  </h3>
                  <p className="text-sm text-stone-600 max-w-sm mx-auto">
                    We have received your message. A member of the Green Refurb team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#315C3A] text-white rounded-full text-xs font-semibold hover:bg-[#202820] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#202820] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
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
                        placeholder="07700 900123"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
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
                        placeholder="john@example.co.uk"
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
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
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#202820] mb-1">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-white focus:outline-none focus:border-[#6FAF7B]"
                      >
                        {services.map(s => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Complete Refurbishment">
                          Complete House Refurbishment
                        </option>
                        <option value="Other / Multiple Trades">
                          Other / Multiple Trades
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
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-white focus:outline-none focus:border-[#6FAF7B]"
                      >
                        <option value="Residential">Residential Property</option>
                        <option value="Commercial">Commercial Office / Retail</option>
                        <option value="Landlord Rental">Landlord / Rental Portfolio</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202820] mb-1">
                      Project Details & Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the work required, number of rooms, desired start date, etc."
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#6FAF7B]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 bg-[#315C3A] hover:bg-[#202820] text-white rounded-xl font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Submitting...' : 'Submit Request'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Maps Section (65 Lodge Road, Croydon, CR0 2PH) */}
        <div className="mt-14 bg-white rounded-3xl overflow-hidden border border-[#DCEBDD] shadow-xs">
          <div className="p-6 border-b border-[#DCEBDD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#202820]">
                Our Location & Service Coverage
              </h3>
              <p className="text-xs text-stone-500">
                Operating from 65 Lodge Road, Croydon, CR0 2PH across all 32 London Boroughs & Surrey.
              </p>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent('65 Lodge Road, Croydon, CR0 2PH, United Kingdom')}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-[#315C3A] hover:underline flex items-center gap-1.5"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative aspect-[21/9] min-h-[300px] w-full bg-stone-100">
            {/* Embedded interactive Google Map iframe centered at 65 Lodge Road, Croydon */}
            <iframe
              title="Green Refurb Location"
              src="https://maps.google.com/maps?q=65+Lodge+Road,+Croydon,+CR0+2PH,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
