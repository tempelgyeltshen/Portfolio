import React from 'react';
import { PRESIDENT_INFO } from '../data/groupData';
import { ChevronDown, ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface HeroProps {
  onExploreGroup: () => void;
  onChairmanMessage: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreGroup, onChairmanMessage }) => {
  return (
    <section id="hero" className="relative min-h-screen gradient-section text-[#2C2D31] flex items-center pt-28 pb-16 overflow-hidden border-b border-[#C9A227]/20">
      {/* Background Subtle Bhutan Pattern & Ambient Glow */}
      <div className="absolute inset-0 bhutan-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#9CAF88]/10 rounded-full blur-3xl pointer-events-none animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8D4C4]/8 rounded-full blur-3xl pointer-events-none animate-float" style={{animationDelay: '4s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Heading & Overview */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Gold Label */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 animate-fade-in animate-pulse-glow">
              <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse"></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                PRESIDENT & CEO | HIGH QUALITY PVT. LTD.
              </span>
            </div>

            {/* Large Serif Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2C2D31] leading-[1.12] tracking-tight animate-fade-in-up delay-100 text-shadow-md">
              Building Businesses.{' '}
              <span className="gold-text font-serif italic block mt-1 sm:inline sm:mt-0">
                Creating Opportunities.
              </span>{' '}
              Delivering Excellence.
            </h1>

            {/* Short Paragraph explaining President & CEO's philosophy */}
            <p className="text-base sm:text-lg text-[#4A4843] max-w-2xl font-normal leading-relaxed animate-fade-in-up delay-200 text-shadow-sm">
              {PRESIDENT_INFO.shortPhilosophy}
            </p>

            {/* Quick Strategic Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#4A4843] font-medium animate-fade-in-up delay-300">
              <div className="flex items-center space-x-2 card-elevated px-4 py-2 rounded-sm">
                <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                <span>Diversified Bhutanese Portfolio</span>
              </div>
              <div className="flex items-center space-x-2 card-elevated px-4 py-2 rounded-sm">
                <Award className="w-4 h-4 text-[#C9A227]" />
                <span>Unwavering Corporate Standards</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-6 flex flex-wrap gap-4 items-center animate-fade-in-up delay-400">
              <button
                onClick={onExploreGroup}
                className="btn-primary px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold rounded-sm flex items-center space-x-3 group"
              >
                <span>Explore the Group</span>
                <ArrowRight className="w-4 h-4 text-[#C9A227] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </button>

              <button
                onClick={onChairmanMessage}
                className="btn-secondary px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold rounded-sm"
              >
                President's Message
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Chairman Portrait Frame */}
          <div className="lg:col-span-5 relative animate-slide-in-right delay-300">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Geometry */}
              <div className="absolute -inset-3 rounded-sm border border-[#C9A227]/30 -rotate-2 pointer-events-none animate-float"></div>
              <div className="absolute -inset-5 rounded-sm border border-[#9CAF88]/20 rotate-1 pointer-events-none animate-float" style={{animationDelay: '1s'}}></div>

              {/* Main Portrait Container */}
              <div className="relative card-elevated rounded-sm overflow-hidden shadow-2xl group">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={PRESIDENT_INFO.portraitImage}
                    alt={PRESIDENT_INFO.portraitAlt}
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Bhutanese Watermark Badge */}
                  <div className="absolute top-4 right-4 glass px-4 py-2 rounded-sm border border-[#C9A227]/30 text-[10px] uppercase tracking-widest text-[#C9A227] font-semibold shadow-lg">
                    Kingdom of Bhutan
                  </div>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>
                </div>

                {/* Portrait Caption Overlay */}
                <div className="p-6 gradient-section border-t border-[#C9A227]/20 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#2C2D31] tracking-wide text-shadow-sm">
                        {PRESIDENT_INFO.name}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-[#C9A227] font-semibold mt-0.5">
                        {PRESIDENT_INFO.title} | {PRESIDENT_INFO.company}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-[#C9A227]/40 flex items-center justify-center bg-[#C9A227]/15 text-[#C9A227] font-serif font-bold text-sm shadow-md">
                      PT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center animate-fade-in delay-500">
          <a
            href="#chairman"
            className="flex flex-col items-center text-[#4A4843] hover:text-[#C9A227] transition-colors duration-300 group"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold">Scroll to Discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C9A227]" />
          </a>
        </div>
      </div>
    </section>
  );
};
