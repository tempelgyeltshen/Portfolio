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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 pt-20 animate-in fade-in duration-300">
      <div className="bg-white border border-[#8B6914]/40 rounded-sm max-w-2xl w-full p-6 space-y-6 relative shadow-2xl transition-all duration-300">

        {/* Search Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center space-x-3 w-full mr-4">
            <Search className="w-5 h-5 text-[#8B6914]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search companies, destinations, dzongkhags, or corporate values..."
              className="w-full bg-transparent text-sm text-[#2C2D31] placeholder-gray-400 focus:outline-none font-medium"
            />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#4A4843] hover:text-[#2C2D31] rounded transition-all duration-300 hover:scale-110"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto space-y-6 pr-2">
          
          {/* Companies Section */}
          {matchingCompanies.length > 0 && (
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8B6914] block">
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
                    className="p-3 bg-[#faedcd] hover:bg-gray-100 border border-gray-200 hover:border-[#8B6914]/40 rounded-sm cursor-pointer transition-all duration-300 flex items-center justify-between group hover:shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 rounded bg-[#8B6914]/10 border border-[#8B6914]/30 flex items-center justify-center text-[#8B6914] font-serif font-bold text-xs shrink-0">
                        {comp.number}
                      </div>
                      <div>
                        <p className="text-sm font-serif font-bold text-[#2C2D31] group-hover:text-[#8B6914] transition-colors duration-300">
                          {comp.name}
                        </p>
                        <p className="text-[11px] text-[#4A4843] font-medium">{comp.industry}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8E8B85] group-hover:text-[#8B6914] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Destinations Section */}
          {matchingDestinations.length > 0 && (
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8B6914] block">
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
                    className="p-3 bg-[#faedcd] hover:bg-gray-100 border border-gray-200 rounded-sm cursor-pointer transition-all duration-300 flex items-center justify-between hover:shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-[#8B6914]" />
                      <div>
                        <p className="text-sm font-serif font-bold text-[#2C2D31]">{dest.name}</p>
                        <p className="text-[11px] text-[#4A4843] font-medium">{dest.title}</p>
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
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8B6914] block">
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
                    className="p-3 bg-[#faedcd] border border-gray-200 rounded-sm flex items-center justify-between cursor-pointer transition-all duration-300 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-serif font-bold text-[#2C2D31]">{dz.name} Dzongkhag</p>
                      <p className="text-[11px] text-[#4A4843] font-medium">{dz.region} Bhutan | Seat: {dz.capitalOrTown}</p>
                    </div>
                    <span className="text-[10px] uppercase text-[#8B6914] font-semibold">{dz.isVerifiedLocation ? 'Group Hub' : 'Area Served'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Values Section */}
          {matchingValues.length > 0 && (
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8B6914] block">
                CORPORATE VALUES ({matchingValues.length})
              </span>
              <div className="space-y-2">
                {matchingValues.map((v) => (
                  <div key={v.title} className="p-3 bg-[#faedcd] border border-gray-200 rounded-sm transition-all duration-300 hover:shadow-md">
                    <p className="text-sm font-serif font-bold text-[#2C2D31]">{v.title}</p>
                    <p className="text-xs text-[#4A4843] font-normal">{v.shortDescription}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {q && matchingCompanies.length === 0 && matchingDestinations.length === 0 && matchingDzongkhags.length === 0 && matchingValues.length === 0 && (
            <div className="text-center py-8 text-xs text-[#4A4843]">
              No results found for "{query}". Try searching "Tourism", "Thangka", "Thimphu", or "Integrity".
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
