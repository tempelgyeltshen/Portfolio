import React from 'react';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

const EXPERIENCE_ITEMS = [
  {
    year: 'Present',
    title: 'Chairman & President',
    organization: "Pema's High Quality Group Pvt Ltd",
    location: 'Thimphu, Bhutan',
    description: 'Leading a diversified business group across tourism, transportation, traditional arts, enterprise services, food and hospitality, and entertainment.',
    highlights: ['7+ subsidiary companies across 5 industry sectors', 'Nationwide operations serving all 20 Dzongkhags'],
  },
  {
    year: '2010s',
    title: 'Business Expansion',
    organization: 'High Quality Group',
    location: 'Thimphu, Bhutan',
    description: 'Established multiple subsidiary companies including High Quality Travelers, High Quality Car Rental, and High Quality Thangka Painting.',
    highlights: ['Built one of Bhutan\'s largest car rental fleets', 'Expanded tourism operations nationwide'],
  },
  {
    year: '2000s',
    title: 'Foundation',
    organization: "Pema's High Quality Group Pvt Ltd",
    location: 'Thimphu, Bhutan',
    description: 'Founded the company with a vision to create sustainable business opportunities in Bhutan.',
    highlights: ['Established core business infrastructure', 'Built foundational industry relationships'],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative bg-[#FAF9F6] text-[#18181B] py-28 sm:py-36 overflow-hidden">
      <BhutaneseTextileBackground variant="light" opacity={0.08} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#8A7347]">EXPERIENCE</span>
            <span className="h-px w-12 bg-[#8A7347]/40" />
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal tracking-tight text-[#18181B] leading-[1.1]">
            Track Record
          </h2>
        </div>

        <div className="space-y-0">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-t border-[#E4E4E7]">
              <div className="lg:col-span-3">
                <span className="font-serif-luxury text-2xl font-light text-[#8A7347]">{item.year}</span>
                <p className="text-[11px] text-[#A1A1AA] mt-1">{item.location}</p>
              </div>

              <div className="lg:col-span-5 space-y-2">
                <h3 className="font-serif-luxury text-xl font-medium text-[#18181B]">{item.title}</h3>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#8A7347]">{item.organization}</p>
                <p className="text-sm text-[#52525B] leading-relaxed mt-3">{item.description}</p>
              </div>

              <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-[#E4E4E7]">
                <ul className="space-y-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#52525B]">
                      <span className="w-1 h-1 bg-[#8A7347] rounded-full shrink-0 mt-1.5" />
                      <span>{h}</span>
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
