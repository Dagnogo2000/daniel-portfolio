import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projectsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projets" className="relative py-28 px-6 bg-[#080d16] overflow-hidden">
      {/* Background ambient blur */}
      <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] bg-blue-600/8 rounded-full blur-[160px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        {/* Top Header & Navigation (Rice Aliman exact layout) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          {/* Main Title */}
          <div>
            <h2 className="font-heading text-5xl sm:text-7xl font-black tracking-tight leading-none">
              <span className="text-white">MES </span>
              <span className="text-zinc-700">PROJETS.</span>
            </h2>
          </div>

          {/* Project Tabs & Arrows (Top Right) */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-5 sm:gap-6">
              {projectsData.map((p, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={p.id}
                    onClick={() => setCurrentIndex(idx)}
                    className="relative pb-2 text-xs sm:text-sm font-heading font-bold tracking-wide transition-all whitespace-nowrap"
                  >
                    <span className={isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}>
                      {p.shortName || p.title}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeProjectUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Arrows ← → */}
            <div className="flex items-center gap-2 pl-2 border-l border-zinc-800">
              <button
                onClick={handlePrev}
                aria-label="Projet précédent"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Projet suivant"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Project Presentation Showcase Card (White / Light contrast card like Rice Aliman) */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl text-zinc-900 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden"
            >
              {/* Left Column (6 cols): Project details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono font-semibold text-zinc-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-zinc-950 mb-4 leading-[1.1] tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Metadata Row: Année & Technologies */}
                  <div className="pt-6 border-t border-zinc-200 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-400 uppercase tracking-wider font-semibold">Année</span>
                      <span className="text-zinc-900 font-bold">{project.year || '2026'}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onSelect(project)}
                        className="px-6 py-3 rounded-full bg-zinc-950 hover:bg-blue-600 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
                      >
                        <span>Détails & Architecture</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>

                      <a
                        href="https://github.com/Dagnogo2000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-heading font-semibold text-xs tracking-wider transition-colors"
                      >
                        Code source (GitHub)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (6 cols): Device Mockup Showcase */}
              <div className="lg:col-span-6 flex justify-center items-center py-4 relative">
                {project.image ? (
                  /* Custom uploaded project screenshot */
                  <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-zinc-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ) : (
                  /* Elegant Device Mockup (Double Smartphone / Dashboard - exact Rice Aliman style) */
                  <div className="relative w-full max-w-sm sm:max-w-md h-72 sm:h-96 flex items-center justify-center">
                    {/* Device 1: Primary smartphone frame */}
                    <div className="absolute -left-2 sm:left-4 z-10 w-44 sm:w-52 h-72 sm:h-88 bg-zinc-950 rounded-[32px] p-2.5 shadow-2xl border-4 border-zinc-850 rotate-[-4deg] transition-transform hover:rotate-0 duration-300">
                      {/* Notch / Dynamic Island */}
                      <div className="w-16 h-3.5 bg-black rounded-full mx-auto mb-2" />
                      {/* Screen content */}
                      <div className="w-full h-[calc(100%-24px)] bg-gradient-to-b from-blue-50 to-white rounded-[22px] p-3 overflow-hidden flex flex-col justify-between border border-zinc-100">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[9px] font-black font-heading text-blue-600">
                              {project.shortName}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          </div>
                          <div className="w-full h-16 bg-blue-600/10 rounded-lg p-2 mb-2 flex flex-col justify-center">
                            <p className="text-[10px] font-bold text-zinc-800 leading-tight">
                              {project.badge.split('·')[0]}
                            </p>
                            <p className="text-[8px] text-zinc-500 mt-0.5">Interface Sécurisée</p>
                          </div>
                          <div className="space-y-1.5">
                            <div className="w-full h-5 bg-zinc-100 rounded flex items-center px-2 text-[8px] text-zinc-600 font-mono">
                              Simulation & Calcul
                            </div>
                            <div className="w-full h-5 bg-zinc-100 rounded flex items-center px-2 text-[8px] text-zinc-600 font-mono">
                              Validation Multi-acteurs
                            </div>
                            <div className="w-3/4 h-5 bg-zinc-100 rounded flex items-center px-2 text-[8px] text-zinc-600 font-mono">
                              Traçabilité Audit
                            </div>
                          </div>
                        </div>
                        <div className="w-full py-1.5 rounded bg-blue-600 text-white text-[8px] font-bold text-center">
                          Action confirmée ✓
                        </div>
                      </div>
                    </div>

                    {/* Device 2: Secondary smartphone frame tilted */}
                    <div className="absolute right-0 sm:right-4 z-20 w-44 sm:w-52 h-72 sm:h-88 bg-zinc-950 rounded-[32px] p-2.5 shadow-2xl border-4 border-zinc-850 rotate-[6deg] transition-transform hover:rotate-0 duration-300">
                      {/* Notch / Dynamic Island */}
                      <div className="w-16 h-3.5 bg-black rounded-full mx-auto mb-2" />
                      {/* Screen content */}
                      <div className="w-full h-[calc(100%-24px)] bg-gradient-to-b from-zinc-900 to-black rounded-[22px] p-3 text-white flex flex-col justify-between border border-zinc-800">
                        <div className="text-center pt-6">
                          <div className="w-10 h-10 rounded-xl bg-blue-600 mx-auto mb-2 flex items-center justify-center font-black text-lg">
                            {project.title.charAt(0)}
                          </div>
                          <h4 className="font-heading font-bold text-xs tracking-wide">
                            {project.title}
                          </h4>
                          <p className="text-[9px] text-blue-400 font-mono mt-1">
                            {project.category}
                          </p>
                        </div>
                        <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-center">
                          <p className="text-[8px] text-zinc-400 font-mono">
                            Capture / Démo à venir
                          </p>
                          <p className="text-[7px] text-emerald-400 mt-0.5">
                            ● Prêt pour vos captures
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
