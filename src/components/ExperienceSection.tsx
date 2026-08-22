import React from 'react';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

const EXPERIENCE_ITEMS = [
  {
    id: 'exp-1',
    year: 'Present',
    title: 'Chairman & President',
    organization: "Pema's High Quality Group Pvt Ltd",
    location: 'Thimphu, Bhutan',
    category: 'Enterprise' as const,
    description: 'Leading a diversified business group across tourism, transportation, traditional arts, enterprise services, food and hospitality, and entertainment sectors.',
    accomplishments: ['7+ subsidiary companies across 5 industry sectors', 'Nationwide operations serving all 20 Dzongkhags'],
  },
  {
    id: 'exp-2',
    year: '2010s',
    title: 'Business Expansion',
    organization: 'High Quality Group',
    location: 'Thimphu, Bhutan',
    category: 'Enterprise' as const,
    description: 'Established multiple subsidiary companies including High Quality Travelers, High Quality Car Rental, and High Quality Thangka Painting.',
    accomplishments: ['Built one of Bhutan\'s largest car rental fleets', 'Expanded tourism operations nationwide'],
  },
  {
    id: 'exp-3',
    year: '2000s',
    title: 'Foundation',
    organization: "Pema's High Quality Group Pvt Ltd",
    location: 'Thimphu, Bhutan',
    category: 'Enterprise' as const,
    description: 'Founded the company with a vision to create sustainable business opportunities in Bhutan.',
    accomplishments: ['Established core business infrastructure', 'Built foundational industry relationships'],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative bg-[#09090b] text-[#f4f4f5] py-24 sm:py-32 overflow-hidden">
      <BhutaneseTextileBackground variant="dark" opacity={0.05} />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="mb-16 space-y-4 max-w-xl">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#C5A059]">TRACK RECORD</span>
            <span className="h-[1px] w-10 bg-[#C5A059]/60" />
          </div>
          <h2 id="experience-headline" className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#FAF9F6] leading-[1.15]">
            Milestones &amp; Leadership
          </h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCE_ITEMS.map(item => (
            <div key={item.id} className="p-8 bg-[#121214]/90 border border-[#27272a] hover:border-[#C5A059]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-3 space-y-2">
                <span className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#E8D4A2]">{item.year}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 border border-[#3f3f46] text-[#A1A1AA]">{item.category}</span>
                  <span className="text-[11px] text-[#71717A]">{item.location}</span>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-1">
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#FAF9F6]">{item.title}</h3>
                <p className="text-xs uppercase tracking-[0.16em] text-[#C5A059] font-medium">{item.organization}</p>
                <p className="text-xs text-[#A1A1AA] pt-2 font-light leading-relaxed">{item.description}</p>
              </div>
              <div className="lg:col-span-5 space-y-2 lg:pl-6 lg:border-l lg:border-[#27272a]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] font-semibold">Key Accomplishments</p>
                <ul className="space-y-2">
                  {item.accomplishments.map((acc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#D4D4D8]">
                      <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full shrink-0 mt-1.5" />
                      <span>{acc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
