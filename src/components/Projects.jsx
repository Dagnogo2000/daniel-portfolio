import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedScreen, setSelectedScreen] = useState('primary'); // 'primary' | 'secondary'
  const project = projectsData[currentIndex];

  const handlePrev = () => {
    setSelectedScreen('primary');
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedScreen('primary');
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const currentImage = selectedScreen === 'secondary' && project.secondaryImage
    ? project.secondaryImage
    : project.image;

  return (
    <section id="projets" className="relative py-28 px-6 bg-[#080d16] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[170px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

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

          {/* Project Tabs & Arrows */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-4 sm:gap-6">
              {projectsData.map((p, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedScreen('primary');
                      setCurrentIndex(idx);
                    }}
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
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Projet suivant"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Project Presentation Showcase Card (White/Light high-contrast card like Rice Aliman) */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl text-zinc-900 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden"
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
                  <h3 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-zinc-950 mb-4 leading-[1.15] tracking-tight">
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
                      <span className="text-zinc-400 uppercase tracking-wider font-semibold">Année de réalisation</span>
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

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-1.5"
                        >
                          <span>Visiter le site en direct</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}

                      <a
                        href="https://github.com/Dagnogo2000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-heading font-semibold text-xs tracking-wider transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (6 cols): Real Screenshot Showcase inside a Browser/Device Frame */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center py-2 relative">
                {currentImage ? (
                  <div className="w-full flex flex-col items-center gap-3">
                    {/* Screen Switcher (if project has secondaryImage) */}
                    {project.secondaryImage && (
                      <div className="flex items-center gap-1.5 bg-zinc-100 p-1 rounded-xl self-end">
                        <button
                          onClick={() => setSelectedScreen('primary')}
                          className={`px-3 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                            selectedScreen === 'primary'
                              ? 'bg-white text-zinc-900 shadow-sm'
                              : 'text-zinc-500 hover:text-zinc-900'
                          }`}
                        >
                          Écran Principal
                        </button>
                        <button
                          onClick={() => setSelectedScreen('secondary')}
                          className={`px-3 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                            selectedScreen === 'secondary'
                              ? 'bg-white text-zinc-900 shadow-sm'
                              : 'text-zinc-500 hover:text-zinc-900'
                          }`}
                        >
                          Page Connexion
                        </button>
                      </div>
                    )}

                    {/* Browser Mockup Window */}
                    <div className="w-full rounded-2xl overflow-hidden border border-zinc-250 shadow-2xl bg-zinc-950 group">
                      {/* Window header */}
                      <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                          <span className="ml-3 text-[11px] font-mono text-zinc-400 truncate max-w-[200px]">
                            {project.liveUrl || (project.id === 'bni-pret' ? 'pret-interne.apps.bni' : 'localhost:5000')}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          Live UI
                        </span>
                      </div>

                      {/* Actual Screenshot with Zoom on hover */}
                      <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden cursor-pointer" onClick={() => onSelect(project)}>
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImage}
                            src={currentImage}
                            alt={project.title}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                          />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs font-mono font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                            Agrandir les détails 🔍
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Elegant fallback mockup for projects without images */
                  <div className="w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-950 p-6 text-white text-center">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 mx-auto mb-4 flex items-center justify-center font-black text-xl">
                      {project.title.charAt(0)}
                    </div>
                    <h4 className="font-heading font-bold text-base mb-1">{project.title}</h4>
                    <p className="text-zinc-400 text-xs font-mono mb-4">{project.category}</p>
                    <span className="inline-block text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
                      Documentation & Code sur GitHub
                    </span>
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
