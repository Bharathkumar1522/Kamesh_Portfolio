import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Phone, MessageCircle, FileDown, Send } from 'lucide-react';

export default function MobileQuickBar() {
  return (
    <aside 
      aria-label="Quick contact actions"
      className="fixed bottom-3 left-3 right-3 sm:hidden z-30 flex items-center justify-around p-1.5 rounded-2xl bg-obsidian-900/95 backdrop-blur-xl border border-champagne-500/30 shadow-[0_12px_32px_rgba(0,0,0,0.85)]"
    >
      {/* 1. Quick Call */}
      <a
        href={`tel:${personalInfo.phone}`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-300 hover:text-white active:bg-white/10 transition-colors min-h-[44px]"
        aria-label="Direct Phone Call to Kamesh"
      >
        <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
        <span className="text-[10px] font-mono tracking-tight font-medium">Call</span>
      </a>

      <div className="w-px h-6 bg-white/10"></div>

      {/* 2. Direct WhatsApp */}
      <a
        href={`https://wa.me/91${personalInfo.phone}?text=Hi%20Kamesh,%20I%20reviewed%20your%20Java%20developer%20portfolio.`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-300 hover:text-white active:bg-white/10 transition-colors min-h-[44px]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
        <span className="text-[10px] font-mono tracking-tight font-medium">WhatsApp</span>
      </a>

      <div className="w-px h-6 bg-white/10"></div>

      {/* 3. Download Resume */}
      <a
        href={personalInfo.resumePath}
        download="V_Kamesh_Resume.pdf"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-300 hover:text-white active:bg-white/10 transition-colors min-h-[44px]"
        aria-label="Download Kamesh Resume PDF"
      >
        <FileDown className="w-4 h-4 text-champagne-400 mb-0.5" />
        <span className="text-[10px] font-mono tracking-tight font-medium">Resume</span>
      </a>

      <div className="w-px h-6 bg-white/10"></div>

      {/* 4. Inquire / Contact Form */}
      <a
        href="#contact"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-champagne-500/15 border border-champagne-500/40 text-champagne-300 active:bg-champagne-500/30 transition-colors min-h-[44px]"
        aria-label="Jump to Contact Form"
      >
        <Send className="w-4 h-4 text-champagne-400 mb-0.5" />
        <span className="text-[10px] font-mono tracking-tight font-bold">Inquire</span>
      </a>
    </aside>
  );
}
