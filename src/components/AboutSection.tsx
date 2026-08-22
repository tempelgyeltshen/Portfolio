import React from 'react';
import { CHAIRMAN_INFO } from '../data/groupData';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#FAF9F6] text-[#18181B] py-24 sm:py-32 overflow-hidden border-t border-b border-[#E4E4E7]"
    >
      <BhutaneseTextileBackground variant="light" opacity={0.045} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#8A7347]">
                ABOUT
              </span>
              <span className="h-[1px] w-10 bg-[#8A7347]/60" />
            </div>

            <h2
              id="about-headline"
              className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-[#18181B] leading-[1.15]"
            >
              Driven by Purpose.
              <br />
              Grounded in Values.
            </h2>

            <div className="pt-4 border-t border-[#E4E4E7]/80 max-w-md">
              <p className="text-xs uppercase tracking-[0.16em] text-[#71717A] mb-2 font-medium">
                Core Focus
              </p>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Tourism and transportation, traditional Bhutanese arts and craftsmanship, enterprise development, food and hospitality, commercial trading, and entertainment across the Kingdom.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8 lg:pt-8">
            <p className="font-sans-luxury text-base sm:text-lg text-[#3F3F46] leading-relaxed font-light">
              {CHAIRMAN_INFO.fullMessage[0]}
            </p>

            <p className="font-sans-luxury text-base sm:text-lg text-[#3F3F46] leading-relaxed font-light">
              {CHAIRMAN_INFO.fullMessage[1]}
            </p>

            <div className="pt-4">
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#71717A]">
                {CHAIRMAN_INFO.name}
              </p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#A1A1AA]">
                {CHAIRMAN_INFO.title} &bull; Former Painter
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-[#E4E4E7] grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          <div className="space-y-3 p-6 bg-white/70 border border-[#E4E4E7] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-serif-luxury text-xl font-semibold text-[#8A7347]">01</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA]">Economic Core</span>
            </div>
            <h3 className="font-serif-luxury text-xl font-medium text-[#18181B]">National Self-Reliance</h3>
            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
              Developing home-grown, value-additive enterprises that reduce import dependency, secure strategic supply chains, and retain capital within Bhutan.
            </p>
          </div>

          <div className="space-y-3 p-6 bg-white/70 border border-[#E4E4E7] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-serif-luxury text-xl font-semibold text-[#8A7347]">02</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA]">Ethical Standard</span>
            </div>
            <h3 className="font-serif-luxury text-xl font-medium text-[#18181B]">Gross National Happiness in Enterprise</h3>
            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
              Demonstrating that commercial profitability and ecological balance are mutually reinforcing. Every portfolio company upholds community equity and sustainable practices.
            </p>
          </div>

          <div className="space-y-3 p-6 bg-white/70 border border-[#E4E4E7] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-serif-luxury text-xl font-semibold text-[#8A7347]">03</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA]">Global Gateway</span>
            </div>
            <h3 className="font-serif-luxury text-xl font-medium text-[#18181B]">Sovereign Global Integration</h3>
            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
              Bridging international capital, frontier technologies, and global luxury markets with the Kingdom and pristine terroir and ancient culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
