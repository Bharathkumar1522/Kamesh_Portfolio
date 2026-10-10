import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileDown, Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeControls from './ThemeControls';

export default function Navbar({ onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Systems', href: '#systems', index: '01' },
    { name: 'Skills Matrix', href: '#skills', index: '02' },
    { name: 'Trajectory', href: '#trajectory', index: '03' },
    { name: 'Terminal', href: '#terminal', index: '04', isTerminal: true },
    { name: 'Contact', href: '#contact', index: '05' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-transform duration-200"
          >
            <div className="w-10 h-10 rounded-md bg-obsidian-850 border border-white/15 flex items-center justify-center font-mono font-bold text-champagne-400 group-hover:border-champagne-500/50 transition-colors">
              VK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm tracking-wider text-slate-100 group-hover:text-champagne-400 transition-colors">
                  V. KAMESH
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                  MCA '26
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>JAVA DEVELOPER</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.isTerminal && onOpenTerminal) {
                    onOpenTerminal();
                  }
                }}
                className="group flex items-center gap-1.5 text-xs font-mono tracking-wider text-slate-300 hover:text-white transition-colors"
              >
                <span className="text-[10px] text-champagne-500/70 group-hover:text-champagne-400">
                  {link.index}.
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Actions & Theme Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeControls />

            <a
              href={personalInfo.resumePath}
              download="V_Kamesh_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium tracking-wider text-slate-200 bg-obsidian-850 hover:bg-obsidian-800 border border-white/10 hover:border-champagne-500/40 rounded transition-all duration-200"
            >
              <FileDown className="w-3.5 h-3.5 text-champagne-400" />
              <span>RESUME.PDF</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium tracking-wide text-obsidian-950 bg-champagne-500 hover:bg-champagne-400 rounded transition-all duration-200 font-mono shadow-sm shadow-champagne-500/10"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions: Theme Switcher & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeControls compact={true} />
            <a
              href={personalInfo.resumePath}
              download="V_Kamesh_Resume.pdf"
              className="p-2 text-slate-300 hover:text-white border border-white/10 rounded bg-obsidian-850"
              title="Download Resume"
            >
              <FileDown className="w-4 h-4 text-champagne-400" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white border border-white/10 rounded bg-obsidian-850 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-obsidian-900 border border-white/10 rounded-lg shadow-xl animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-sm font-mono text-slate-300 hover:text-champagne-400 border-b border-white/5"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-champagne-500/60 text-xs">{link.index}.</span>
                    <span>{link.name}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-xs font-mono font-semibold tracking-wider text-obsidian-950 bg-champagne-500 rounded"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
