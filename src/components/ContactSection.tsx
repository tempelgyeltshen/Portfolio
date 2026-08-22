import React from 'react';
import { CHAIRMAN_INFO } from '../data/groupData';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-white">
      {/* Subtle Bhutanese pattern */}
      <div className="absolute inset-0 bhutan-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-black mb-4">
            Contact
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-[#C9A227]"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
              Get in Touch
            </span>
            <div className="h-px w-16 bg-[#C9A227]"></div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-3xl mx-auto">
          <div className="premium-card p-12">
            {/* Name & Title */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-black mb-2">
                {CHAIRMAN_INFO.name}
              </h3>
              <p className="text-sm uppercase tracking-[0.2em] text-[#C9A227] font-semibold">
                Chairman | High Quality Pvt. Ltd.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-[#C9A227] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold block mb-1">
                    Email
                  </span>
                  <a
                    href={`mailto:${CHAIRMAN_INFO.email}`}
                    className="text-lg text-black hover:text-[#C9A227] transition-colors duration-300"
                  >
                    {CHAIRMAN_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-[#C9A227] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold block mb-1">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${CHAIRMAN_INFO.phone}`}
                    className="text-lg text-black hover:text-[#C9A227] transition-colors duration-300"
                  >
                    {CHAIRMAN_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-[#C9A227] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold block mb-1">
                    Location
                  </span>
                  <p className="text-lg text-black">
                    Thimphu, Kingdom of Bhutan
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-12 border-t border-gray-200"></div>

            {/* Website */}
            <div className="text-center">
              <a
                href={CHAIRMAN_INFO.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-[#C9A227] transition-colors duration-300 uppercase tracking-[0.1em]"
              >
                {CHAIRMAN_INFO.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
