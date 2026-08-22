import React from 'react';
import { BrandMonogram } from './BhutaneseMotifs';

export const FooterSimple: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] text-[#A1A1AA] py-12 border-t border-[#27272a]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center">
          <BrandMonogram size={48} />
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[11px] uppercase tracking-[0.2em]">
          {['hero', 'about', 'ventures', 'experience', 'philosophy', 'contact'].map(id => (
            <button key={id} onClick={() => scrollTo(id)} className="hover:text-[#C5A059] transition-colors cursor-pointer">
              {id === 'hero' ? 'HOME' : id.toUpperCase()}
            </button>
          ))}
        </nav>
        <div className="text-[11px] uppercase tracking-[0.14em] text-[#71717A]">
          &copy; {new Date().getFullYear()} Pema&apos;s HQG. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
