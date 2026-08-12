import React, { useState } from 'react';
import { KEY_DESTINATIONS } from '../data/groupData';
import { DestinationItem } from '../types';
import { Compass, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface TravelersSectionProps {
  onInquire: (subject: string) => void;
}

export const TravelersSection: React.FC<TravelersSectionProps> = ({ onInquire }) => {
  const [activeDestination, setActiveDestination] = useState<DestinationItem>(KEY_DESTINATIONS[0]);

  const categories = [
    { title: 'Luxury Bhutan Journeys', desc: 'Bespoke high-end itineraries with premium sanctuary resorts & private guides.' },
    { title: 'Cultural Tours', desc: 'Immersive festival (Tshechu) experiences, sacred dzongs & monastic heritage.' },
    { title: 'Adventure & Nature', desc: 'Whitewater rafting, mountain biking, flora & Himalayan wildlife safaris.' },
    { title: 'Himalayan Trekking', desc: 'High-altitude alpine treks across pristine Bhutan mountain passes.' },
    { title: 'MICE & Group Travel', desc: 'Corporate incentives, executive retreats & institutional delegations.' },
    { title: 'Tailor-Made Journeys', desc: 'Custom curated itineraries tailored strictly to individual preferences.' }
  ];

  return (
    <section id="travelers-section" className="py-24 bg-[#faedcd] text-[#2C2D31] relative border-t border-gray-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Company Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#8B6914]/10 border border-[#8B6914]/30 text-xs uppercase tracking-[0.25em] text-[#8B6914] font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>01 — TOURISM & DESTINATION MANAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C2D31] tracking-tight text-shadow-sm">
            High Quality Travelers
          </h2>
          <p className="text-lg font-serif italic text-[#8B6914] font-semibold text-shadow-sm">
            Discover Bhutan. Experience It Personally.
          </p>
          <p className="text-sm text-[#4A4843] font-normal leading-relaxed max-w-2xl mx-auto pt-2">
            Catters to travelers seeking more than a conventional holiday, presenting Bhutan as a sanctuary where culture, pristine nature, spirituality, and responsible luxury come together seamlessly.
          </p>
        </div>

        {/* Tourism Categories Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xl font-serif font-semibold text-[#2C2D31]">
              Bespoke Portfolio Offerings
            </h3>
            <div className="w-12 h-[2px] bg-[#8B6914] mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#8B6914]/20 rounded-sm hover:border-[#8B6914] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded bg-[#8B6914]/10 border border-[#8B6914]/30 flex items-center justify-center mb-4 text-[#8B6914] font-serif font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-serif font-bold text-[#2C2D31] mb-2 group-hover:text-[#8B6914] transition-colors duration-300">
                  {cat.title}
                </h4>
                <p className="text-xs text-[#4A4843] font-normal leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Destination Strip & Interactive Showcase */}
        <div className="pt-12 border-t border-[#8B6914]/20">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8B6914]">
              DESTINATIONS & AREAS PROMOTED
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2D31]">
              Key Bhutan Destinations
            </h3>
            <p className="text-xs text-[#4A4843]">
              High Quality Travelers creates curated experiences across these core Bhutanese destinations:
            </p>
          </div>

          {/* Destination Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10">
            {KEY_DESTINATIONS.map((dest) => {
              const isSelected = activeDestination.id === dest.id;

              return (
                <button
                  key={dest.id}
                  onClick={() => setActiveDestination(dest)}
                  className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all rounded-sm border ${
                    isSelected
                      ? 'bg-[#1C1D21] text-white border-[#1C1D21] shadow-md'
                      : 'bg-white text-[#2C2D31] border-[#8B6914]/30 hover:border-[#8B6914]'
                  }`}
                >
                  {dest.name}
                </button>
              );
            })}
          </div>

          {/* Active Destination Card */}
          <div className="bg-white border border-[#8B6914]/30 rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 shadow-md">
            <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-sm border border-[#8B6914]/20 bg-[#faedcd]">
              <img
                src={activeDestination.image}
                alt={activeDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-[11px] uppercase tracking-widest text-[#8B6914] font-semibold shadow-sm">
                {activeDestination.category}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#8B6914] font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Key Bhutan Destination</span>
                </div>
                <h4 className="text-3xl font-serif font-bold text-[#2C2D31] mt-1">
                  {activeDestination.name}
                </h4>
                <p className="text-sm font-serif italic text-[#8B6914] font-semibold">
                  {activeDestination.title}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#4A4843] font-normal leading-relaxed">
                {activeDestination.description}
              </p>

              <div className="pt-2 border-t border-gray-100 space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#8B6914] font-semibold block">
                  Curated Regional Highlights:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {activeDestination.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-2 text-xs text-[#4A4843]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B6914] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onInquire(`Tourism Inquiry: ${activeDestination.name}`)}
                  className="px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#1C1D21] hover:bg-[#8B6914] transition-colors duration-300 rounded-sm flex items-center space-x-2 shadow-md"
                >
                  <span>Plan Journey to {activeDestination.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d4a373]" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
