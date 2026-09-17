import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, MessageCircle, X } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const { settings, openQuoteModal } = useApp();
  const [showTooltip, setShowTooltip] = useState(false);

  const cleanWhatsApp = settings.whatsappNumber.replace(/[^0-9]/g, '');
  const cleanPhone = settings.phone.replace(/\s+/g, '');

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* WhatsApp Quick Message Bubble */}
      <a
        href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
          'Hello Green Refurb, I would like to enquire about a quote for my property.'
        )}`}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        aria-label="Chat with Green Refurb on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          WhatsApp Us
        </span>
      </a>

      {/* Direct Call Button (Visible on mobile & tablet) */}
      <a
        href={`tel:${cleanPhone}`}
        className="sm:hidden flex items-center justify-center bg-[#315C3A] hover:bg-[#202820] text-white p-3.5 rounded-full shadow-lg transition-all"
        aria-label="Call Green Refurb"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};
