import React, { useState, useRef, useEffect } from 'react';
import { personalInfo, skillsData, metrics } from '../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, CheckCircle2, ShieldCheck, Blocks } from 'lucide-react';

export default function TerminalConsole({ onCopyEmail }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'V. Kamesh Engineering Kernel [Version 2.4.0-release]\nInitialized OpenJDK 21 Runtime Environment.\nType "help" to view available diagnostic commands or click quick actions below.',
    },
  ]);

  const terminalContentRef = useRef(null);

  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdText) => {
    const rawCmd = (cmdText || inputVal).trim();
    if (!rawCmd) return;

    const lower = rawCmd.toLowerCase();
    const newEntry = { type: 'user', text: `kamesh@workstation:~$ ${rawCmd}` };
    let responseEntry = null;

    if (lower === 'help') {
      responseEntry = {
        type: 'output',
        text: `AVAILABLE COMMANDS:\n  help                 Display this command directory\n  bio                  Show candidate summary & academic details\n  skills               List categorized technical skills & frameworks\n  aegis --audit        Run simulated security audit on Aegis Gateway\n  agrichain --status   Query Binance Smart Chain state & IPFS CIDs\n  smartfinance         Query SmartFinance offline fintech architecture\n  contact              Display email, phone, LinkedIn & GitHub\n  download-resume      Trigger direct download of Kamesh-Resume.pdf\n  clear                Reset console buffer`,
      };
    } else if (lower === 'bio') {
      responseEntry = {
        type: 'output',
        text: `CANDIDATE DOSSIER:\n  Name:       ${personalInfo.name}\n  Degree:     Master of Computer Applications (MCA) - CGPA 8.48\n  Institute:  Sri Venkateswara College of Engineering (2024-2026)\n  Role:       Java Developer (Fresher / Entry-Level)\n  Location:   ${personalInfo.location}\n  Profile:    ${personalInfo.summary}`,
      };
    } else if (lower.startsWith('skills')) {
      const skillsTree = skillsData.map(c => `[${c.category}]\n  ` + c.items.map(i => `${i.name} (${i.level})`).join(', ')).join('\n\n');
      responseEntry = {
        type: 'output',
        text: `TECHNICAL COMPETENCIES:\n\n${skillsTree}`,
      };
    } else if (lower.includes('aegis')) {
      responseEntry = {
        type: 'output',
        text: `[AEGIS GATEWAY SECURITY VERIFICATION]\n  Target:             Military Gateway Comms\n  Runtime:            Java Servlets + JDBC + MySQL\n  Header Policy:      Content-Security-Policy (CSP/JSCSP Enforced)\n  XSS Attack Vectors: 0 Detected (100% Blocked)\n  Test Cases:         15 Passed / 0 Failed (100% Data Integrity)\n  Clearance Protocol: 3-Tier Granular RBAC Active [PASS]`,
      };
    } else if (lower.includes('agrichain')) {
      responseEntry = {
        type: 'output',
        text: `[AGRICHAIN DECENTRALIZED LEDGER QUERY]\n  Network:            Binance Smart Chain (BSC Testnet/Mainnet EVM)\n  Storage:            InterPlanetary File System (IPFS)\n  Stakeholder Tiers:  5 Nodes (Seed, Farmer, Processor, Transit, Retail)\n  Contract State:     0x8B38...884F (Immutable)\n  Verification:       Cryptographic Hash Match [PASS]`,
      };
    } else if (lower.includes('smartfinance') || lower.includes('finance')) {
      responseEntry = {
        type: 'output',
        text: `[SMARTFINANCE OFFLINE PLATFORM QUERY]\n  Title:              SmartFinance – Personal Finance, Kept Like a Ledger\n  Architecture:       100% Client-Side / Offline-First (LocalStorage Engine)\n  Features:           Income/Expense Ledger, Dynamic Budget Alerts, Savings Goals\n  Visualization:      Chart.js Financial Graphs & Dual Theme Engine\n  Live Production:    https://smartfinance-sepia.vercel.app/\n  Spring Boot Sync:   Drop-in REST API Architecture Ready [PASS]`,
      };
    } else if (lower === 'contact') {
      responseEntry = {
        type: 'output',
        text: `COMMUNICATION CHANNELS:\n  Email:    ${personalInfo.email}\n  Phone:    ${personalInfo.formattedPhone}\n  LinkedIn: ${personalInfo.linkedIn}\n  GitHub:   ${personalInfo.gitHub}\n  Location: ${personalInfo.location}`,
      };
    } else if (lower === 'download-resume') {
      responseEntry = {
        type: 'output',
        text: `Initiating download of "${personalInfo.resumePath}"... Check your downloads folder.`,
      };
      // Trigger download
      const link = document.createElement('a');
      link.href = personalInfo.resumePath;
      link.download = 'V_Kamesh_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      responseEntry = {
        type: 'error',
        text: `Command not recognized: "${rawCmd}". Type "help" for a list of valid commands.`,
      };
    }

    setHistory((prev) => [...prev, newEntry, responseEntry]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  const quickPills = [
    'help',
    'bio',
    'skills',
    'aegis --audit',
    'agrichain --status',
    'smartfinance',
    'contact',
    'download-resume',
  ];

  return (
    <section id="terminal" className="py-24 bg-obsidian-950 border-b border-white/10 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-champagne-500/10 border border-champagne-500/30 text-champagne-400 text-xs font-mono tracking-widest uppercase mb-3">
              <span>SECTION 04</span>
              <span>&bull;</span>
              <span>SYSTEM DIAGNOSTICS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Interactive Diagnostic CLI
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-1.5">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded w-fit flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              OPENJDK 21 RUNTIME ACTIVE
            </span>
            <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md text-left md:text-right">
              Query runtime specifications, security audit passes, and candidate credentials in real time.
            </p>
          </div>
        </div>

        {/* Terminal Window Container */}
        <div className="rounded-xl overflow-hidden terminal-window max-w-4xl mx-auto">
          
          {/* Terminal Titlebar */}
          <div className="bg-obsidian-900 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 text-xs font-mono text-slate-400">
                kamesh@workstation: ~/architecture-inspect
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="text-[11px] font-mono text-slate-500 hover:text-slate-300 flex items-center gap-1 transition-colors"
                title="Clear console"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>clear</span>
              </button>
            </div>
          </div>

          {/* Quick command buttons */}
          <div className="px-4 py-2.5 bg-obsidian-950/80 border-b border-white/5 flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none snap-x">
            <span className="text-[10px] font-mono text-slate-500 uppercase flex-shrink-0">
              Quick:
            </span>
            {quickPills.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="snap-start px-2.5 py-1.5 text-[11px] font-mono rounded bg-obsidian-850 hover:bg-obsidian-800 text-champagne-400 hover:text-champagne-300 border border-white/10 whitespace-nowrap transition-colors min-h-[34px] flex items-center"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Output Area */}
          <div 
            ref={terminalContentRef}
            className="p-5 font-mono text-xs text-slate-300 space-y-3 min-h-[300px] max-h-[420px] overflow-y-auto"
          >
            {history.map((entry, idx) => (
              <div key={idx}>
                {entry.type === 'system' && (
                  <div className="text-slate-400 whitespace-pre-wrap leading-relaxed pb-2 border-b border-white/5">
                    {entry.text}
                  </div>
                )}
                {entry.type === 'user' && (
                  <div className="text-champagne-400 font-bold">
                    {entry.text}
                  </div>
                )}
                {entry.type === 'output' && (
                  <div className="text-slate-200 whitespace-pre-wrap leading-relaxed pl-2 border-l border-champagne-500/40">
                    {entry.text}
                  </div>
                )}
                {entry.type === 'error' && (
                  <div className="text-red-400 whitespace-pre-wrap pl-2 border-l border-red-500/40">
                    {entry.text}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Command Input Line */}
          <div className="px-4 py-3 bg-obsidian-900 border-t border-white/10 flex items-center gap-2">
            <span className="text-xs font-mono text-champagne-400 font-bold whitespace-nowrap">
              <span className="hidden sm:inline">kamesh@workstation:</span>$
            </span>
            <input
              id="terminal-cli-input"
              name="terminal-cli-input"
              type="text"
              aria-label="Terminal CLI command input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type command (e.g. 'help', 'skills', 'contact')..."
              className="flex-1 bg-transparent text-xs font-mono text-white focus:outline-none placeholder-slate-600 min-w-0"
            />
            <button
              onClick={() => handleCommand()}
              className="p-2 text-slate-400 hover:text-champagne-400 rounded bg-obsidian-850 border border-white/10 min-w-[36px] min-h-[36px] flex items-center justify-center flex-shrink-0"
              title="Execute command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
