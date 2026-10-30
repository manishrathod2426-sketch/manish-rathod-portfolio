import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { SkillItem } from '../types';
import {
  Code,
  Server,
  Database,
  Cpu,
  Wrench,
  Layers,
  Search,
  Sparkles,
  CheckCircle2,
  Clock,
  Terminal,
} from 'lucide-react';

const SKILLS_DATA: SkillItem[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend', status: 'current', icon: 'html', description: 'Semantic markup, accessibility, modern HTML specifications' },
  { name: 'CSS3', category: 'frontend', status: 'current', icon: 'css', description: 'Modern flexbox, grid, animations, custom properties' },
  { name: 'JavaScript', category: 'frontend', status: 'current', icon: 'js', description: 'ES6+, DOM manipulation, asynchronous programming, closures' },
  { name: 'React.js', category: 'frontend', status: 'current', icon: 'react', description: 'Component lifecycle, hooks, state management, modern SPA architecture', highlight: true },
  { name: 'Responsive Web Design', category: 'frontend', status: 'current', icon: 'responsive', description: 'Mobile-first design, fluid typography, cross-device interfaces' },

  // Backend
  { name: 'Node.js', category: 'backend', status: 'current', icon: 'node', description: 'Server-side runtime, event loop, file system, package ecosystem', highlight: true },
  { name: 'Express.js', category: 'backend', status: 'current', icon: 'express', description: 'Routing, middleware pipelines, controllers, HTTP servers' },
  { name: 'REST APIs', category: 'backend', status: 'current', icon: 'api', description: 'RESTful conventions, request/response lifecycle, status codes' },
  { name: 'Server-side programming', category: 'backend', status: 'current', icon: 'server', description: 'Business logic execution, error handling, background processing' },
  { name: 'Authentication & Authorization', category: 'backend', status: 'learning', icon: 'auth', description: 'JWT tokens, password hashing, session tokens, secure auth flow' },

  // Database
  { name: 'MongoDB', category: 'database', status: 'current', icon: 'mongo', description: 'NoSQL collections, document models, Mongoose schemas, queries' },
  { name: 'MySQL', category: 'database', status: 'current', icon: 'sql', description: 'Relational tables, foreign keys, SQL queries, relational joins' },
  { name: 'Database design', category: 'database', status: 'current', icon: 'design', description: 'Entity relations, normalization, schema modeling' },
  { name: 'CRUD operations', category: 'database', status: 'current', icon: 'crud', description: 'Create, Read, Update, Delete queries and data lifecycle' },

  // Programming & Computer Science
  { name: 'Python', category: 'cs', status: 'current', icon: 'python', description: 'Clean scripting, data handling, algorithmic thinking' },
  { name: 'Object-Oriented Programming', category: 'cs', status: 'current', icon: 'oop', description: 'Classes, encapsulation, abstraction, inheritance, polymorphism' },
  { name: 'DSA Fundamentals', category: 'cs', status: 'learning', icon: 'dsa', description: 'Arrays, linked lists, stacks, queues, searching and sorting' },

  // Developer Tools
  { name: 'Git', category: 'tools', status: 'current', icon: 'git', description: 'Version control, branching, committing, merge conflict resolution' },
  { name: 'GitHub', category: 'tools', status: 'current', icon: 'github', description: 'Remote repositories, pull requests, collaboration, project tracking' },
  { name: 'Visual Studio Code', category: 'tools', status: 'current', icon: 'vscode', description: 'Editor extensions, debugging, workspace optimization' },
  { name: 'npm', category: 'tools', status: 'current', icon: 'npm', description: 'Package installation, scripts, semantic versioning management' },
  { name: 'Postman', category: 'tools', status: 'current', icon: 'postman', description: 'API endpoint testing, request payloads, headers inspection' },

  // Full Stack Concepts
  { name: 'Client-server architecture', category: 'concepts', status: 'current', icon: 'arch', description: 'Decoupled presentation and service layer architecture' },
  { name: 'API integration', category: 'concepts', status: 'current', icon: 'integ', description: 'Consuming endpoints via fetch/Axios, asynchronous data flows' },
  { name: 'Frontend-backend communication', category: 'concepts', status: 'current', icon: 'comm', description: 'JSON payloads, CORS handling, asynchronous state updates' },
  { name: 'Form validation', category: 'concepts', status: 'current', icon: 'valid', description: 'Client & server-side sanitization, regex, user input guards' },
  { name: 'Deployment & hosting', category: 'concepts', status: 'learning', icon: 'deploy', description: 'Cloud deployment, Vercel/Render workflows, environment variables' },
];

const CATEGORIES = [
  { id: 'all', label: 'ALL MODULES', icon: Layers },
  { id: 'frontend', label: 'FRONTEND', icon: Code },
  { id: 'backend', label: 'BACKEND', icon: Server },
  { id: 'database', label: 'DATABASE', icon: Database },
  { id: 'cs', label: 'CS & PROGRAMMING', icon: Cpu },
  { id: 'tools', label: 'DEV TOOLS', icon: Wrench },
  { id: 'concepts', label: 'FULL STACK CONCEPTS', icon: Terminal },
];

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'current' | 'learning'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesStatus = statusFilter === 'all' || skill.status === statusFilter;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <section id="tech-stack" className="relative py-28 bg-[#070707] border-t border-white/5 overflow-hidden">
      {/* Background Cyber Accents */}
      <div className="absolute inset-0 bg-cyber-dots opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF2638]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-14">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FF2638] tracking-widest uppercase mb-3">
            <span className="w-8 h-[1px] bg-[#FF2638]" />
            <span>02 // SYSTEM CAPABILITIES</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <h2 className="font-['Orbitron'] text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
                MY DEVELOPER <br />
                <span className="text-[#FF2638] text-glow-red">ARSENAL.</span>
              </h2>
            </div>

            <div className="font-mono text-xs text-zinc-400 max-w-md">
              <span className="text-white font-semibold">HONEST PROGRESSION MODEL:</span>
              <p className="mt-1 text-zinc-500">
                Displaying technologies actually learned and implemented in projects, with advanced competencies clearly marked on the learning roadmap. No invented percentage bars.
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Control Bar: Filters & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 p-3 rounded-xl bg-[#0d0d0f] border border-white/5">
          {/* Status Segment Filter: ALL vs CURRENT SKILLS vs CURRENTLY LEARNING */}
          <div className="flex items-center gap-2 p-1 rounded-lg bg-[#111111] border border-white/5">
            <button
              onClick={() => {
                setStatusFilter('all');
                sound.playClick();
              }}
              className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-[#FF2638] text-white shadow-[0_0_10px_#FF2638]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ALL ({SKILLS_DATA.length})
            </button>
            <button
              onClick={() => {
                setStatusFilter('current');
                sound.playClick();
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all cursor-pointer ${
                statusFilter === 'current'
                  ? 'bg-[#FF2638] text-white shadow-[0_0_10px_#FF2638]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              CURRENT SKILLS ({SKILLS_DATA.filter((s) => s.status === 'current').length})
            </button>
            <button
              onClick={() => {
                setStatusFilter('learning');
                sound.playClick();
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all cursor-pointer ${
                statusFilter === 'learning'
                  ? 'bg-[#FF2638] text-white shadow-[0_0_10px_#FF2638]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Clock className="w-3 h-3 text-amber-400" />
              LEARNING ROADMAP ({SKILLS_DATA.filter((s) => s.status === 'learning').length})
            </button>
          </div>

          {/* Search box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword (e.g. React, MongoDB)..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#111111] border border-white/10 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638]"
            />
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  sound.playClick();
                }}
                onMouseEnter={() => sound.playHover()}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-[#FF2638] bg-[#FF2638]/15 text-white shadow-[0_0_15px_rgba(255,38,56,0.3)] font-bold'
                    : 'border-white/5 bg-[#0d0d0f] text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#FF2638]' : 'text-zinc-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid with 3D Tilt Card Aesthetic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const isCurrent = skill.status === 'current';

            return (
              <div
                key={skill.name}
                onMouseEnter={() => sound.playHover()}
                className="group relative p-5 rounded-xl border border-white/5 bg-[#0d0d0f]/90 hover:border-[#FF2638]/60 hover:bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(255,38,56,0.25)] flex flex-col justify-between"
              >
                {/* Top Header */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                      {skill.category}
                    </span>

                    {/* Status badge */}
                    <span
                      className={`inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded border ${
                        isCurrent
                          ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                          : 'border-amber-500/30 text-amber-400 bg-amber-500/10'
                      }`}
                    >
                      {isCurrent ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          LEARNED
                        </>
                      ) : (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          LEARNING
                        </>
                      )}
                    </span>
                  </div>

                  <h3 className="font-['Orbitron'] text-base font-bold text-white tracking-wide group-hover:text-[#FF2638] transition-colors mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed font-light">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Tech Indicator */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="group-hover:text-[#FF2638] transition-colors">
                    MOD // {skill.icon.toUpperCase()}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#FF2638] group-hover:shadow-[0_0_6px_#FF2638] transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="py-16 text-center border border-dashed border-white/10 rounded-xl bg-[#0d0d0f]">
            <p className="text-zinc-500 font-mono text-sm">NO CAPABILITIES FOUND MATCHING CRITERIA</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setStatusFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-mono text-[#FF2638] hover:underline"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
