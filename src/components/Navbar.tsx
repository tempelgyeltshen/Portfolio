import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Mail, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Chairman', href: '#chairman' },
    { name: 'Our Group', href: '#group-intro' },
    { name: 'Vision & Values', href: '#vision' },
    { name: 'Businesses', href: '#businesses' },
    { name: 'Bhutan Presence', href: '#bhutan-presence' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#d4a373]/20 shadow-md py-3 text-[#1C1D21]'
            : 'bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4 text-[#1C1D21]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex flex-col items-start focus:outline-none"
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-wider text-[#1C1D21] group-hover:text-[#d4a373] transition-colors">
                HIGH QUALITY
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4a373]"></span>
            </div>
            <span className="text-[10px] tracking-[0.25em] font-semibold text-[#d4a373] uppercase -mt-0.5">
              PVT. LTD. BHUTAN
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.15em] font-semibold text-[#4A4843] hover:text-[#d4a373] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4a373] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#4A4843] hover:text-[#d4a373] hover:bg-[#d4a373]/10 rounded-full transition-colors border border-transparent hover:border-[#d4a373]/30"
              title="Search Portfolio"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenContact}
              className="px-4 py-2 text-xs uppercase tracking-widest font-semibold text-white bg-[#1C1D21] hover:bg-[#d4a373] transition-colors rounded-sm flex items-center space-x-2 shadow-md"
            >
              <Mail className="w-3.5 h-3.5 text-[#d4a373]" />
              <span>Inquire</span>
            </button>
          </div>

          {/* Mobile Toggle Buttons */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#1C1D21] hover:text-[#d4a373]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1D21] hover:text-[#d4a373] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 pt-24 animate-in fade-in slide-in-from-top duration-300 border-b border-[#d4a373]/30">
          <div className="space-y-6">
            <div className="border-b border-[#d4a373]/20 pb-4 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4a373] font-semibold">
                High Quality Pvt. Ltd. Navigation
              </span>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-base font-serif tracking-wider text-[#1C1D21] hover:text-[#d4a373] py-2 border-b border-gray-100"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#d4a373]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#d4a373]/20">
            <div className="text-xs text-[#5A5854] space-y-1">
              <p className="font-serif text-[#1C1D21] font-semibold">Chairman's Office</p>
              <p>pemsbumthap@gmail.com | +975 17377777</p>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-white bg-[#1C1D21] hover:bg-[#d4a373] transition-colors rounded-sm text-center"
            >
              Connect With Chairman
            </button>
          </div>
        </div>
      )}
    </>
  );
};
