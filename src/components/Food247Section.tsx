import React from 'react';
import { UtensilsCrossed, ShieldAlert, Heart, Smile, Clock } from 'lucide-react';

export const Food247Section: React.FC = () => {
  const pillars = [
    { title: 'Quality', desc: 'Fresh, carefully sourced ingredients and culinary standards.', icon: UtensilsCrossed },
    { title: 'Hygiene', desc: 'Strict operational cleanliness and kitchen sanitation.', icon: ShieldAlert },
    { title: 'Service', desc: 'Customer-friendly, welcoming, and responsive staff.', icon: Smile },
    { title: 'Convenience', desc: 'Reliable availability suited to fast-moving customer schedules.', icon: Clock },
    { title: 'Satisfaction', desc: 'Consistently satisfying everyday customer expectations.', icon: Heart }
  ];

  return (
    <section id="food-247-section" className="py-24 bg-[#e9edc9] text-[#2C2D31] relative border-t border-gray-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#8B6914]/10 border border-[#8B6914]/30 text-xs uppercase tracking-[0.2em] text-[#8B6914] font-semibold">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>05 — FOOD SERVICE & CONVENIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C2D31] tracking-tight text-shadow-sm">
            High Quality 24/7
          </h2>
          <p className="text-xl font-serif italic text-[#8B6914] font-semibold text-shadow-sm">
            QUALITY FOOD. RELIABLE SERVICE.
          </p>
          <p className="text-xs sm:text-sm text-[#4A4843] font-normal leading-relaxed max-w-2xl mx-auto pt-2">
            In a fast-moving environment, High Quality 24/7 combines convenient service, clean operations, and consistent culinary quality for everyday customer satisfaction.
          </p>
        </div>

        {/* Food & Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <div
                key={idx}
                className="p-6 bg-[#faedcd] border border-[#8B6914]/20 rounded-sm hover:border-[#8B6914] hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-[#8B6914]/10 border border-[#8B6914]/30 flex items-center justify-center mx-auto mb-4 text-[#8B6914] group-hover:scale-110 transition-transform duration-300">
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
    </section>
  );
};
