import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

/**
 * ServiceCard Component (Warm Black & Golden with Burgundy accents)
 */
export const ServiceCard = ({ 
  service, 
  onOpenDetails
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const prefilledMessage = `Hello Agarwal Glass, I am interested in your ${service.titleEn} solutions. Please share more details and arrange a site consultation.`;

  return (
    <div className="group relative flex flex-col h-full bg-[#1A1918] rounded-xl overflow-hidden border border-gold/25 shadow-subtle hover:shadow-glass-hover transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60">
      {/* Top Image Container */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-[#121110]">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#242220] animate-pulse" />
        )}
        <img
          src={service.image}
          alt={service.titleEn}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918] via-transparent to-transparent opacity-80" />

        {/* Category Pill Tag */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-burgundy/90 text-gold-light border border-gold/40 backdrop-blur-sm shadow-sm">
            {service.tag}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-5 sm:p-6">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300">
          {service.titleEn}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-[#C4BCB0] leading-relaxed line-clamp-3">
          {service.shortDescEn}
        </p>

        {/* Feature Highlights */}
        {service.featuresEn && (
          <ul className="mt-4 space-y-1.5 pt-3.5 border-t border-gold/15">
            {service.featuresEn.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-[#DDD5CA]">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Actions Bottom Bar */}
        <div className="mt-auto pt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpenDetails(service)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gold hover:text-white transition-colors group/btn py-1"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>

          <WhatsAppButton
            message={prefilledMessage}
            size="sm"
            variant="pill"
            ariaLabel={`Enquire about ${service.titleEn} on WhatsApp`}
          >
            Enquire
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
};
