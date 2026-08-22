import React from 'react';
import { CHAIRMAN_INFO } from '../data/groupData';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#FAF9F6] text-[#18181B] py-28 sm:py-36 overflow-hidden">
      <BhutaneseTextileBackground variant="light" opacity={0.025} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Left: Header */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#8A7347]">ABOUT</span>
              <span className="h-px w-12 bg-[#8A7347]/40" />
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal tracking-tight text-[#18181B] leading-[1.1]">
              Driven by Purpose.<br />Grounded in Values.
            </h2>

            <div className="pt-6 border-t border-[#E4E4E7] max-w-sm">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#71717A] mb-3">Core Focus</p>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Tourism and transportation, traditional Bhutanese arts, enterprise development, food and hospitality, commercial trading, and entertainment.
              </p>
            </div>
          </div>

          {/* Right: Story */}
          <div className="lg:col-span-7 space-y-8 lg:pt-4">
            <p className="text-lg sm:text-xl text-[#3F3F46] leading-relaxed font-light">
              {CHAIRMAN_INFO.fullMessage[0]}
            </p>

            <p className="text-lg sm:text-xl text-[#3F3F46] leading-relaxed font-light">
              {CHAIRMAN_INFO.fullMessage[1]}
            </p>

            <div className="pt-8">
              <p className="text-sm font-medium text-[#18181B]">{CHAIRMAN_INFO.name}</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#71717A] mt-1">{CHAIRMAN_INFO.title} &bull; Former Painter</p>
            </div>
          </div>

        </div>

        {/* Values Row */}
        <div className="mt-24 pt-16 border-t border-[#E4E4E7] grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="font-serif-luxury text-3xl font-light text-[#8A7347]">01</span>
            <h3 className="font-serif-luxury text-xl font-medium text-[#18181B] mt-4 mb-3">National Self-Reliance</h3>
            <p className="text-sm text-[#52525B] leading-relaxed">Developing enterprises that retain capital within Bhutan.</p>
          </div>
          <div>
            <span className="font-serif-luxury text-3xl font-light text-[#8A7347]">02</span>
            <h3 className="font-serif-luxury text-xl font-medium text-[#18181B] mt-4 mb-3">Gross National Happiness</h3>
            <p className="text-sm text-[#52525B] leading-relaxed">Commercial success and ecological balance, mutually reinforcing.</p>
          </div>
          <div>
            <span className="font-serif-luxury text-3xl font-light text-[#8A7347]">03</span>
            <h3 className="font-serif-luxury text-xl font-medium text-[#18181B] mt-4 mb-3">Global Integration</h3>
            <p className="text-sm text-[#52525B] leading-relaxed">Bridging international markets with Bhutan&apos;s heritage.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
