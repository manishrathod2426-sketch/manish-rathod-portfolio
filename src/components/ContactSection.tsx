import React, { useState } from 'react';
import { sound } from '../utils/sound';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Terminal,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
  Copy,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your identity/name.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must contain at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate terminal transmission sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      sound.playSuccess();
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('manishrathod2426@gmail.com');
    setCopiedEmail(true);
    sound.playSuccess();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#070707] border-t border-white/5 overflow-hidden">
      {/* Red ambient orbital glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FF2638]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FF2638] tracking-widest uppercase mb-3">
            <span className="w-8 h-[1px] bg-[#FF2638]" />
            <span>05 // DIRECT CONNECTION</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <h2 className="font-['Orbitron'] text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
              HAVE AN IDEA? <br />
              <span className="text-[#FF2638] text-glow-red">LET'S BUILD IT.</span>
            </h2>

            <p className="text-zinc-400 text-sm max-w-md font-light">
              I'm always interested in learning, collaborating, and building meaningful digital experiences. Let's connect and turn ideas into something real.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0d0f] border border-white/10 box-glow-red">
              <div className="font-mono text-xs text-[#FF2638] uppercase tracking-widest mb-4 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                TRANSMISSION CHANNELS
              </div>

              <div className="space-y-4 font-mono text-xs">
                {/* LinkedIn Profile */}
                <a
                  href="https://www.linkedin.com/in/manish-rathod-0b374b330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="flex items-center justify-between p-4 rounded-xl border border-[#FF2638]/30 bg-[#111111] hover:border-[#FF2638] hover:bg-[#FF2638]/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FF2638]/10 border border-[#FF2638]/30 flex items-center justify-center text-[#FF2638] group-hover:bg-[#FF2638] group-hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white font-bold tracking-wider">LINKEDIN</div>
                      <div className="text-[11px] text-zinc-500">manish-rathod-0b374b330</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#FF2638] transition-colors" />
                </a>

                {/* Email Channel */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#111111]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FF2638]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white font-bold tracking-wider">EMAIL DIRECT</div>
                      <div className="text-[11px] text-zinc-400">manishrathod2426@gmail.com</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-2 rounded border border-white/10 hover:border-[#FF2638] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {copiedEmail && (
                  <div className="text-emerald-400 font-mono text-[11px] text-right">
                    ✓ Email address copied to clipboard!
                  </div>
                )}

                {/* GitHub Profile */}
                <a
                  href="https://github.com/manishrathod"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-[#111111] hover:border-white/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white font-bold tracking-wider">GITHUB</div>
                      <div className="text-[11px] text-zinc-500">github.com/manishrathod</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </a>

                {/* Physical Base */}
                <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-[#070707]">
                  <MapPin className="w-5 h-5 text-[#FF2638] shrink-0" />
                  <div>
                    <div className="text-zinc-500 text-[10px] uppercase">DEVELOPER COORDINATES</div>
                    <div className="text-white font-semibold">KARNATAKA, INDIA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#0d0d0f] border border-[#FF2638]/30 box-glow-red relative">
              <div className="font-mono text-xs text-[#FF2638] uppercase tracking-widest mb-2">
                TRANSMISSION FORM // DIRECT PROTOCOL
              </div>
              <h3 className="font-['Orbitron'] text-xl sm:text-2xl font-bold text-white mb-6">
                SEND A MESSAGE
              </h3>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#111111] border border-emerald-500/40 text-center font-mono space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-['Orbitron'] text-lg font-bold text-white">
                    TRANSMISSION DISPATCHED
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed max-w-md mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your message has been simulated through the terminal and logged. I'll get back to you at{' '}
                    <span className="text-[#FF2638]">{formData.email}</span> soon!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-mono rounded cursor-pointer transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  <div>
                    <label className="block text-zinc-400 mb-1.5 uppercase tracking-wider">
                      YOUR NAME / CALLSIGN *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] transition-all"
                    />
                    {errors.name && <p className="text-[#FF2638] text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1.5 uppercase tracking-wider">
                      CONTACT EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] transition-all"
                    />
                    {errors.email && <p className="text-[#FF2638] text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1.5 uppercase tracking-wider">
                      TRANSMISSION MESSAGE *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, collaboration idea, or inquiry..."
                      className="w-full px-4 py-3 rounded-lg bg-[#111111] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF2638] focus:ring-1 focus:ring-[#FF2638] transition-all resize-none"
                    />
                    {errors.message && <p className="text-[#FF2638] text-[11px] mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={() => sound.playHover()}
                    className="w-full py-4 bg-[#FF2638] hover:bg-[#FF003C] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_#FF2638] clip-sci-fi cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>DISPATCHING SIGNAL...</span>
                    ) : (
                      <>
                        <span>TRANSMIT MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
