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
            ? 'bg-white/98 backdrop-blur-md border-b border-[#8B6914]/25 shadow-md py-3 text-[#2C2D31]'
            : 'bg-white/90 backdrop-blur-sm border-b border-[#8B6914]/15 py-4 text-[#2C2D31]'
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
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-wider text-[#2C2D31] group-hover:text-[#8B6914] transition-colors duration-300">
                HIGH QUALITY
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B6914]"></span>
            </div>
            <span className="text-[10px] tracking-[0.25em] font-semibold text-[#8B6914] uppercase -mt-0.5">
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
                className="text-xs uppercase tracking-[0.15em] font-semibold text-[#4A4843] hover:text-[#8B6914] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8B6914] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#4A4843] hover:text-[#8B6914] hover:bg-[#8B6914]/10 rounded-full transition-colors duration-300 border border-transparent hover:border-[#8B6914]/30"
              title="Search Portfolio"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenContact}
              className="px-4 py-2 text-xs uppercase tracking-widest font-semibold text-white bg-[#2C2D31] hover:bg-[#8B6914] transition-colors duration-300 rounded-sm flex items-center space-x-2 shadow-md"
            >
              <Mail className="w-3.5 h-3.5 text-[#8B6914]" />
              <span>Inquire</span>
            </button>
          </div>

          {/* Mobile Toggle Buttons */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#2C2D31] hover:text-[#8B6914] transition-colors duration-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2C2D31] hover:text-[#8B6914] focus:outline-none transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 pt-24 animate-in fade-in slide-in-from-top duration-300 border-b border-[#8B6914]/30">
          <div className="space-y-6">
            <div className="border-b border-[#8B6914]/20 pb-4 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8B6914] font-semibold">
                High Quality Pvt. Ltd. Navigation
              </span>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-base font-serif tracking-wider text-[#2C2D31] hover:text-[#8B6914] py-2 border-b border-gray-100 transition-colors duration-300"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#8B6914]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#8B6914]/20">
            <div className="text-xs text-[#4A4843] space-y-1">
              <p className="font-serif text-[#2C2D31] font-semibold">Chairman's Office</p>
              <p>pemsbumthap@gmail.com | +975 17377777</p>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-white bg-[#2C2D31] hover:bg-[#8B6914] transition-colors duration-300 rounded-sm text-center"
            >
              Connect With Chairman
            </button>
          </div>
        </div>
      )}
    </>
  );
};
