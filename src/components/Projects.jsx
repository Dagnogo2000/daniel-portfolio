import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

const categories = ['Tous', 'Full Stack', 'Backend', 'Data & IA'];

export default function Projects({ onSelect }) {
  const [filter, setFilter] = useState('Tous');

  const filtered = filter === 'Tous'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section className="relative py-28 px-6 bg-[#080d16] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-2"
            >
              PROJETS & RÉALISATIONS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl font-black text-white tracking-tight"
            >
              Solutions déployées<span className="text-blue-500">.</span>
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5 }}
                onClick={() => onSelect(project)}
                className="group cursor-pointer bg-gradient-to-b from-zinc-900/70 to-zinc-950/90 border border-zinc-800/80 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 uppercase tracking-wide">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-2.5 group-hover:text-blue-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-850/60 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-800/70 text-zinc-300 border border-zinc-750"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 group-hover:text-blue-400 transition-colors">
                    <span>Explorer le projet</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
