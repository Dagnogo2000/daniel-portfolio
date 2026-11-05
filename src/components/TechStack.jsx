import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStackData } from '../data/portfolioData';

export default function TechStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = techStackData[activeIndex];

  return (
    <section className="relative py-28 px-6 bg-[#080d16] overflow-hidden">
      {/* Glow orb */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-blue-600/8 rounded-full blur-[160px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-2"
            >
              COMPÉTENCES TECHNIQUES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl sm:text-7xl font-black leading-none"
            >
              <span className="text-white">TECH </span>
              <span className="text-zinc-700">STACK.</span>
            </motion.h2>
          </div>
          <p className="text-zinc-500 text-xs sm:text-sm font-mono max-w-xs">
            Technologies maîtrisées pour la conception, le développement et le déploiement cloud.
          </p>
        </div>

        {/* 2-Column Tabs + Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Category Tabs (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-2">
            {techStackData.map((cat, i) => {
              const isActive = i === activeIndex;
              return (
                <motion.button
                  key={cat.code}
                  onClick={() => setActiveIndex(i)}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className={`flex items-center justify-between px-5 py-4 rounded-xl text-left transition-all duration-200 border ${
                    isActive
                      ? 'bg-zinc-900/90 border-blue-500/50 text-white shadow-lg shadow-blue-500/10'
                      : 'bg-zinc-950/40 border-zinc-900 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-blue-400' : 'text-zinc-600'}`}>
                      {cat.code}
                    </span>
                    <span className={`font-heading text-sm sm:text-base font-bold ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                      {cat.category}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'text-blue-400 translate-x-1' : 'text-zinc-700'
                    }`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              );
            })}
          </div>

          {/* Right Tools Cards (7 cols) */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {active.tools.map((tool, j) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: j * 0.05 }}
                    className="group bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-zinc-800/80 hover:border-blue-500/40 rounded-xl p-4 flex items-center gap-4 transition-all duration-200 shadow-md hover:-translate-y-0.5"
                  >
                    {/* Logo container */}
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-zinc-950 rounded-xl p-2.5 border border-zinc-800 group-hover:border-zinc-700">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-full h-full object-contain filter group-hover:scale-110 transition-transform"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<span class="text-blue-400 font-black text-sm">${tool.name[0]}</span>`;
                        }}
                      />
                    </div>

                    {/* Meta */}
                    <div className="min-w-0 flex-1">
                      <p className="font-heading text-white font-bold text-sm truncate group-hover:text-blue-300 transition-colors">
                        {tool.name}
                      </p>
                      <p className="text-zinc-500 text-xs mt-0.5 leading-snug line-clamp-2">
                        {tool.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
