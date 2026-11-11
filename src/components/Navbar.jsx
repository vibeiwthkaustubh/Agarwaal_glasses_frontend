import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = ({ onOpenSiteVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: '#home' },
    { name: "About", href: '#about' },
    { name: "Services", href: '#services' },
    { name: "Projects", href: '#projects' },
    { name: "Why Us", href: '#why-us' },
    { name: "Process", href: '#process' },
    { name: "Contact", href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-[#121110]/95 backdrop-blur-md border-b border-gold/30 shadow-2xl' 
          : 'py-2.5 bg-[#121110]/90 backdrop-blur-sm border-b border-gold/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <div className="shrink-0">
            {/* Desktop Full Logo */}
            <div className="hidden sm:block">
              <Logo 
                variant="horizontal" 
                theme="dark"
                onClick={() => handleNavClick('#home')} 
              />
            </div>
            {/* Mobile Compact Logo */}
            <div className="block sm:hidden">
              <Logo 
                variant="compact" 
                theme="dark"
                showTagline={false}
                onClick={() => handleNavClick('#home')} 
              />
            </div>
          </div>

          {/* Desktop Navigation Links (Visible on md: and up) */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-2.5 py-1 text-xs font-medium text-[#E8DED0] hover:text-gold tracking-wide transition-colors duration-200 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </button>
            ))}
          </nav>

          {/* Right Controls: Quick Call + Book Visit CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Call Link */}
            <a
              href="tel:+919073407966"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-light hover:text-gold transition-colors px-1.5"
              title="Call Agarwal Glass"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>+91 9073407966</span>
            </a>

            {/* Prominent CTA */}
            <button
              type="button"
              onClick={() => onOpenSiteVisit()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy hover:bg-burgundy-light text-white text-xs font-semibold tracking-wide border border-gold/50 shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3 h-3 text-gold-light" />
              <span>Book Site Visit</span>
            </button>
          </div>

          {/* Mobile Hamburger (Only below md) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg text-gold hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gold" />
              ) : (
                <Menu className="w-5 h-5 text-gold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#161514] border-b border-gold/30 shadow-2xl transition-all duration-300">
          <div className="px-4 pt-2.5 pb-5 space-y-1.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#E8DED0] hover:text-gold hover:bg-white/5 transition-colors"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-3 border-t border-gold/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenSiteVisit();
                }}
                className="w-full py-2 rounded-full bg-burgundy text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md border border-gold/40"
              >
                <Calendar className="w-3.5 h-3.5 text-gold-light" />
                <span>Book a Site Visit</span>
              </button>

              <a
                href="tel:+919073407966"
                className="w-full py-1.5 rounded-full border border-gold/40 text-gold text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-gold/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call +91 9073407966</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
