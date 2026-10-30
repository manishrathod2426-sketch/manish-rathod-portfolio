import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { ProjectData } from '../types';
import { ProjectModal } from './ProjectModal';
import { RailwayNetworkVisual } from './RailwayNetworkVisual';
import { DataCubeVisual } from './DataCubeVisual';
import {
  ArrowUpRight,
  Github,
  Layers,
  Sparkles,
  Train,
  Database,
  CheckCircle2,
  Terminal,
  ExternalLink,
} from 'lucide-react';

const PROJECTS: ProjectData[] = [
  {
    id: 'yatra-one',
    number: '01',
    title: 'Yatra One — Railway Ticket Booking System',
    subtitle: 'MODERN RAILWAY COMMERCE INTERFACE',
    description:
      'Yatra One is a railway ticket booking project designed to simplify the train booking experience through a user-friendly digital interface. It explores the process of organizing train journey information and ticket-booking interactions.',
    features: [
      'Train search & route inquiry',
      'Real-time journey details & schedules',
      'Passenger information processing',
      'Dynamic booking workflow',
      'Simulated booking confirmation & PNR receipt',
      'High-performance responsive interface',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB / MySQL', 'Tailwind CSS', 'REST APIs'],
    githubUrl: 'https://github.com/manishrathod/yatra-one',
    liveUrl: '#demo',
    isPrototype: true,
    type: 'railway',
  },
  {
    id: 'datamind',
    number: '02',
    title: 'DataMind: An Integrated, Deterministic Workflow for Tabular Data Analytics and Machine Learning',
    subtitle: 'REPRODUCIBLE COMPUTATIONAL DATA PIPELINE',
    description:
      'DataMind is a project focused on bringing tabular data analytics and machine learning into an integrated, deterministic workflow. Its concept emphasizes a structured and reproducible approach to preparing data, analyzing datasets, and developing machine learning workflows.',
    features: [
      'Tabular data processing & sanitization',
      'Exploratory data analytics & distribution visualization',
      'Reproducible deterministic workflow execution',
      'Machine learning pipeline integration (cross-validation)',
      'Structured analytical results & metric reporting',
    ],
    technologies: ['Python', 'Pandas & NumPy', 'Scikit-Learn', 'Statistical Analytics', 'RESTful API Integration'],
    githubUrl: 'https://github.com/manishrathod/datamind',
    liveUrl: '#demo',
    isPrototype: true,
    type: 'analytics',
  },
];

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="relative py-28 bg-[#070707] border-t border-white/5 overflow-hidden">
      {/* Background Cyber Glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#FF2638]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FF2638] tracking-widest uppercase mb-3">
            <span className="w-8 h-[1px] bg-[#FF2638]" />
            <span>03 // CODE ARTIFACTS</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <h2 className="font-['Orbitron'] text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              SELECTED DIGITAL <br />
              <span className="text-[#FF2638] text-glow-red">EXPERIMENTS.</span>
            </h2>

            <div className="font-mono text-xs text-zinc-400 max-w-md">
              <span className="text-white font-semibold">ENGINEERED FOR IMPACT:</span>
              <p className="mt-1 text-zinc-500">
                Detailed exploration into real-world software challenges — from travel logistics platforms to reproducible machine learning pipelines.
              </p>
            </div>
          </div>
        </div>

        {/* Project 01: Yatra One */}
        <div className="mb-20">
          <div className="relative rounded-2xl bg-[#0d0d0f] border border-white/10 hover:border-[#FF2638]/60 transition-all duration-300 p-6 sm:p-8 lg:p-10 box-glow-red">
            {/* Oversized Sci-Fi Project Number Accent */}
            <div className="absolute top-4 right-6 font-['Orbitron'] text-5xl sm:text-7xl font-black text-white/5 select-none pointer-events-none">
              01
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Visual Representation */}
              <div className="lg:col-span-6">
                <RailwayNetworkVisual />
              </div>

              {/* Right Column: Project Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#FF2638] tracking-widest uppercase mb-2">
                    <Train className="w-3.5 h-3.5" />
                    <span>PROJECT 01 &bull; {PROJECTS[0].subtitle}</span>
                  </div>

                  <h3 className="font-['Orbitron'] text-2xl sm:text-3xl font-bold text-white mb-4">
                    {PROJECTS[0].title}
                  </h3>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {PROJECTS[0].description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {PROJECTS[0].features.slice(0, 4).map((feat) => (
                      <div key={feat} className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF2638]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {PROJECTS[0].technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded border border-white/10 bg-[#111111] font-mono text-[11px] text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setActiveProject(PROJECTS[0]);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className="group relative px-6 py-3 bg-[#FF2638] hover:bg-[#FF003C] text-white font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,38,56,0.3)] clip-sci-fi-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <button
                    onClick={() => {
                      sound.playClick();
                      setActiveProject(PROJECTS[0]);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className="px-5 py-3 border border-white/20 hover:border-[#FF2638] bg-[#111111] text-[#F5F5F5] font-mono text-xs font-bold uppercase tracking-widest transition-colors clip-sci-fi-sm flex items-center gap-2 cursor-pointer"
                  >
                    <Github className="w-4 h-4 text-zinc-400" />
                    <span>SOURCE CODE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 02: DataMind */}
        <div>
          <div className="relative rounded-2xl bg-[#0d0d0f] border border-white/10 hover:border-[#FF2638]/60 transition-all duration-300 p-6 sm:p-8 lg:p-10 box-glow-red">
            {/* Oversized Sci-Fi Project Number Accent */}
            <div className="absolute top-4 right-6 font-['Orbitron'] text-5xl sm:text-7xl font-black text-white/5 select-none pointer-events-none">
              02
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Visual Representation (Interactive 3D Data Cube) */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <DataCubeVisual />
              </div>

              {/* Right Column: Project Details */}
              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#FF2638] tracking-widest uppercase mb-2">
                    <Database className="w-3.5 h-3.5" />
                    <span>PROJECT 02 &bull; {PROJECTS[1].subtitle}</span>
                  </div>

                  <h3 className="font-['Orbitron'] text-2xl sm:text-3xl font-bold text-white mb-4">
                    {PROJECTS[1].title}
                  </h3>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {PROJECTS[1].description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {PROJECTS[1].features.slice(0, 4).map((feat) => (
                      <div key={feat} className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {PROJECTS[1].technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded border border-white/10 bg-[#111111] font-mono text-[11px] text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setActiveProject(PROJECTS[1]);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className="group relative px-6 py-3 bg-[#FF2638] hover:bg-[#FF003C] text-white font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,38,56,0.3)] clip-sci-fi-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>EXPLORE PROJECT</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <button
                    onClick={() => {
                      sound.playClick();
                      setActiveProject(PROJECTS[1]);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className="px-5 py-3 border border-white/20 hover:border-[#FF2638] bg-[#111111] text-[#F5F5F5] font-mono text-xs font-bold uppercase tracking-widest transition-colors clip-sci-fi-sm flex items-center gap-2 cursor-pointer"
                  >
                    <Github className="w-4 h-4 text-zinc-400" />
                    <span>SOURCE CODE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Project Inspector Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
