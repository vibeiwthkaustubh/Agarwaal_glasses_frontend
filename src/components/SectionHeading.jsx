import React from 'react';

/**
 * Reusable Luxury Section Heading (Black & Golden with Burgundy highlights)
 */
export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  className = '',
  divider = true
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 sm:mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="w-5 h-[1.5px] bg-gold" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-luxury text-gold">
            {badge}
          </span>
          <span className="w-5 h-[1.5px] bg-gold" />
        </div>
      )}

      {title && (
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.2] text-white">
          {title}
        </h2>
      )}

      {divider && (
        <div className={`my-3.5 flex items-center ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      )}

      {subtitle && (
        <p className="mt-2 font-sans text-xs sm:text-sm md:text-base leading-relaxed text-[#C4BCB0]">
          {subtitle}
        </p>
      )}
    </div>
  );
};
