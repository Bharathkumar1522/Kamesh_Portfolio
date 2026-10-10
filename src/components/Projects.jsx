import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Blocks, 
  Wallet,
  CheckCircle2, 
  ExternalLink, 
  Lock, 
  ArrowRight
} from 'lucide-react';

export default function Projects() {
  const [activeProjectTab, setActiveProjectTab] = useState('aegis-gateway');
  
  // Interactive states for Aegis Gateway simulator
  const [clearanceTier, setClearanceTier] = useState(2); // 0: Field, 1: Intel, 2: Command
  
  // Interactive states for AgriChain simulator
  const [supplyChainStep, setSupplyChainStep] = useState(2); // 0..4

  // Interactive states for SmartFinance simulator
  const [financeBudgetLimit, setFinanceBudgetLimit] = useState(60000); // 40k, 60k, 80k

  const aegis = projectsData.find(p => p.id === 'aegis-gateway');
  const agrichain = projectsData.find(p => p.id === 'agrichain');
  const smartfinance = projectsData.find(p => p.id === 'smartfinance');

  return (
    <section id="systems" className="py-20 sm:py-24 bg-obsidian-950 relative border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 text-xs font-mono tracking-widest uppercase mb-3">
              <span>01</span>
              <span>&bull;</span>
              <span>PRODUCTION ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Featured Systems
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-1">
            <span className="text-xs font-mono text-slate-400">
              3 Verified Production Deployments
            </span>
            <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md text-left md:text-right">
              Java backend security, decentralized smart contracts, and offline-first finance.
            </p>
          </div>
        </div>

        {/* System Selector Tabs - 3 Systems (Clean Minimalist Monogram/Tags) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* System 01: Aegis Gateway */}
          <button
            onClick={() => setActiveProjectTab('aegis-gateway')}
            className={`p-5 sm:p-6 text-left rounded-lg border transition-all duration-300 relative group ${
              activeProjectTab === 'aegis-gateway'
                ? 'bg-obsidian-900 border-champagne-500/50 shadow-lg'
                : 'bg-obsidian-900/40 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-champagne-400 transition-colors">
                01 // DEFENSE COMMS
              </span>
              <ShieldCheck className="w-4 h-4 text-champagne-400" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1.5">
              Aegis Gateway
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
              Java military comms with JSCSP XSS mitigation and 3+ officer clearance tiers.
            </p>
            {activeProjectTab === 'aegis-gateway' && (
              <div className="absolute -bottom-px left-6 right-6 h-[2px] bg-champagne-400"></div>
            )}
          </button>

          {/* System 02: AgriChain */}
          <button
            onClick={() => setActiveProjectTab('agrichain')}
            className={`p-5 sm:p-6 text-left rounded-lg border transition-all duration-300 relative group ${
              activeProjectTab === 'agrichain'
                ? 'bg-obsidian-900 border-champagne-500/50 shadow-lg'
                : 'bg-obsidian-900/40 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-champagne-400 transition-colors">
                02 // DECENTRALIZED SCM
              </span>
              <Blocks className="w-4 h-4 text-champagne-400" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1.5">
              AgriChain Platform
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
              Decentralized supply chain connecting 5 stakeholder tiers via Binance Smart Chain & IPFS.
            </p>
            {activeProjectTab === 'agrichain' && (
              <div className="absolute -bottom-px left-6 right-6 h-[2px] bg-champagne-400"></div>
            )}
          </button>

          {/* System 03: SmartFinance */}
          <button
            onClick={() => setActiveProjectTab('smartfinance')}
            className={`p-5 sm:p-6 text-left rounded-lg border transition-all duration-300 relative group ${
              activeProjectTab === 'smartfinance'
                ? 'bg-obsidian-900 border-champagne-500/50 shadow-lg'
                : 'bg-obsidian-900/40 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-champagne-400 transition-colors">
                03 // OFFLINE FINTECH
              </span>
              <Wallet className="w-4 h-4 text-champagne-400" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1.5">
              SmartFinance
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
              Offline-first personal finance platform with localStorage persistence and Chart.js analytics.
            </p>
            {activeProjectTab === 'smartfinance' && (
              <div className="absolute -bottom-px left-6 right-6 h-[2px] bg-champagne-400"></div>
            )}
          </button>
        </div>

        {/* Detailed System View - Aegis Gateway */}
        {activeProjectTab === 'aegis-gateway' && aegis && (
          <div className="space-y-8 animate-fade-in">
            <div className="rounded-xl border border-white/15 bg-obsidian-900 p-6 sm:p-8 lg:p-10 shadow-2xl">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {aegis.organization} &bull; {aegis.role}
                    </span>
                    <span className="text-slate-500 text-xs font-mono">&bull;</span>
                    <span className="text-xs font-mono text-slate-400">{aegis.timeline}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 leading-snug tracking-tight">
                    {aegis.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>ENTERPRISE SECURITY</span>
                </div>
              </div>

              {/* Summary and 3 Punchy Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {aegis.summary}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {aegis.highlights.map((item, idx) => {
                      const [title, ...rest] = item.split(': ');
                      return (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">
                            <strong className="text-white font-semibold">{title}:</strong>{' '}
                            {rest.join(': ')}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-xs font-mono text-slate-400 block mb-2">TECHNOLOGY STACK:</span>
                    <div className="flex flex-wrap gap-2">
                      {aegis.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-mono rounded bg-obsidian-850 border border-white/10 text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Clearance Simulator */}
                <div className="lg:col-span-5 bg-obsidian-950 rounded-lg border border-white/10 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <Lock className="w-3.5 h-3.5 text-champagne-400" />
                        <span>LIVE RBAC CLEARANCE SIMULATOR</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">AEGIS PROTOCOL</span>
                    </div>

                    <p className="text-xs text-slate-400 mb-4">
                      Select clearance tier to inspect simulated permission boundaries and CSP headers:
                    </p>

                    {/* Tier selector */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-5">
                      {[
                        { label: 'Operative', tier: 'L1' },
                        { label: 'Intelligence', tier: 'L2' },
                        { label: 'Commander', tier: 'L3' }
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => setClearanceTier(idx)}
                          className={`py-2 px-1 sm:px-2 text-[10px] sm:text-[11px] font-mono rounded border text-center transition-all min-h-[44px] flex flex-col items-center justify-center ${
                            clearanceTier === idx
                              ? 'bg-champagne-500/20 border-champagne-500 text-champagne-400 font-bold shadow-sm'
                              : 'bg-obsidian-900 border-white/10 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <span className="truncate w-full">{item.label}</span>
                          <span className="text-[9px] opacity-75 font-normal">({item.tier})</span>
                        </button>
                      ))}
                    </div>

                    {/* High-Contrast Output Console */}
                    <div className="simulator-console p-3.5 rounded-lg font-mono text-[11px] space-y-2.5">
                      <div className="flex items-center justify-between text-slate-400">
                        <span>CLEARANCE STATUS:</span>
                        <span className="text-emerald-400 font-bold">
                          {clearanceTier === 0 && 'TIER-1 (TACTICAL)'}
                          {clearanceTier === 1 && 'TIER-2 (RECON INTEL)'}
                          {clearanceTier === 2 && 'TIER-3 (STRATEGIC COMMAND)'}
                        </span>
                      </div>
                      <div className="text-slate-300">
                        <span className="text-slate-500">POLICY: </span>
                        {aegis.architecturalSpecs.clearanceTiers[clearanceTier].permission}
                      </div>
                      <div className="pt-2 border-t border-white/10 text-[10px] text-slate-400 space-y-1">
                        <div><span className="text-slate-500">CSP HEADER: </span>script-src 'self' 'nonce-aegis'; frame-ancestors 'none'</div>
                        <div><span className="text-slate-500">XSS DEFENSE: </span><span className="text-emerald-400 font-bold">BLOCKED (0 injection vectors)</span></div>
                        <div><span className="text-slate-500">TEST SUITE: </span><span className="text-champagne-400 font-bold">15/15 Passed (0.042s)</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Database: MySQL (PreparedStatements)</span>
                    <span className="text-emerald-400">&bull; SQLi Immune</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Detailed System View - AgriChain */}
        {activeProjectTab === 'agrichain' && agrichain && (
          <div className="space-y-8 animate-fade-in">
            <div className="rounded-xl border border-white/15 bg-obsidian-900 p-6 sm:p-8 lg:p-10 shadow-2xl">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {agrichain.organization} &bull; {agrichain.role}
                    </span>
                    <span className="text-slate-500 text-xs font-mono">&bull;</span>
                    <span className="text-xs font-mono text-slate-400">{agrichain.timeline}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 leading-snug tracking-tight">
                    {agrichain.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>BSC EVM DEPLOYED</span>
                </div>
              </div>

              {/* Summary and 3 Punchy Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {agrichain.summary}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {agrichain.highlights.map((item, idx) => {
                      const [title, ...rest] = item.split(': ');
                      return (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">
                            <strong className="text-white font-semibold">{title}:</strong>{' '}
                            {rest.join(': ')}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-xs font-mono text-slate-400 block mb-2">DECENTRALIZED STACK:</span>
                    <div className="flex flex-wrap gap-2">
                      {agrichain.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-mono rounded bg-obsidian-850 border border-white/10 text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive 5-Tier Supply Chain Visualizer */}
                <div className="lg:col-span-5 bg-obsidian-950 rounded-lg border border-white/10 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <Blocks className="w-3.5 h-3.5 text-champagne-400" />
                        <span>5-TIER PROVENANCE PIPELINE</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">BSC EVM SMART CONTRACT</span>
                    </div>

                    <p className="text-xs text-slate-400 mb-4">
                      Step through stakeholder nodes to view automated state transitions & IPFS CID hashes:
                    </p>

                    {/* Stepper buttons */}
                    <div className="flex items-center gap-1.5 mb-5 overflow-x-auto pb-1.5 scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0">
                      {['1. Seed', '2. Farmer', '3. Mill', '4. Transit', '5. Retail'].map((stName, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSupplyChainStep(idx)}
                          className={`flex-shrink-0 sm:flex-1 py-2 px-3 sm:px-2 text-[10px] sm:text-[11px] font-mono rounded border text-center whitespace-nowrap transition-all min-h-[38px] ${
                            supplyChainStep === idx
                              ? 'bg-champagne-500/20 border-champagne-500 text-champagne-400 font-bold shadow-sm'
                              : 'bg-obsidian-900 border-white/10 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {stName}
                        </button>
                      ))}
                    </div>

                    {/* High-Contrast Stepper Output */}
                    <div className="simulator-console p-3.5 rounded-lg font-mono text-[11px] space-y-2.5">
                      <div className="flex items-center justify-between text-slate-400">
                        <span>ACTIVE STAKEHOLDER:</span>
                        <span className="text-champagne-400 font-bold">
                          {agrichain.architecturalSpecs.stakeholderTiers[supplyChainStep].role}
                        </span>
                      </div>
                      <div className="text-slate-300">
                        <span className="text-slate-500">ACTION: </span>
                        {agrichain.architecturalSpecs.stakeholderTiers[supplyChainStep].action}
                      </div>
                      <div className="pt-2 border-t border-white/10 text-[10px] text-slate-400 space-y-1">
                        <div><span className="text-slate-500">IPFS CID: </span><span className="text-slate-300">QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco</span></div>
                        <div><span className="text-slate-500">CONTRACT: </span><span className="text-amber-400">0x8B38...884F (Binance Smart Chain)</span></div>
                        <div><span className="text-slate-500">INTEGRITY: </span><span className="text-emerald-400 font-bold">100% Cryptographic Verification</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Protocol: Web3.py + Web3.js</span>
                    <span className="text-emerald-400">&bull; Tamper-Proof</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Detailed System View - SmartFinance */}
        {activeProjectTab === 'smartfinance' && smartfinance && (
          <div className="space-y-8 animate-fade-in">
            <div className="rounded-xl border border-white/15 bg-obsidian-900 p-6 sm:p-8 lg:p-10 shadow-2xl">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {smartfinance.organization} &bull; {smartfinance.role}
                    </span>
                    <span className="text-slate-500 text-xs font-mono">&bull;</span>
                    <span className="text-xs font-mono text-slate-400">{smartfinance.timeline}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 leading-snug tracking-tight">
                    {smartfinance.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={smartfinance.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-bold bg-champagne-500 hover:bg-champagne-400 text-obsidian-950 transition-colors shadow-sm"
                  >
                    <span>LAUNCH LIVE APP</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Summary and 3 Punchy Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {smartfinance.summary}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {smartfinance.highlights.map((item, idx) => {
                      const [title, ...rest] = item.split(': ');
                      return (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">
                            <strong className="text-white font-semibold">{title}:</strong>{' '}
                            {rest.join(': ')}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-xs font-mono text-slate-400 block mb-2">OFFLINE FINTECH STACK:</span>
                    <div className="flex flex-wrap gap-2">
                      {smartfinance.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-mono rounded bg-obsidian-850 border border-white/10 text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Ledger & Budget Simulator */}
                <div className="lg:col-span-5 bg-obsidian-950 rounded-lg border border-white/10 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <Wallet className="w-3.5 h-3.5 text-champagne-400" />
                        <span>LIVE BUDGET & LEDGER SIMULATOR</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">LOCALSTORAGE PERSISTED</span>
                    </div>

                    <p className="text-xs text-slate-400 mb-4">
                      Test dynamic threshold calculations against simulated monthly expenses (₹34,000 total):
                    </p>

                    {/* Monthly budget target toggle */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-5">
                      {[
                        { label: 'Strict', amount: 40000, tag: '₹40k' },
                        { label: 'Standard', amount: 60000, tag: '₹60k' },
                        { label: 'Flexible', amount: 80000, tag: '₹80k' }
                      ].map((tier, idx) => (
                        <button
                          key={idx}
                          onClick={() => setFinanceBudgetLimit(tier.amount)}
                          className={`py-2 px-1 text-[10px] sm:text-[11px] font-mono rounded border text-center transition-all min-h-[44px] flex flex-col items-center justify-center ${
                            financeBudgetLimit === tier.amount
                              ? 'bg-champagne-500/20 border-champagne-500 text-champagne-400 font-bold shadow-sm'
                              : 'bg-obsidian-900 border-white/10 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <span>{tier.label}</span>
                          <span className="text-[9px] opacity-80">({tier.tag})</span>
                        </button>
                      ))}
                    </div>

                    {/* High-Contrast Simulated ledger metrics calculation */}
                    {(() => {
                      const totalExpenses = 34000;
                      const percentage = Math.round((totalExpenses / financeBudgetLimit) * 100);
                      const isOver = percentage >= 100;
                      const isWarn = percentage >= 80 && !isOver;

                      return (
                        <div className="simulator-console p-3.5 rounded-lg font-mono text-[11px] space-y-2.5">
                          <div className="flex items-center justify-between text-slate-400">
                            <span>BUDGET LIMIT:</span>
                            <span className="text-white font-bold">₹{financeBudgetLimit.toLocaleString('en-IN')}</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-400">
                            <span>TOTAL EXPENSES:</span>
                            <span className="text-amber-400 font-bold">₹{totalExpenses.toLocaleString('en-IN')}</span>
                          </div>
                          
                          {/* Progress track */}
                          <div className="space-y-1 pt-1">
                            <div className="flex justify-between text-[10px]">
                              <span className="text-slate-500">UTILIZATION:</span>
                              <span className={isOver ? 'text-rose-400 font-bold' : isWarn ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold'}>
                                {percentage}% ({isOver ? 'EXCEEDED' : isWarn ? 'NEAR LIMIT' : 'UNDER BUDGET'})
                              </span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-obsidian-850 overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-300 ${
                                  isOver ? 'bg-rose-500' : isWarn ? 'bg-amber-500' : 'bg-emerald-500'
                                }`}
                                style={{ width: `${Math.min(percentage, 100)}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="pt-2 border-t border-white/10 text-[10px] text-slate-400 space-y-1">
                            <div><span className="text-slate-500">OFFLINE ENGINE: </span><span className="text-emerald-400 font-bold">Active (0ms local latency)</span></div>
                            <div><span className="text-slate-500">LIVE INSTANCE: </span><a href="https://smartfinance-sepia.vercel.app/" target="_blank" rel="noreferrer" className="text-champagne-400 underline font-medium">smartfinance-sepia.vercel.app</a></div>
                            <div><span className="text-slate-500">API ARCHITECTURE: </span><span className="text-slate-300">Ready for Spring Boot + MySQL</span></div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Host: Vercel Production</span>
                    <a
                      href="https://smartfinance-sepia.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-champagne-400 hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
