import React from 'react';

interface PhilosophyItem {
  title: string;
  description: string;
}

const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    title: 'Business',
    description: 'Sustainable business is about creating value that extends beyond financial returns. It requires understanding markets, serving customers with excellence, and building operations that can withstand challenges while creating opportunities for growth.'
  },
  {
    title: 'Investing',
    description: 'I believe in strategic, long-term investments that strengthen Bhutan\'s economic foundation. Whether in traditional sectors or emerging opportunities, the focus remains on building durable businesses that generate lasting value.'
  },
  {
    title: 'Leadership',
    description: 'Leadership is about service—developing people, creating environments where teams can excel, and making decisions that balance immediate needs with long-term vision. It requires integrity, patience, and the ability to see beyond quarterly results.'
  },
  {
    title: 'Long-term Thinking',
    description: 'The most meaningful achievements take time. I focus on building businesses and relationships that can endure for generations, prioritizing sustainable growth over quick wins and lasting impact over temporary gains.'
  },
  {
    title: 'Building Meaningful Companies',
    description: 'Businesses should matter. They should create employment, develop talent, support communities, preserve culture, and leave behind lasting value. Every venture in our portfolio is guided by this principle of meaningful contribution.'
  }
];

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-16 sm:py-24 bg-gray-50">
      {/* Subtle Bhutanese pattern */}
      <div className="absolute inset-0 bhutan-pattern-subtle pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-black mb-4">
            Philosophy
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-[#C9A227]"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
              Approach & Principles
            </span>
            <div className="h-px w-16 bg-[#C9A227]"></div>
          </div>
        </div>

        {/* Philosophy Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PHILOSOPHY_ITEMS.map((item, index) => (
              <div
                key={index}
                className="premium-card p-8"
              >
                {/* Number */}
                <div className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold mb-4">
                  0{index + 1}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-black mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Summary Statement */}
          <div className="mt-12 text-center">
            <div className="premium-card p-8 max-w-3xl mx-auto">
              <p className="text-gray-800 text-lg leading-relaxed">
                "For us, business is a journey of continuous improvement. We believe in creating opportunities where people, ideas, and businesses can grow together. We believe in delivering excellence through professionalism and attention to detail. And we believe that the strongest businesses are built on relationships that last."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};