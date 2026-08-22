import React from 'react';

export const BhutaneseAuspiciousKnot: React.FC<{ className?: string; size?: number }> = ({
  className = 'text-[#C5A059]',
  size = 32,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M24 6L38 20L31 27L24 20L17 27L10 20L24 6Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 42L10 28L17 21L24 28L31 21L38 28L24 42Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 21L24 14L31 21L24 28L17 21Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="20.5"
      y="20.5"
      width="7"
      height="7"
      transform="rotate(45 24 24)"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
);

export const BhutaneseTextileBackground: React.FC<{
  variant?: 'dark' | 'light';
  opacity?: number;
  className?: string;
}> = ({ variant = 'dark', opacity, className = '' }) => {
  const strokeColor = variant === 'dark' ? '#C5A059' : '#8A7347';
  const effectiveOpacity = opacity !== undefined ? opacity : variant === 'dark' ? 0.05 : 0.04;

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: effectiveOpacity }}
      >
        <defs>
          <pattern
            id={`bhutan-textile-${variant}`}
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path d="M32 0 L64 32 L32 64 L0 32 Z" fill="none" stroke={strokeColor} strokeWidth="0.75" />
            <path d="M32 12 L52 32 L32 52 L12 32 Z" fill="none" stroke={strokeColor} strokeWidth="0.6" />
            <path d="M32 20 L44 32 L32 44 L20 32 Z" fill="none" stroke={strokeColor} strokeWidth="0.5" />
            <path d="M0 0 L12 0 L12 12 L0 12" fill="none" stroke={strokeColor} strokeWidth="0.5" />
            <path d="M64 0 L52 0 L52 12 L64 12" fill="none" stroke={strokeColor} strokeWidth="0.5" />
            <path d="M0 64 L12 64 L12 52 L0 52" fill="none" stroke={strokeColor} strokeWidth="0.5" />
            <path d="M64 64 L52 64 L52 52 L64 52" fill="none" stroke={strokeColor} strokeWidth="0.5" />
            <rect
              x="30"
              y="30"
              width="4"
              height="4"
              transform="rotate(45 32 32)"
              fill={strokeColor}
              stroke="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#bhutan-textile-${variant})`} />
      </svg>
    </div>
  );
};

export const BrandMonogram: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 38,
}) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="relative flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#C5A059] transition-transform duration-300 group-hover:scale-105"
      >
        <rect
          x="22"
          y="3"
          width="26.8"
          height="26.8"
          transform="rotate(45 22 3)"
          stroke="#C5A059"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M22 8L36 22L22 36L8 22Z"
          stroke="#C5A059"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          fill="none"
        />
        <path
          d="M17 17L27 27M27 17L17 27"
          stroke="#C5A059"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <div className="flex items-baseline">
      <span className="text-[10px] tracking-[0.15em] font-normal text-gray-500 lowercase">pema's</span>
      <span className="font-display-luxury text-lg sm:text-xl tracking-[0.18em] font-semibold text-[#E8D4A2] ml-1">HQG</span>
    </div>
  </div>
);

export const GoldSignature: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-block ${className}`}>
    <svg
      width="180"
      height="60"
      viewBox="0 0 220 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#C5A059] opacity-90"
    >
      <path
        d="M20 48C35 25 50 15 65 20C75 23 70 45 60 52C50 58 45 40 55 30C65 20 85 18 100 24C115 30 120 45 110 50C100 55 95 38 115 28C130 20 155 18 180 32M135 45C150 42 175 40 205 38"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="210" cy="38" r="1.5" fill="currentColor" />
    </svg>
  </div>
);

export const VentureIcon: React.FC<{
  type: 'mountain' | 'knot' | 'diamond' | 'flower' | 'shield' | 'leaf' | 'car' | 'palette';
  className?: string;
  size?: number;
}> = ({ type, className = 'text-[#C5A059]', size = 36 }) => {
  switch (type) {
    case 'mountain':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <path d="M6 32L18 10L30 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 22L30 12L36 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 32H38" stroke="currentColor" strokeWidth="1.2" />
          <path d="M18 18L14 26H22L18 18Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    case 'knot':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <path d="M20 6L32 18L26 24L20 18L14 24L8 18L20 6Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 34L8 22L14 16L20 22L26 16L32 22L20 34Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="17" y="17" width="6" height="6" transform="rotate(45 20 20)" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case 'diamond':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <rect x="20" y="5" width="21.2" height="21.2" transform="rotate(45 20 5)" stroke="currentColor" strokeWidth="1.4" />
          <rect x="20" y="12" width="11.3" height="11.3" transform="rotate(45 20 12)" stroke="currentColor" strokeWidth="1" />
          <path d="M20 5V35M5 20H35" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
        </svg>
      );
    case 'shield':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <path d="M20 6L33 11V21C33 28.5 27.5 34.5 20 36C12.5 34.5 7 28.5 7 21V11L20 6Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 12V30M13 18L20 25L27 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    case 'leaf':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <path d="M9 31C9 31 10 18 22 10C34 18 34 31 9 31Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 31C18 24 25 18 32 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M16 25L22 26M21 20L27 21" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case 'flower':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.2" />
          <path d="M20 6C16 11 16 15 20 16C24 15 24 11 20 6Z" stroke="currentColor" strokeWidth="1.2" />
          <path d="M20 34C16 29 16 25 20 24C24 25 24 29 20 34Z" stroke="currentColor" strokeWidth="1.2" />
          <path d="M6 20C11 16 15 16 16 20C15 24 11 24 6 20Z" stroke="currentColor" strokeWidth="1.2" />
          <path d="M34 20C29 16 25 16 24 20C25 24 29 24 34 20Z" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case 'car':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <path d="M8 24L12 16H28L32 24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="6" y="24" width="28" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="12" cy="32" r="2.5" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="28" cy="32" r="2.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M14 24V20" stroke="currentColor" strokeWidth="1" />
          <path d="M26 24V20" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case 'palette':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
          <path d="M20 6C11.2 6 4 13.2 4 22C4 30.8 11.2 38 20 38C22.2 38 24 36.2 24 34C24 33 23.4 32.1 22.6 31.6C21.8 31.1 21.2 30.2 21.2 29.2C21.2 27.4 22.6 26 24.4 26H28C33.5 26 38 21.5 38 16C38 10.5 29.6 6 20 6Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="13" cy="16" r="2" fill="currentColor" />
          <circle cx="20" cy="12" r="2" fill="currentColor" />
          <circle cx="27" cy="16" r="2" fill="currentColor" />
          <circle cx="15" cy="22" r="2" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};

export const CornerAccents: React.FC = () => (
  <>
    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]" />
    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C5A059]" />
    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C5A059]" />
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]" />
  </>
);
