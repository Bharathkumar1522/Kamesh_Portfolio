import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyMetrics from './components/KeyMetrics';
import Projects from './components/Projects';
import SkillsMatrix from './components/SkillsMatrix';
import Trajectory from './components/Trajectory';
import TerminalConsole from './components/TerminalConsole';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import SectionSeparator from './components/SectionSeparator';
import MobileQuickBar from './components/MobileQuickBar';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  const handleCopyEmail = (email) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).catch(() => {
          fallbackCopy(email);
        });
      } else {
        fallbackCopy(email);
      }
    } catch {
      fallbackCopy(email);
    }
    showToast(`Copied ${email} to clipboard!`);
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch {}
    document.body.removeChild(textArea);
  };

  const handleOpenTerminal = () => {
    const el = document.getElementById('terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col selection:bg-champagne-500/20 selection:text-champagne-300 relative">
      <Navbar onOpenTerminal={handleOpenTerminal} />
      
      <main className="flex-1">
        <Hero onCopyEmail={handleCopyEmail} onOpenTerminal={handleOpenTerminal} />
        <KeyMetrics />

        <SectionSeparator 
          number="01" 
          title="Architectural Systems" 
          tag="Aegis Military Gateway, AgriChain & SmartFinance" 
        />
        <Projects />

        <SectionSeparator 
          number="02" 
          title="Technical Competencies" 
          tag="Enterprise Java Stack & Web3 Protocols" 
        />
        <SkillsMatrix />

        <SectionSeparator 
          number="03" 
          title="Trajectory & Pedigree" 
          tag="Corporate Internships & Academic Record (8.48 CGPA)" 
        />
        <Trajectory />

        <SectionSeparator 
          number="04" 
          title="Diagnostic Terminal" 
          tag="Interactive OpenJDK 21 System Console" 
        />
        <TerminalConsole onCopyEmail={handleCopyEmail} />

        <SectionSeparator 
          number="05" 
          title="Direct Communications" 
          tag="Candidate Inquiries & Hiring Portal" 
        />
        <Contact onCopyEmail={handleCopyEmail} />
      </main>

      <Footer />
      <MobileQuickBar />
      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}
