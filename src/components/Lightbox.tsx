import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, ExternalLink } from 'lucide-react';

export const Lightbox: React.FC = () => {
  const { lightboxUrl, closeLightbox } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxUrl) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxUrl, closeLightbox]);

  if (!lightboxUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={closeLightbox}
    >
      <button
        onClick={closeLightbox}
        className="absolute top-6 right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={lightboxUrl}
          alt="Project Showcase"
          className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
        />
        <div className="mt-4 flex items-center gap-4 text-white/70 text-xs">
          <span>Green Refurb Portfolio Preview</span>
          <a
            href={lightboxUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white flex items-center gap-1 underline"
          >
            Open Full Image <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
