import React from 'react';

interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    year: 'Present',
    title: 'Chairman & President',
    organization: 'High Quality Pvt. Ltd.',
    description: 'Leading a diversified business group across tourism, transportation, traditional arts, enterprise services, food and hospitality, and entertainment sectors.'
  },
  {
    year: '2010s',
    title: 'Business Expansion',
    organization: 'High Quality Group',
    description: 'Established multiple subsidiary companies including High Quality Travelers, High Quality Car Rental, and High Quality Thangka Painting.'
  },
  {
    year: '2000s',
    title: 'Foundation',
    organization: 'High Quality Pvt. Ltd.',
    description: 'Founded the company with a vision to create sustainable business opportunities in Bhutan.'
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-16 sm:py-24 bg-gray-50">
      {/* Subtle Bhutanese pattern */}
      <div className="absolute inset-0 bhutan-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-black mb-4">
            Experience
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-[#C9A227]"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
              Career Milestones
            </span>
            <div className="h-px w-16 bg-[#C9A227]"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {MILESTONES.map((milestone, index) => (
              <div key={index} className="flex gap-8">
                {/* Year */}
                <div className="w-24 flex-shrink-0">
                  <span className="text-lg font-serif font-bold text-[#C9A227]">
                    {milestone.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white border border-gray-200 p-6 hover:border-[#C9A227] transition-colors duration-300">
                  <h3 className="text-xl font-serif font-bold text-black mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 uppercase tracking-[0.1em]">
                    {milestone.organization}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Note */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-800 text-lg leading-relaxed max-w-2xl mx-auto font-light">
                Throughout my career, I have focused on building businesses that create meaningful employment, develop talent, support local enterprise, and connect Bhutan with the international community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};