import React from 'react';
import { CHAIRMAN_INFO, LEADERSHIP_PHILOSOPHY } from '../data/groupData';
import { ShieldCheck, Lightbulb, Award, Handshake, Quote } from 'lucide-react';

export const ChairmanSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#8B6914]" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-[#8B6914]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#8B6914]" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-[#8B6914]" />;
      default: return <Award className="w-5 h-5 text-[#8B6914]" />;
    }
  };

  return (
    <section id="chairman" className="py-24 bg-[#faedcd] text-[#2C2D31] relative border-t border-gray-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8B6914]">
            EXECUTIVE LEADERSHIP & VISION
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2D31] tracking-tight text-shadow-sm">
            Chairman's Statement
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4a373] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Chairman Profile & Message Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* LEFT: Large Portrait Container */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-6">
              <div className="relative rounded-sm overflow-hidden border border-[#8B6914]/30 shadow-xl bg-white transition-all duration-300 hover:shadow-2xl">
                <div className="aspect-[3/4] relative bg-[#faedcd]">
                  <img
                    src={CHAIRMAN_INFO.portraitImage}
                    alt={CHAIRMAN_INFO.portraitAlt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 bg-white border-t border-[#8B6914]/20">
                  <h3 className="text-2xl font-serif font-bold text-[#2C2D31] tracking-wide text-shadow-sm">
                    MR. PEMA TSHERING
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8B6914] font-semibold mt-1">
                    Chairman | High Quality Pvt. Ltd.
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs text-[#4A4843]">
                    <p className="flex items-center justify-between">
                      <span className="text-[#8E8B85]">Headquarters:</span>
                      <span className="text-[#2C2D31] font-medium">Thimphu, Kingdom of Bhutan</span>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-[#8E8B85]">Corporate Group:</span>
                      <span className="text-[#8B6914] font-semibold">7 Diversified Business Arms</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Chairman's Message */}
          <div className="lg:col-span-7 space-y-8">
            {/* Large Decorative Quote & Header */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#8B6914] space-y-6">
              <Quote className="w-12 h-12 text-[#8B6914]/20 absolute -top-4 left-4 pointer-events-none" />
              
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8B6914]">
                  COMMERCIAL PHILOSOPHY & RESPONSIBLE GROWTH
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2C2D31] leading-snug text-shadow-sm">
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
              <div className="pt-6 border-t border-[#8B6914]/20 flex items-center justify-between">
                <div>
                  <p className="text-xl font-serif font-bold text-[#2C2D31] tracking-wide">
                    Pema Tshering
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#8B6914] font-semibold">
                    Chairman, High Quality Pvt. Ltd.
                  </p>
                </div>
                <div className="px-3 py-1 rounded bg-[#d4a373]/10 border border-[#8B6914]/30 text-[11px] uppercase tracking-widest text-[#8B6914] font-semibold">
                  Official Corporate Statement
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Leadership Philosophy 4 Cards */}
        <div className="pt-12 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif font-bold text-[#2C2D31] text-shadow-sm">
              Leadership Philosophy
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8B6914] font-semibold mt-1">
              Four Guiding Pillars of the High Quality Group
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_PHILOSOPHY.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#8B6914]/20 rounded-sm hover:border-[#8B6914] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-sm bg-[#8B6914]/10 border border-[#8B6914]/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(pillar.icon)}
                </div>
                <h4 className="text-lg font-serif font-bold text-[#2C2D31] mb-2 group-hover:text-[#8B6914] transition-colors duration-300">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#4A4843] font-normal leading-relaxed">
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
