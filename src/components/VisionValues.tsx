import React from 'react';
import { CORPORATE_VALUES } from '../data/groupData';

export const VisionValues: React.FC = () => {
  return (
    <div id="vision">
      {/* 17. VISION SECTION - Full Width Mountain Landscape */}
      <section className="relative py-36 bg-[#faedcd] text-[#1C1D21] overflow-hidden text-center border-t border-gray-200">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
            alt="Bhutan Himalayan Mountain Landscape"
            className="w-full h-full object-cover filter brightness-105 contrast-100 opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#faedcd]/90 to-white"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#ccd5ae]">
            OUR VISION
          </span>

          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#1C1D21] tracking-tight">
            A VISION BEYOND BORDERS
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4a373] to-transparent mx-auto my-6"></div>

          <p className="text-lg sm:text-2xl font-serif italic text-[#1C1D21] max-w-3xl mx-auto font-medium leading-relaxed">
            “Remember, it’s not about where you start; it’s about where you’re headed and the impact you make along the way.”
          </p>

          <p className="text-xs sm:text-sm text-[#5A5854] font-normal max-w-2xl mx-auto leading-relaxed pt-2">
            For me, tourism is more than welcoming visitors. It is about creating meaningful experiences that connect people with the heart and soul of Bhutan. As an entrepreneur, I have always believed that preserving our heritage and sharing it with the world can go hand in hand.
          </p>

          <p className="text-xs sm:text-sm text-[#5A5854] font-normal max-w-2xl mx-auto leading-relaxed">
            Through Bhutan Land of Happiness Tours and the High Quality Group, my vision is to deliver authentic, sustainable, and luxury travel experiences while empowering local communities and showcasing Bhutan’s rich culture, traditions, and natural beauty.
          </p>

          <p className="text-xs sm:text-sm text-[#5A5854] font-normal max-w-2xl mx-auto leading-relaxed">
            Every journey we design reflects our commitment to excellence, genuine hospitality, and creating memories that inspire our guests to return again and again. I warmly invite you to discover the happiness, serenity, and timeless charm of the Kingdom of Bhutan with us.
          </p>
        </div>
      </section>

      {/* 18. CORPORATE VALUES SECTION */}
      <section className="py-24 bg-[#e9edc9] text-[#1C1D21] relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ccd5ae]">
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
                className="p-8 bg-[#faedcd] border border-[#d4a373]/20 rounded-sm hover:border-[#d4a373] hover:shadow-md transition-all space-y-3 group"
              >
                <span className="text-xs font-mono font-semibold text-[#ccd5ae]">0{idx + 1}</span>
                <h3 className="text-2xl font-serif font-bold text-[#1C1D21] group-hover:text-[#ccd5ae] transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#ccd5ae] font-semibold">
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
