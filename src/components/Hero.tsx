import React from 'react';
import { PRESIDENT_INFO, CHAIRMAN_INFO } from '../data/groupData';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

interface HeroProps {
  onExploreVentures: () => void;
  onExploreAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreVentures, onExploreAbout }) => {
  return (
    <section id="hero" className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] flex items-center overflow-hidden">
      <BhutaneseTextileBackground variant="dark" opacity={0.06} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-1">
              <p className="text-xs tracking-[0.3em] uppercase text-[#C5A059] font-medium">Entrepreneur. Businessman. Investor.</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm tracking-[0.15em] text-gray-500 lowercase">pema&apos;s</p>
              <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-[#FAF9F6]">
                High Quality<br />Group
              </h1>
              <p className="font-serif-luxury text-2xl sm:text-3xl text-[#C5A059] font-light italic mt-2">Pvt Ltd</p>
            </div>

            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-lg leading-relaxed font-light">
              Building sustainable businesses across Bhutan. Creating long-term value through tourism, transportation, traditional arts, and commercial ventures.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <button
                onClick={onExploreVentures}
                className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] border border-[#C5A059] px-6 py-3 hover:bg-[#C5A059] hover:text-[#09090b] transition-all duration-300 font-medium"
              >
                Explore My Ventures
              </button>
              <button
                onClick={onExploreAbout}
                className="text-[11px] uppercase tracking-[0.22em] text-[#A1A1AA] hover:text-white transition-colors"
              >
                My Story
              </button>
            </div>

            {/* Stats */}
            <div className="pt-10 border-t border-[#27272a] grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[{ label: 'Companies', value: '7+' }, { label: 'Years', value: '20+' }, { label: 'Sectors', value: '5' }, { label: 'Districts', value: '20' }].map((stat, idx) => (
                <div key={idx}>
                  <p className="font-serif-luxury text-3xl sm:text-4xl text-[#E8D4A2] font-light">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              <img
                src={PRESIDENT_INFO.portraitImage}
                alt={PRESIDENT_INFO.portraitAlt}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
              <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#71717A]">
                <span className="text-[#C5A059]">{CHAIRMAN_INFO.name}</span>
                <span>Thimphu, Bhutan</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
