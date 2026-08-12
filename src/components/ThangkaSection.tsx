import React from 'react';
import { THANGKA_ARTWORKS } from '../data/groupData';
import { ThangkaArtItem } from '../types';
import { Eye, CheckCircle2 } from 'lucide-react';

interface ThangkaSectionProps {
  onSelectArtwork: (art: ThangkaArtItem) => void;
}

export const ThangkaSection: React.FC<ThangkaSectionProps> = ({ onSelectArtwork }) => {
  const promotedLocations = ['Thimphu', 'Paro', 'Lobesa (Punakha)', 'Gangtey', 'Bumthang'];

  return (
    <section id="thangka-section" className="py-24 bg-[#faedcd] text-[#2C2D31] relative overflow-hidden border-t border-gray-200 animate-fade-in">
      {/* Traditional Pattern Background */}
      <div className="absolute inset-0 bhutan-pattern-dense opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cultural Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-[#7A1C20]/10 border border-[#7A1C20]/30 text-xs uppercase tracking-[0.25em] text-[#7A1C20] font-semibold">
            <span>02 — TRADITIONAL ARTS & CULTURAL HERITAGE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#7A1C20] tracking-tight">
            PRESERVING BHUTAN'S ARTISTIC HERITAGE
          </h2>

          <p className="text-base sm:text-lg font-serif italic text-[#8B6914] font-semibold text-shadow-sm">
            High Quality Thangka Painting
          </p>

          <p className="text-xs sm:text-sm text-[#4A4843] font-normal leading-relaxed max-w-2xl mx-auto pt-2">
            Thangka painting is deeply connected with Himalayan Buddhist artistic traditions, requiring years of disciplined apprenticeship, natural mineral pigments, pure gold leafing, and precise iconographic geometry.
          </p>
        </div>

        {/* Narrative & Philosophy Box */}
        <div className="bg-white border border-[#8B6914]/30 rounded-sm p-8 sm:p-12 mb-16 shadow-md relative transition-all duration-300 hover:shadow-lg">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-[#7A1C20]"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-[#7A1C20] text-shadow-sm">
                More Than Art: A Sacred Living Tradition
              </h3>
              <p className="text-sm text-[#4A4843] leading-relaxed font-normal">
                Publicly identified as a premier arts and crafts business in Bhutan, High Quality Thangka Painting provides visitors, collectors, and sacred art connoisseurs with authentic Himalayan artwork while sustaining traditional master artisans.
              </p>
              <div className="space-y-2 pt-2 text-xs font-semibold text-[#2C2D31]">
                <div className="flex items-center space-x-2 transition-all duration-300 hover:text-[#8B6914]">
                  <CheckCircle2 className="w-4 h-4 text-[#7A1C20]" />
                  <span>Heritage & Modern Cultural Preservation</span>
                </div>
                <div className="flex items-center space-x-2 transition-all duration-300 hover:text-[#8B6914]">
                  <CheckCircle2 className="w-4 h-4 text-[#7A1C20]" />
                  <span>Spiritual Traditions & Precision Geometry</span>
                </div>
                <div className="flex items-center space-x-2 transition-all duration-300 hover:text-[#8B6914]">
                  <CheckCircle2 className="w-4 h-4 text-[#7A1C20]" />
                  <span>Local Master Craftsmanship & Fair Opportunities</span>
                </div>
              </div>
            </div>

            <div className="bg-[#faedcd] border border-[#8B6914]/30 p-6 rounded-sm space-y-4 transition-all duration-300 hover:shadow-md">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7A1C20] block">
                Promoted Cultural Locations
              </span>
              <p className="text-xs text-[#4A4843] leading-relaxed">
                The group's publicly promoted presence connected with this business includes key tourism hubs:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {promotedLocations.map((loc, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white border border-[#7A1C20]/20 rounded-sm text-xs font-serif font-semibold text-[#7A1C20] shadow-sm transition-all duration-300 hover:border-[#7A1C20] hover:shadow-md"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Masterpiece Gallery Showcase */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif font-bold text-[#7A1C20] text-shadow-sm">
              High Quality Thangka Showcase
            </h3>
            <p className="text-xs text-[#4A4843] uppercase tracking-widest mt-1 font-semibold">
              Select an image to view its gallery details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {THANGKA_ARTWORKS.map((art) => (
              <div
                key={art.id}
                onClick={() => onSelectArtwork(art)}
                className="bg-white border border-[#8B6914]/30 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#faedcd]">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#7A1C20] text-white px-2.5 py-1 text-[10px] uppercase tracking-widest font-semibold rounded-sm shadow-sm">
                      {art.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h4 className="text-xl font-serif font-bold text-[#2C2D31] group-hover:text-[#7A1C20] transition-colors duration-300">
                      {art.title}
                    </h4>
                    <p className="text-xs text-[#4A4843] line-clamp-2 leading-relaxed">
                      {art.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#7A1C20]">
                  <span>View Gallery Details</span>
                  <Eye className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
