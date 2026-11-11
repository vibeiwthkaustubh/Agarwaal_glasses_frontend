import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const ServiceModal = ({
  service,
  isOpen,
  onClose,
  onOpenSiteVisit
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const whatsappMessage = `Hello Agarwal Glass, I would like to schedule a site consultation for "${service.titleEn}". Please let me know your available slots.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#181716] rounded-2xl shadow-2xl border border-gold/40 z-10 p-6 sm:p-8 text-[#EDE7DF]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#262421] text-gold hover:bg-burgundy hover:text-white flex items-center justify-center transition-colors border border-gold/30"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with image banner */}
        <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden mb-6 border border-gold/30">
          <img
            src={service.image}
            alt={service.titleEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181716] via-[#181716]/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-gold text-[#121110] mb-2 inline-block shadow-sm">
              {service.tag}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              {service.titleEn}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-[#D4CBC0]">
          <p className="text-sm sm:text-base leading-relaxed text-[#EDE7DF]">
            {service.fullDescEn}
          </p>

          <div className="p-4 rounded-xl bg-[#22201D] border border-gold/25 shadow-subtle">
            <h4 className="text-[11px] uppercase tracking-luxury font-bold text-gold mb-2.5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Key Specifications & Design Values</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.featuresEn?.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#E2DACF]">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#A89F91]">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
            <span>
              All installations are measured and installed on-site by our dedicated team of 7–8 craftsmen across Kolkata & West Bengal.
            </span>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 pt-5 border-t border-gold/20 flex flex-col sm:flex-row items-center gap-3">
          <WhatsAppButton
            message={whatsappMessage}
            className="w-full sm:w-auto flex-1"
            size="md"
          >
            Enquire on WhatsApp
          </WhatsAppButton>

          <button
            onClick={() => {
              onClose();
              if (onOpenSiteVisit) onOpenSiteVisit(service.titleEn);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-burgundy hover:bg-burgundy-light text-white text-xs sm:text-sm font-semibold transition-all shadow-md border border-gold/40"
          >
            Book Site Visit
          </button>
        </div>
      </div>
    </div>
  );
};
