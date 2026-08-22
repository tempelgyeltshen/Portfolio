import React from 'react';

export const BhutaneseTextileBackground: React.FC<{
  variant?: 'dark' | 'light';
  opacity?: number;
}> = ({ variant = 'dark', opacity }) => {
  const strokeColor = variant === 'dark' ? '#C5A059' : '#8A7347';
  const effectiveOpacity = opacity !== undefined ? opacity : variant === 'dark' ? 0.03 : 0.025;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ opacity: effectiveOpacity }}>
        <defs>
          <pattern id={`bhutan-${variant}`} width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M32 0 L64 32 L32 64 L0 32 Z" fill="none" stroke={strokeColor} strokeWidth="0.5" />
            <path d="M32 16 L48 32 L32 48 L16 32 Z" fill="none" stroke={strokeColor} strokeWidth="0.35" />
            <rect x="30" y="30" width="4" height="4" transform="rotate(45 32 32)" fill={strokeColor} stroke="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#bhutan-${variant})`} />
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
