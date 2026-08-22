import React from 'react';

export const BhutaneseTextileBackground: React.FC<{
  variant?: 'dark' | 'light';
  opacity?: number;
}> = ({ variant = 'dark', opacity }) => {
  const strokeColor = variant === 'dark' ? '#C5A059' : '#8A7347';
  const fillAccent = variant === 'dark' ? 'rgba(197,160,89,0.15)' : 'rgba(138,115,71,0.12)';
  const effectiveOpacity = opacity !== undefined ? opacity : variant === 'dark' ? 0.12 : 0.10;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ opacity: effectiveOpacity }}>
        <defs>
          <pattern id={`kishuthara-${variant}`} width="80" height="80" patternUnits="userSpaceOnUse">
            {/* Outer diamond - main Kishuthara motif */}
            <path d="M40 4 L76 40 L40 76 L4 40 Z" fill="none" stroke={strokeColor} strokeWidth="0.6" />
            {/* Inner diamond */}
            <path d="M40 16 L64 40 L40 64 L16 40 Z" fill="none" stroke={strokeColor} strokeWidth="0.4" />
            {/* Center medallion - traditional Bhutanese end-less knot inspired */}
            <circle cx="40" cy="40" r="8" fill="none" stroke={strokeColor} strokeWidth="0.4" />
            <circle cx="40" cy="40" r="3" fill={fillAccent} stroke={strokeColor} strokeWidth="0.3" />
            {/* Corner connecting diamonds - Aikapur brocade motif */}
            <path d="M0 0 L12 0 L6 6 Z" fill="none" stroke={strokeColor} strokeWidth="0.3" />
            <path d="M80 0 L68 0 L74 6 Z" fill="none" stroke={strokeColor} strokeWidth="0.3" />
            <path d="M0 80 L12 80 L6 74 Z" fill="none" stroke={strokeColor} strokeWidth="0.3" />
            <path d="M80 80 L68 80 L74 74 Z" fill="none" stroke={strokeColor} strokeWidth="0.3" />
            {/* Zigzag border lines - traditional weaving pattern */}
            <path d="M0 20 L10 25 L0 30 L10 35 L0 40 L10 45 L0 50 L10 55 L0 60" fill="none" stroke={strokeColor} strokeWidth="0.25" />
            <path d="M80 20 L70 25 L80 30 L70 35 L80 40 L70 45 L80 50 L70 55 L80 60" fill="none" stroke={strokeColor} strokeWidth="0.25" />
            {/* Small Yathra-style geometric accents */}
            <rect x="37" y="2" width="6" height="6" transform="rotate(45 40 5)" fill="none" stroke={strokeColor} strokeWidth="0.25" />
            <rect x="37" y="72" width="6" height="6" transform="rotate(45 40 75)" fill="none" stroke={strokeColor} strokeWidth="0.25" />
            <rect x="2" y="37" width="6" height="6" transform="rotate(45 5 40)" fill="none" stroke={strokeColor} strokeWidth="0.25" />
            <rect x="72" y="37" width="6" height="6" transform="rotate(45 75 40)" fill="none" stroke={strokeColor} strokeWidth="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#kishuthara-${variant})`} />
      </svg>
    </div>
  );
};

export const BrandMonogram: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 48,
}) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img
      src="/assets/Logo.png"
      alt="Pema's High Quality Group"
      className="transition-transform duration-300"
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
    <div className="flex flex-col">
      <div className="flex items-baseline">
        <span className="text-xs tracking-[0.15em] font-normal text-gray-500 lowercase">pema's</span>
        <span className="font-display-luxury text-xl sm:text-2xl tracking-[0.18em] font-semibold text-[#E8D4A2] ml-1">HQG</span>
      </div>
    </div>
  </div>
);
