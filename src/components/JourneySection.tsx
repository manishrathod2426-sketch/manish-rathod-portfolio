import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { RoadmapStage } from '../types';
import {
  Code,
  Server,
  Database,
  Layers,
  CloudUpload,
  CheckCircle2,
  Clock,
  Compass,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

const JOURNEY_STAGES: RoadmapStage[] = [
  {
    stageNumber: '01',
    title: 'FRONTEND ARCHITECTURE',
    subtitle: 'INTERFACES & HUMAN INTERACTION',
    status: 'COMPLETED',
    description:
      'Mastering the visual and interactive layer of the modern web. Structuring semantic markup, fluid styling, responsive design systems, and modular state management with React.',
    skills: ['HTML5 & Modern Semantics', 'CSS3 / Tailwind Architecture', 'Modern JavaScript (ES6+)', 'React.js Component Ecosystem', 'Responsive Web Design'],
    keyMilestones: [
      'Built reactive component architectures with props & hooks',
      'Engineered cross-viewport fluid interfaces without overflow glitches',
      'Implemented clean DOM accessibility & event pipelines',
    ],
  },
  {
    stageNumber: '02',
    title: 'BACKEND SERVICES',
    subtitle: 'SERVER-SIDE LOGIC & NETWORKING',
    status: 'IN PROGRESS',
    description:
      'Constructing resilient server processes and network endpoints. Designing structured REST APIs, handling async requests, managing middleware, and implementing secure authentication pipelines.',
    skills: ['Node.js Runtime Engine', 'Express.js Framework', 'RESTful API Engineering', 'Server-side Logic & Middleware', 'Authentication & JWT Flow'],
    keyMilestones: [
      'Developed decoupled REST API endpoints with custom controllers',
      'Structured request parsing, input sanitization, and error handling',
      'Exploring JWT token exchanges and protected routes',
    ],
  },
  {
    stageNumber: '03',
    title: 'PERSISTENCE & DATA',
    subtitle: 'DATABASES & QUERY OPTIMIZATION',
    status: 'IN PROGRESS',
    description:
      'Storing, organizing, and querying application state across sessions. Modeling relational databases with MySQL and document collections with MongoDB.',
    skills: ['MongoDB & Mongoose', 'MySQL Relational Schemas', 'Database Normalization', 'CRUD Lifecycle Operations', 'Query Indexing & Relationships'],
    keyMilestones: [
      'Designed schemas for Yatra One railway travel entities',
      'Implemented full CRUD persistence cycles for transactional apps',
      'Practicing relational joins vs document nesting trade-offs',
    ],
  },
  {
    stageNumber: '04',
    title: 'FULL STACK INTEGRATION',
    subtitle: 'SYSTEM SYNTHESIS & END-TO-END FLOW',
    status: 'LEARNING',
    description:
      'Binding the entire stack into a cohesive unit: seamless client-server handshakes, robust state reconciliation, form validation, error boundaries, and defensive security.',
    skills: ['Client-Server Handshake & CORS', 'Asynchronous State Reconciliation', 'End-to-End Form Validation', 'Secure Auth Handshake', 'Full Stack System Architecture'],
    keyMilestones: [
      'Synchronizing React client state with Express / DB mutations',
      'Implementing defensive client-side & server-side validation',
      'Architecting unified full stack projects end-to-end',
    ],
  },
  {
    stageNumber: '05',
    title: 'DEPLOYMENT & CLOUD',
    subtitle: 'PRODUCTION INFRASTRUCTURE',
    status: 'PLANNED',
    description:
      'Shipping reliable applications into the wild. Establishing automated Git workflows, environment configuration secrets, continuous delivery, and production observability.',
    skills: ['Git & GitHub CI Workflows', 'Vercel & Cloud Deployment', 'Environment Variable Security', 'Production Build Optimization', 'Reliability & Uptime Practices'],
    keyMilestones: [
      'Configuring deterministic build pipelines for Vite and Node',
      'Managing staging vs production environment secrets',
      'Advancing toward production-grade DevOps fundamentals',
    ],
  },
];

export const JourneySection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  const getStatusBadge = (status: RoadmapStage['status']) => {
    switch (status) {
      case 'COMPLETED':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-1 rounded border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
            <CheckCircle2 className="w-3 h-3" />
            COMPLETED / FOUNDATION
          </span>
        );
      case 'IN PROGRESS':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-1 rounded border border-[#FF2638]/40 text-[#FF2638] bg-[#FF2638]/10 shadow-[0_0_10px_rgba(255,38,56,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2638]" />
            IN PROGRESS / ACTIVE
          </span>
        );
      case 'LEARNING':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-1 rounded border border-amber-500/30 text-amber-400 bg-amber-500/10">
            <Clock className="w-3 h-3" />
            LEARNING / INTEGRATING
          </span>
        );
      case 'PLANNED':
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2.5 py-1 rounded border border-zinc-600 text-zinc-400 bg-zinc-800/40">
            <Compass className="w-3 h-3" />
            PLANNED / ROADMAP
          </span>
        );
    }
  };

  const currentStageData = JOURNEY_STAGES[selectedStage];

  return (
    <section id="journey" className="relative py-28 bg-[#070707] border-t border-white/5 overflow-hidden">
      {/* Background Cyber Matrix Lines */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#FF2638]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FF2638] tracking-widest uppercase mb-3">
            <span className="w-8 h-[1px] bg-[#FF2638]" />
            <span>04 // SYSTEM PROGRESSION</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <h2 className="font-['Orbitron'] text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              FROM INTERFACE <br />
              <span className="text-[#FF2638] text-glow-red">TO INFRASTRUCTURE.</span>
            </h2>

            <div className="font-mono text-xs text-zinc-400 max-w-md">
              <span className="text-white font-semibold">THE FULL STACK PIPELINE:</span>
              <p className="mt-1 text-zinc-500">
                A deliberate roadmap tracking the evolution from frontend mastery to full backend architecture, database modeling, and production deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Futuristic Horizontal / Interactive Node Track */}
        <div className="mb-12">
          <div className="relative flex items-center justify-between overflow-x-auto pb-4 pt-2">
            {/* Illuminated connecting track */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#FF2638] via-red-500/50 to-zinc-800 z-0 hidden md:block" />

            {JOURNEY_STAGES.map((stage, idx) => {
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={stage.stageNumber}
                  onClick={() => {
                    setSelectedStage(idx);
                    sound.playClick();
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="relative z-10 flex flex-col items-center group focus:outline-none min-w-[130px] cursor-pointer"
                >
                  {/* Glowing Node Circle */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[#FF2638] border-white text-white shadow-[0_0_20px_#FF2638] scale-110'
                        : 'bg-[#111111] border-white/10 text-zinc-400 group-hover:border-[#FF2638] group-hover:text-white'
                    }`}
                  >
                    {stage.stageNumber}
                  </div>

                  <span
                    className={`mt-2 font-mono text-[11px] tracking-wider uppercase transition-colors text-center ${
                      isSelected ? 'text-[#FF2638] font-bold' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    STAGE {stage.stageNumber}
                  </span>
                  <span className="text-[10px] text-zinc-600 font-mono hidden sm:inline">
                    {stage.status}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Display Panel */}
        <div className="relative p-6 sm:p-10 rounded-2xl bg-[#0d0d0f] border border-[#FF2638]/40 box-glow-red">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <div className="font-mono text-xs text-[#FF2638] tracking-widest uppercase mb-1">
                STAGE {currentStageData.stageNumber} // {currentStageData.subtitle}
              </div>
              <h3 className="font-['Orbitron'] text-2xl sm:text-3xl font-black text-white">
                {currentStageData.title}
              </h3>
            </div>

            <div>{getStatusBadge(currentStageData.status)}</div>
          </div>

          <p className="text-zinc-300 text-base leading-relaxed mb-8 font-light max-w-4xl">
            {currentStageData.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Core Competencies in this stage */}
            <div className="p-5 rounded-xl bg-[#111111]/80 border border-white/5">
              <div className="font-mono text-xs text-[#FF2638] tracking-wider uppercase mb-3 flex items-center gap-2">
                <Code className="w-3.5 h-3.5" />
                <span>CORE STACK FOR THIS STAGE</span>
              </div>
              <div className="space-y-2">
                {currentStageData.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 font-mono text-xs text-zinc-300 p-2 rounded bg-[#070707]/60 border border-white/5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF2638]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Milestones & Progression */}
            <div className="p-5 rounded-xl bg-[#111111]/80 border border-white/5">
              <div className="font-mono text-xs text-zinc-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>PRACTICAL MILESTONES & PROOF</span>
              </div>
              <div className="space-y-3 font-mono text-xs text-zinc-300">
                {currentStageData.keyMilestones.map((milestone) => (
                  <div key={milestone} className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-[#FF2638] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls for Next / Previous Stage */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
            <button
              onClick={() => {
                if (selectedStage > 0) {
                  sound.playClick();
                  setSelectedStage(selectedStage - 1);
                }
              }}
              disabled={selectedStage === 0}
              className={`px-4 py-2 rounded border transition-colors ${
                selectedStage > 0
                  ? 'border-white/20 text-white hover:border-[#FF2638] cursor-pointer'
                  : 'border-white/5 text-zinc-600 cursor-not-allowed'
              }`}
            >
              &larr; PREVIOUS STAGE
            </button>

            <span className="text-zinc-500">
              STAGE {selectedStage + 1} OF {JOURNEY_STAGES.length}
            </span>

            <button
              onClick={() => {
                if (selectedStage < JOURNEY_STAGES.length - 1) {
                  sound.playClick();
                  setSelectedStage(selectedStage + 1);
                }
              }}
              disabled={selectedStage === JOURNEY_STAGES.length - 1}
              className={`px-4 py-2 rounded border transition-colors ${
                selectedStage < JOURNEY_STAGES.length - 1
                  ? 'border-[#FF2638]/50 text-white hover:bg-[#FF2638]/10 cursor-pointer'
                  : 'border-white/5 text-zinc-600 cursor-not-allowed'
              }`}
            >
              NEXT STAGE &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
