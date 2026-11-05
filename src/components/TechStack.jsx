import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStackData } from '../data/portfolioData';

export default function TechStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = techStackData[activeIndex];

  return (
    <section className="relative py-24 px-6 bg-[#080d16] overflow-hidden">
      {/* BG orb */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/8 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-6xl md:text-7xl font-black leading-none">
            <span className="text-white">TECH </span>
            <span className="text-zinc-700">STACK.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-500 text-sm mb-16 max-w-sm"
        >
          Les technologies que j'utilise pour concevoir, développer et déployer.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Left: Category tabs */}
          <div className="md:col-span-2 flex flex-col gap-1">
            {techStackData.map((cat, i) => (
              <motion.button
                key={cat.code}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`flex items-center justify-between px-4 py-4 text-left transition-all duration-200 ${
                  i === activeIndex ? 'cat-tab-active' : 'cat-tab'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-xs ${i === activeIndex ? 'text-blue-400' : 'text-zinc-600'}`}>
                    {cat.code}
                  </span>
                  <span className={`text-sm font-semibold tracking-wide ${i === activeIndex ? 'text-white' : 'text-zinc-500'}`}>
                    {cat.category}
                  </span>
                </div>
                <svg
                  className={`w-3 h-3 transition-colors ${i === activeIndex ? 'text-blue-400' : 'text-zinc-700'}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                </svg>
              </motion.button>
            ))}
          </div>

          {/* Right: Tool cards */}
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {active.tools.map((tool, j) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: j * 0.07 }}
                    className="tech-card bg-zinc-900/50 backdrop-blur-sm rounded-xl px-5 py-4 flex items-center gap-4 cursor-default"
                  >
                    {/* Logo */}
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-white rounded-lg p-1.5">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<span class="text-zinc-800 font-black text-sm">${tool.name[0]}</span>`;
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="min-w-0">
                      <p className="text-white font-bold text-sm leading-tight truncate">{tool.name}</p>
                      <p className="text-zinc-500 text-xs mt-0.5 leading-tight">{tool.role}</p>
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

