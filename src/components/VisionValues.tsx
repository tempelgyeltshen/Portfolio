import React from 'react';
import { CORPORATE_VALUES } from '../data/groupData';

export const VisionValues: React.FC = () => {
  return (
    <div id="vision">
      {/* 17. VISION SECTION - Full Width Mountain Landscape */}
      <section className="relative py-36 gradient-hero text-[#2C2D31] overflow-hidden text-center border-t border-[#C9A227]/20 animate-fade-in">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
            alt="Bhutan Himalayan Mountain Landscape"
            className="w-full h-full object-cover filter brightness-105 contrast-100 opacity-12"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#FAF7F2]/95 to-white/90"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C9A227]">
            OUR VISION
          </span>

          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#2C2D31] tracking-tight text-shadow-lg">
            A VISION BEYOND BORDERS
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto my-6"></div>

          <p className="text-lg sm:text-2xl font-serif italic text-[#2C2D31] max-w-3xl mx-auto font-medium leading-relaxed text-shadow-md">
            "Remember, it's not about where you start; it's about where you're headed and the impact you make along the way."
          </p>

          <p className="text-xs sm:text-sm text-[#4A4843] font-normal max-w-2xl mx-auto leading-relaxed pt-2 text-shadow-sm">
            For me, tourism is more than welcoming visitors. It is about creating meaningful experiences that connect people with the heart and soul of Bhutan. As an entrepreneur, I have always believed that preserving our heritage and sharing it with the world can go hand in hand.
          </p>

          <p className="text-xs sm:text-sm text-[#4A4843] font-normal max-w-2xl mx-auto leading-relaxed text-shadow-sm">
            Through Bhutan Land of Happiness Tours and the High Quality Group, my vision is to deliver authentic, sustainable, and luxury travel experiences while empowering local communities and showcasing Bhutan's rich culture, traditions, and natural beauty.
          </p>

          <p className="text-xs sm:text-sm text-[#4A4843] font-normal max-w-2xl mx-auto leading-relaxed text-shadow-sm">
            Every journey we design reflects our commitment to excellence, genuine hospitality, and creating memories that inspire our guests to return again and again. I warmly invite you to discover the happiness, serenity, and timeless charm of the Kingdom of Bhutan with us.
          </p>
        </div>
      </section>

      {/* 18. CORPORATE VALUES SECTION */}
      <section className="py-24 gradient-section text-[#2C2D31] relative border-t border-[#C9A227]/20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              CORE ETHOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2D31] tracking-tight text-shadow-md">
              Corporate Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORPORATE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="card-elevated p-8 rounded-sm space-y-3 group"
              >
                <span className="text-xs font-mono font-semibold text-[#C9A227]">0{idx + 1}</span>
                <h3 className="text-2xl font-serif font-bold text-[#2C2D31] group-hover:text-[#C9A227] transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#C9A227] font-semibold">
                  {val.shortDescription}
                </p>
                <p className="text-xs text-[#4A4843] font-normal leading-relaxed pt-2 border-t border-[#C9A227]/20">
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