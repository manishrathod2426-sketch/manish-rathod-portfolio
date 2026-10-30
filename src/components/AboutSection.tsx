import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { Target, BookOpen, Lightbulb, Compass, Code2, Cpu, Database, Server } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  const principles = [
    {
      title: 'BUILD WITH PURPOSE',
      icon: Target,
      tag: 'DIRECTIVE_01',
      summary: 'Intentional engineering over trivial complexity.',
      details:
        'Every line of code and interface decision must serve an authentic user need. I build software that prioritizes performance, clean modular architecture, and enduring practical value.',
      metric: 'FOCUS: QUALITY',
    },
    {
      title: 'LEARN CONTINUOUSLY',
      icon: BookOpen,
      tag: 'DIRECTIVE_02',
      summary: 'Curiosity-fueled technical exploration every day.',
      details:
        'The developer landscape evolves exponentially. I embrace foundational computer science, explore modern full-stack ecosystems, and actively convert theoretical documentation into working prototypes.',
      metric: 'TRAJECTORY: EXPONENTIAL',
    },
    {
      title: 'SOLVE REAL PROBLEMS',
      icon: Lightbulb,
      tag: 'DIRECTIVE_03',
      summary: 'Bridging human needs with digital infrastructure.',
      details:
        'Software shines when it removes friction from daily life. Whether building a streamlined railway booking system or deterministic tabular data pipelines, the mission is practical real-world impact.',
      metric: 'OUTPUT: UTILITY',
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#070707] border-t border-white/5 overflow-hidden">
      {/* Background Grid & Ambient Red Accent */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF2638]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FF2638] tracking-widest uppercase mb-3">
            <span className="w-8 h-[1px] bg-[#FF2638]" />
            <span>01 // PHILOSOPHY & BACKGROUND</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <h2 className="font-['Orbitron'] text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              NOT JUST CODE. <br />
              <span className="text-[#FF2638] text-glow-red">A MINDSET.</span>
            </h2>

            <div className="font-mono text-xs text-zinc-500 max-w-xs flex flex-col gap-1">
              <span className="text-white font-semibold">CORE OPERATING ETHOS</span>
              <span>SYNTHESIZING DESIGN, LOGIC & SYSTEM ARCHITECTURE</span>
            </div>
          </div>
        </div>

        {/* Editorial Layout: Text & Dynamic Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Authentic Bio & Developer Intent */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative p-6 sm:p-8 rounded-xl bg-[#0d0d0f] border border-[#FF2638]/20 box-glow-red">
              {/* Corner Sci-Fi accents */}
              <div className="absolute top-0 right-0 p-3 font-mono text-[10px] text-zinc-600">
                [BIO_MANIFEST_v2.6]
              </div>

              <div className="space-y-5 text-base sm:text-lg text-[#F5F5F5] font-light leading-relaxed">
                <p>
                  I'm <span className="font-semibold text-white">Manish Rathod</span>, an aspiring{' '}
                  <span className="text-[#FF2638] font-medium">Full Stack Developer</span> passionate about building
                  useful, modern web applications. I enjoy exploring how frontend interfaces, backend systems, APIs,
                  and databases work together to create complete digital experiences.
                </p>

                <p className="text-zinc-400">
                  My journey is driven by curiosity, hands-on projects, and a desire to transform complex ideas into
                  practical solutions. I'm continuously developing my technical skills and working toward becoming a
                  capable Full Stack Developer.
                </p>
              </div>

              {/* Technical Specifications bar */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">EXPERTISE HORIZON</div>
                  <div className="text-[#F5F5F5] font-bold mt-0.5">FULL STACK</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">APPROACH</div>
                  <div className="text-[#FF2638] font-bold mt-0.5">SYSTEMATIC</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">LOCATION</div>
                  <div className="text-[#F5F5F5] font-bold mt-0.5">KARNATAKA, IN</div>
                </div>
              </div>
            </div>

            {/* Architecture schematic indicator (Replacing any personal portrait with computational schematic) */}
            <div className="p-4 rounded-lg bg-[#111111]/60 border border-white/5 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#FF2638]/10 border border-[#FF2638]/30 flex items-center justify-center text-[#FF2638]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-medium">ENGINEERING WORKFLOW</div>
                  <div className="text-[10px] text-zinc-500">SPECIFICATION &rarr; CODE &rarr; VALIDATION &rarr; DEPLOY</div>
                </div>
              </div>
              <div className="text-right text-[10px] text-[#FF2638]">
                ACTIVE NODE
              </div>
            </div>
          </div>

          {/* Right Column: Three Interactive Principles */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="font-mono text-xs text-zinc-400 tracking-wider uppercase mb-1 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#FF2638]" />
              GUIDING PRINCIPLES — CLICK OR HOVER TO REVEAL
            </div>

            {principles.map((principle, index) => {
              const Icon = principle.icon;
              const isSelected = activePrinciple === index;

              return (
                <div
                  key={principle.title}
                  onMouseEnter={() => {
                    setActivePrinciple(index);
                    sound.playHover();
                  }}
                  onClick={() => {
                    setActivePrinciple(index);
                    sound.playClick();
                  }}
                  className={`group relative p-6 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isSelected
                      ? 'bg-[#111111] border-[#FF2638] shadow-[0_0_25px_rgba(255,38,56,0.2)]'
                      : 'bg-[#0d0d0f]/80 border-white/5 hover:border-[#FF2638]/40 hover:bg-[#111111]/80'
                  }`}
                >
                  {/* Left accent bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                      isSelected ? 'bg-[#FF2638] shadow-[0_0_10px_#FF2638]' : 'bg-transparent'
                    }`}
                  />

                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-[#FF2638] text-white shadow-[0_0_15px_#FF2638]'
                            : 'bg-white/5 text-zinc-400 group-hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-[#FF2638] tracking-widest">
                          {principle.tag}
                        </span>
                        <h3 className="font-['Orbitron'] text-lg sm:text-xl font-bold text-white tracking-wide">
                          {principle.title}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-[10px] text-zinc-500 border border-white/5 px-2 py-1 rounded bg-[#070707]">
                      {principle.metric}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-2 font-medium">
                    {principle.summary}
                  </p>

                  {/* Supporting expanded details */}
                  <div
                    className={`transition-all duration-300 overflow-hidden font-light text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-3 ${
                      isSelected ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 pt-0 mt-0 border-transparent'
                    }`}
                  >
                    {principle.details}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
