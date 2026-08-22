import React from 'react';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

const VISION_PILLARS = [
  {
    number: '01',
    title: 'Hospitality Expansion',
    description: 'Developing ultra-luxury resort properties across Bhutan\'s most iconic destinations — Paro, Punakha, and Bumthang — setting new standards for mindful Himalayan hospitality.',
  },
  {
    number: '02',
    title: 'Fleet & Transportation',
    description: 'Scaling to become Bhutan\'s premier transportation provider with 17+ SUVs, 7 Hi-Roof buses, and nationwide coverage serving tourists, corporates, and large-scale events.',
  },
  {
    number: '03',
    title: 'Cultural Preservation',
    description: 'Expanding Thangka painting galleries and traditional art preservation across key cultural hubs, ensuring Bhutanese artistic heritage reaches global audiences.',
  },
  {
    number: '04',
    title: 'Diversified Growth',
    description: 'Building a multi-sector business group that creates employment, develops talent, and contributes meaningfully to Bhutan\'s economic development for generations.',
  },
];

export const PhilosophySection: React.FC = () => {
  return (
    <section id="vision" className="relative bg-[#09090b] text-[#f4f4f5] py-28 sm:py-36 overflow-hidden">
      <BhutaneseTextileBackground variant="dark" opacity={0.06} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A059]">VISION</span>
              <span className="h-px w-12 bg-[#C5A059]/40" />
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal tracking-tight text-[#FAF9F6] leading-[1.1]">
              Long-Term Growth Strategy
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-base text-[#A1A1AA] leading-relaxed font-light">
              The High Quality Group is positioned for sustained expansion across hospitality, transportation, cultural arts, and commercial sectors — building a diversified business legacy for Bhutan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#27272a]">
          {VISION_PILLARS.map((pillar) => (
            <div key={pillar.number} className="bg-[#09090b] p-10">
              <span className="font-serif-luxury text-3xl font-light text-[#C5A059]">{pillar.number}</span>
              <h3 className="font-serif-luxury text-xl font-medium text-[#FAF9F6] mt-4 mb-4">{pillar.title}</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed font-light">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Fleet Stats */}
        <div className="mt-20 pt-16 border-t border-[#27272a]">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#71717A] mb-8">Fleet &amp; Operations</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ label: 'Premium SUVs', value: '17+' }, { label: 'Hi-Roof Buses', value: '7' }, { label: 'Passenger Capacity', value: '8-9' }, { label: 'Districts Covered', value: '20' }].map((stat, idx) => (
              <div key={idx}>
                <p className="font-serif-luxury text-4xl sm:text-5xl text-[#E8D4A2] font-light">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
