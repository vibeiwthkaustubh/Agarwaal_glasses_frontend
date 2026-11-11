import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Compass, Sparkles, MapPin, DoorOpen } from 'lucide-react';

export const Hero = ({ onOpenSiteVisit }) => {
  const handleScrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center justify-center pt-16 sm:pt-20 pb-10 sm:pb-14 overflow-hidden bg-[#121110]"
    >
      {/* 
        ========================================================================
        UNIVERSAL BACKGROUND: LUXURY OFFICE WITH GLASS DOORS & PARTITIONS
        Focused directly on the glass doors and office interior (not ceiling)
        ========================================================================
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Architectural Glass Office Doors & Partitions Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2400&q=90')`,
            backgroundPosition: 'center 60%',
          }}
        />

        {/* Dark Warm Amber Gradient Vignette for Readability and Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0D0C]/95 via-[#121110]/85 to-[#0E0D0C]/90 md:from-[#0E0D0C]/92 md:via-[#121110]/75 md:to-[#0E0D0C]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-[#121110]/70" />
        
        {/* Subtle Ambient Gold Glows */}
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-gold/15 rounded-full blur-[130px] pointer-events-none" />
      </div>

      {/* 
        ========================================================================
        FOREGROUND CONTENT: PROPORTIONED, BALANCED, ZERO OVERFLOW
        ========================================================================
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Copy & Action Buttons */}
          <div className="md:col-span-7 lg:col-span-7 max-w-xl">
            {/* Compact Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1918]/90 border border-gold/40 shadow-sm backdrop-blur-md mb-3"
            >
              <Sparkles className="w-3 h-3 text-gold shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-gold">
                PREMIUM INTERIOR GLASS SOLUTIONS
              </span>
            </motion.div>

            {/* Standard Proportioned Heading - No overflow, clean line breaks */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              className="font-serif text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight"
            >
              <span>Transforming Spaces </span>
              <br />
              <span className="text-gold italic font-normal">
                Through the Beauty of Glass.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="mt-2.5 sm:mt-3 font-sans text-xs sm:text-sm text-[#D4CBC0] leading-relaxed max-w-lg"
            >
              Discover thoughtfully designed glass solutions that bring elegance, openness and sophistication to residential and commercial spaces across Kolkata & West Bengal.
            </motion.p>

            {/* Dual Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
              className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              {/* Primary CTA */}
              <button
                onClick={handleScrollToProjects}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-[#121110] font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5 text-[#121110]" />
                <span>Explore Our Projects</span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onOpenSiteVisit}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-burgundy hover:bg-burgundy-light text-white font-semibold text-xs sm:text-sm tracking-wide border border-gold/50 shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-gold-light" />
                <span>Book a Free Site Visit</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 sm:mt-6 pt-3.5 border-t border-gold/20 flex flex-wrap items-center gap-y-1.5 gap-x-4 text-[11px] text-[#A89F91]"
            >
              <span className="font-serif italic font-semibold text-gold-light">
                "Reflection of Satisfaction"
              </span>
              <span>•</span>
              <span>Est. July 2022</span>
              <span>•</span>
              <span>New Alipore, Kolkata</span>
              <span>•</span>
              <span>7–8 Dedicated Artisans</span>
            </motion.div>
          </div>

          {/* Right Column: Architectural Glass Door Studio Installation Plaque */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
            className="md:col-span-5 lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm rounded-2xl bg-[#161514]/90 backdrop-blur-md border border-gold/40 p-5 shadow-2xl">
              {/* Gold Sheen Line */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              
              <div className="flex flex-col items-center text-center">
                {/* AG Architectural Monogram Badge */}
                <div className="w-12 h-12 rounded-xl bg-burgundy border border-gold/60 flex items-center justify-center shadow-md mb-2.5">
                  <span className="font-serif font-bold text-gold text-xl tracking-wider">
                    AG
                  </span>
                </div>

                {/* Brand Name on Glass Doors */}
                <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white leading-tight">
                  <span>AGARWAL </span>
                  <span className="text-gold">GLASSES</span>
                </h2>

                <p className="font-serif italic text-xs text-gold-light tracking-wide mt-0.5">
                  "Reflection of Satisfaction"
                </p>

                <div className="w-12 h-[1px] bg-gold/40 my-2.5" />

                <div className="space-y-1 text-xs text-[#D4CBC0]">
                  <p className="font-semibold text-white tracking-wide">
                    Interior Glass Doors & Partitions
                  </p>
                  <p className="flex items-center justify-center gap-1 text-[11px] text-gold-light">
                    <MapPin className="w-3 h-3 text-gold" />
                    New Alipore, Kolkata • West Bengal
                  </p>
                </div>

                {/* Status Indicator */}
                <div className="mt-3.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-[10px] font-semibold uppercase tracking-wider text-gold-light flex items-center gap-1.5">
                  <DoorOpen className="w-3 h-3 text-gold" />
                  <span>Glass Door & Studio Suite</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
