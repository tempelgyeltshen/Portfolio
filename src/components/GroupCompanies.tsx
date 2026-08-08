import React from 'react';
import { GROUP_COMPANIES } from '../data/groupData';
import { CompanyItem } from '../types';
import { ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';

interface GroupCompaniesProps {
  onSelectCompany: (company: CompanyItem) => void;
}

export const GroupCompanies: React.FC<GroupCompaniesProps> = ({ onSelectCompany }) => {
  return (
    <section id="businesses" className="py-28 bg-[#FFFFFF] text-[#1C1D21] relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-[#B08B46]/20 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8A6B29]">
              OUR DIVERSIFIED BUSINESSES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1D21] tracking-tight">
              Group Companies
            </h2>
          </div>
          <p className="text-sm text-[#5A5854] max-w-md font-normal mt-4 md:mt-0">
            A luxury corporate showcase of High Quality Pvt. Ltd.'s specialized business divisions.
          </p>
        </div>

        {/* Alternating Editorial Showcase */}
        <div className="space-y-24">
          {GROUP_COMPANIES.map((company, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={company.id}
                id={`company-${company.id}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group py-6 border-b border-gray-100 last:border-0`}
              >
                {/* IMAGE COLUMN */}
                <div
                  className={`lg:col-span-7 relative ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative rounded-sm overflow-hidden border border-[#B08B46]/30 bg-[#FAF7F2] shadow-lg">
                    {/* Company Index Number Badge */}
                    <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 border border-[#B08B46]/40 rounded-sm shadow-sm">
                      <span className="text-xl sm:text-2xl font-serif font-bold text-[#8A6B29]">
                        {company.number}
                      </span>
                    </div>

                    <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-105"
                      />
                    </div>

                    {company.location && (
                      <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-sm border border-gray-200 text-[11px] text-[#1C1D21] font-medium flex items-center space-x-1.5 shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-[#8A6B29]" />
                        <span>{company.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CONTENT COLUMN */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6B29]">
                      {company.industry}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D21] group-hover:text-[#8A6B29] transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-sm font-serif italic text-[#8A6B29] font-semibold">
                      "{company.subtitle}"
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#5A5854] font-normal leading-relaxed">
                    {company.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-[#B08B46]/15">
                    {company.highlights.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2.5 text-xs text-[#4A4843]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8A6B29] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Explore Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => onSelectCompany(company)}
                      className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold text-white bg-[#1C1D21] hover:bg-[#B08B46] transition-colors rounded-sm flex items-center space-x-2 shadow-md group/btn"
                    >
                      <span>Explore {company.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#B08B46] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
