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
    <section id="hitokara-section" className="py-24 bg-[#faedcd] text-[#2C2D31] relative border-t border-gray-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: Lounge Atmosphere Image */}
          <div className="lg:col-span-6 relative animate-fade-in-up">
            <div className="relative rounded-sm overflow-hidden border border-[#8B6914]/30 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="grid grid-cols-2 aspect-[16/10] overflow-hidden bg-[#faedcd]">
                <img src={ASSETS.hitokara1} alt="Karaoke at Hitokara Lounge & Bar" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <img src={ASSETS.hitokara2} alt="Hitokara Lounge & Bar karaoke experience" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>

              <div className="p-6 bg-white border-t border-[#8B6914]/20 flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#2C2D31]">Hitokara Lounge & Bar</h4>
                  <p className="text-xs text-[#8B6914] font-semibold">Thimphu, Kingdom of Bhutan</p>
                </div>
                <div className="px-3 py-1 bg-[#8B6914]/10 border border-[#8B6914]/30 rounded text-[10px] uppercase tracking-widest text-[#8B6914] font-semibold transition-all duration-300 hover:bg-[#8B6914]/20">
                  Lounge & Entertainment
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Concept Narrative */}
          <div className="lg:col-span-6 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-sm bg-[#8B6914]/10 border border-[#8B6914]/30 text-xs uppercase tracking-[0.2em] text-[#8B6914] font-semibold transition-all duration-300 hover:bg-[#8B6914]/20">
              <Music className="w-3.5 h-3.5" />
              <span>07 — ENTERTAINMENT & HOSPITALITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2D31] tracking-tight text-shadow-sm">
              Hitokara
            </h2>

            <p className="text-xl font-serif italic text-[#8B6914] font-semibold text-shadow-sm">
              MUSIC. ENTERTAINMENT. CONNECTION.
            </p>

            <p className="text-sm text-[#4A4843] font-normal leading-relaxed">
              Hitokara represents the group's entertainment and hospitality interests in Thimphu. Bringing together music, entertainment, and social interaction in a relaxed environment, Hitokara Lounge & Bar gives people a place to unwind, sing karaoke, and celebrate moments together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat, idx) => {
                const IconComp = feat.icon;

                return (
                  <div key={idx} className="p-4 bg-white border border-gray-200 rounded-sm space-y-1 shadow-sm transition-all duration-300 hover:border-[#8B6914]/50 hover:shadow-md">
                    <div className="flex items-center space-x-2 text-[#8B6914]">
                      <IconComp className="w-4 h-4" />
                      <span className="text-sm font-serif font-bold text-[#2C2D31]">{feat.title}</span>
                    </div>
                    <p className="text-xs text-[#4A4843] font-normal">{feat.desc}</p>
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
