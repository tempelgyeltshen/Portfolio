import React from 'react';
import { CHAIRMAN_INFO } from '../data/groupData';
import { Quote } from 'lucide-react';

export const ChairmanClosing: React.FC = () => {
  return (
    <section className="py-24 bg-[#faedcd] text-[#2C2D31] relative border-t border-gray-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-[#8B6914]/30 rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 shadow-xl relative">
          
          {/* Background Pattern Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bhutan-pattern opacity-15 pointer-events-none"></div>

          {/* LEFT: Chairman Portrait / Landscape Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#8B6914]/30 aspect-[4/5] bg-[#faedcd]">
              <img
                src={CHAIRMAN_INFO.portraitImage}
                alt={CHAIRMAN_INFO.portraitAlt}
                className="w-full h-full object-cover object-top"
              />

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded border border-[#8B6914]/30 text-center shadow-sm">
                <p className="text-lg font-serif font-bold text-[#2C2D31]">{CHAIRMAN_INFO.name}</p>
                <p className="text-xs uppercase tracking-widest text-[#8B6914] font-semibold">Chairman, High Quality Pvt. Ltd.</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Closing Narrative & Large Quotation */}
          <div className="lg:col-span-7 space-y-6">
            <Quote className="w-12 h-12 text-[#d4a373]/40" />

            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#2C2D31] leading-tight text-shadow-sm">
              "{CHAIRMAN_INFO.closingQuote}"
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#4A4843] font-normal leading-relaxed pt-2 border-t border-gray-200">
              {CHAIRMAN_INFO.closingStatement.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-gray-200">
              <div>
                <p className="text-sm font-serif font-bold text-[#2C2D31]">{CHAIRMAN_INFO.name}</p>
                <p className="text-[11px] text-[#8B6914] font-semibold">Chairman, High Quality Pvt. Ltd.</p>
              </div>
              <div className="px-3 py-1 bg-[#d4a373]/10 border border-[#8B6914]/30 rounded text-[10px] uppercase tracking-widest text-[#8B6914] font-semibold">
                Closing Address
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
