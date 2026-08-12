import React from 'react';
import { CHAIRMAN_INFO } from '../data/groupData';
import { EXTERNAL_IMAGE_CREDITS } from '../data/assets';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#e9edc9] text-[#1C1D21] border-t border-[#d4a373]/30 relative overflow-hidden pt-16 pb-12">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 bhutan-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-200">
          
          {/* LEFT: Group Name & Tagline */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <span className="text-2xl font-serif font-bold text-[#1C1D21] tracking-wider block">
                HIGH QUALITY
              </span>
              <span className="text-xs tracking-[0.25em] text-[#ccd5ae] uppercase font-bold">
                PVT. LTD.
              </span>
            </div>

            <p className="text-xs text-[#5A5854] font-normal max-w-sm leading-relaxed">
              Building Businesses. Creating Opportunities. Delivering Excellence. A diversified Bhutanese corporate portfolio guided by quality and heritage.
            </p>

            <div className="pt-2 text-[11px] text-[#ccd5ae] font-semibold flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#d4a373]"></span>
              <span>Kingdom of Bhutan</span>
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#ccd5ae] block mb-2">
              PORTFOLIO DIRECTORY
            </span>

            <ul className="space-y-2 text-xs text-[#5A5854]">
              <li>
                <button onClick={() => handleNavClick('#hero')} className="hover:text-[#ccd5ae] transition-colors">
                  Home & Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#chairman')} className="hover:text-[#ccd5ae] transition-colors">
                  Chairman Mr. Pema Tshering
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#group-intro')} className="hover:text-[#ccd5ae] transition-colors">
                  High Quality Group Intro
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#businesses')} className="hover:text-[#ccd5ae] transition-colors">
                  Group Companies (01 - 07)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#bhutan-presence')} className="hover:text-[#ccd5ae] transition-colors">
                  Bhutan Presence & Dzongkhags
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#vision')} className="hover:text-[#ccd5ae] transition-colors">
                  Vision & Corporate Values
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#contact')} className="hover:text-[#ccd5ae] transition-colors">
                  Executive Contact
                </button>
              </li>
            </ul>
          </div>

          {/* RIGHT: Direct Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#ccd5ae] block mb-2">
              EXECUTIVE HEADQUARTERS
            </span>

            <div className="text-xs text-[#5A5854] space-y-2 font-normal">
              <p className="font-serif font-bold text-[#1C1D21] text-sm">Mr. Pema Tshering</p>
              <p className="text-[#ccd5ae] font-semibold">Chairman, High Quality Pvt. Ltd.</p>
              <p>Email: <a href={`mailto:${CHAIRMAN_INFO.email}`} className="text-[#1C1D21] hover:underline font-medium">{CHAIRMAN_INFO.email}</a></p>
              <p>Phone: <a href={`tel:${CHAIRMAN_INFO.phone}`} className="text-[#1C1D21] hover:underline font-medium">{CHAIRMAN_INFO.phone}</a></p>
              <p>Tourism Web: <a href={CHAIRMAN_INFO.webUrl} target="_blank" rel="noopener noreferrer" className="text-[#1C1D21] hover:underline font-medium">{CHAIRMAN_INFO.website}</a></p>
              <p className="pt-2 text-[11px] text-[#8E8B85]">Thimphu, Kingdom of Bhutan</p>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & CULTURAL SEAL */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5A5854] gap-4">
          <p>© {currentYear} High Quality Pvt. Ltd. All Rights Reserved.</p>

          <div className="flex items-center space-x-3">
            <span className="font-serif text-[#ccd5ae] font-bold text-sm tracking-widest">BHUTAN</span>
            <span className="w-1 h-1 rounded-full bg-[#d4a373]"></span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#8E8B85]">Gross National Happiness</span>
          </div>
        </div>

        <details className="mt-5 text-[10px] text-[#8E8B85]">
          <summary className="cursor-pointer hover:text-[#ccd5ae] transition-colors">Image sources &amp; licences</summary>
          <ul className="mt-2 space-y-1 leading-relaxed">
            {EXTERNAL_IMAGE_CREDITS.map((credit) => (
              <li key={credit.href}>
                <a href={credit.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {credit.label}
                </a>
              </li>
            ))}
          </ul>
        </details>

      </div>
    </footer>
  );
};
