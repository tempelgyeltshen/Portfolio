import React, { useState } from 'react';
import { BHUTAN_20_DZONGKHAGS } from '../data/groupData';
import { DzongkhagItem } from '../types';
import { MapPin, CheckCircle2, Globe, ChevronRight, X } from 'lucide-react';

export const BhutanPresence: React.FC = () => {
  const [selectedDzongkhag, setSelectedDzongkhag] = useState<DzongkhagItem | null>(null);

  return (
    <section id="bhutan-presence" className="py-24 bg-[#FFFFFF] text-[#1C1D21] relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#B08B46]/10 border border-[#B08B46]/30 text-xs uppercase tracking-[0.25em] text-[#8A6B29] font-semibold">
            <Globe className="w-3.5 h-3.5" />
            <span>GEOGRAPHIC FOOTPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1D21] tracking-tight">
            Bhutan Operational Regions
          </h2>
          <p className="text-sm text-[#5A5854] font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            Explore the 5 primary real operational regions of the Kingdom of Bhutan where High Quality Pvt. Ltd. operates core corporate headquarters, business divisions, travel experiences, and commercial facilities.
          </p>
        </div>

        {/* Operational Status Distinction Legend */}
        <div className="p-6 bg-[#FAF8F5] border-l-4 border-[#B08B46] border-y border-r border-gray-200 rounded-sm flex items-start space-x-4 shadow-sm mb-12">
          <CheckCircle2 className="w-6 h-6 text-[#8A6B29] shrink-0 mt-0.5" />
          <div>
            <h3 className="text-base font-serif font-bold text-[#1C1D21]">Group Core Locations</h3>
            <p className="text-xs text-[#5A5854] font-normal leading-relaxed mt-1">
              Verified group company headquarters, primary commercial facilities, travel operations, and physical art galleries across our 5 primary regions: <strong className="text-[#1C1D21]">Thimphu (main capital/business center), Paro, Punakha, Bumthang, and Gangtey (Phobjikha Valley)</strong>.
            </p>
          </div>
        </div>

        {/* 5 Real Regions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {BHUTAN_20_DZONGKHAGS.map((dz) => (
            <div
              key={dz.id}
              onClick={() => setSelectedDzongkhag(dz)}
              className="p-5 bg-[#FAF8F5] rounded-sm border border-[#B08B46]/40 hover:border-[#B08B46] transition-all cursor-pointer group hover:scale-[1.02] hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#8E8B85] font-semibold">
                    {dz.region} Bhutan
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#8A6B29]" title="Verified Group Hub" />
                </div>
                <h4 className="text-base font-serif font-bold text-[#1C1D21] group-hover:text-[#8A6B29] transition-colors">
                  {dz.name}
                </h4>
                <p className="text-[11px] text-[#8A6B29] font-medium mt-0.5">
                  {dz.capitalOrTown}
                </p>
                <p className="text-xs text-[#5A5854] mt-2 line-clamp-2 font-normal leading-relaxed">
                  {dz.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#8A6B29] font-semibold">
                  {dz.servicesAvailable.length} Services
                </span>
                <ChevronRight className="w-4 h-4 text-[#8E8B85] group-hover:text-[#8A6B29] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal for Selected Region */}
      {selectedDzongkhag && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white border border-[#B08B46]/40 rounded-sm max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-8">
            <button
              onClick={() => setSelectedDzongkhag(null)}
              className="absolute top-4 right-4 p-2 text-[#5A5854] hover:text-[#1C1D21] bg-[#FAF8F5] rounded-full transition-colors border border-gray-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video rounded-sm overflow-hidden border border-gray-200">
              <img
                src={selectedDzongkhag.image}
                alt={selectedDzongkhag.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-[#8A6B29] shadow-sm">
                {selectedDzongkhag.region} Bhutan Region
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#8A6B29]" />
                <span className="text-xs uppercase tracking-widest text-[#8A6B29] font-semibold">
                  {selectedDzongkhag.capitalOrTown}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1C1D21]">
                {selectedDzongkhag.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5854] font-normal leading-relaxed pt-1">
                {selectedDzongkhag.description}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-gray-200">
              <h5 className="text-xs uppercase tracking-widest font-semibold text-[#8A6B29]">
                Active Group Presence & Services
              </h5>
              <div className="flex flex-wrap gap-2">
                {selectedDzongkhag.servicesAvailable.map((srv, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs bg-[#FAF8F5] text-[#1C1D21] border border-gray-200 rounded-sm font-medium"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedDzongkhag(null)}
              className="w-full py-2.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#1C1D21] hover:bg-[#B08B46] transition-colors rounded-sm text-center shadow-md"
            >
              Close Region Profile
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
