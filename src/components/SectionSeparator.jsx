import React from 'react';

export default function SectionSeparator({ number, title, tag }) {
  return (
    <div className="relative w-full py-6 bg-obsidian-950/80 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Chapter marker */}
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-7 h-7 rounded bg-champagne-500/10 border border-champagne-500/30 text-champagne-400 font-mono text-xs font-bold">
              {number}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                {title}
              </span>
              {tag && (
                <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400">
                  &bull; {tag}
                </span>
              )}
            </div>
          </div>

          {/* Center line with architectural crosshairs */}
          <div className="flex-1 mx-4 hidden md:flex items-center">
            <div className="h-px w-full bg-gradient-to-r from-champagne-500/30 via-white/10 to-transparent"></div>
            <span className="font-mono text-xs text-champagne-500/40 px-2">+</span>
          </div>

          {/* Right: Architectural badge */}
          <div className="text-[11px] font-mono text-champagne-400/80 bg-obsidian-900 px-2.5 py-1 rounded border border-white/10 uppercase tracking-wider flex-shrink-0">
            VK-PORTFOLIO // SECTION {number}
          </div>

        </div>
      </div>
    </div>
  );
}
