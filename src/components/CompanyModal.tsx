import React from 'react';
import { CompanyItem } from '../types';
import { X, MapPin, Mail } from 'lucide-react';

interface CompanyModalProps {
  company: CompanyItem | null;
  onClose: () => void;
  onInquire: () => void;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({ company, onClose, onInquire }) => {
  if (!company) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white border border-gray-200 max-w-3xl w-full p-8 sm:p-12 space-y-8 relative my-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-black hover:text-[#C9A227] transition-colors duration-300"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Company Number */}
        <div className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
          {company.number}
        </div>

        {/* Company Overview */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
            {company.industry}
          </span>
          <h2 className="text-4xl font-serif font-bold text-black">
            {company.name}
          </h2>
          <p className="text-lg font-serif italic text-gray-600">
            {company.subtitle}
          </p>
        </div>

        {/* Full Narrative */}
        <p className="text-gray-700 leading-relaxed">
          {company.fullStory}
        </p>

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

        {/* Location */}
        {company.location && (
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-[#C9A227]" />
            <span>{company.location}</span>
          </div>
        )}

        {/* Contact Email */}
        {company.contactEmail && (
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Mail className="w-4 h-4 text-[#C9A227]" />
            <a href={`mailto:${company.contactEmail}`} className="hover:text-[#C9A227] transition-colors duration-300">
              {company.contactEmail}
            </a>
          </div>
        )}

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
            className="px-6 py-3 text-xs uppercase tracking-[0.2em] text-white bg-black border border-black hover:bg-[#C9A227] hover:border-[#C9A227] transition-all duration-300"
          >
            Contact
          </button>
        </div>

      </div>
    </div>
  );
};
