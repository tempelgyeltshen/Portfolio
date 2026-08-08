import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChairmanSection } from './components/ChairmanSection';
import { GroupIntro } from './components/GroupIntro';
import { GroupCompanies } from './components/GroupCompanies';
import { TravelersSection } from './components/TravelersSection';
import { ThangkaSection } from './components/ThangkaSection';
import { TradingSection } from './components/TradingSection';
import { CarRentalSection } from './components/CarRentalSection';
import { Food247Section } from './components/Food247Section';
import { EnterpriseSection } from './components/EnterpriseSection';
import { HitokaraSection } from './components/HitokaraSection';
import { CollectiveStrength } from './components/CollectiveStrength';
import { BhutanPresence } from './components/BhutanPresence';
import { WhyUs } from './components/WhyUs';
import { VisionValues } from './components/VisionValues';
import { ChairmanClosing } from './components/ChairmanClosing';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { CompanyModal } from './components/CompanyModal';
import { ThangkaModal } from './components/ThangkaModal';
import { SearchModal } from './components/SearchModal';

import { CompanyItem, ThangkaArtItem } from './types';

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState<CompanyItem | null>(null);
  const [selectedThangka, setSelectedThangka] = useState<ThangkaArtItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string>('Partnership');

  const handleExploreGroup = () => {
    const el = document.querySelector('#businesses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChairmanMessage = () => {
    const el = document.querySelector('#chairman');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenContactWithSubject = (subject: string) => {
    setContactSubject(subject);
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1C1D21] font-sans antialiased selection:bg-[#B08B46] selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => handleOpenContactWithSubject('Partnership')}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Homepage Hero */}
        <Hero
          onExploreGroup={handleExploreGroup}
          onChairmanMessage={handleChairmanMessage}
        />

        {/* 2. Chairman Section & Leadership Philosophy */}
        <ChairmanSection />

        {/* 3. Group Introduction */}
        <GroupIntro />

        {/* 4. Group Companies Editorial Showcase (01 - 07) */}
        <GroupCompanies onSelectCompany={(comp) => setSelectedCompany(comp)} />

        {/* 5. High Quality Travelers Deep Dive */}
        <TravelersSection onInquire={handleOpenContactWithSubject} />

        {/* 6. High Quality Thangka Painting Cultural Showcase */}
        <ThangkaSection onSelectArtwork={(art) => setSelectedThangka(art)} />

        {/* 7. High Quality Trading Commercial Section */}
        <TradingSection onInquire={handleOpenContactWithSubject} />

        {/* 8. High Quality Car Rental Section */}
        <CarRentalSection onInquire={handleOpenContactWithSubject} />

        {/* 9. High Quality 24/7 Food & Service Section */}
        <Food247Section />

        {/* 10. High Quality Enterprise Section */}
        <EnterpriseSection onInquire={handleOpenContactWithSubject} />

        {/* 11. Hitokara Entertainment Section */}
        <HitokaraSection />

        {/* 12. Collective Strength Summary */}
        <CollectiveStrength onSelectCompany={(comp) => setSelectedCompany(comp)} />

        {/* 13. Bhutan Presence & Interactive 20 Dzongkhags Explorer */}
        <BhutanPresence />

        {/* 14. Why Work With Us */}
        <WhyUs />

        {/* 15. Long-term Vision & Corporate Values */}
        <VisionValues />

        {/* 16. Chairman's Closing Address */}
        <ChairmanClosing />

        {/* 17. Executive Contact Form & Details */}
        <ContactSection initialSubject={contactSubject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
        onInquire={handleOpenContactWithSubject}
      />

      <ThangkaModal
        artwork={selectedThangka}
        onClose={() => setSelectedThangka(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCompany={(comp) => setSelectedCompany(comp)}
      />
    </div>
  );
}
