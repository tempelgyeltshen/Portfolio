import React from 'react';
import { ThangkaArtItem } from '../types';
import { X, CheckCircle2 } from 'lucide-react';

interface ThangkaModalProps {
  artwork: ThangkaArtItem | null;
  onClose: () => void;
}

export const ThangkaModal: React.FC<ThangkaModalProps> = ({ artwork, onClose }) => {
  if (!artwork) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="bg-white text-[#2C2D31] border border-[#8B6914]/50 rounded-sm max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-8 transition-all duration-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#7A1C20] hover:bg-[#7A1C20]/10 rounded-full transition-all duration-300 border border-[#7A1C20]/20 hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-[#8B6914]/40 bg-[#faedcd] transition-all duration-300">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-[#7A1C20] text-white px-3 py-1 text-[10px] uppercase tracking-widest font-semibold rounded-sm shadow-sm">
            {artwork.category}
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7A1C20]">
            High Quality Thangka Painting
          </span>
          <h3 className="text-2xl font-serif font-bold text-[#2C2D31] text-shadow-sm">
            {artwork.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#4A4843] font-normal leading-relaxed">
            {artwork.description}
          </p>
        </div>

        <div className="p-4 bg-[#faedcd] border border-[#8B6914]/30 rounded-sm space-y-2 transition-all duration-300 hover:shadow-md">
          <span className="text-xs font-semibold text-[#7A1C20] uppercase tracking-wider flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Artwork &amp; Gallery Notes</span>
          </span>
          <p className="text-xs text-[#4A4843] leading-relaxed font-normal">
            {artwork.significance}
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#7A1C20] hover:bg-[#8B1E22] transition-all duration-300 rounded-sm text-center shadow-md hover:shadow-lg"
        >
          Close Artwork Inspection
        </button>

      </div>
    </div>
  );
};
