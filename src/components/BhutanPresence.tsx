import React, { useState } from 'react';
import { BHUTAN_20_DZONGKHAGS } from '../data/groupData';
import { DzongkhagItem } from '../types';
import { MapPin, CheckCircle2, Globe, ChevronRight, X } from 'lucide-react';

export const BhutanPresence: React.FC = () => {
  const [selectedDzongkhag, setSelectedDzongkhag] = useState<DzongkhagItem | null>(null);

  return (
    <section id="bhutan-presence" className="py-24 gradient-section text-[#2C2D31] relative border-t border-[#C9A227]/20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 text-xs uppercase tracking-[0.25em] text-[#C9A227] font-semibold animate-pulse-glow">
            <Globe className="w-3.5 h-3.5" />
            <span>GEOGRAPHIC FOOTPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C2D31] tracking-tight text-shadow-md">
            Bhutan Operational Regions
          </h2>
          <p className="text-sm text-[#4A4843] font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            Explore the 5 primary real operational regions of the Kingdom of Bhutan where High Quality Pvt. Ltd. operates core corporate headquarters, business divisions, travel experiences, and commercial facilities.
          </p>
        </div>

        {/* Operational Status Distinction Legend */}
        <div className="card-elevated p-6 border-l-4 border-[#C9A227] flex items-start space-x-4 mb-12">
          <CheckCircle2 className="w-6 h-6 text-[#C9A227] shrink-0 mt-0.5" />
          <div>
            <h3 className="text-base font-serif font-bold text-[#2C2D31]">Group Core Locations</h3>
            <p className="text-xs text-[#4A4843] font-normal leading-relaxed mt-1">
              Verified group company headquarters, primary commercial facilities, travel operations, and physical art galleries across our 5 primary regions: <strong className="text-[#2C2D31]">Thimphu (main capital/business center), Paro, Punakha, Bumthang, and Gangtey (Phobjikha Valley)</strong>.
            </p>
          </div>
        </div>

        {/* 5 Real Regions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {BHUTAN_20_DZONGKHAGS.map((dz) => (
            <div
              key={dz.id}
              onClick={() => setSelectedDzongkhag(dz)}
              className="card-elevated p-5 cursor-pointer group hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#8B8680] font-semibold">
                    {dz.region} Bhutan
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#9CAF88] animate-pulse" title="Verified Group Hub" />
                </div>
                <h4 className="text-base font-serif font-bold text-[#2C2D31] group-hover:text-[#C9A227] transition-colors">
                  {dz.name}
                </h4>
                <p className="text-[11px] text-[#C9A227] font-medium mt-0.5">
                  {dz.capitalOrTown}
                </p>
                <p className="text-xs text-[#4A4843] mt-2 line-clamp-2 font-normal leading-relaxed">
                  {dz.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#C9A227]/20 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#C9A227] font-semibold">
                  {dz.servicesAvailable.length} Services
                </span>
                <ChevronRight className="w-4 h-4 text-[#8B8680] group-hover:text-[#C9A227] group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal for Selected Region */}
      {selectedDzongkhag && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="card-elevated max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-8">
            <button
              onClick={() => setSelectedDzongkhag(null)}
              className="absolute top-4 right-4 p-2 text-[#4A4843] hover:text-[#2C2D31] glass rounded-full transition-colors border border-[#C9A227]/30"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video rounded-sm overflow-hidden border border-[#C9A227]/20">
              <img
                src={selectedDzongkhag.image}
                alt={selectedDzongkhag.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 glass px-3 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-[#C9A227] shadow-lg">
                {selectedDzongkhag.region} Bhutan Region
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#C9A227]" />
                <span className="text-xs uppercase tracking-widest text-[#C9A227] font-semibold">
                  {selectedDzongkhag.capitalOrTown}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2C2D31]">
                {selectedDzongkhag.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4843] font-normal leading-relaxed pt-1">
                {selectedDzongkhag.description}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-[#C9A227]/20">
              <h5 className="text-xs uppercase tracking-widest font-semibold text-[#C9A227]">
                Active Group Presence & Services
              </h5>
              <div className="flex flex-wrap gap-2">
                {selectedDzongkhag.servicesAvailable.map((srv, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs glass text-[#2C2D31] border border-[#C9A227]/30 rounded-sm font-medium"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedDzongkhag(null)}
              className="btn-primary w-full py-2.5 text-xs uppercase tracking-widest font-semibold rounded-sm text-center"
            >
              Close Region Profile
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
