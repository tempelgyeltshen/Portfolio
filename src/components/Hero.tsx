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
            <p className="text-base sm:text-lg text-gray-800 max-w-2xl font-normal leading-relaxed font-light">
              Building sustainable businesses across Bhutan's tourism, transportation, traditional arts, and commercial sectors. Creating opportunities that develop people, strengthen communities, and contribute meaningfully to economic growth.
            </p>

            {/* Stats/Quick Info */}
            <div className="pt-6 flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-serif font-bold text-black">7+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Companies</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-black">20+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Years</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-black">5</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Sectors</div>
              </div>
            </div>

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
              {/* Main Portrait Container with Bhutanese Pattern Background */}
              <div className="relative premium-card overflow-hidden">
                {/* Bhutanese Pattern Background */}
                <div className="absolute inset-0 bg-black">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `
                      linear-gradient(45deg, #C9A227 25%, transparent 25%),
                      linear-gradient(-45deg, #C9A227 25%, transparent 25%),
                      linear-gradient(135deg, #C9A227 25%, transparent 25%),
                      linear-gradient(-135deg, #C9A227 25%, transparent 25%)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 0, 10px -10px, 0px 10px'
                  }}></div>
                  {/* Additional geometric pattern */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `
                      radial-gradient(circle at 50% 50%, #C9A227 1px, transparent 1px),
                      radial-gradient(circle at 0% 0%, #C9A227 1px, transparent 1px),
                      radial-gradient(circle at 100% 0%, #C9A227 1px, transparent 1px),
                      radial-gradient(circle at 0% 100%, #C9A227 1px, transparent 1px),
                      radial-gradient(circle at 100% 100%, #C9A227 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                {/* Portrait Image with background removal effect */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={PRESIDENT_INFO.portraitImage}
                    alt={PRESIDENT_INFO.portraitAlt}
                    className="w-full h-full object-cover object-top grayscale"
                    style={{ 
                      mixBlendMode: 'normal',
                      filter: 'contrast(1.1) brightness(1.05)'
                    }}
                  />
                  {/* Vignette effect to blend edges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-30"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent opacity-30"></div>
                </div>

                {/* Gold Border Frame */}
                <div className="absolute inset-0 border-2 border-[#C9A227] pointer-events-none"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C9A227]"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C9A227]"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C9A227]"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C9A227]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
