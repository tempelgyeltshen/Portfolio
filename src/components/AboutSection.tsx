import React from 'react';
import { CHAIRMAN_INFO } from '../data/groupData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-white">
      {/* Subtle Bhutanese pattern */}
      <div className="absolute inset-0 bhutan-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-black mb-4">
              About
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-[#C9A227]"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
                Background & Vision
              </span>
              <div className="h-px w-16 bg-[#C9A227]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                As the Chairman of High Quality Pvt. Ltd., I believe that sustainable business is about more than commercial success. It is about creating opportunities, developing people, building trusted relationships, and contributing meaningfully to Bhutan's economic development.
              </p>
            </div>

            {/* Background */}
            <div className="border-t border-b border-gray-200 py-8">
              <h3 className="text-2xl font-serif font-bold text-black mb-4">
                Background
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Over the years, our business interests have grown into a diversified group serving different sectors, from tourism and transportation to traditional arts, enterprise services, food and hospitality, and entertainment. Each business within the High Quality Group has its own area of expertise, yet they are connected by a common philosophy.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-black mb-6">
                Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="premium-card p-6">
                  <h4 className="text-lg font-serif font-semibold text-black mb-2">Quality</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Setting high standards in product quality, service delivery, and professional operational execution.
                  </p>
                </div>
                <div className="premium-card p-6">
                  <h4 className="text-lg font-serif font-semibold text-black mb-2">Professionalism</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Operating with unwavering honesty, transparency, and ethical standards across all commercial transactions.
                  </p>
                </div>
                <div className="premium-card p-6">
                  <h4 className="text-lg font-serif font-semibold text-black mb-2">Integrity</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Building relationships based on truthfulness, keeping commitments, and honoring institutional trust.
                  </p>
                </div>
                <div className="premium-card p-6">
                  <h4 className="text-lg font-serif font-semibold text-black mb-2">Innovation</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Continuously refining operations, adopting appropriate technologies, and anticipating market evolution.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="pt-4">
              <h3 className="text-2xl font-serif font-bold text-black mb-4">
                Vision
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Our approach is centered on understanding our customers, responding to changing market needs, and building relationships that extend beyond individual transactions. We value long-term partnerships with clients, suppliers, employees, institutions, and business partners both within Bhutan and internationally. As a Bhutanese business group, we are also proud of the opportunity to showcase the country's culture, hospitality, creativity, and entrepreneurial spirit to the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};