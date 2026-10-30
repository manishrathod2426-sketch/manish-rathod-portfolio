import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { sound } from './utils/sound';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // Synchronize active section with scroll position
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'tech-stack', 'projects', 'journey', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
    if (nextState) {
      sound.playSuccess();
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F5F5] relative selection:bg-[#FF2638] selection:text-white">
      {/* Desktop Custom Reticle Cursor */}
      <CustomCursor />

      {/* Futuristic Scanline Ambient Grid Overlay */}
      <div className="fixed inset-0 scanline-overlay pointer-events-none z-30 opacity-40" />

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          onExploreWork={() => handleNavigate('projects')}
          onConnect={() => handleNavigate('contact')}
        />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection />

        <JourneySection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
