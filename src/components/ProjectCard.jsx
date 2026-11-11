import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Eye } from 'lucide-react';

/**
 * ProjectCard Component
 * Luxury architectural project presentation.
 * Features:
 * - Subtle image zoom (1.05x) and contrast polish on hover
 * - Mobile/touchscreen persistent readable labels
 * - Category pill, location, and title reveal
 * - Interactive tap/click to open modal details
 */
export const ProjectCard = ({ 
  project, 
  isHindi = false,
  onSelectProject,
  className = "" 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const title = isHindi ? project.titleHi : project.titleEn;
  const categoryLabel = isHindi ? project.categoryLabelHi : project.categoryLabelEn;
  const location = isHindi ? project.locationHi : project.locationEn;

  return (
    <div
      onClick={() => onSelectProject(project)}
      className={`group relative rounded-xl overflow-hidden cursor-pointer border border-gold/20 bg-ivory-200 shadow-subtle hover:shadow-glass-hover transition-all duration-500 hover:border-gold/60 ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectProject(project);
        }
      }}
      aria-label={`View project details for ${project.titleEn}`}
    >
      {/* Image Container with strict overflow:hidden */}
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] overflow-hidden">
        {/* Skeleton while image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-ivory-300 animate-pulse" />
        )}

        <img
          src={project.image}
          alt={project.titleEn}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:contrast-[1.05] group-hover:brightness-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Ambient Dark Gradient Overlay (always visible at bottom for contrast & text accessibility, deepens on hover) */}
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Top Floating Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-ivory/95 text-burgundy border border-gold/40 shadow-sm backdrop-blur-md">
            {categoryLabel}
          </span>

          {/* Interactive Arrow Indicator */}
          <div className="w-9 h-9 rounded-full bg-gold/90 text-white flex items-center justify-center transform translate-y-1 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 shadow-md">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom Content Layer (Persistent for touchscreens & enhanced on hover) */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white transform transition-transform duration-300">
          {location && (
            <div className="flex items-center gap-1.5 text-xs text-gold-light font-medium mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
              <span className="truncate">{location}</span>
            </div>
          )}

          <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-white group-hover:text-gold-light transition-colors duration-300">
            {title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-beige-light/90 line-clamp-2 sm:opacity-90 sm:group-hover:opacity-100 transition-opacity duration-300">
            {isHindi ? project.scopeHi : project.scopeEn}
          </p>

          {/* Touchscreen & Hover Tap Prompt */}
          <div className="mt-3 flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-gold font-semibold">
            <Eye className="w-3.5 h-3.5" />
            <span>{isHindi ? "विस्तृत विवरण देखें" : "View Project Details"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
