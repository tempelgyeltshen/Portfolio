import React from 'react';
import { PRESIDENT_INFO } from '../data/groupData';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreVentures: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreVentures }) => {
  return (
    <section id="hero" className="relative min-h-screen bg-white text-black flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* Background Subtle Bhutan Pattern */}
      <div className="absolute inset-0 bhutan-pattern-subtle pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Heading & Overview */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-black leading-[1.1] tracking-tight">
                Pema Tshering
              </h1>
              <div className="flex items-center space-x-4">
                <div className="h-px w-16 bg-[#C9A227]"></div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
                  Entrepreneur. Investor. Builder.
                </p>
              </div>
            </div>

            {/* Professional Statement */}
            <p className="text-base sm:text-lg text-gray-800 max-w-2xl font-normal leading-relaxed">
              Building sustainable businesses across Bhutan's tourism, transportation, traditional arts, and commercial sectors. Creating opportunities that develop people, strengthen communities, and contribute meaningfully to economic growth.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onExploreVentures}
                className="btn-outline px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold flex items-center space-x-3 group"
              >
                <span>View Ventures</span>
                <ArrowRight className="w-4 h-4 text-[#C9A227] group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Portrait Container */}
              <div className="relative premium-card overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={PRESIDENT_INFO.portraitImage}
                    alt={PRESIDENT_INFO.portraitAlt}
                    className="w-full h-full object-cover object-top grayscale"
                  />
                </div>

                {/* Subtle Border */}
                <div className="absolute inset-0 border border-[#C9A227]/20 pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
