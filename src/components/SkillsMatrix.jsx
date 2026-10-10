import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  ShieldCheck, 
  Database, 
  Wrench, 
  Search, 
  Sparkles,
  Layers
} from 'lucide-react';

const categoryIcons = {
  "Languages & Core": Code2,
  "Enterprise Java & Backend": Server,
  "Security & Distributed Systems": ShieldCheck,
  "Databases & Storage": Database,
  "Toolchains & Practices": Wrench,
};

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const allCategories = ['ALL', ...skillsData.map(c => c.category)];

  // Flatten and filter skills
  const filteredSkills = skillsData.flatMap(cat => 
    cat.items.map(item => ({ ...item, category: cat.category }))
  ).filter(skill => {
    const matchesCategory = activeCategory === 'ALL' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 bg-obsidian-900 bg-dot-pattern border-b border-white/10 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-champagne-500/10 border border-champagne-500/30 text-champagne-400 text-xs font-mono tracking-widest uppercase mb-3">
              <span>SECTION 02</span>
              <span>&bull;</span>
              <span>TECHNICAL MATRIX</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Engineering Competencies
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-1.5">
            <span className="text-xs font-mono text-champagne-400 bg-champagne-500/10 border border-champagne-500/20 px-2.5 py-0.5 rounded w-fit">
              {filteredSkills.length} SKILLS ACTIVE IN VIEW
            </span>
            <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md text-left md:text-right">
              Rigorous foundations in Java backend engineering, transactional persistence, and cryptographic access systems.
            </p>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          {/* Category Tabs with mobile touch swipe */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 snap-x">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`snap-start px-3.5 py-1.5 text-xs font-mono rounded border whitespace-nowrap transition-all duration-200 min-h-[38px] flex items-center ${
                  activeCategory === cat
                    ? 'bg-champagne-500 text-obsidian-950 font-bold border-champagne-400 shadow-sm'
                    : 'bg-obsidian-850 text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="skill-search"
              name="skill-search"
              type="text"
              aria-label="Search technical skills"
              placeholder="Search skills (e.g. Java, JDBC, CSP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-obsidian-950 border border-white/10 rounded focus:outline-none focus:border-champagne-500/60 text-slate-200 placeholder-slate-500"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => {
            const CatIcon = categoryIcons[skill.category] || Layers;
            return (
              <div
                key={index}
                className="p-5 rounded-lg bg-obsidian-850/90 border border-white/10 hover:border-champagne-500/30 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <CatIcon className="w-3.5 h-3.5 text-champagne-400" />
                      <span>{skill.category}</span>
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        skill.level === 'Advanced'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : skill.level === 'Proficient'
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                          : 'bg-slate-500/10 text-slate-300 border-slate-500/20'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-champagne-300 transition-colors">
                    {skill.name}
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>VERIFIED VIA PROJECTS</span>
                  <span className="text-champagne-500/60">&bull;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Result */}
        {filteredSkills.length === 0 && (
          <div className="py-16 text-center rounded-lg border border-dashed border-white/15 bg-obsidian-950">
            <p className="text-sm font-mono text-slate-400">
              No matching skills found for query "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('ALL'); }}
              className="mt-3 text-xs font-mono text-champagne-400 underline hover:text-champagne-300"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
