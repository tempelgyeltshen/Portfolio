import React from 'react';
import { PRESIDENT_INFO, CHAIRMAN_INFO } from '../data/groupData';
import { ChevronRight } from 'lucide-react';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

interface HeroProps {
  onExploreVentures: () => void;
  onExploreAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreVentures, onExploreAbout }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center overflow-hidden"
    >
      <BhutaneseTextileBackground variant="dark" opacity={0.04} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 lg:space-y-10">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C5A059]/70" />
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A059]">
                ENTREPRENEUR. INVESTOR. PAINTER.
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-sm tracking-[0.15em] font-normal text-gray-400 lowercase">
                pema's
              </p>
              <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#FAF9F6]">
                High Quality Group
                <br />
                <span className="text-[#C5A059] font-medium italic">
                  Pvt Ltd
                </span>
              </h1>
            </div>

            <p className="font-sans-luxury text-base sm:text-lg text-[#A1A1AA] max-w-xl leading-relaxed font-light">
              Building sustainable businesses across Bhutan&apos;s tourism, transportation, traditional arts, and commercial sectors. Creating opportunities that develop people, strengthen communities, and contribute meaningfully to economic growth.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={onExploreAbout}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-transparent border border-[#C5A059] text-xs font-medium uppercase tracking-[0.2em] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#09090b] transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>LEARN MORE</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreVentures}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#D4D4D8] hover:text-[#E8D4A2] transition-colors duration-200 cursor-pointer"
              >
                <span>VIEW VENTURES</span>
                <span className="text-[#C5A059] opacity-70 group-hover:opacity-100">&rarr;</span>
              </button>
            </div>

            <div className="pt-8 sm:pt-12 border-t border-[#27272a]/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[{ label: 'Companies', value: '7+' }, { label: 'Years', value: '20+' }, { label: 'Sectors', value: '5' }, { label: 'Districts', value: '20' }].map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="font-serif-luxury text-2xl sm:text-3xl text-[#E8D4A2] font-semibold tracking-wide">{stat.value}</p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#71717A] leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={PRESIDENT_INFO.portraitImage}
                    alt={PRESIDENT_INFO.portraitAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain object-top transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between px-1 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#A1A1AA]">
                  <span className="text-[#C5A059] font-medium">{CHAIRMAN_INFO.name}</span>
                  <span className="text-[#71717A]">THIMPHU &bull; BHUTAN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
