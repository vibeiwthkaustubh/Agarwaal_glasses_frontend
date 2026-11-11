import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { partnersData } from '../data/partners';
import { MapPin, Handshake, CheckCircle2, Building } from 'lucide-react';

export const TrustedPartners = () => {
  return (
    <section id="partners" className="relative py-16 sm:py-20 md:py-24 bg-[#141312] border-y border-gold/25 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="INDUSTRY COLLABORATIONS"
          title="Trusted Partners"
          subtitle="Proudly collaborating with Kolkata's established interior designers, architectural studios, and engineering contractors to deliver exceptional glass installations."
          align="center"
        />

        {/* 
          ========================================================================
          PARTNERS 3D POP-OUT GRID WITH ADVANCED HOVER CSS
          ========================================================================
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="group relative flex flex-col rounded-2xl bg-[#1A1918] border border-gold/30 overflow-hidden shadow-subtle transition-all duration-500 ease-out transform-gpu hover:-translate-y-3 hover:scale-[1.03] hover:border-gold hover:shadow-2xl hover:shadow-gold/20 hover:z-20 cursor-default"
              style={{
                perspective: '1000px',
              }}
            >
              {/* Outer Glow Sheen Line on Hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Partner Banner Image */}
              <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-[#121110]">
                <img
                  src={partner.banner}
                  alt={`${partner.name} - ${partner.category}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918] via-[#1A1918]/50 to-transparent" />

                {/* Floating Location Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-[#121110]/85 text-gold-light border border-gold/30 backdrop-blur-md shadow-sm">
                    <MapPin className="w-3 h-3 text-gold" />
                    <span>{partner.location}</span>
                  </span>
                </div>

                {/* Monogram Emblem (Popping out at the seam) */}
                <div className="absolute -bottom-4 right-4 w-11 h-11 rounded-xl bg-burgundy border-2 border-gold flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-gold-light">
                  <span className="font-serif font-bold text-gold text-base tracking-wider">
                    {partner.initials}
                  </span>
                </div>
              </div>

              {/* Partner Content Details */}
              <div className="flex flex-col flex-grow p-5 sm:p-5 pt-6">
                {/* Category Subtitle */}
                <span className="text-[10px] uppercase font-bold tracking-luxury text-gold">
                  {partner.category}
                </span>

                {/* Business Name */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold transition-colors duration-300 mt-1 leading-snug">
                  {partner.name}
                </h3>

                {/* Tagline / Profile Description */}
                <p className="mt-1.5 text-xs text-[#C4BCB0] leading-relaxed">
                  {partner.tagline}
                </p>

                {/* Specialization Highlights */}
                <div className="mt-4 pt-3.5 border-t border-gold/15 space-y-1.5">
                  {partner.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-[#DDD5CA]">
                      <CheckCircle2 className="w-3 h-3 text-gold shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Collaboration Pill */}
                <div className="mt-auto pt-4 flex items-center justify-between text-[10px] text-[#A89F91]">
                  <span className="inline-flex items-center gap-1.5 font-medium text-gold-light">
                    <Handshake className="w-3.5 h-3.5 text-gold" />
                    <span>Verified Partner</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-gold/70">
                    Kolkata
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
