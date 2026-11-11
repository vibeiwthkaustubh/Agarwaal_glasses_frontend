import React from 'react';
import { Calendar, Phone, Sparkles } from 'lucide-react';

export const CTA = ({ onOpenSiteVisit }) => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-burgundy">
      {/* Background Architectural Glass with Dark Translucent Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        {/* Dark Burgundy Translucent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/95 via-burgundy/90 to-burgundy-dark/95" />
        <div className="absolute inset-0 bg-[#121110]/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-gold/40 backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-luxury uppercase text-gold">
            CONSULTATION & SITE MEASUREMENTS
          </span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Let's Bring Your Vision to Life.
        </h2>

        <div className="my-4 flex items-center justify-center">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <p className="max-w-xl mx-auto font-sans text-xs sm:text-sm md:text-base text-[#E2DACF] leading-relaxed">
          Planning a new space or upgrading an existing one? Talk to us about your glass design requirements. We are ready to inspect your site and provide tailored guidance.
        </p>

        {/* Buttons: Book a Site Visit & Call Us */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenSiteVisit}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-[#121110] font-bold text-xs sm:text-sm tracking-wide shadow-xl hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#121110]" />
            <span>Book a Site Visit</span>
          </button>

          <a
            href="tel:+919073407966"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm tracking-wide border border-gold/50 shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>Call Us: +91 9073407966</span>
          </a>
        </div>
      </div>
    </section>
  );
};
