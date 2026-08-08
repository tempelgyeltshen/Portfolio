import React from 'react';
import { CHAIRMAN_INFO, LEADERSHIP_PHILOSOPHY } from '../data/groupData';
import { ShieldCheck, Lightbulb, Award, Handshake, Quote } from 'lucide-react';

export const ChairmanSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#8A6B29]" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-[#8A6B29]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#8A6B29]" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-[#8A6B29]" />;
      default: return <Award className="w-5 h-5 text-[#8A6B29]" />;
    }
  };

  return (
    <section id="chairman" className="py-24 bg-[#FAF8F5] text-[#1C1D21] relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8A6B29]">
            EXECUTIVE LEADERSHIP & VISION
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D21] tracking-tight">
            Chairman's Statement
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#B08B46] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Chairman Profile & Message Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* LEFT: Large Portrait Container */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-6">
              <div className="relative rounded-sm overflow-hidden border border-[#B08B46]/30 shadow-xl bg-white">
                <div className="aspect-[3/4] relative bg-[#FAF7F2]">
                  <img
                    src={CHAIRMAN_INFO.portraitImage}
                    alt={CHAIRMAN_INFO.portraitAlt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-6 bg-white border-t border-[#B08B46]/20">
                  <h3 className="text-2xl font-serif font-bold text-[#1C1D21] tracking-wide">
                    MR. PEMA TSHERING
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8A6B29] font-semibold mt-1">
                    Chairman | High Quality Pvt. Ltd.
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs text-[#5A5854]">
                    <p className="flex items-center justify-between">
                      <span className="text-[#8E8B85]">Headquarters:</span>
                      <span className="text-[#1C1D21] font-medium">Thimphu, Kingdom of Bhutan</span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-[#8E8B85]">Corporate Group:</span>
                      <span className="text-[#8A6B29] font-semibold">7 Diversified Business Arms</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Chairman's Message */}
          <div className="lg:col-span-7 space-y-8">
            {/* Large Decorative Quote & Header */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#B08B46] space-y-6">
              <Quote className="w-12 h-12 text-[#B08B46]/20 absolute -top-4 left-4 pointer-events-none" />
              
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A6B29]">
                  COMMERCIAL PHILOSOPHY & RESPONSIBLE GROWTH
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C1D21] leading-snug">
                  "Sustainable business is about creating opportunities, developing people, building trusted relationships, and contributing meaningfully to Bhutan's economic development."
                </h3>
              </div>

              {/* Message Paragraphs */}
              <div className="space-y-5 text-sm sm:text-base text-[#4A4843] font-normal leading-relaxed">
                {CHAIRMAN_INFO.fullMessage.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Official Chairman Signature Block */}
              <div className="pt-6 border-t border-[#B08B46]/20 flex items-center justify-between">
                <div>
                  <p className="text-xl font-serif font-bold text-[#1C1D21] tracking-wide">
                    Pema Tshering
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#8A6B29] font-semibold">
                    Chairman, High Quality Pvt. Ltd.
                  </p>
                </div>
                <div className="px-3 py-1 rounded bg-[#B08B46]/10 border border-[#B08B46]/30 text-[11px] uppercase tracking-widest text-[#8A6B29] font-semibold">
                  Official Corporate Statement
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Leadership Philosophy 4 Cards */}
        <div className="pt-12 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif font-bold text-[#1C1D21]">
              Leadership Philosophy
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A6B29] font-semibold mt-1">
              Four Guiding Pillars of the High Quality Group
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_PHILOSOPHY.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#B08B46]/20 rounded-sm hover:border-[#B08B46] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-sm bg-[#B08B46]/10 border border-[#B08B46]/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(pillar.icon)}
                </div>
                <h4 className="text-lg font-serif font-bold text-[#1C1D21] mb-2 group-hover:text-[#8A6B29] transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#5A5854] font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
