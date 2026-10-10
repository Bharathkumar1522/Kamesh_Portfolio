import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  Copy, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  Blocks,
  Terminal,
  Mail
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onCopyEmail, onOpenTerminal }) {
  return (
    <section className="relative pt-24 pb-14 lg:pt-28 lg:pb-16 overflow-hidden bg-grid-architectural">
      {/* Subtle architectural gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Dossier & Headline */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Architectural Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-obsidian-900 border border-white/10 w-fit mb-3.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">
                SYSTEMS ARCHITECTURE &bull; JAVA DEVELOPER &bull; MCA '26
              </span>
            </div>


            {/* Main Headline with tall, spacious typography */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.18] mb-3.5">
              Engineering Secure{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne-400 via-champagne-500 to-amber-200">
                Java Backends
              </span>{' '}
              & Distributed Systems.
            </h1>

            {/* Sub-headline description - concise and spacious */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mb-4 font-normal">
              Detail-oriented Java Developer (MCA CGPA 8.48) with verified experience architecting military-grade secure communication platforms (Aegis Gateway) and decentralized smart contracts on Binance Smart Chain.
            </p>

            {/* Technical Highlights Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-5">
              {[
                { label: 'Java OOP / Servlets / JDBC', icon: Cpu },
                { label: 'REST API Design', icon: Terminal },
                { label: 'Military-Grade CSP Defense', icon: ShieldCheck },
                { label: 'Binance Smart Chain & IPFS', icon: Blocks },
                { label: 'MySQL Normalization', icon: Cpu },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-obsidian-850 border border-white/10 text-xs font-mono text-slate-300 hover:border-champagne-500/40 hover:text-white transition-colors"
                >
                  <badge.icon className="w-3.5 h-3.5 text-champagne-400" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons - Mobile Touch Friendly */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href="#systems"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-bold tracking-wider text-obsidian-950 bg-champagne-500 hover:bg-champagne-400 rounded transition-all duration-200 shadow-md shadow-champagne-500/10 group min-h-[44px]"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
                <a
                  href={personalInfo.resumePath}
                  download="V_Kamesh_Resume.pdf"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-mono font-medium tracking-wider text-slate-200 bg-obsidian-900 hover:bg-obsidian-850 border border-white/15 hover:border-champagne-500/40 rounded transition-all duration-200 min-h-[44px] text-center"
                >
                  <FileDown className="w-3.5 h-3.5 text-champagne-400" />
                  <span>RESUME.PDF</span>
                </a>

                <button
                  onClick={() => onCopyEmail(personalInfo.email)}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-mono text-slate-300 hover:text-white bg-obsidian-900 border border-white/10 hover:border-white/20 rounded transition-colors min-h-[44px] text-center truncate"
                  title="Copy email to clipboard"
                >
                  <Copy className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0" />
                  <span className="truncate">COPY EMAIL</span>
                </button>
              </div>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center gap-5 mt-6 pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-champagne-400" />
                <span>Nagalapuram, AP, India</span>
              </div>
              <a
                href={personalInfo.gitHub}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Executive Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              
              {/* Architectural Frame Corners */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-champagne-500/60 z-20"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-champagne-500/60 z-20"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-champagne-500/60 z-20"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-champagne-500/60 z-20"></div>

              {/* Portrait Container */}
              <div className="relative rounded-lg overflow-hidden bg-obsidian-900 border border-white/15 p-2 shadow-2xl">
                <div className="relative aspect-square sm:aspect-[4/5] rounded overflow-hidden bg-obsidian-950">
                  <img
                    src={personalInfo.portraitPath}
                    alt="V. Kamesh - Java Developer in suit"
                    width="400"
                    height="500"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.01] hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Subtle vignette shadow at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80"></div>

                  {/* Top status tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded bg-obsidian-950/80 backdrop-blur-md border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-200">
                      STATUS: ACTIVE &bull; ENTRY-LEVEL READY
                    </span>
                  </div>

                  {/* Bottom Technical Telemetry Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded bg-obsidian-900/90 backdrop-blur-md border border-white/15">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 pb-2 border-b border-white/10 mb-2">
                      <span className="text-champagne-400 font-semibold">V. KAMESH</span>
                      <span className="text-slate-400">CGPA 8.48</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-400">
                      <div>
                        <span className="text-slate-500 block">CORE RUNTIME</span>
                        <span className="text-slate-200 font-medium">Java SE / Servlets</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">SPECIALIZATION</span>
                        <span className="text-slate-200 font-medium">Security & Distributed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-bar below portrait */}
                <div className="mt-2 pt-2 px-1 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>ID: VK-0818-AP</span>
                  <span>13.3980° N, 79.7915° E</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
