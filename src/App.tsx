import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VenturesSection } from './components/VenturesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { FooterSimple } from './components/FooterSimple';
import { CompanyModal } from './components/CompanyModal';

import { CompanyItem } from './types';

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState<CompanyItem | null>(null);

  const handleExploreVentures = () => {
    const el = document.querySelector('#ventures');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-[#C9A227] selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <Hero onExploreVentures={handleExploreVentures} />

        {/* About Section */}
        <AboutSection />

        {/* Ventures Section */}
        <VenturesSection onSelectCompany={(comp) => setSelectedCompany(comp)} />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Philosophy Section */}
        <PhilosophySection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSimple />

      {/* Company Modal */}
      <CompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
        onInquire={() => {
          setSelectedCompany(null);
          handleOpenContact();
        }}
      />
    </div>
  );
}
