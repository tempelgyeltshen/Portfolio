import React, { useState } from 'react';
import { GROUP_COMPANIES } from '../data/groupData';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

const COMPANY_ROLES: Record<string, string> = {
  'thangka': 'Founder & Patron',
  'car-rental': 'President & CEO',
  'travelers': 'Founder & Director',
  'enterprise': 'Chairman',
  'food-247': 'Founder',
  'hitokara': 'Founder & Owner',
  'trading': 'Managing Director',
};

export const VenturesSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? GROUP_COMPANIES : GROUP_COMPANIES.slice(0, 4);

  return (
    <section id="ventures" className="relative bg-[#09090b] text-[#f4f4f5] py-28 sm:py-36 overflow-hidden">
      <BhutaneseTextileBackground variant="dark" opacity={0.03} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A059]">VENTURES</span>
              <span className="h-px w-12 bg-[#C5A059]/40" />
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal tracking-tight text-[#FAF9F6] leading-[1.1]">
              My Business Portfolio
            </h2>
          </div>

          {GROUP_COMPANIES.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] hover:text-[#E8D4A2] transition-colors font-medium"
            >
              {showAll ? 'Show Less' : `View All ${GROUP_COMPANIES.length} Ventures`}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#27272a]">
          {displayed.map((company) => (
            <Link
              key={company.id}
              to={`/company/${company.id}`}
              className="group bg-[#09090b] p-8 flex flex-col justify-between min-h-[320px] hover:bg-[#121214] transition-colors duration-500"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#71717A] mb-6">{company.number}</p>
                <h3 className="font-serif-luxury text-xl font-medium text-[#FAF9F6] group-hover:text-[#E8D4A2] transition-colors mb-2">
                  {company.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#C5A059] mb-4">{company.industry}</p>
                <p className="text-xs text-[#71717A] leading-relaxed line-clamp-3">{company.description}</p>
              </div>

              <div className="pt-6 border-t border-[#27272a] flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#52525B]">{COMPANY_ROLES[company.id] || 'Founder'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
