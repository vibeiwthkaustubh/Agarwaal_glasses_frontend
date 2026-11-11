import React from 'react';
import { Calendar, MapPin, Globe, Users, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const About = () => {
  const iconMap = [
    <Calendar className="w-4 h-4 text-gold" />,
    <MapPin className="w-4 h-4 text-gold" />,
    <Globe className="w-4 h-4 text-gold" />,
    <Users className="w-4 h-4 text-gold" />
  ];

  const highlights = [
    {
      title: "Established July 2022",
      subtitle: "Built on dedication and passion for architectural interior glass"
    },
    {
      title: "New Alipore, Kolkata",
      subtitle: "Centrally positioned head office serving Kolkata & surrounding districts"
    },
    {
      title: "Kolkata & West Bengal",
      subtitle: "Delivering bespoke interior installations across the entire state"
    },
    {
      title: "Dedicated Team",
      subtitle: "A focused, skilled team of 7–8 specialized glass installation craftsmen"
    }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 bg-[#161514] border-y border-gold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Architectural Glass Image with Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative offset gold border */}
              <div className="absolute -inset-2.5 sm:-inset-3 rounded-2xl border border-gold/30 -rotate-1 pointer-events-none" />

              {/* Main Image Frame */}
              <div className="relative rounded-xl overflow-hidden shadow-premium bg-[#121110] border border-gold/40 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                  alt="Architectural Glass Craftsmanship"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent" />
                
                {/* Floating Corner Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#121110]/90 backdrop-blur-md border border-gold/30 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-burgundy border border-gold/40 flex items-center justify-center text-gold-light shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                        Verified Craftsmanship
                      </p>
                      <p className="text-[11px] text-[#A89F91]">
                        Dedicated Service Since July 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content & Key Pillars */}
          <div className="lg:col-span-7">
            <SectionHeading
              badge="ABOUT AGARWAL GLASS"
              title="Where Craftsmanship Meets Clarity."
              align="left"
              divider={true}
              className="mb-6"
            />

            <div className="space-y-3.5 text-sm sm:text-base text-[#D4CBC0] leading-relaxed">
              <p>
                Agarwal Glass, established in July 2022, specializes in interior-related glass solutions across Kolkata and West Bengal.
              </p>
              <p>
                With a strong focus on workmanship, service quality and customer satisfaction, we help transform residential and commercial spaces through thoughtfully executed glass installations.
              </p>
            </div>

            {/* The 4 Highlights Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#1E1C1A] border border-gold/25 shadow-subtle hover:border-gold/60 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-lg bg-[#2A2724] border border-gold/20 shrink-0 mt-0.5">
                      {iconMap[idx % iconMap.length]}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-white leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#A89F91] mt-0.5 leading-normal">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy Quote */}
            <div className="mt-6 p-4 rounded-xl bg-[#1E1C1A] border-l-4 border-gold border-y border-r border-gold/20 shadow-sm">
              <p className="font-serif italic text-sm sm:text-base text-gold-light">
                "Every piece of glass we place reflects our commitment to precision, safety, and lasting aesthetic harmony."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
