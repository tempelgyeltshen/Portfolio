import React, { useState } from 'react';
import { GROUP_COMPANIES } from '../data/groupData';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { BhutaneseTextileBackground, VentureIcon } from './BhutaneseMotifs';

const COMPANY_ICONS: Record<string, 'palette' | 'car' | 'mountain' | 'diamond' | 'flower' | 'shield' | 'leaf' | 'knot'> = {
  'thangka': 'palette',
  'car-rental': 'car',
  'travelers': 'mountain',
  'enterprise': 'diamond',
  'food-247': 'flower',
  'hitokara': 'knot',
  'trading': 'shield',
};

export const VenturesSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCompanies = showAll ? GROUP_COMPANIES : GROUP_COMPANIES.slice(0, 4);

  return (
    <section id="ventures" className="relative bg-[#09090b] text-[#f4f4f5] py-24 sm:py-32 overflow-hidden">
      <BhutaneseTextileBackground variant="dark" opacity={0.05} />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#C5A059]">VENTURES</span>
              <span className="h-[1px] w-10 bg-[#C5A059]/60" />
            </div>
            <h2 id="ventures-headline" className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#FAF9F6] leading-[1.15]">
              Companies<br />I Build &amp; Back
            </h2>
          </div>
          <button onClick={() => setShowAll(!showAll)} className="group inline-flex items-center gap-3 px-6 py-3 border border-[#C5A059] text-xs font-medium uppercase tracking-[0.2em] text-[#C5A059] hover:bg-[#C5A059]/10 transition-colors cursor-pointer">
            <span>{showAll ? 'SHOW CURATED' : 'VIEW ALL VENTURES'}</span>
            <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCompanies.map((company) => (
            <Link key={company.id} to={`/company/${company.id}`} className="group relative bg-[#121214]/80 border border-[#27272a] hover:border-[#C5A059]/80 p-8 flex flex-col justify-between min-h-[340px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C5A059]/5 block">
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-[#C5A059] transition-transform duration-300 group-hover:scale-110">
                    <VentureIcon type={COMPANY_ICONS[company.id] || 'diamond'} size={38} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#71717A] group-hover:text-[#C5A059] transition-colors">{company.number}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif-luxury text-xl font-medium text-[#FAF9F6] group-hover:text-[#E8D4A2] transition-colors">{company.name}</h3>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#C5A059]/90 font-medium">{company.industry}</p>
                </div>
              </div>
              <div className="space-y-4 pt-6 border-t border-[#27272a]/60">
                <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-3 font-light">{company.description}</p>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#71717A] group-hover:text-[#E8D4A2] transition-colors pt-2">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
