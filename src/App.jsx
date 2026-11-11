import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
import { TrustedPartners } from './sections/TrustedPartners';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { Process } from './sections/Process';
import { CTA } from './sections/CTA';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SiteVisitModal } from './components/SiteVisitModal';

export default function App() {
  const [isSiteVisitModalOpen, setIsSiteVisitModalOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState('');

  const handleOpenSiteVisit = (serviceName = '') => {
    setModalInitialService(serviceName);
    setIsSiteVisitModalOpen(true);
  };

  const handleCloseSiteVisit = () => {
    setIsSiteVisitModalOpen(false);
  };

  return (
    <div className="relative min-h-screen text-[#EDE7DF] bg-[#121110] selection:bg-gold/40 selection:text-white">
      {/* 
        ========================================================================
        ARCHITECTURAL BACKGROUND LAYERING SYSTEM (Warm Black & Golden)
        ========================================================================
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
        aria-hidden="true"
      >
        {/* Layer 1: Architectural glass interior image texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 filter blur-[10px] opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />

        {/* Layer 2: Deep warm obsidian & amber gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121110] via-[#161514] to-[#121110] opacity-95" />

        {/* Layer 3: Warm Ambient Golden Glows */}
        <div className="absolute top-1/4 left-1/10 w-[550px] h-[550px] bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/10 w-[600px] h-[600px] bg-burgundy/15 rounded-full blur-[140px]" />
      </div>

      {/* 
        ========================================================================
        FOREGROUND APPLICATION CONTAINER
        ========================================================================
      */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Floating Navigation Bar */}
        <Navbar onOpenSiteVisit={() => handleOpenSiteVisit()} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Section 1: Hero */}
          <Hero onOpenSiteVisit={() => handleOpenSiteVisit()} />

          {/* Section 2: About Agarwal Glass */}
          <About />

          {/* Section 3: Our Services */}
          <Services onOpenSiteVisit={handleOpenSiteVisit} />

          {/* Section 4: Featured Projects */}
          <Projects />

          {/* Trusted Partners Section */}
          <TrustedPartners />

          {/* Section 5: Why Choose Agarwal Glass? */}
          <WhyChooseUs />

          {/* Section 6: Our Working Process */}
          <Process />

          {/* Section 7: Call to Action */}
          <CTA onOpenSiteVisit={() => handleOpenSiteVisit()} />

          {/* Section 8: Contact Section */}
          <Contact />
        </main>

        {/* Section 9: Footer */}
        <Footer onOpenSiteVisit={() => handleOpenSiteVisit()} />

        {/* Floating WhatsApp Quick Action Button */}
        <WhatsAppButton
          variant="floating"
          message="Hello Agarwal Glass, I would like to enquire about your interior glass solutions."
        />

        {/* Site Visit & Quotation Modal */}
        <SiteVisitModal
          isOpen={isSiteVisitModalOpen}
          onClose={handleCloseSiteVisit}
          initialService={modalInitialService}
        />
      </div>
    </div>
  );
}
