import React, { useState, useEffect } from 'react';
import { sound } from '../utils/sound';
import { Volume2, VolumeX, Menu, X, Terminal, Cpu } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'tech-stack', label: 'TECH STACK' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'journey', label: 'JOURNEY' },
  { id: 'contact', label: 'CONTACT' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  soundEnabled,
  onToggleSound,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    sound.playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070707]/90 backdrop-blur-md border-b border-[#FF2638]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Subtle animated red scanning top bar */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF2638] to-transparent opacity-80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            onMouseEnter={() => sound.playHover()}
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="relative w-8 h-8 rounded border border-[#FF2638]/60 bg-[#111111] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#FF2638] group-hover:shadow-[0_0_12px_rgba(255,38,56,0.6)]">
              <span className="font-mono text-xs font-bold text-white tracking-tighter">MR</span>
              <div className="absolute inset-0 bg-[#FF2638]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="font-mono text-sm tracking-wider font-extrabold text-[#F5F5F5] group-hover:text-[#FF2638] transition-colors">
                MR<span className="text-[#FF2638]">.DEV</span>
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#999999] uppercase">
                SYSTEM 2026
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-[#111111]/70 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  onMouseEnter={() => sound.playHover()}
                  className={`relative px-3.5 py-1.5 text-xs font-mono font-medium tracking-widest uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-[#FF2638] text-glow-red'
                      : 'text-[#999999] hover:text-[#F5F5F5]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#FF2638] shadow-[0_0_8px_#FF2638] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Controls: Audio Toggle & Quick Status */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                onToggleSound();
                sound.playClick();
              }}
              title={soundEnabled ? 'Mute Cyber Audio' : 'Enable Cyber Audio (Procedural Web Audio)'}
              className={`p-2 rounded border transition-all duration-200 flex items-center gap-1.5 text-xs font-mono ${
                soundEnabled
                  ? 'border-[#FF2638]/50 bg-[#FF2638]/10 text-[#FF2638] shadow-[0_0_10px_rgba(255,38,56,0.3)]'
                  : 'border-white/10 bg-[#111111] text-[#999999] hover:text-white'
              }`}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span className="text-[10px] hidden xl:inline">SFX ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[10px] hidden xl:inline">SFX OFF</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="relative px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider text-white border border-[#FF2638] bg-[#FF2638]/10 hover:bg-[#FF2638] hover:shadow-[0_0_15px_#FF003C] transition-all duration-300 clip-sci-fi-sm"
            >
              LET'S TALK
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleSound}
              className="p-2 rounded border border-white/10 bg-[#111111] text-[#999999]"
              aria-label="Toggle Audio"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#FF2638]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-[#FF2638]/40 bg-[#111111] text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF2638]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070707]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 border-b border-[#FF2638]/30 animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            <div className="font-mono text-[10px] text-[#FF2638] tracking-widest uppercase mb-2 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" />
              NAVIGATION MATRIX
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`flex items-center justify-between py-3 px-4 rounded border text-left font-mono text-sm tracking-wider uppercase transition-all ${
                    isActive
                      ? 'border-[#FF2638] bg-[#FF2638]/10 text-white font-bold'
                      : 'border-white/5 bg-[#111111]/60 text-[#999999] hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF2638] shadow-[0_0_8px_#FF2638]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center justify-between text-zinc-500">
              <span>DEVELOPER:</span>
              <span className="text-white">MANISH RATHOD</span>
            </div>
            <div className="flex items-center justify-between text-zinc-500">
              <span>LOCATION:</span>
              <span className="text-white">KARNATAKA, INDIA</span>
            </div>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3 mt-2 text-center font-bold text-white bg-[#FF2638] hover:bg-[#FF003C] shadow-[0_0_15px_rgba(255,38,56,0.5)] transition-all uppercase tracking-widest clip-sci-fi-sm"
            >
              INITIALIZE CONNECTION
            </button>
          </div>
        </div>
      )}
    </>
  );
};
