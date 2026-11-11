import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import { servicesData } from '../data/services';

export const Footer = ({ onOpenSiteVisit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0D0C0B] text-[#EDE7DF] pt-14 pb-10 border-t border-gold/30 overflow-hidden">
      {/* Decorative Gold Sheen Line at Top */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-gold/15">
          {/* Col 1: Brand & Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Logo variant="horizontal" theme="dark" showTagline={true} />
            <p className="text-xs sm:text-sm text-[#A89F91] leading-relaxed pt-1">
              Specializing in bespoke interior-related glass designing and precision installation across Kolkata and West Bengal since July 2022.
            </p>
            <div className="text-xs text-gold font-medium tracking-wide">
              Established July 2022 • New Alipore, Kolkata
            </div>
          </div>

          {/* Col 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-luxury text-gold">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#C4BCB0]">
              <li>
                <button onClick={() => scrollToSection('#home')} className="hover:text-gold transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#about')} className="hover:text-gold transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="hover:text-gold transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#projects')} className="hover:text-gold transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#why-us')} className="hover:text-gold transition-colors">
                  Why Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#process')} className="hover:text-gold transition-colors">
                  Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="hover:text-gold transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-luxury text-gold">
              Glass Solutions
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#C4BCB0]">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <button 
                    onClick={() => scrollToSection('#services')} 
                    className="hover:text-gold transition-colors text-left"
                  >
                    {svc.titleEn}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Direct Reach (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-luxury text-gold">
              Reach Us Directly
            </h4>
            <div className="space-y-2 text-xs text-[#C4BCB0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span>New Alipore, Kolkata, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href="tel:+919073407966" className="hover:text-gold transition-colors">
                  +91 9073407966
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href="mailto:agarwalglass1986@gmail.com" className="hover:text-gold transition-colors break-all">
                  agarwalglass1986@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span>Serving Kolkata & West Bengal</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSiteVisit}
                className="w-full py-2 px-4 rounded-full bg-burgundy hover:bg-burgundy-light text-white font-bold text-xs uppercase tracking-wider transition-all border border-gold/40 shadow-md"
              >
                Book a Site Visit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8A8175]">
          <div>
            © 2026 Agarwal Glass. All Rights Reserved.
          </div>

          <div className="text-[11px]">
            Reflection of Satisfaction
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 hover:text-gold transition-colors group p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};
