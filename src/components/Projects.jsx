import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

const categories = ['Tous', 'Full Stack', 'Backend', 'Data & Backend', 'Architecture & UML'];

export default function Projects({ onSelect }) {
  const [filter, setFilter] = useState('Tous');

  const filtered = filter === 'Tous'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section className="relative py-24 px-6 bg-[#080d16] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-600/6 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-6xl md:text-7xl font-black leading-none">
            <span className="text-white">PROJETS</span>
            <span className="text-zinc-700">.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-500 text-sm mb-10 max-w-sm"
        >
          Applications conçues et déployées avec soin.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                onClick={() => onSelect(project)}
                className="group cursor-pointer bg-zinc-900/50 border border-zinc-800/60 rounded-2xl p-6 hover:border-blue-600/40 transition-all duration-300"
              >
                {/* Badge */}
                {project.badge && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded-full mb-4">
                    {project.badge}
                  </span>
                )}

                <h3 className="text-white font-bold text-base mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold text-blue-400/80 bg-blue-600/10 border border-blue-600/20 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-5 flex items-center gap-1 text-zinc-600 group-hover:text-blue-400 transition-colors">
                  <span className="text-xs font-bold tracking-wider uppercase">Voir plus</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
