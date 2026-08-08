import React from 'react';
import { CORPORATE_VALUES } from '../data/groupData';

export const VisionValues: React.FC = () => {
  return (
    <div id="vision">
      {/* 17. VISION SECTION - Full Width Mountain Landscape */}
      <section className="relative py-36 bg-[#FAF8F5] text-[#1C1D21] overflow-hidden text-center border-t border-gray-200">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
            alt="Bhutan Himalayan Mountain Landscape"
            className="w-full h-full object-cover filter brightness-105 contrast-100 opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#FAF8F5]/90 to-white"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8A6B29]">
            OUR LONG-TERM VISION
          </span>

          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#1C1D21] tracking-tight">
            BUILDING BUSINESSES THAT LAST
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#B08B46] to-transparent mx-auto my-6"></div>

          <p className="text-lg sm:text-2xl font-serif italic text-[#1C1D21] max-w-3xl mx-auto font-medium leading-relaxed">
            "Our vision is to develop a diversified Bhutanese business group recognized for quality, integrity, innovation, professionalism, and dependable service."
          </p>

          <p className="text-xs sm:text-sm text-[#5A5854] font-normal max-w-2xl mx-auto leading-relaxed pt-2">
            We seek to build businesses that create value not only for customers and partners, but also for employees, communities, and the wider Bhutanese economy.
          </p>
        </div>
      </section>

      {/* 18. CORPORATE VALUES SECTION */}
      <section className="py-24 bg-[#FFFFFF] text-[#1C1D21] relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8A6B29]">
              CORE ETHOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D21] tracking-tight">
              Corporate Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORPORATE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#FAF8F5] border border-[#B08B46]/20 rounded-sm hover:border-[#B08B46] hover:shadow-md transition-all space-y-3 group"
              >
                <span className="text-xs font-mono font-semibold text-[#8A6B29]">0{idx + 1}</span>
                <h3 className="text-2xl font-serif font-bold text-[#1C1D21] group-hover:text-[#8A6B29] transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#8A6B29] font-semibold">
                  {val.shortDescription}
                </p>
                <p className="text-xs text-[#5A5854] font-normal leading-relaxed pt-2 border-t border-gray-200">
                  {val.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
