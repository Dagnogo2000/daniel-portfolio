import React, { useState } from 'react';
import { ArrowUpRight, Trophy } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'Hackathon & IA', label: 'Hackathon & IA' },
    { id: 'Full Stack', label: 'Full Stack' },
    { id: 'Backend', label: 'Backend' },
    { id: 'Architecture & UML', label: 'Architecture & UML' },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projets" className="py-16 border-t border-[#19243a]">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">
          Projets
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          Ce que j'ai construit
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-8">
          Projets de hackathons, applications de production et travaux de modélisation. Cliquez sur un projet pour voir les détails.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                filter === cat.id
                  ? 'bg-sky-500 text-slate-950 font-bold'
                  : 'bg-[#111a2e] text-slate-400 hover:text-white border border-[#1e2c47]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer border hover:-translate-y-1 ${
                  isFeatured
                    ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-br from-[#131c30] to-[#111a2e] border-amber-500/30 hover:border-amber-400'
                    : 'bg-[#111a2e] border-[#1e2c47] hover:border-sky-400/60'
                }`}
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 ${
                        isFeatured
                          ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                          : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                      }`}
                    >
                      {isFeatured && <Trophy size={13} />}
                      <span>{project.badge}</span>
                    </span>
                    <ArrowUpRight size={17} className="text-slate-500 group-hover:text-sky-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.shortDesc}
                  </p>

                  {/* Highlights if featured */}
                  {isFeatured && (
                    <ul className="mb-6 space-y-1.5 text-sm text-slate-300">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-amber-400 font-bold">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#19243a]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#090d16] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

