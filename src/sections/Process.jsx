import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { MessageSquare, Ruler, FileText, CheckCircle, Wrench, KeyRound } from 'lucide-react';

export const Process = () => {
  const stepIcons = [
    <MessageSquare className="w-4 h-4 text-gold" />,
    <Ruler className="w-4 h-4 text-gold" />,
    <FileText className="w-4 h-4 text-gold" />,
    <CheckCircle className="w-4 h-4 text-gold" />,
    <Wrench className="w-4 h-4 text-gold" />,
    <KeyRound className="w-4 h-4 text-gold" />
  ];

  const steps = [
    {
      step: "01",
      title: "Initial Enquiry",
      desc: "Customer shares project requirements, vision, or architectural drawings via WhatsApp or phone call."
    },
    {
      step: "02",
      title: "Site Visit",
      desc: "Our team visits the premises to take precise physical measurements and understand site-specific requirements."
    },
    {
      step: "03",
      title: "Quotation",
      desc: "A comprehensive, transparent quotation detailing dimensions and work scope is prepared and shared."
    },
    {
      step: "04",
      title: "Approval & Advance",
      desc: "Work begins promptly upon mutual quotation approval and receipt of the mobilization advance payment."
    },
    {
      step: "05",
      title: "Execution",
      desc: "Precision fabrication and careful on-site glass installation are executed by our experienced craftsmen."
    },
    {
      step: "06",
      title: "Final Handover",
      desc: "Thorough inspection, joint quality walkthrough with the client, project completion, and final settlement."
    }
  ];

  return (
    <section id="process" className="relative py-16 sm:py-20 md:py-24 bg-[#161514] border-y border-gold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR WORKFLOW"
          title="From First Conversation to Final Installation."
          subtitle="A transparent, structured six-step journey designed to give you clarity and peace of mind at every phase."
          align="center"
        />

        {/* Desktop Process Timeline (Horizontal Grid with Connecting Line) */}
        <div className="hidden lg:block relative mt-12 mb-6">
          {/* Connecting Gold Horizontal Bar */}
          <div className="absolute top-9 left-10 right-10 h-[1.5px] bg-gradient-to-r from-gold/20 via-gold to-gold/20 -z-0" />

          <div className="grid grid-cols-6 gap-3 relative z-10">
            {steps.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-xl bg-[#1F1D1B] border-2 border-gold shadow-md flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-burgundy group-hover:border-gold-light">
                  <span className="text-[10px] font-bold text-gold group-hover:text-gold-light tracking-wider">
                    {item.step}
                  </span>
                  <div className="mt-0.5 group-hover:text-white transition-colors">
                    {stepIcons[idx]}
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="mt-4 font-serif text-base font-bold text-white group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#A89F91] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Process Timeline (Vertical) */}
        <div className="lg:hidden relative mt-8 space-y-5 max-w-xl mx-auto">
          {/* Vertical Connecting Gold Line */}
          <div className="absolute top-5 bottom-5 left-5 w-[2px] bg-gradient-to-b from-gold via-gold/80 to-gold/20" />

          {steps.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-4 pl-1">
              <div className="w-10 h-10 rounded-lg bg-[#1F1D1B] border-2 border-gold shadow-sm flex items-center justify-center shrink-0 relative z-10 text-gold font-serif font-bold text-xs">
                {item.step}
              </div>

              <div className="p-4 rounded-xl bg-[#1A1918] border border-gold/25 shadow-subtle flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 rounded bg-[#242220]">
                    {stepIcons[idx]}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#A89F91] leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
