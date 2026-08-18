import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex flex-col items-start focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-wider text-[#2C2D31]">
              HIGH QUALITY
            </span>
            <span className="text-[10px] tracking-[0.2em] font-semibold text-[#C9A227] uppercase -mt-0.5">
              PVT. LTD. BHUTAN
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.15em] font-medium text-[#4A4843] hover:text-[#C9A227] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#4A4843] hover:text-[#C9A227] transition-colors duration-200"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenContact}
              className="px-4 py-2 text-xs uppercase tracking-widest font-semibold text-white bg-[#2C2D31] hover:bg-[#C9A227] transition-colors duration-200 rounded-sm"
            >
              Inquire
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2C2D31] hover:text-[#C9A227] transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col p-6 pt-20">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#2C2D31] hover:text-[#C9A227] py-2 border-b border-gray-100 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-xs uppercase tracking-widest font-semibold text-white bg-[#2C2D31] hover:bg-[#C9A227] transition-colors duration-200 rounded-sm"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  );
};
