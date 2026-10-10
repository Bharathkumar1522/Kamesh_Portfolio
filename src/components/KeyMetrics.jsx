import React from 'react';
import { metrics } from '../data/portfolioData';
import { Award, ShieldAlert, Network, CheckCircle } from 'lucide-react';

const icons = [Award, ShieldAlert, Network, CheckCircle];

export default function KeyMetrics() {
  return (
    <section className="border-y border-champagne-500/20 bg-obsidian-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Subtle section label */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5 text-[11px] font-mono text-slate-400">
          <span className="text-champagne-400 font-semibold tracking-wider uppercase">
            [ EXECUTIVE METRICS // VERIFIED CREDENTIALS ]
          </span>
          <span className="hidden sm:inline-block text-slate-500">
            SRI VENKATESWARA COLLEGE OF ENG. &bull; GRADTWIN SERVICES
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {metrics.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="flex flex-col justify-between p-3.5 sm:p-0 lg:px-6 rounded-lg sm:rounded-none bg-obsidian-900/40 sm:bg-transparent border border-white/5 sm:border-0 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-[9px] sm:text-[11px] font-mono tracking-wider uppercase text-slate-400 leading-tight">
                      {item.category}
                    </span>
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-champagne-400/80 group-hover:text-champagne-400 transition-colors flex-shrink-0" />
                  </div>
                  <div className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-0.5 sm:mb-1 group-hover:text-champagne-300 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200 line-clamp-1">
                    {item.label}
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-slate-400 mt-1.5 sm:mt-2 line-clamp-2">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
