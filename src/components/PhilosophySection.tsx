import React from 'react';
import { CHAIRMAN_INFO } from '../data/groupData';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

const CEO_VISION = {
  opening: 'My vision for the High Quality Group is not simply to build businesses — it is to build institutions that endure. Businesses that create meaningful employment for our people, preserve the cultural heritage we are so proud of, and contribute to Bhutan\'s journey as a modern, self-reliant nation.',
  pillars: [
    {
      number: '01',
      title: 'Hospitality & Tourism',
      description: 'Bhutan is one of the world\'s most extraordinary destinations. I envision the High Quality Group becoming the trusted name for travelers seeking authentic, luxurious, and meaningful experiences across our Kingdom — from boutique resorts in Paro and Punakha to curated cultural journeys in Bumthang.',
    },
    {
      number: '02',
      title: 'Transportation at Scale',
      description: 'With one of Bhutan\'s largest car rental fleets — 17+ SUVs, 7 Hi-Roof buses, and growing — we are building the transportation backbone that Bhutan\'s tourism and corporate sectors need. My goal is to make High Quality Car Rental the first name in reliable, premium ground transport nationwide.',
    },
    {
      number: '03',
      title: 'Cultural Preservation',
      description: 'Our Thangka painting gallery is more than a business — it is a commitment to preserving centuries of Bhutanese artistic tradition. I want every collector, every visitor, every institution that encounters our work to understand the depth and beauty of Himalayan sacred art.',
    },
    {
      number: '04',
      title: 'Diversified Legacy',
      description: 'From food service to entertainment, from enterprise development to commercial trading — each company within the group is a building block. My long-term ambition is a diversified business group that can sustain itself across generations, creating value for Bhutan and its people.',
    },
  ],
  closing: 'I believe the strongest businesses are built on trust, quality, and relationships that last. That is the foundation of everything we do at the High Quality Group, and that is the legacy I am committed to building.',
};

export const PhilosophySection: React.FC = () => {
  return (
    <section id="vision" className="relative bg-[#09090b] text-[#f4f4f5] py-28 sm:py-36 overflow-hidden">
      <BhutaneseTextileBackground variant="dark" opacity={0.12} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A059]">VISION</span>
              <span className="h-px w-12 bg-[#C5A059]/40" />
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal tracking-tight text-[#FAF9F6] leading-[1.1]">
              Where We Are Heading
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-4 space-y-6">
            <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed font-light font-serif-luxury italic">
              &ldquo;{CEO_VISION.opening}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C5A059]/40" />
              <p className="text-xs text-[#71717A] uppercase tracking-[0.2em]">{CHAIRMAN_INFO.name}, {CHAIRMAN_INFO.title}</p>
            </div>
          </div>
        </div>

        {/* Vision Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#27272a]">
          {CEO_VISION.pillars.map((pillar) => (
            <div key={pillar.number} className="bg-[#09090b] p-10">
              <span className="font-serif-luxury text-3xl font-light text-[#C5A059]">{pillar.number}</span>
              <h3 className="font-serif-luxury text-xl font-medium text-[#FAF9F6] mt-4 mb-4">{pillar.title}</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed font-light">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-20 pt-16 border-t border-[#27272a]">
          <p className="font-serif-luxury text-xl sm:text-2xl text-[#A1A1AA] leading-relaxed font-light italic max-w-3xl">
            &ldquo;{CEO_VISION.closing}&rdquo;
          </p>
        </div>

        {/* Fleet Stats */}
        <div className="mt-16 pt-16 border-t border-[#27272a]">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#71717A] mb-8">Operations at a Glance</p>
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
