import React from 'react';
import { Hammer, Sparkles, Ruler, Building2, MapPin } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const WhyChooseUs = () => {
  const iconList = [
    <Hammer className="w-5 h-5 text-gold" />,
    <Sparkles className="w-5 h-5 text-gold" />,
    <Ruler className="w-5 h-5 text-gold" />,
    <Building2 className="w-5 h-5 text-gold" />,
    <MapPin className="w-5 h-5 text-gold" />
  ];

  const items = [
    {
      title: "Focus on Workmanship",
      description: "Meticulous attention to alignment, clean edge finishes, and structural stability for every installation."
    },
    {
      title: "Quality-Oriented Service",
      description: "From measurement to cleanup, we treat your living and working spaces with absolute respect and diligence."
    },
    {
      title: "Custom Glass Solutions",
      description: "Every interior is unique. We tailor dimensions, finishes, and layouts precisely to match your interior design vision."
    },
    {
      title: "Residential & Commercial Experience",
      description: "Proven expertise serving luxury private residences, boutique apartments, modern offices, and retail showrooms."
    },
    {
      title: "Kolkata & West Bengal Service Area",
      description: "Rapid on-site surveys, responsive consultations, and dependable execution throughout Kolkata and across West Bengal."
    }
  ];

  return (
    <section id="why-us" className="relative py-16 sm:py-20 md:py-24 bg-[#121110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE AGARWAL ADVANTAGE"
          title="Quality You Can See. Service You Can Trust."
          subtitle="We prioritize patient craftsmanship, direct communication, and lasting client satisfaction in every glass installation."
          align="center"
        />

        {/* 5 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((item, idx) => {
            const isLast = idx === 4;

            return (
              <div
                key={idx}
                className={`p-6 rounded-xl bg-[#1A1918] border border-gold/25 shadow-subtle hover:shadow-glass-hover transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-11 h-11 rounded-lg bg-[#242220] border border-gold/30 flex items-center justify-center mb-4">
                  {iconList[idx % iconList.length]}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#C4BCB0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
