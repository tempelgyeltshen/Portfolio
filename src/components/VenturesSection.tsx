import React from 'react';
import { GROUP_COMPANIES } from '../data/groupData';
import { CompanyItem } from '../types';

interface VenturesSectionProps {
  onSelectCompany: (company: CompanyItem) => void;
}

export const VenturesSection: React.FC<VenturesSectionProps> = ({ onSelectCompany }) => {
  return (
    <section id="ventures" className="relative py-16 sm:py-24 bg-gray-50">
      {/* Subtle Bhutanese pattern */}
      <div className="absolute inset-0 bhutan-pattern-subtle pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-black mb-4">
            Ventures
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-[#C9A227]"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
              Businesses & Investments
            </span>
            <div className="h-px w-16 bg-[#C9A227]"></div>
          </div>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GROUP_COMPANIES.map((company) => (
            <div
              key={company.id}
              className="premium-card p-8 cursor-pointer group relative"
              onClick={() => onSelectCompany(company)}
            >
              {/* Company Number */}
              <div className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold mb-4">
                {company.number}
              </div>

              {/* Company Name */}
              <h3 className="text-2xl font-serif font-bold text-black mb-2 group-hover:text-[#C9A227] transition-colors duration-300">
                {company.name}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-600 mb-4 italic">
                {company.subtitle}
              </p>

              {/* Industry */}
              <div className="mb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                  {company.industry}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {company.description}
              </p>

              {/* Location */}
              <div className="flex items-center text-xs text-gray-500">
                <span className="uppercase tracking-[0.1em]">{company.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};