import React from 'react';
import { CHAIRMAN_INFO } from '../data/groupData';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

const CEO_VISION = {
  saying: "Remember, it's not about where you start; it's about where you're headed and the impact you make along the way.",
  opening: "My vision is simple: to build High Quality Group into one of Bhutan's most successful and influential business groups. I want every district in this Kingdom to know our name — not because we forced our way in, but because we delivered quality, created jobs, and built trust wherever we went.",
  pillars: [
    {
      number: '01',
      title: 'Expand Across All 20 Dzongkhags',
      description: 'From Thimphu to Bumthang, from Paro to Samdrup Jongkhar — my goal is to have a High Quality presence in every district. Car rental, tourism, food, entertainment, trading — we will be everywhere Bhutan needs us.',
    },
    {
      number: '02',
      title: 'Build Bhutan\'s Largest Fleet',
      description: 'We already operate 17+ SUVs and 7 Hi-Roof buses. But I am not satisfied. My target is 50+ vehicles — the largest, most trusted fleet in the country. When anyone in Bhutan needs transportation, they will call High Quality first.',
    },
    {
      number: '03',
      title: 'Become a Household Name',
      description: 'Every Bhutanese family should know High Quality — whether for a wedding, a tour, a meal, or a night out. I want our brand to be synonymous with quality, reliability, and Bhutanese pride.',
    },
    {
      number: '04',
      title: 'Generate Real Wealth',
      description: 'Profit is not a dirty word. I want this group to generate significant wealth — for me, for my family, for my employees, and for Bhutan. Success breeds success, and wealth creates opportunity.',
    },
  ],
  closing: 'We started with nothing but ambition and hard work. Today we have 7 companies, 20+ years of operations, and a reputation that speaks for itself. But we are just getting started. The best is yet to come.',
};

export const PhilosophySection: React.FC = () => {
  return (
    <section id="vision" className="relative bg-[#09090b] text-[#f4f4f5] py-28 sm:py-36 overflow-hidden">
      <BhutaneseTextileBackground variant="dark" opacity={0.12} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* CEO's Saying */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#E8D4A2] leading-relaxed font-light italic">
            &ldquo;{CEO_VISION.saying}&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C5A059]/40" />
            <p className="text-xs text-[#71717A] uppercase tracking-[0.2em]">{CHAIRMAN_INFO.name}</p>
            <span className="h-px w-8 bg-[#C5A059]/40" />
          </div>
        </div>

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

          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg text-[#A1A1AA] leading-relaxed font-light">
              {CEO_VISION.opening}
            </p>
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
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#71717A] mb-8">Current Operations</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ label: 'Premium SUVs', value: '17+' }, { label: 'Hi-Roof Buses', value: '7' }, { label: 'Companies', value: '7+' }, { label: 'Districts', value: '20' }].map((stat, idx) => (
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
