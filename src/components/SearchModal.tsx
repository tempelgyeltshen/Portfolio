import React, { useState } from 'react';
import { GROUP_COMPANIES, KEY_DESTINATIONS, BHUTAN_20_DZONGKHAGS, CORPORATE_VALUES } from '../data/groupData';
import { CompanyItem } from '../types';
import { Search, X, ChevronRight, MapPin } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCompany: (company: CompanyItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectCompany }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingCompanies = q
    ? GROUP_COMPANIES.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.industry.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      )
    : GROUP_COMPANIES;

  const matchingDestinations = q
    ? KEY_DESTINATIONS.filter(
        (d) => d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)
      )
    : [];

  const matchingDzongkhags = q
    ? BHUTAN_20_DZONGKHAGS.filter(
        (dz) => dz.name.toLowerCase().includes(q) || dz.description.toLowerCase().includes(q)
      )
    : [];

  const matchingValues = q
    ? CORPORATE_VALUES.filter(
        (v) => v.title.toLowerCase().includes(q) || v.shortDescription.toLowerCase().includes(q)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 pt-20 animate-in fade-in duration-200">
      <div className="bg-white border border-[#B08B46]/40 rounded-sm max-w-2xl w-full p-6 space-y-6 relative shadow-2xl">
        
        {/* Search Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center space-x-3 w-full mr-4">
            <Search className="w-5 h-5 text-[#8A6B29]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search companies, destinations, dzongkhags, or corporate values..."
              className="w-full bg-transparent text-sm text-[#1C1D21] placeholder-gray-400 focus:outline-none font-medium"
            />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#5A5854] hover:text-[#1C1D21] rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto space-y-6 pr-2">
          
          {/* Companies Section */}
          {matchingCompanies.length > 0 && (
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8A6B29] block">
                GROUP COMPANIES ({matchingCompanies.length})
              </span>
              <div className="space-y-2">
                {matchingCompanies.map((comp) => (
                  <div
                    key={comp.id}
                    onClick={() => {
                      onClose();
                      onSelectCompany(comp);
                    }}
                    className="p-3 bg-[#FAF8F5] hover:bg-gray-100 border border-gray-200 hover:border-[#B08B46]/40 rounded-sm cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 rounded bg-[#B08B46]/10 border border-[#B08B46]/30 flex items-center justify-center text-[#8A6B29] font-serif font-bold text-xs shrink-0">
                        {comp.number}
                      </div>
                      <div>
                        <p className="text-sm font-serif font-bold text-[#1C1D21] group-hover:text-[#8A6B29] transition-colors">
                          {comp.name}
                        </p>
                        <p className="text-[11px] text-[#5A5854] font-medium">{comp.industry}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8E8B85] group-hover:text-[#8A6B29] group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Destinations Section */}
          {matchingDestinations.length > 0 && (
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8A6B29] block">
                KEY DESTINATIONS ({matchingDestinations.length})
              </span>
              <div className="space-y-2">
                {matchingDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => {
                      onClose();
                      const el = document.querySelector('#travelers-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-3 bg-[#FAF8F5] hover:bg-gray-100 border border-gray-200 rounded-sm cursor-pointer transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-[#8A6B29]" />
                      <div>
                        <p className="text-sm font-serif font-bold text-[#1C1D21]">{dest.name}</p>
                        <p className="text-[11px] text-[#5A5854] font-medium">{dest.title}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8E8B85]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dzongkhags Section */}
          {matchingDzongkhags.length > 0 && (
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8A6B29] block">
                DZONGKHAGS ({matchingDzongkhags.length})
              </span>
              <div className="space-y-2">
                {matchingDzongkhags.map((dz) => (
                  <div
                    key={dz.id}
                    onClick={() => {
                      onClose();
                      const el = document.querySelector('#bhutan-presence');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-3 bg-[#FAF8F5] border border-gray-200 rounded-sm flex items-center justify-between cursor-pointer"
                  >
                    <div>
                      <p className="text-sm font-serif font-bold text-[#1C1D21]">{dz.name} Dzongkhag</p>
                      <p className="text-[11px] text-[#5A5854] font-medium">{dz.region} Bhutan | Seat: {dz.capitalOrTown}</p>
                    </div>
                    <span className="text-[10px] uppercase text-[#8A6B29] font-semibold">{dz.isVerifiedLocation ? 'Group Hub' : 'Area Served'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Values Section */}
          {matchingValues.length > 0 && (
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8A6B29] block">
                CORPORATE VALUES ({matchingValues.length})
              </span>
              <div className="space-y-2">
                {matchingValues.map((v) => (
                  <div key={v.title} className="p-3 bg-[#FAF8F5] border border-gray-200 rounded-sm">
                    <p className="text-sm font-serif font-bold text-[#1C1D21]">{v.title}</p>
                    <p className="text-xs text-[#5A5854] font-normal">{v.shortDescription}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {q && matchingCompanies.length === 0 && matchingDestinations.length === 0 && matchingDzongkhags.length === 0 && matchingValues.length === 0 && (
            <div className="text-center py-8 text-xs text-[#5A5854]">
              No results found for "{query}". Try searching "Tourism", "Thangka", "Thimphu", or "Integrity".
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
