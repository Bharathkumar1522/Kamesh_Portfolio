import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Clock, MapPin, ShieldCheck, Heart } from 'lucide-react';
import ThemeControls from './ThemeControls';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in IST (India Standard Time)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 border-t border-white/10 text-slate-400 pt-12 pb-24 sm:pb-12 relative font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-obsidian-850 border border-white/10 flex items-center justify-center font-bold text-champagne-400">
              VK
            </div>
            <div>
              <div className="font-display font-bold text-white tracking-wide">
                {personalInfo.name}
              </div>
              <div className="text-[11px] text-slate-500">
                Java Backend & Distributed Systems Developer
              </div>
            </div>
          </div>

          {/* Time & Telemetry */}
          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-champagne-400" />
              <span>Nagalapuram, AP (India)</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>IST: {time || 'Loading...'}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Hire</span>
            </div>
          </div>

          {/* Controls & Back to top */}
          <div className="flex items-center gap-3">
            <ThemeControls />
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-obsidian-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-champagne-400" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} V. Kamesh. Crafted with editorial precision.
          </div>
          <div className="flex items-center gap-4">
            <span>Stack: React + Vite + Tailwind + JetBrains Mono</span>
            <span>&bull;</span>
            <span className="text-slate-400">No generic AI tropes</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
