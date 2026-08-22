import React from 'react';
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
  return (
    <section id="ventures" className="relative bg-[#09090b] text-[#f4f4f5] py-28 sm:py-36 overflow-hidden">
      <BhutaneseTextileBackground variant="dark" opacity={0.12} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A059]">VENTURES</span>
            <span className="h-px w-12 bg-[#C5A059]/40" />
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal tracking-tight text-[#FAF9F6] leading-[1.1]">
            The High Quality Group
          </h2>
          <p className="text-sm text-[#71717A] max-w-lg">{GROUP_COMPANIES.length} companies across {new Set(GROUP_COMPANIES.map(c => c.industry)).size} industries, serving all 20 districts of Bhutan.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#27272a]">
          {GROUP_COMPANIES.map((company) => (
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
