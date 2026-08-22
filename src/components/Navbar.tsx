import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandMonogram } from './BhutaneseMotifs';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'ventures', label: 'VENTURES' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'philosophy', label: 'PHILOSOPHY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-[#C5A059]/20 shadow-2xl py-4'
          : 'bg-transparent py-6 sm:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
          className="group focus:outline-none"
          aria-label="Pema's High Quality Group Home"
        >
          <BrandMonogram />
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative py-1 text-xs tracking-[0.22em] font-medium uppercase transition-colors duration-200 focus:outline-none ${
                  isActive
                    ? 'text-[#C5A059] font-semibold'
                    : 'text-[#D4D4D8] hover:text-[#E8D4A2]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A059] transition-all duration-300" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-[0.18em] text-[#C5A059] border border-[#C5A059]/50 hover:border-[#C5A059] hover:bg-[#C5A059]/10 transition-colors duration-200 font-medium"
          >
            <span>INQUIRE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#D4D4D8] hover:text-[#C5A059] focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b] border-b border-[#C5A059]/20 px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left py-2 text-sm tracking-[0.2em] uppercase font-medium transition-colors ${
                  activeSection === item.id ? 'text-[#C5A059]' : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-[#27272a]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-xs uppercase tracking-[0.2em] text-[#C5A059] border border-[#C5A059]/60 hover:bg-[#C5A059]/10 font-medium text-center flex items-center justify-center gap-2"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
