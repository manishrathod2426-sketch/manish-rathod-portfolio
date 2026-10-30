import React from 'react';
import { sound } from '../utils/sound';
import { Linkedin, Github, Mail, ArrowUp, Terminal } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070707] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle animated red line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF2638] to-transparent shadow-[0_0_12px_#FF2638]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-extrabold text-white">
                MR<span className="text-[#FF2638]">.DEV</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#FF2638]/40 bg-[#FF2638]/10 text-[#FF2638]">
                FULL STACK
              </span>
            </div>
            <p className="text-zinc-500 text-xs font-mono max-w-sm">
              Engineering futuristic, reliable, and high-performance web applications from interface to infrastructure.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 font-mono text-xs">
            {['hero', 'about', 'tech-stack', 'projects', 'journey', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => {
                  sound.playClick();
                  onNavigate(id);
                }}
                className="text-zinc-400 hover:text-[#FF2638] uppercase tracking-wider transition-colors cursor-pointer"
              >
                {id.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href="https://www.linkedin.com/in/manish-rathod-0b374b330/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Manish Rathod LinkedIn Profile"
              className="w-9 h-9 rounded-lg border border-white/10 hover:border-[#FF2638] bg-[#111111] flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:shadow-[0_0_12px_rgba(255,38,56,0.5)]"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/manishrathod"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Manish Rathod GitHub Profile"
              className="w-9 h-9 rounded-lg border border-white/10 hover:border-white bg-[#111111] flex items-center justify-center text-zinc-400 hover:text-white transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="mailto:manishrathod2426@gmail.com"
              aria-label="Email Manish Rathod"
              className="w-9 h-9 rounded-lg border border-white/10 hover:border-[#FF2638] bg-[#111111] flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:shadow-[0_0_12px_rgba(255,38,56,0.5)]"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Return to Top"
              className="w-9 h-9 rounded-lg border border-[#FF2638]/40 hover:border-[#FF2638] bg-[#FF2638]/10 hover:bg-[#FF2638] text-white flex items-center justify-center transition-all cursor-pointer shadow-[0_0_10px_rgba(255,38,56,0.2)]"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Ethos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div>
            DESIGNED &amp; BUILT BY <span className="text-white font-bold">MANISH RATHOD</span> © 2026
          </div>
          <div className="text-[#FF2638] font-bold tracking-widest text-[11px]">
            ALWAYS LEARNING. ALWAYS BUILDING.
          </div>
        </div>
      </div>
    </footer>
  );
};
