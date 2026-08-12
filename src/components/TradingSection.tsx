import React from 'react';
import { PackageCheck, Shield, Users, TrendingUp, ArrowRight } from 'lucide-react';

interface TradingSectionProps {
  onInquire: (subject: string) => void;
}

export const TradingSection: React.FC<TradingSectionProps> = ({ onInquire }) => {
  const principles = [
    {
      title: 'Reliable Sourcing',
      desc: 'Connecting commercial clients with verified products and suppliers that meet exact operational standards.',
      icon: PackageCheck
    },
    {
      title: 'Professional Service',
      desc: 'Building relationships through responsiveness, absolute transparency, and dependable communication.',
      icon: Shield
    },
    {
      title: 'Business Partnerships',
      desc: 'Developing long-term relationships with suppliers, customers, and business partners for sustainable growth.',
      icon: Users
    },
    {
      title: 'Long-Term Growth',
      desc: 'Creating commercial opportunities that foster mutual expansion and economic resilience in Bhutan.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="trading-section" className="py-24 bg-[#e9edc9] text-[#2C2D31] relative border-t border-gray-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Commercial Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#8B6914]/10 border border-[#8B6914]/30 text-xs uppercase tracking-[0.2em] text-[#8B6914] font-semibold">
              <span>03 — COMMERCIAL & TRADING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2D31] tracking-tight text-shadow-sm">
              High Quality Trading
            </h2>

            <p className="text-base sm:text-lg font-serif italic text-[#8B6914] font-semibold text-shadow-sm">
              Connecting Products, Markets and Opportunities
            </p>

            <p className="text-sm text-[#4A4843] font-normal leading-relaxed">
              High Quality Trading forms part of the group's commercial interests, positioned around the sourcing, distribution, and movement of products required by businesses across Bhutan.
            </p>

            <div className="p-4 bg-[#faedcd] border border-gray-200 rounded text-xs text-[#4A4843] space-y-1">
              <span className="text-[#8B6914] font-semibold uppercase tracking-wider block">Note:</span>
              <p>Detailed product categories and distribution partnerships are structured strictly upon verified client specifications.</p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onInquire('Commercial Trading Inquiry')}
                className="px-6 py-3 text-xs uppercase tracking-widest font-semibold text-white bg-[#1C1D21] hover:bg-[#8B6914] transition-colors rounded-sm flex items-center space-x-2 shadow-md"
              >
                <span>Initiate Commercial Partnership</span>
                <ArrowRight className="w-4 h-4 text-[#d4a373]" />
              </button>
            </div>
          </div>

          {/* RIGHT: 4 Feature Blocks */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <div
                  key={idx}
                  className="p-6 bg-[#faedcd] border border-[#8B6914]/20 rounded-sm hover:border-[#8B6914] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#8B6914]/10 border border-[#8B6914]/30 flex items-center justify-center mb-4 text-[#8B6914] group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#2C2D31] mb-2 group-hover:text-[#8B6914] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A4843] font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
