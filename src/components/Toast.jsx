import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-obsidian-850/95 border border-champagne-500/40 text-slate-100 rounded-lg shadow-2xl backdrop-blur-md animate-slide-up">
      <CheckCircle2 className="w-5 h-5 text-champagne-400 flex-shrink-0" />
      <span className="text-sm font-medium tracking-wide">{message}</span>
    </div>
  );
}
