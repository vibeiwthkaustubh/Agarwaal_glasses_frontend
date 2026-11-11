import React from 'react';

/**
 * Agarwal Glass Original Architectural Brand Logo
 * Features:
 * - Architectural overlapping glass panels
 * - Minimalist AG monogram
 * - Reflection & facet accents
 * - Responsive horizontal and compact variants
 * - Light and dark theme compatibility
 */
export const Logo = ({ 
  variant = 'horizontal', 
  theme = 'light', 
  className = '',
  showTagline = true,
  onClick
}) => {
  const isDark = theme === 'dark';

  // Dynamic colors based on theme
  const burgundyColor = isDark ? '#FFFFFF' : '#4A1F2D';
  const glassPanelFill = isDark ? '#35141F' : '#4A1F2D';
  const goldColor = '#C5A46D';
  const goldText = isDark ? '#DFC699' : '#C5A46D';
  const taglineColor = isDark ? '#E5D6B8' : '#92734F';

  // Compact Monogram Icon SVG
  const MonogramIcon = ({ size = 44 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:scale-105"
    >
      <defs>
        <linearGradient id={`goldGradLogo-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFC699" />
          <stop offset="50%" stopColor="#C5A46D" />
          <stop offset="100%" stopColor="#8E6F38" />
        </linearGradient>
        <linearGradient id={`burgundyGradLogo-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B3243" />
          <stop offset="100%" stopColor="#35141F" />
        </linearGradient>
        <linearGradient id={`glassSheenLogo-${theme}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5"/>
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.05"/>
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"/>
        </linearGradient>
      </defs>

      {/* Outer Emblem Tile with Rounded Corners */}
      <rect 
        x="3" 
        y="3" 
        width="58" 
        height="58" 
        rx="12" 
        fill={glassPanelFill} 
        stroke={`url(#goldGradLogo-${theme})`} 
        strokeWidth="1.8"
      />

      {/* Pane 1 (Back Interior Glass Partition) */}
      <polygon 
        points="15,14 40,14 34,49 9,49" 
        fill={`url(#burgundyGradLogo-${theme})`} 
        stroke="#C5A46D" 
        strokeWidth="1" 
        opacity="0.85"
      />
      <polygon 
        points="15,14 40,14 37,26 12,26" 
        fill={`url(#glassSheenLogo-${theme})`} 
      />

      {/* Pane 2 (Front Interlocking Glass Partition) */}
      <polygon 
        points="26,14 52,14 46,49 20,49" 
        fill="none" 
        stroke={`url(#goldGradLogo-${theme})`} 
        strokeWidth="1.8" 
      />
      <polygon 
        points="26,14 52,14 49,27 23,27" 
        fill={`url(#glassSheenLogo-${theme})`} 
        opacity="0.5" 
      />

      {/* Stylized AG Architectural Monogram Line Work */}
      {/* 'A' Structure */}
      <path 
        d="M 21,46 L 30,19 L 39,46" 
        fill="none" 
        stroke="#FFFFFF" 
        strokeWidth="2.4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* 'A' Crossbar (Architectural division) */}
      <line 
        x1="24" 
        y1="36" 
        x2="36" 
        y2="36" 
        stroke={`url(#goldGradLogo-${theme})`} 
        strokeWidth="2" 
        strokeLinecap="round" 
      />

      {/* 'G' Interlocking Arc */}
      <path 
        d="M 45,26 C 45,26 39,21 33,22 C 26,23 23,31 24,38 C 25,44 31,48 39,47 C 45,46 47,40 47,37 L 37,37" 
        fill="none" 
        stroke={`url(#goldGradLogo-${theme})`} 
        strokeWidth="2.4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Architectural Light Highlight Sparkle */}
      <circle cx="47" cy="16" r="1.5" fill="#FFFFFF" />
    </svg>
  );

  // Compact Variant (Icon only or Icon with small text)
  if (variant === 'compact') {
    return (
      <div 
        onClick={onClick}
        className={`group flex items-center gap-2 cursor-pointer select-none ${className}`}
        aria-label="Agarwal Glass"
      >
        <MonogramIcon size={26} />
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1 font-serif text-base tracking-wider font-bold">
            <span style={{ color: burgundyColor }}>AGARWAL</span>
            <span style={{ color: goldText }}>GLASS</span>
          </div>
          {showTagline && (
            <span 
              className="text-[7.5px] uppercase tracking-widest font-sans font-medium mt-0.5"
              style={{ color: taglineColor }}
            >
              Reflection of Satisfaction
            </span>
          )}
        </div>
      </div>
    );
  }

  // Stacked Variant (Centered, for hero badges or centered footers)
  if (variant === 'stacked') {
    return (
      <div 
        onClick={onClick}
        className={`group flex flex-col items-center text-center cursor-pointer select-none ${className}`}
        aria-label="Agarwal Glass"
      >
        <MonogramIcon size={58} />
        <div className="mt-3 font-serif text-2xl md:text-3xl tracking-widest font-bold flex items-center gap-2">
          <span style={{ color: burgundyColor }}>AGARWAL</span>
          <span style={{ color: goldText }}>GLASS</span>
        </div>
        {showTagline && (
          <div className="mt-1 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-gold/50" />
            <span 
              className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-sans font-semibold"
              style={{ color: taglineColor }}
            >
              Reflection of Satisfaction
            </span>
            <span className="w-4 h-[1px] bg-gold/50" />
          </div>
        )}
      </div>
    );
  }

  // Horizontal Variant (Default for Navigation and Footer)
  return (
    <div 
      onClick={onClick}
      className={`group flex items-center gap-2.5 cursor-pointer select-none ${className}`}
      aria-label="Agarwal Glass Home"
    >
      <MonogramIcon size={32} />
      <div className="flex flex-col">
        <div className="flex items-center gap-1 font-serif text-lg sm:text-xl tracking-[0.06em] font-bold leading-tight">
          <span style={{ color: burgundyColor }}>AGARWAL</span>
          <span style={{ color: goldText }}>GLASS</span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1 mt-0.5">
            <span 
              className="text-[8px] sm:text-[9px] uppercase tracking-[0.14em] font-sans font-semibold leading-none"
              style={{ color: taglineColor }}
            >
              Reflection of Satisfaction
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
