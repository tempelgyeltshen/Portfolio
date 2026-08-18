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
            ? 'glass border-b border-[#C9A227]/30 shadow-lg py-3 text-[#2C2D31]'
            : 'glass border-b border-[#C9A227]/20 py-4 text-[#2C2D31]'
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
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-wider text-[#2C2D31] group-hover:text-[#C9A227] transition-colors duration-300">
                HIGH QUALITY
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse"></span>
            </div>
            <span className="text-[10px] tracking-[0.25em] font-semibold text-[#C9A227] uppercase -mt-0.5">
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
                className="text-xs uppercase tracking-[0.15em] font-semibold text-[#4A4843] hover:text-[#C9A227] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C9A227] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-[#4A4843] hover:text-[#C9A227] hover:bg-[#C9A227]/10 rounded-full transition-all duration-300 border border-transparent hover:border-[#C9A227]/30"
              title="Search Portfolio"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenContact}
              className="btn-primary px-5 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-sm flex items-center space-x-2"
            >
              <Mail className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Inquire</span>
            </button>
          </div>

          {/* Mobile Toggle Buttons */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-[#2C2D31] hover:text-[#C9A227] transition-colors duration-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#2C2D31] hover:text-[#C9A227] focus:outline-none transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 glass-dark lg:hidden flex flex-col justify-between p-6 pt-24 animate-in fade-in slide-in-from-top duration-300">
          <div className="space-y-6">
            <div className="border-b border-[#C9A227]/30 pb-4 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A227] font-semibold">
                High Quality Pvt. Ltd. Navigation
              </span>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-base font-serif tracking-wider text-white hover:text-[#C9A227] py-2 border-b border-white/10 transition-colors duration-300"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#C9A227]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#C9A227]/30">
            <div className="text-xs text-gray-300 space-y-1">
              <p className="font-serif text-white font-semibold">Chairman's Office</p>
              <p>pemsbumthap@gmail.com | +975 17377777</p>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-white bg-[#C9A227] hover:bg-[#8B6914] transition-colors duration-300 rounded-sm text-center shadow-lg"
            >
              Connect With Chairman
            </button>
          </div>
        </div>
      )}
    </>
  );
};
