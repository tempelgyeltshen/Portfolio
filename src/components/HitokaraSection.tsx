import React from 'react';
import { Music, Mic, Wine, Users } from 'lucide-react';
import { ASSETS } from '../data/assets';

export const HitokaraSection: React.FC = () => {
  const features = [
    { title: 'Karaoke', desc: 'Private rooms and open lounge karaoke setups.', icon: Mic },
    { title: 'Social Experiences', desc: 'Vibrant, warm atmosphere for friends & networking.', icon: Users },
    { title: 'Fine Entertainment', desc: 'Curated music playlists, acoustics, and ambient lighting.', icon: Music },
    { title: 'Hospitality & Lounge', desc: 'Premium beverages and relaxed Thimphu hospitality.', icon: Wine }
  ];

  return (
    <section id="hitokara-section" className="py-24 bg-[#faedcd] text-[#1C1D21] relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Lounge Atmosphere Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#d4a373]/30 bg-white shadow-xl">
              <div className="grid grid-cols-2 aspect-[16/10] overflow-hidden bg-[#faedcd]">
                <img src={ASSETS.hitokara1} alt="Karaoke at Hitokara Lounge & Bar" className="w-full h-full object-cover" />
                <img src={ASSETS.hitokara2} alt="Hitokara Lounge & Bar karaoke experience" className="w-full h-full object-cover" />
              </div>

              <div className="p-6 bg-white border-t border-[#d4a373]/20 flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#1C1D21]">Hitokara Lounge & Bar</h4>
                  <p className="text-xs text-[#ccd5ae] font-semibold">Thimphu, Kingdom of Bhutan</p>
                </div>
                <div className="px-3 py-1 bg-[#d4a373]/10 border border-[#d4a373]/30 rounded text-[10px] uppercase tracking-widest text-[#ccd5ae] font-semibold">
                  Lounge & Entertainment
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Concept Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-sm bg-[#d4a373]/10 border border-[#d4a373]/30 text-xs uppercase tracking-[0.2em] text-[#ccd5ae] font-semibold">
              <Music className="w-3.5 h-3.5" />
              <span>07 — ENTERTAINMENT & HOSPITALITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D21] tracking-tight">
              Hitokara
            </h2>

            <p className="text-xl font-serif italic text-[#ccd5ae] font-semibold">
              MUSIC. ENTERTAINMENT. CONNECTION.
            </p>

            <p className="text-sm text-[#5A5854] font-normal leading-relaxed">
              Hitokara represents the group's entertainment and hospitality interests in Thimphu. Bringing together music, entertainment, and social interaction in a relaxed environment, Hitokara Lounge & Bar gives people a place to unwind, sing karaoke, and celebrate moments together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat, idx) => {
                const IconComp = feat.icon;

                return (
                  <div key={idx} className="p-4 bg-white border border-gray-200 rounded-sm space-y-1 shadow-sm">
                    <div className="flex items-center space-x-2 text-[#ccd5ae]">
                      <IconComp className="w-4 h-4" />
                      <span className="text-sm font-serif font-bold text-[#1C1D21]">{feat.title}</span>
                    </div>
                    <p className="text-xs text-[#5A5854] font-normal">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
