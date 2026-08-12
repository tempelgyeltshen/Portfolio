import React from 'react';
import { GROUP_COMPANIES } from '../data/groupData';
import { CompanyItem } from '../types';

interface CollectiveStrengthProps {
  onSelectCompany: (company: CompanyItem) => void;
}

export const CollectiveStrength: React.FC<CollectiveStrengthProps> = ({ onSelectCompany }) => {
  return (
    <section className="py-24 bg-[#faedcd] text-[#1C1D21] relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ccd5ae]">
            OUR COLLECTIVE STRENGTH
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D21] tracking-tight">
            One Group. Multiple Capabilities.
          </h2>
          <p className="text-sm text-[#5A5854] font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            The strength of High Quality Pvt. Ltd. lies in the diversity of its specialized arms, creating a resilient, synergy-driven commercial footprint in Bhutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GROUP_COMPANIES.map((company) => (
            <div
              key={company.id}
              onClick={() => onSelectCompany(company)}
              className="p-6 bg-white border border-[#d4a373]/20 rounded-sm hover:border-[#d4a373] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-serif font-bold text-[#ccd5ae]">
                    {company.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#5A5854] font-medium px-2 py-0.5 rounded bg-gray-100">
                    {company.industry.split('&')[0]}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#1C1D21] group-hover:text-[#ccd5ae] transition-colors mb-2">
                  {company.name}
                </h3>

                <p className="text-xs text-[#5A5854] font-normal leading-relaxed line-clamp-3">
                  {company.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#ccd5ae]">
                <span>Explore Capabilities</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
