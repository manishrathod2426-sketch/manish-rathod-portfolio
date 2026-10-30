import React, { useState } from 'react';
import { ProjectData } from '../types';
import { sound } from '../utils/sound';
import {
  X,
  ExternalLink,
  Github,
  Train,
  Database,
  Search,
  CheckCircle,
  BarChart3,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Shield,
  Clock,
  MapPin,
  Workflow,
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // State for Yatra One interactive railway simulation
  const [origin, setOrigin] = useState('Bengaluru (SBC)');
  const [destination, setDestination] = useState('Mumbai (CSMT)');
  const [selectedTrain, setSelectedTrain] = useState<string>('EXP-12627');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // State for DataMind interactive ML pipeline simulation
  const [pipelineStep, setPipelineStep] = useState<number>(2);
  const [selectedDataset, setSelectedDataset] = useState('Tabular_Finance_Metrics.csv');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0d0d0f] border border-[#FF2638]/40 rounded-2xl shadow-[0_0_50px_rgba(255,38,56,0.3)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111111]/90">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#FF2638] font-bold tracking-widest">
              EXP_{project.number}
            </span>
            <span className="text-zinc-600">|</span>
            <span className="font-['Orbitron'] text-sm sm:text-base font-bold text-white tracking-wide">
              {project.title}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:border-[#FF2638] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-8">
          {/* Project Summary */}
          <div>
            <div className="font-mono text-xs text-[#FF2638] uppercase tracking-widest mb-1">
              PROJECT OVERVIEW & INTENT
            </div>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Interactive Digital Demonstration Area */}
          {project.type === 'railway' ? (
            /* Yatra One Railway Ticket Simulation */
            <div className="p-5 rounded-xl border border-[#FF2638]/30 bg-[#070707] relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <Train className="w-4 h-4 text-[#FF2638]" />
                  <span>YATRA ONE // INTERACTIVE BOOKING PROTOCOL</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  SYSTEM READY
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-mono text-[10px] text-zinc-500 mb-1">ORIGIN STATION</label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-[#111111] border border-white/10 text-white font-mono text-xs px-3 py-2 rounded focus:outline-none focus:border-[#FF2638]"
                  >
                    <option value="Bengaluru (SBC)">Bengaluru Central (SBC)</option>
                    <option value="Hubballi (UBL)">Hubballi Jn (UBL)</option>
                    <option value="Mysuru (MYS)">Mysuru Jn (MYS)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-zinc-500 mb-1">DESTINATION STATION</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-[#111111] border border-white/10 text-white font-mono text-xs px-3 py-2 rounded focus:outline-none focus:border-[#FF2638]"
                  >
                    <option value="Mumbai (CSMT)">Mumbai CSMT</option>
                    <option value="Hyderabad (HYB)">Hyderabad Decan</option>
                    <option value="Chennai (MAS)">Chennai Central</option>
                  </select>
                </div>
              </div>

              {/* Train Route Diagram */}
              <div className="p-4 rounded-lg bg-[#111111]/80 border border-white/5 mb-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                  <div className="flex items-center gap-1.5 text-white">
                    <MapPin className="w-3.5 h-3.5 text-[#FF2638]" />
                    <span>{origin}</span>
                  </div>
                  <div className="flex-1 mx-4 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#FF2638]" />
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-[#FF2638] via-red-500 to-[#FF2638]" />
                    <div className="w-2 h-2 rounded-full bg-[#FF2638]" />
                  </div>
                  <div className="flex items-center gap-1.5 text-white">
                    <MapPin className="w-3.5 h-3.5 text-[#FF2638]" />
                    <span>{destination}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[11px]">
                  <div
                    onClick={() => setSelectedTrain('EXP-12627')}
                    className={`p-2.5 rounded border cursor-pointer transition-all ${
                      selectedTrain === 'EXP-12627'
                        ? 'border-[#FF2638] bg-[#FF2638]/10 text-white'
                        : 'border-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold">KARNATAKA EXP (12627)</div>
                    <div className="text-[10px] text-zinc-500">DEPARTS 19:20 &bull; FAST</div>
                  </div>

                  <div
                    onClick={() => setSelectedTrain('EXP-20608')}
                    className={`p-2.5 rounded border cursor-pointer transition-all ${
                      selectedTrain === 'EXP-20608'
                        ? 'border-[#FF2638] bg-[#FF2638]/10 text-white'
                        : 'border-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold">VANDE BHARAT (20608)</div>
                    <div className="text-[10px] text-zinc-500">DEPARTS 06:00 &bull; EXPRESS</div>
                  </div>

                  <div
                    onClick={() => setSelectedTrain('EXP-11302')}
                    className={`p-2.5 rounded border cursor-pointer transition-all ${
                      selectedTrain === 'EXP-11302'
                        ? 'border-[#FF2638] bg-[#FF2638]/10 text-white'
                        : 'border-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold">UDYAN EXP (11302)</div>
                    <div className="text-[10px] text-zinc-500">DEPARTS 20:45 &bull; SLEEPER</div>
                  </div>
                </div>
              </div>

              {/* Booking simulation action */}
              <div className="flex items-center justify-between pt-2">
                <div className="font-mono text-xs text-zinc-400">
                  PASSENGER RECORD: <span className="text-white">MANISH RATHOD (ADULT 1)</span>
                </div>

                <button
                  onClick={() => {
                    sound.playSuccess();
                    setBookingConfirmed(!bookingConfirmed);
                  }}
                  className="px-4 py-2 bg-[#FF2638] hover:bg-[#FF003C] text-white font-mono text-xs font-bold rounded transition-all shadow-[0_0_15px_#FF2638] cursor-pointer flex items-center gap-1.5"
                >
                  {bookingConfirmed ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                      BOOKING CONFIRMED (PNR: #YR8924)
                    </>
                  ) : (
                    'CONFIRM SIMULATED TICKET'
                  )}
                </button>
              </div>
            </div>
          ) : (
            /* DataMind Deterministic Workflow Pipeline Simulation */
            <div className="p-5 rounded-xl border border-[#FF2638]/30 bg-[#070707] relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <Workflow className="w-4 h-4 text-[#FF2638]" />
                  <span>DATAMIND // DETERMINISTIC WORKFLOW PIPELINE</span>
                </div>
                <span className="font-mono text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  REPRODUCIBLE RUN: #SEED_42
                </span>
              </div>

              {/* Pipeline Interactive Stages */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 font-mono text-xs">
                {[
                  { id: 1, name: '1. INGESTION', detail: 'Tabular Preprocessing' },
                  { id: 2, name: '2. EXPLORATION', detail: 'Variance & Quantiles' },
                  { id: 3, name: '3. MODEL TRAIN', detail: 'Cross-Validation' },
                  { id: 4, name: '4. EVALUATION', detail: 'Deterministic Metrics' },
                ].map((step) => (
                  <button
                    key={step.id}
                    onClick={() => {
                      sound.playClick();
                      setPipelineStep(step.id);
                    }}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      pipelineStep === step.id
                        ? 'border-[#FF2638] bg-[#FF2638]/15 text-white shadow-[0_0_15px_rgba(255,38,56,0.3)]'
                        : 'border-white/5 bg-[#111111]/70 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold text-[11px] text-[#FF2638]">{step.name}</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">{step.detail}</div>
                  </button>
                ))}
              </div>

              {/* Pipeline Step Output View */}
              <div className="p-4 rounded-lg bg-[#111111] border border-white/5 font-mono text-xs">
                <div className="text-[11px] text-zinc-400 mb-2 flex items-center justify-between">
                  <span>ACTIVE STAGE: STAGE_{pipelineStep}_EXECUTION</span>
                  <span className="text-[#FF2638]">STATUS: DETERMINISTIC_PASS</span>
                </div>

                {pipelineStep === 1 && (
                  <div className="space-y-1 text-zinc-300">
                    <p className="text-emerald-400">&gt; Loaded dataset: {selectedDataset} (14,280 rows, 18 features)</p>
                    <p>&gt; Null values imputed: 0 NaN discovered</p>
                    <p>&gt; Feature normalization: StandardScalar (Mean=0, Std=1)</p>
                  </div>
                )}
                {pipelineStep === 2 && (
                  <div className="space-y-1 text-zinc-300">
                    <p>&gt; Multicollinearity check (VIF &lt; 5.0 across features)</p>
                    <p>&gt; Feature correlation matrix computed: Pearson r=0.88 with target</p>
                    <p className="text-cyan-400">&gt; Luminous tabular grid generated successfully</p>
                  </div>
                )}
                {pipelineStep === 3 && (
                  <div className="space-y-1 text-zinc-300">
                    <p>&gt; K-Fold Stratified Split: 5 folds with static random_state=42</p>
                    <p>&gt; Gradient Boosting Regressor / Classifier checkpoint saved</p>
                    <p className="text-amber-400">&gt; Hyperparameter search completed in 1.42s</p>
                  </div>
                )}
                {pipelineStep === 4 && (
                  <div className="space-y-1 text-zinc-300">
                    <p className="text-emerald-400">&gt; Validation Accuracy: 94.8% | ROC-AUC: 0.962</p>
                    <p>&gt; Reproducibility hash: sha256:7b42f9a9c0...</p>
                    <p>&gt; Report generated: /output/deterministic_report.pdf</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Implemented Features List */}
          <div>
            <div className="font-mono text-xs text-[#FF2638] uppercase tracking-widest mb-3">
              IMPLEMENTED SYSTEM CAPABILITIES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#111111]/70 border border-white/5 font-mono text-xs text-zinc-300"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF2638] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Area */}
          <div>
            <div className="font-mono text-xs text-[#FF2638] uppercase tracking-widest mb-3">
              TECHNOLOGY STACK ARCHITECTURE
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 rounded border border-[#FF2638]/30 bg-[#FF2638]/5 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links Notice & Links */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-[11px] text-zinc-500">
              * Active development repository. Links configured as editable placeholders for Manish Rathod.
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={project.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!project.githubUrl || project.githubUrl === '#') {
                    e.preventDefault();
                    sound.playClick();
                    alert(`Source repository for ${project.title}: Under active staging on GitHub. Link placeholder can be updated in project data.`);
                  }
                }}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 bg-[#111111] hover:border-white text-white font-mono text-xs transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>SOURCE CODE</span>
              </a>

              <button
                onClick={() => {
                  sound.playSuccess();
                  alert(`Project ${project.title} live demo is hosted locally / on developer staging. You can experience the interactive interface directly in this modal!`);
                }}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#FF2638] hover:bg-[#FF003C] text-white font-mono text-xs font-bold transition-all shadow-[0_0_15px_#FF2638] cursor-pointer"
              >
                <span>OPEN DEMO</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
