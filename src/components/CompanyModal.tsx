import React from 'react';
import { CompanyItem } from '../types';
import { X, MapPin, Mail, ArrowRight } from 'lucide-react';

interface CompanyModalProps {
  company: CompanyItem | null;
  onClose: () => void;
  onInquire: () => void;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({ company, onClose, onInquire }) => {
  if (!company) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white border border-gray-200 max-w-4xl w-full relative my-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-black hover:text-[#C9A227] transition-colors duration-300 bg-white/80 backdrop-blur-sm rounded-full"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={company.image}
            alt={company.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Company Number Overlay */}
          <div className="absolute bottom-6 left-6">
            <div className="text-white text-xs uppercase tracking-[0.3em] font-semibold mb-2">
              {company.number}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              {company.name}
            </h2>
            <p className="text-white/80 text-sm italic mt-1">
              {company.subtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12 space-y-8">
          {/* Company Overview */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold">
              {company.industry}
            </span>
            <p className="text-gray-700 leading-relaxed text-lg">
              {company.fullStory}
            </p>
          </div>

          {/* Image Gallery */}
          {company.gallery && company.gallery.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold">
                Gallery
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {company.gallery.map((imgUrl, gIdx) => (
                  <div key={gIdx} className="aspect-video overflow-hidden border border-gray-200">
                    <img 
                      src={imgUrl} 
                      alt={`${company.name} gallery ${gIdx + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Highlights */}
          <div className="pt-6 border-t border-gray-200 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold">
              Key Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {company.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-[#C9A227] rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location and Contact */}
          <div className="pt-6 border-t border-gray-200 space-y-4">
            {company.location && (
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-[#C9A227]" />
                <span>{company.location}</span>
              </div>
            )}
            {company.contactEmail && (
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-[#C9A227]" />
                <a href={`mailto:${company.contactEmail}`} className="hover:text-[#C9A227] transition-colors duration-300">
                  {company.contactEmail}
                </a>
              </div>
            )}
          </div>

          {/* Modal Actions */}
          <div className="pt-6 border-t border-gray-200 flex items-center justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-3 text-xs uppercase tracking-[0.2em] text-black border border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="px-6 py-3 text-xs uppercase tracking-[0.2em] text-white bg-black border border-black hover:bg-[#C9A227] hover:border-[#C9A227] transition-all duration-300 flex items-center space-x-2"
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
