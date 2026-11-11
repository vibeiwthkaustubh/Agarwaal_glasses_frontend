import React, { useEffect } from 'react';
import { X, MapPin } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const ProjectModal = ({ 
  project, 
  isOpen, 
  onClose 
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

  if (!isOpen || !project) return null;

  const whatsappMessage = `Hello Agarwal Glass, I am viewing your portfolio project "${project.titleEn}" (${project.categoryLabelEn}) and would like to explore a similar glass design for my space.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#181716] text-[#EDE7DF] rounded-2xl shadow-2xl border border-gold/40 z-10 flex flex-col md:flex-row overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#121110]/80 text-gold hover:bg-burgundy hover:text-white flex items-center justify-center transition-colors border border-gold/30 shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left / Top Image */}
        <div className="relative md:w-1/2 min-h-[240px] md:min-h-full bg-[#121110]">
          <img
            src={project.image}
            alt={project.titleEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181716] via-transparent to-transparent md:hidden" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-burgundy text-gold-light border border-gold/30">
              {project.categoryLabelEn}
            </span>
          </div>
        </div>

        {/* Right / Bottom Content */}
        <div className="p-6 sm:p-7 md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="hidden md:inline-block mb-2.5">
              <span className="px-2.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-burgundy/60 text-gold-light border border-gold/30">
                {project.categoryLabelEn}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-white leading-tight">
              {project.titleEn}
            </h3>

            {project.locationEn && (
              <div className="flex items-center gap-1.5 mt-2 text-xs text-gold-light font-medium">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{project.locationEn}</span>
              </div>
            )}

            <div className="w-12 h-[2px] bg-gold my-4" />

            <div className="space-y-3.5 text-xs sm:text-sm text-[#C4BCB0] leading-relaxed">
              <div>
                <h4 className="text-[11px] uppercase tracking-wider font-semibold text-gold mb-1">
                  Design Scope & Details
                </h4>
                <p>{project.scopeEn}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#22201D] border border-gold/20 text-xs text-[#A89F91] leading-relaxed">
                <span className="font-semibold text-gold-light block mb-0.5">
                  Architectural Concept Reference
                </span>
                This reference showcases the bespoke architectural standards delivered by Agarwal Glass. Custom dimensions and tailored finishes are engineered for your specific site.
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-gold/20 flex flex-col sm:flex-row items-center gap-3">
            <WhatsAppButton
              message={whatsappMessage}
              className="w-full sm:w-auto flex-1"
              size="md"
            >
              Request Similar Design
            </WhatsAppButton>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-gold/40 text-gold text-xs font-medium hover:bg-gold/10 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
