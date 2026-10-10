import React, { useState, useEffect } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';

export default function ThemeControls({ compact = false }) {
  const [mode, setMode] = useState('dark');
  const [accent, setAccent] = useState('gold');
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    try {
      const savedMode = localStorage.getItem('vk_theme_mode') || 'dark';
      const savedAccent = localStorage.getItem('vk_theme_accent') || 'gold';
      setMode(savedMode);
      setAccent(savedAccent);
      applyTheme(savedMode, savedAccent);
    } catch {
      // Fallback
    }
  }, []);

  const applyTheme = (targetMode, targetAccent) => {
    const root = document.documentElement;
    if (targetMode === 'light') {
      root.classList.remove('dark');
      root.classList.add('light-mode');
      root.setAttribute('data-theme', 'light');
      const meta = document.getElementById('theme-color-meta');
      if (meta) meta.setAttribute('content', '#f8fafc');
    } else {
      root.classList.add('dark');
      root.classList.remove('light-mode');
      root.setAttribute('data-theme', 'dark');
      const meta = document.getElementById('theme-color-meta');
      if (meta) meta.setAttribute('content', '#07080b');
    }
    root.setAttribute('data-accent', targetAccent);
  };

  const toggleMode = () => {
    const nextMode = mode === 'dark' ? 'light' : 'dark';
    setMode(nextMode);
    localStorage.setItem('vk_theme_mode', nextMode);
    applyTheme(nextMode, accent);
  };

  const selectAccent = (newAccent) => {
    setAccent(newAccent);
    localStorage.setItem('vk_theme_accent', newAccent);
    applyTheme(mode, newAccent);
    setPaletteOpen(false);
  };

  const accents = [
    { id: 'gold', name: 'Champagne Gold', color: '#dfc28d' },
    { id: 'emerald', name: 'Java Emerald', color: '#10b981' },
    { id: 'cyan', name: 'Electric Cyan', color: '#06b6d4' },
  ];

  return (
    <div className="relative inline-flex items-center gap-1.5 p-1 rounded-md bg-obsidian-850 border border-white/10 text-xs font-mono">
      {/* Light / Dark Mode Toggle */}
      <button
        onClick={toggleMode}
        className="p-1.5 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-200 flex items-center justify-center"
        title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        aria-label="Toggle display theme mode"
      >
        {mode === 'dark' ? (
          <Sun className="w-3.5 h-3.5 text-champagne-400 hover:rotate-45 transition-transform" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-champagne-500 hover:-rotate-12 transition-transform" />
        )}
      </button>

      {/* Accent Palette Selector */}
      <div className="relative">
        <button
          onClick={() => setPaletteOpen(!paletteOpen)}
          className="p-1.5 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
          title="Change Color Accent Palette"
          aria-label="Open color palette selector"
        >
          <span 
            className="w-2.5 h-2.5 rounded-full ring-1 ring-white/20 transition-transform group-hover:scale-110" 
            style={{ 
              backgroundColor: accents.find(a => a.id === accent)?.color || '#dfc28d' 
            }}
          />
        </button>

        {paletteOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setPaletteOpen(false)}
            />
            <div className="absolute right-0 top-full mt-2 z-50 p-2 rounded-lg bg-obsidian-900 border border-white/15 shadow-2xl min-w-[170px] space-y-1 backdrop-blur-xl">
              <div className="px-2 py-1 text-[10px] font-mono text-slate-400 uppercase tracking-wider border-b border-white/10 mb-1">
                Accent Theme
              </div>
              {accents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => selectAccent(item.id)}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded text-left text-xs transition-colors ${
                    accent === item.id 
                      ? 'bg-white/10 text-white font-bold' 
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  {accent === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-400"></span>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
