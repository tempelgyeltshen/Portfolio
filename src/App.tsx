import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VenturesSection } from './components/VenturesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection, ContactModal } from './components/ContactSection';
import { FooterSimple } from './components/FooterSimple';
import { CompanyDetailPage } from './pages/CompanyDetailPage';

function HomePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactInitialTopic, setContactInitialTopic] = useState<string | undefined>(undefined);

  const handleOpenContact = (topic?: string) => {
    setContactInitialTopic(topic);
    setContactModalOpen(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="flex-grow">
        <div id="hero"><Hero onExploreVentures={() => scrollTo('ventures')} onExploreAbout={() => scrollTo('about')} /></div>
        <div id="about"><AboutSection /></div>
        <div id="ventures"><VenturesSection /></div>
        <div id="experience"><ExperienceSection /></div>
        <div id="philosophy"><PhilosophySection /></div>
        <div id="contact"><ContactSection onOpenContactModal={() => handleOpenContact()} /></div>
      </main>

      <FooterSimple />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => { setContactModalOpen(false); setContactInitialTopic(undefined); }}
        initialTopic={contactInitialTopic}
      />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col font-sans-luxury selection:bg-[#C5A059]/30 selection:text-[#FAF9F6]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:companyId" element={<CompanyDetailPage />} />
      </Routes>
    </div>
  );
}
