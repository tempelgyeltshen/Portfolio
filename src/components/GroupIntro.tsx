import React from 'react';

export const GroupIntro: React.FC = () => {
  return (
    <section id="group-intro" className="relative py-28 bg-[#FFFFFF] text-[#1C1D21] overflow-hidden border-t border-gray-200">
      {/* Background Photograph of Bhutan with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=2000&q=85"
          alt="Majestic Kingdom of Bhutan"
          className="w-full h-full object-cover filter brightness-105 opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90"></div>
        <div className="absolute inset-0 bhutan-pattern opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          
          {/* Subtle Label */}
          <div className="inline-flex items-center space-x-2">
            <span className="w-8 h-[2px] bg-[#B08B46]"></span>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#8A6B29]">
              PORTFOLIO OVERVIEW
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#1C1D21] tracking-tight">
            HIGH QUALITY GROUP
          </h2>

          <p className="text-xl font-serif italic text-[#8A6B29] font-semibold">
            A Diversified Bhutanese Business Group
          </p>

          {/* Animated Gold Line */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#B08B46] via-[#8A6B29] to-transparent rounded-full"></div>

          {/* Explanatory Narrative */}
          <div className="space-y-4 text-base sm:text-lg text-[#4A4843] font-normal leading-relaxed pt-2">
            <p>
              High Quality Pvt. Ltd. brings together a growing portfolio of businesses operating across complementary sectors.
            </p>
            <p>
              The group's philosophy is to develop specialized businesses that can independently serve their respective markets while benefiting from shared values, management experience, relationships, and a commitment to quality.
            </p>
            <p>
              From introducing international visitors to Bhutan's landscapes and culture to supporting mobility, traditional arts, enterprise activities, food services, and entertainment, the High Quality Group aims to build businesses that respond to real market needs.
            </p>
          </div>

          {/* Core Sector Statistics / Summary Indicators */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#B08B46]/20">
            <div>
              <span className="text-3xl font-serif font-bold text-[#1C1D21]">100%</span>
              <p className="text-[11px] uppercase tracking-wider text-[#8A6B29] font-semibold mt-0.5">Bhutanese Identity</p>
            </div>
            <div>
              <span className="text-3xl font-serif font-bold text-[#1C1D21]">05</span>
              <p className="text-[11px] uppercase tracking-wider text-[#8A6B29] font-semibold mt-0.5">Core Operational Regions</p>
            </div>
            <div>
              <span className="text-3xl font-serif font-bold text-[#1C1D21]">24/7</span>
              <p className="text-[11px] uppercase tracking-wider text-[#8A6B29] font-semibold mt-0.5">Quality Service</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
