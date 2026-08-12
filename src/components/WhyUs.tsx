import React from 'react';
import { WHY_WORK_WITH_US } from '../data/groupData';

export const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#e9edc9] text-[#1C1D21] relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ccd5ae]">
            CORPORATE ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1D21] tracking-tight">
            WHY WORK WITH US
          </h2>
          <div className="w-16 h-[2px] bg-[#d4a373] mx-auto mt-4"></div>
        </div>

        {/* 7 Minimal Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_US.map((item) => (
            <div
              key={item.number}
              className="p-8 bg-[#faedcd] border border-[#d4a373]/20 rounded-sm hover:border-[#d4a373] hover:shadow-md transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="text-2xl font-serif font-bold text-[#ccd5ae]">
                  {item.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#d4a373]/40 group-hover:bg-[#ccd5ae] transition-colors"></span>
              </div>

              <h3 className="text-xl font-serif font-bold text-[#1C1D21] group-hover:text-[#ccd5ae] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5A5854] font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
