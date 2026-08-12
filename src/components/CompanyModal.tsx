import React from 'react';
import { CompanyItem } from '../types';
import { X, CheckCircle2, MapPin, Mail, ArrowRight } from 'lucide-react';

interface CompanyModalProps {
  company: CompanyItem | null;
  onClose: () => void;
  onInquire: (subject: string) => void;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({ company, onClose, onInquire }) => {
  if (!company) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      <div className="bg-white border border-[#8B6914]/40 rounded-sm max-w-3xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl my-8 transition-all duration-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#4A4843] hover:text-[#2C2D31] bg-[#faedcd] rounded-full transition-all duration-300 border border-gray-200 hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-[#8B6914]/30 transition-all duration-300">
          <img
            src={company.image}
            alt={company.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-[11px] font-serif font-bold text-[#8B6914] shadow-sm">
            COMPANY {company.number}
          </div>
          {company.location && (
            <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-[10px] text-[#2C2D31] font-medium flex items-center space-x-1 shadow-sm">
              <MapPin className="w-3 h-3 text-[#8B6914]" />
              <span>{company.location}</span>
            </div>
          )}
        </div>

        {/* Company Overview */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8B6914]">
            {company.industry}
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#2C2D31] text-shadow-sm">
            {company.name}
          </h2>
          <p className="text-base font-serif italic text-[#8B6914] font-medium text-shadow-sm">
            "{company.subtitle}"
          </p>
        </div>

        {/* Full Narrative */}
        <p className="text-xs sm:text-sm text-[#4A4843] font-normal leading-relaxed">
          {company.fullStory}
        </p>

        {/* Key Highlights */}
        <div className="pt-4 border-t border-gray-200 space-y-3">
          <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8B6914]">
            Core Portfolio Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {company.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-xs text-[#2C2D31] font-medium bg-[#faedcd] p-2.5 rounded-sm border border-gray-200 transition-all duration-300 hover:shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8B6914] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Images if available */}
        {company.gallery && company.gallery.length > 0 && (
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8B6914]">
              Visual Gallery
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {company.gallery.map((imgUrl, gIdx) => (
                <div key={gIdx} className="aspect-video rounded-sm overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md">
                  <img src={imgUrl} alt={`${company.name} gallery ${gIdx + 1}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Actions */}
        <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#4A4843]">
            {company.contactEmail && (
              <p className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-[#8B6914]" />
                <span>{company.contactEmail}</span>
              </p>
            )}
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs uppercase tracking-widest text-[#4A4843] bg-[#faedcd] hover:bg-gray-200 rounded-sm border border-gray-200 font-medium transition-all duration-300 hover:shadow-md"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(`Inquiry regarding ${company.name}`);
              }}
              className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#2C2D31] hover:bg-[#8B6914] transition-all duration-300 rounded-sm flex items-center space-x-2 shadow-md hover:shadow-lg"
            >
              <span>Connect with Division</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8B6914]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
