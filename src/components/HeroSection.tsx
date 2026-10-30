import React from 'react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { sound } from '../utils/sound';
import { ArrowUpRight, ChevronDown, Terminal, ShieldCheck, Sparkles, MapPin, Layers } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork, onConnect }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-[#070707]"
    >
      {/* Background ambient lighting and grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      
      {/* Red ambient volumetric glow blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF2638]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-[#FF003C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Typography & Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Small eyebrow banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF2638]/30 bg-[#111111]/80 backdrop-blur-md mb-6 w-fit shadow-[0_0_15px_rgba(255,38,56,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#FF2638] shadow-[0_0_8px_#FF2638]" />
              <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-widest text-[#F5F5F5] uppercase">
                PORTFOLIO 2026 <span className="text-[#999999]">/</span> FULL STACK DEVELOPMENT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Orbitron'] text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6">
              ENGINEERING <br />
              THE <span className="text-[#FF2638] text-glow-red">DIGITAL</span> <br />
              <span className="text-[#FF2638] text-glow-red">FUTURE.</span>
            </h1>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-[#999999] leading-relaxed max-w-2xl mb-8 font-light">
              I'm <span className="text-[#F5F5F5] font-semibold">Manish Rathod</span> — an aspiring Full Stack Developer transforming ideas into interactive digital experiences through code, creativity, and continuous learning.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => {
                  sound.playClick();
                  onExploreWork();
                }}
                onMouseEnter={() => sound.playHover()}
                className="group relative px-6 py-3.5 bg-[#FF2638] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#FF003C] hover:shadow-[0_0_25px_#FF003C] clip-sci-fi flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onConnect();
                }}
                onMouseEnter={() => sound.playHover()}
                className="group relative px-6 py-3.5 border border-[#FF2638]/60 bg-[#111111]/80 text-[#F5F5F5] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:border-[#FF2638] hover:bg-[#FF2638]/10 hover:shadow-[0_0_20px_rgba(255,38,56,0.3)] clip-sci-fi flex items-center gap-2 cursor-pointer"
              >
                <span>LET'S CONNECT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF2638] group-hover:scale-150 transition-transform" />
              </button>
            </div>

            {/* Status Panel - Sci-Fi HUD */}
            <div className="border border-[#FF2638]/30 bg-[#0d0d0f]/90 backdrop-blur-md p-4 sm:p-5 rounded-lg relative overflow-hidden max-w-xl">
              {/* Corner accent decorations */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#FF2638]" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#FF2638]" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#FF2638]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#FF2638]" />

              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#FF2638]" />
                  <span>SYSTEM_TELEMETRY // LIVE</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>OPERATIONAL</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#999999] tracking-wider uppercase">ROLE</span>
                  <span className="text-[#F5F5F5] font-semibold truncate">ASPIRING FULL STACK DEVELOPER</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] text-[#999999] tracking-wider uppercase">FOCUS</span>
                  <span className="text-[#FF2638] font-semibold">FRONTEND + BACKEND</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] text-[#999999] tracking-wider uppercase flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-[#FF2638]" />
                    BASE
                  </span>
                  <span className="text-[#F5F5F5] font-semibold">KARNATAKA, INDIA</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] text-[#999999] tracking-wider uppercase">MODE</span>
                  <span className="text-[#F5F5F5] font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-sm bg-[#FF2638]" />
                    BUILDING / LEARNING
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Centerpiece */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient circular frame with glowing accents */}
            <div className="relative w-full aspect-square max-w-[540px]">
              {/* Outer decorative ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-[#FF2638]/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-10 rounded-full border border-[#FF2638]/10" />

              {/* 3D Canvas component */}
              <Hero3DCanvas className="w-full h-full" />
            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <button
            onClick={() => {
              sound.playClick();
              onExploreWork();
            }}
            className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#FF2638] transition-colors font-mono text-[10px] tracking-widest uppercase cursor-pointer"
          >
            <span>SCROLL TO INITIALIZE</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#FF2638]" />
          </button>
        </div>
      </div>
    </section>
  );
};
