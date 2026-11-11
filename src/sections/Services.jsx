import React, { useState } from 'react';
import { servicesData } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceModal } from '../components/ServiceModal';
import { SectionHeading } from '../components/SectionHeading';

export const Services = ({ onOpenSiteVisit }) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenDetails = (service) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 bg-[#121110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR SPECIALIZATIONS"
          title="Glass Solutions Designed Around Your Space."
          subtitle="Tailored architectural glass craftsmanship engineered for modern residential residences, luxury apartments, and prestigious commercial interiors."
          align="center"
        />

        {/* Responsive Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={handleCloseDetails}
        onOpenSiteVisit={onOpenSiteVisit}
      />
    </section>
  );
};
