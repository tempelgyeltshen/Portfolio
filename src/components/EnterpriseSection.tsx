import React from 'react';
import { Building2, Mail, Compass, Users, Headphones, TrendingUp, ArrowRight } from 'lucide-react';

interface EnterpriseSectionProps {
  onInquire: (subject: string) => void;
}

export const EnterpriseSection: React.FC<EnterpriseSectionProps> = ({ onInquire }) => {
  const pillars = [
    {
      title: 'Opportunity',
      desc: 'Identifying practical business opportunities and developing them into sustainable, value-generating ventures.',
      icon: Compass
    },
    {
      title: 'Relationships',
      desc: 'Building dependable partnerships with customers, suppliers, institutions, and business collaborators.',
      icon: Users
    },
    {
      title: 'Service',
      desc: 'Providing professional, responsive support throughout every phase of commercial engagement.',
      icon: Headphones
    },
    {
      title: 'Growth',
      desc: 'Developing businesses with a long-term perspective rather than focusing strictly on short-term returns.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="enterprise-section" className="py-24 bg-[#faedcd] text-[#2C2D31] relative border-t border-gray-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Enterprise Strategy Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-sm bg-[#8B6914]/10 border border-[#8B6914]/30 text-xs uppercase tracking-[0.2em] text-[#8B6914] font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              <span>04 — COMMERCIAL ENTERPRISE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2D31] tracking-tight text-shadow-sm">
              High Quality Enterprise
            </h2>

            <p className="text-xl font-serif italic text-[#8B6914] font-semibold text-shadow-sm">
              BUSINESS BUILT AROUND OPPORTUNITY
            </p>

            <p className="text-sm text-[#4A4843] font-normal leading-relaxed">
              High Quality Enterprise represents the group's broader enterprise and commercial interests. Part of the group's strategy of developing ventures that respond to commercial opportunities beyond a single industry.
            </p>

            <div className="p-6 bg-white border border-[#8B6914]/30 rounded-sm space-y-3 shadow-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8E8B85]">Leadership:</span>
                <span className="text-[#2C2D31] font-serif font-bold">Pema Tshering, President</span>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-gray-100 pt-3">
                <span className="text-[#8E8B85]">Official Contact:</span>
                <a
                  href="mailto:highqualityenterprise@gmail.com"
                  className="text-[#8B6914] font-mono hover:underline flex items-center space-x-1 font-semibold"
                >
                  <Mail className="w-3 h-3" />
                  <span>highqualityenterprise@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onInquire('Enterprise Ventures Inquiry')}
                className="px-6 py-3 text-xs uppercase tracking-widest font-semibold text-white bg-[#1C1D21] hover:bg-[#8B6914] transition-colors rounded-sm flex items-center space-x-2 shadow-md"
              >
                <span>Contact High Quality Enterprise</span>
                <ArrowRight className="w-4 h-4 text-[#d4a373]" />
              </button>
            </div>
          </div>

          {/* RIGHT: Four Enterprise Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pil, idx) => {
              const IconComp = pil.icon;

              return (
                <div
                  key={idx}
                  className="p-6 bg-white border border-[#8B6914]/25 rounded-sm hover:border-[#8B6914] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded bg-[#8B6914]/10 border border-[#8B6914]/30 flex items-center justify-center mb-4 text-[#8B6914] group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#2C2D31] mb-2 group-hover:text-[#8B6914] transition-colors">
                    {pil.title}
                  </h3>
                  <p className="text-xs text-[#4A4843] font-normal leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
