import React, { useState } from 'react';
import { experienceData, educationData, certificationsData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2, Building, BookOpen } from 'lucide-react';

export default function Trajectory() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="trajectory" className="py-24 bg-obsidian-950 border-b border-white/10 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300 text-xs font-mono tracking-widest uppercase mb-3">
              <span>03</span>
              <span>&bull;</span>
              <span>CAREER & EDUCATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Experience & Academic Record
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-1">
            <span className="text-xs font-mono text-slate-400">
              2 Corporate Internships &bull; 8.48 CGPA MCA
            </span>
            <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md text-left md:text-right">
              Verified corporate internships in enterprise Java and high-distinction MCA computer science background.
            </p>
          </div>
        </div>

        {/* Dual Track Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Track: Industry Internships */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-champagne-400" />
                <h3 className="font-display text-xl font-bold text-white tracking-wide">
                  Corporate Internships
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                2 PROGRAMS
              </span>
            </div>

            <div className="space-y-6 relative pl-6 border-l border-white/15">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline node */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-obsidian-950 border-2 border-champagne-400 group-hover:bg-champagne-400 transition-colors"></div>

                  <div className="p-6 rounded-lg bg-obsidian-900 border border-white/10 hover:border-champagne-500/40 transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-champagne-400 font-semibold">
                        {exp.company}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-bold text-white mb-3">
                      {exp.title}
                    </h4>

                    <ul className="space-y-2 mb-4">
                      {exp.details.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {exp.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-obsidian-850 text-slate-300 border border-white/10"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Track: Academic Pedigree */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
              <GraduationCap className="w-5 h-5 text-champagne-400" />
              <h3 className="font-display text-xl font-bold text-white tracking-wide">
                Academic Pedigree & Degrees
              </h3>
            </div>

            <div className="space-y-6 relative pl-6 border-l border-white/15">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline node */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-obsidian-950 border-2 border-champagne-400 group-hover:bg-champagne-400 transition-colors"></div>

                  <div className="p-6 rounded-lg bg-obsidian-900 border border-white/10 hover:border-champagne-500/40 transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-slate-400">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-bold text-white mb-1">
                      {edu.degree}
                    </h4>

                    <div className="text-xs font-mono text-champagne-400 mb-3 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-500" />
                      <span>{edu.institution}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Certifications Strip */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-champagne-400" />
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
              Verified Certifications & Training Programs
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificationsData.map((cert, index) => (
              <div
                key={index}
                className="p-5 rounded-lg bg-obsidian-900 border border-white/10 flex items-start gap-4"
              >
                <div className="p-2.5 rounded bg-obsidian-850 border border-white/10 text-champagne-400 flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-champagne-400 block mb-0.5">
                    {cert.issuer} &bull; {cert.type}
                  </span>
                  <h5 className="font-display text-base font-bold text-white">
                    {cert.title}
                  </h5>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {cert.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
