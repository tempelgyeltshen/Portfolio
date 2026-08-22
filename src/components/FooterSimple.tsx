import React from 'react';
import { BrandMonogram } from './BhutaneseMotifs';

export const FooterSimple: React.FC = () => {
  return (
    <footer className="bg-[#050507] text-[#71717A] py-10 border-t border-[#27272a]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <BrandMonogram size={56} />
        <p className="text-[10px] uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} Pema&apos;s High Quality Group. All rights reserved.</p>
      </div>
    </footer>
  );
};
