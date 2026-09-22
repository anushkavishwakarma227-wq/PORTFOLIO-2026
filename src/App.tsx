/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuickContactModal } from './components/QuickContactModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  // Scroll spy effect to highlight currently visible navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      setIsContactModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f131c] text-[#dfe2ef] bg-grid-pattern relative selection:bg-[#8083ff]/30 selection:text-[#c0c1ff]">
      {/* Sticky Obsidian Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full flex flex-col">
        {/* 1. Hero Section */}
        <Hero
          onExploreProjects={handleExploreProjects}
          onOpenContact={handleOpenContact}
        />

        {/* 2. About Me Section (/ 01) */}
        <About />

        {/* 3. Skills & Interests Section (/ 02) */}
        <Skills />

        {/* 4. Selected Projects Section (/ 03) */}
        <Projects />

        {/* 5. Education Section (/ 04) */}
        <Education />

        {/* 6. Experience & Activities Section (/ 05) */}
        <Experience />

        {/* 7. Contact / Let's Connect */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Contact Modal */}
      <QuickContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
