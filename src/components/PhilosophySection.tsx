import React, { useState } from 'react';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

const PHILOSOPHY_PILLARS = [
  {
    id: 'phil-1',
    number: '01',
    title: 'Quality & Excellence',
    quote: 'Setting high standards in product quality, service delivery, and professional operational execution.',
    description: 'Every business within our group is held to stringent quality standards. We pursue flawlessness in client service and operational execution.',
    principles: ['Professional service delivery', 'Rigorous quality control', 'Continuous improvement culture'],
  },
  {
    id: 'phil-2',
    number: '02',
    title: 'Integrity & Trust',
    quote: 'Building relationships based on truthfulness, keeping commitments, and honoring institutional trust.',
    description: 'We build long-term partnerships through unwavering honesty, transparency, and ethical accountability across all commercial transactions.',
    principles: ['Transparent business practices', 'Long-term relationship focus', 'Ethical accountability'],
  },
  {
    id: 'phil-3',
    number: '03',
    title: 'Innovation & Growth',
    quote: 'Continuously refining operations, adopting appropriate technologies, and anticipating market evolution.',
    description: 'We embrace modern management practices while maintaining reverence for Bhutanese traditions, adapting to changing market needs.',
    principles: ['Appropriate technology adoption', 'Market-responsive operations', 'Traditional wisdom with modern execution'],
  },
  {
    id: 'phil-4',
    number: '04',
    title: 'Partnership & Community',
    quote: 'Fostering long-term, mutually beneficial commercial ecosystems across Bhutan.',
    description: 'We view clients, employees, and global collaborators as long-term allies in sustainable development and economic growth.',
    principles: ['Community-centered enterprise', 'Mutually beneficial partnerships', 'Gross National Happiness alignment'],
  },
];

export const PhilosophySection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>(PHILOSOPHY_PILLARS[0].id);

  return (
    <section id="philosophy" className="relative bg-[#FAF9F6] text-[#18181B] py-24 sm:py-32 overflow-hidden border-t border-b border-[#E4E4E7]">
      <BhutaneseTextileBackground variant="light" opacity={0.04} />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#8A7347]">PHILOSOPHY</span>
              <span className="h-[1px] w-10 bg-[#8A7347]/60" />
            </div>
            <h2 id="philosophy-headline" className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#18181B] leading-[1.15]">
              Long-Term Thinking.<br />Generational Impact.
            </h2>

          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-sm text-[#52525B] leading-relaxed">
              Every business within the group is guided by principles of quality, integrity, and long-term value creation. These pillars shape how we serve our clients, partners, and communities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PHILOSOPHY_PILLARS.map((pillar) => {
            const isSelected = activePillar === pillar.id;
            return (
              <div key={pillar.id} onClick={() => setActivePillar(pillar.id)} className={`cursor-pointer transition-all duration-300 p-8 bg-white/80 border ${isSelected ? 'border-[#8A7347] shadow-md ring-1 ring-[#8A7347]/30' : 'border-[#E4E4E7] hover:border-[#8A7347]/50'}`}>
                <span className="font-serif-luxury text-2xl font-semibold text-[#8A7347]">{pillar.number}</span>
                <h3 className="font-serif-luxury text-2xl font-medium text-[#18181B] mt-3 mb-4">{pillar.title}</h3>
                <p className="text-sm text-[#52525B] leading-relaxed font-light">{pillar.description}</p>
                <div className="mt-6 pt-4 border-t border-[#F4F4F5] space-y-2">
                  {pillar.principles.map((pr, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#3F3F46]">
                      <span className="w-1.5 h-1.5 bg-[#8A7347] rounded-full shrink-0" />
                      <span>{pr}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
