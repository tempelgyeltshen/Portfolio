import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CHAIRMAN_INFO } from '../data/groupData';
import { BrandMonogram, BhutaneseTextileBackground } from './BhutaneseMotifs';

export const FooterSimple: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'experience', label: 'Experience' },
    { id: 'vision', label: 'Vision' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-[#050507] text-[#71717A] overflow-hidden">
      <BhutaneseTextileBackground variant="dark" opacity={0.06} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* Left: Brand */}
          <div className="md:col-span-4 space-y-6">
            <BrandMonogram size={56} />
            <p className="text-xs text-[#52525B] leading-relaxed max-w-xs">
              A diversified Bhutanese business group across tourism, transportation, traditional arts, food, and entertainment.
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="md:col-span-4 space-y-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#52525B] font-medium">Navigation</p>
            <nav className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-xs text-[#71717A] hover:text-[#C5A059] transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Contact */}
          <div className="md:col-span-4 space-y-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#52525B] font-medium">Contact</p>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 shrink-0" />
                <a href={`mailto:${CHAIRMAN_INFO.email}`} className="text-xs text-[#71717A] hover:text-[#C5A059] transition-colors">{CHAIRMAN_INFO.email}</a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 shrink-0" />
                <a href={`tel:${CHAIRMAN_INFO.phone}`} className="text-xs text-[#71717A] hover:text-[#C5A059] transition-colors">{CHAIRMAN_INFO.phone}</a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 shrink-0" />
                <span className="text-xs text-[#71717A]">Thimphu, Bhutan</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#27272a]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#3f3f46]">
            &copy; {new Date().getFullYear()} Pema&apos;s High Quality Group Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#3f3f46]">Thimphu, Bhutan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
