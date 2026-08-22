import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
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
    { name: 'About', href: '#about' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'Experience', href: '#experience' },
    { name: 'Philosophy', href: '#philosophy' },
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
            ? 'bg-white border-b border-gray-200 py-3 sm:py-4'
            : 'bg-white border-b border-gray-100 py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex flex-col items-start focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-wider text-black">
              PEMA TSHERING
            </span>
            <span className="text-[10px] tracking-[0.2em] font-semibold text-[#C9A227] uppercase -mt-0.5">
              Entrepreneur. Investor. Builder.
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-black hover:text-[#C9A227] transition-colors duration-300"
                >
                  {link.name}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="mx-4 text-[#C9A227] text-xs">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-black hover:text-[#C9A227] transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col p-6 pt-20">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-[0.2em] font-medium text-black hover:text-[#C9A227] py-2 border-b border-gray-100 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
