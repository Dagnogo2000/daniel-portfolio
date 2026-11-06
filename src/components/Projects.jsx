import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

// Interactive Device Mockups (Phones like Rice Aliman's AgroRisk & Chic)
function PhoneMockup({ project }) {
  if (project.id === 'chic-restaurant') {
    return (
      <div className="relative w-full max-w-sm sm:max-w-md h-80 sm:h-[400px] flex items-center justify-center">
        {/* Floating QR Code Badge (Exact as in user upload) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -left-3 sm:left-0 top-1/2 -translate-y-1/2 z-30 bg-white p-2 sm:p-2.5 rounded-2xl shadow-2xl border border-zinc-200 flex flex-col items-center gap-1 -rotate-6 hover:rotate-0 transition-transform cursor-pointer"
        >
          {/* QR Code SVG */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-950 rounded-lg p-1.5 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white" stroke="currentColor">
              <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
              <rect x="5" y="5" width="3" height="3" fill="currentColor" />
              <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
              <rect x="16" y="5" width="3" height="3" fill="currentColor" />
              <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
              <rect x="5" y="16" width="3" height="3" fill="currentColor" />
              <path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 20h3v1h-3zM20 14h1v3h-1z" fill="currentColor" />
            </svg>
          </div>
          <span className="text-[9px] font-mono font-black text-zinc-900 tracking-wider uppercase">
            Scannez
          </span>
        </motion.div>

        {/* Left Phone: Restaurant Table & Menu (Chic.) */}
        <div className="absolute left-6 sm:left-10 z-10 w-44 sm:w-52 h-72 sm:h-88 bg-zinc-950 rounded-[34px] p-2.5 shadow-2xl border-[3.5px] border-zinc-800 -rotate-6 hover:rotate-0 transition-transform duration-300">
          <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2" />
          <div className="w-full h-[calc(100%-20px)] bg-[#0c121e] rounded-[24px] p-3 text-white flex flex-col justify-between border border-zinc-800">
            <div>
              <div className="text-center pb-2 border-b border-zinc-800/80 mb-2.5">
                <p className="text-[9px] text-zinc-400 font-mono">Table 4 · scan</p>
                <h4 className="font-heading font-black text-xs text-white">La carte</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
                  <span className="text-[10px] font-medium text-zinc-200">Attiéké poisson</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400">3 500</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
                  <span className="text-[10px] font-medium text-zinc-200">Jus bissap</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400">1 000</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
                  <span className="text-[10px] font-medium text-zinc-200">Alloco</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400">1 500</span>
                </div>
              </div>
            </div>
            <div className="w-full py-1.5 rounded-lg bg-emerald-500 text-zinc-950 text-[9px] font-black uppercase text-center tracking-wider">
              Commander en direct ✓
            </div>
          </div>
        </div>

        {/* Right Phone: Brand & Kitchen Pilot */}
        <div className="absolute right-2 sm:right-6 z-20 w-44 sm:w-52 h-72 sm:h-88 bg-zinc-950 rounded-[34px] p-2.5 shadow-2xl border-[3.5px] border-zinc-800 rotate-6 hover:rotate-0 transition-transform duration-300">
          <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2" />
          <div className="w-full h-[calc(100%-20px)] bg-gradient-to-b from-zinc-900 via-[#0a161f] to-zinc-950 rounded-[24px] p-4 text-white flex flex-col justify-between border border-zinc-800">
            <div className="text-center pt-8">
              <span className="font-heading font-black text-2xl text-white tracking-tight">
                chic<span className="text-emerald-400">.</span>
              </span>
              <p className="text-[9px] font-mono text-emerald-400/90 mt-1 uppercase tracking-widest font-bold">
                SaaS Restauration
              </p>
              <p className="text-[10px] text-zinc-300 mt-4 leading-relaxed font-medium">
                Vos tables commandent.<br />Vous pilotez.
              </p>
            </div>
            <div className="space-y-1.5 text-center">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-[9px] font-bold text-emerald-400">1 QR par table</span>
              </div>
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <span className="text-[9px] font-bold text-blue-400">Cuisine en direct</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dual Phones for BNI Loans (Login phone + Loans list phone)
  if (project.id === 'bni-pret') {
    return (
      <div className="relative w-full max-w-sm sm:max-w-md h-80 sm:h-[400px] flex items-center justify-center">
        {/* Left Phone: BNI Demande de Prêt */}
        <div className="absolute left-4 sm:left-8 z-10 w-44 sm:w-52 h-72 sm:h-88 bg-zinc-950 rounded-[34px] p-2.5 shadow-2xl border-[3.5px] border-zinc-800 -rotate-6 hover:rotate-0 transition-transform duration-300 overflow-hidden">
          <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2" />
          <div className="w-full h-[calc(100%-20px)] rounded-[24px] overflow-hidden bg-white relative">
            <img
              src="/projects/bni-pret.png"
              alt="BNI Gestion Prêts"
              className="w-full h-full object-cover object-left-top"
            />
            <div className="absolute top-1.5 left-2 bg-emerald-700 text-white text-[7px] font-bold px-1.5 py-0.5 rounded">
              BNI Prêts
            </div>
          </div>
        </div>

        {/* Right Phone: BNI Auth Login */}
        <div className="absolute right-2 sm:right-6 z-20 w-44 sm:w-52 h-72 sm:h-88 bg-zinc-950 rounded-[34px] p-2.5 shadow-2xl border-[3.5px] border-zinc-800 rotate-6 hover:rotate-0 transition-transform duration-300 overflow-hidden">
          <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2" />
          <div className="w-full h-[calc(100%-20px)] rounded-[24px] overflow-hidden bg-zinc-900 relative">
            <img
              src="/projects/bni-login.jpg"
              alt="BNI Authentification"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-zinc-950/90 text-center py-1 rounded text-[8px] font-mono text-emerald-400 font-bold">
              Portail Bancaire Sécurisé
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dual Phones for BLOK Voice Copilot
  if (project.id === 'blok-voice') {
    return (
      <div className="relative w-full max-w-sm sm:max-w-md h-80 sm:h-[400px] flex items-center justify-center">
        {/* Left Phone: Voice Call & Mic */}
        <div className="absolute left-4 sm:left-8 z-10 w-44 sm:w-52 h-72 sm:h-88 bg-zinc-950 rounded-[34px] p-2.5 shadow-2xl border-[3.5px] border-zinc-800 -rotate-6 hover:rotate-0 transition-transform duration-300 overflow-hidden">
          <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2" />
          <div className="w-full h-[calc(100%-20px)] bg-gradient-to-b from-blue-900/40 via-zinc-900 to-black rounded-[24px] p-3 text-white flex flex-col justify-between border border-zinc-800">
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-blue-400">BLOK Copilot</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 mx-auto my-3 flex items-center justify-center">
                <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <p className="text-[10px] font-bold text-center text-white">« 24 sacs de ciment et sable fin »</p>
              <p className="text-[8px] text-zinc-400 text-center mt-1">Transcription temps réel...</p>
            </div>
            <div className="p-2 rounded-lg bg-orange-600 text-white text-[8px] font-bold text-center uppercase tracking-wider">
              Commande vocale active
            </div>
          </div>
        </div>

        {/* Right Phone: Order & Quotation screen */}
        <div className="absolute right-2 sm:right-6 z-20 w-44 sm:w-52 h-72 sm:h-88 bg-zinc-950 rounded-[34px] p-2.5 shadow-2xl border-[3.5px] border-zinc-800 rotate-6 hover:rotate-0 transition-transform duration-300 overflow-hidden">
          <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2" />
          <div className="w-full h-[calc(100%-20px)] rounded-[24px] overflow-hidden bg-white relative">
            <img
              src="/projects/blok-voice.jpg"
              alt="BLOK Voice Devis"
              className="w-full h-full object-cover object-right-bottom"
            />
            <div className="absolute top-1.5 right-2 bg-orange-600 text-white text-[7px] font-bold px-1.5 py-0.5 rounded">
              Devis BTP
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dual Phones for Espace MaFamille
  if (project.id === 'mafamille') {
    return (
      <div className="relative w-full max-w-sm sm:max-w-md h-80 sm:h-[400px] flex items-center justify-center">
        {/* Left Phone: Dashboard Solde Caisse */}
        <div className="absolute left-4 sm:left-8 z-10 w-44 sm:w-52 h-72 sm:h-88 bg-zinc-950 rounded-[34px] p-2.5 shadow-2xl border-[3.5px] border-zinc-800 -rotate-6 hover:rotate-0 transition-transform duration-300 overflow-hidden">
          <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2" />
          <div className="w-full h-[calc(100%-20px)] rounded-[24px] overflow-hidden bg-white relative">
            <img
              src="/projects/mafamille-dashboard.jpg"
              alt="Espace MaFamille Dashboard"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-zinc-900/90 text-center py-1 rounded text-[8px] font-mono text-emerald-400 font-bold">
              Solde: 10 000 FCFA
            </div>
          </div>
        </div>

        {/* Right Phone: Login Screen */}
        <div className="absolute right-2 sm:right-6 z-20 w-44 sm:w-52 h-72 sm:h-88 bg-zinc-950 rounded-[34px] p-2.5 shadow-2xl border-[3.5px] border-zinc-800 rotate-6 hover:rotate-0 transition-transform duration-300 overflow-hidden">
          <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2" />
          <div className="w-full h-[calc(100%-20px)] rounded-[24px] overflow-hidden bg-zinc-900 relative">
            <img
              src="/projects/mafamille-login.png"
              alt="Espace MaFamille Connexion"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-1.5 left-2 bg-blue-600 text-white text-[7px] font-bold px-1.5 py-0.5 rounded">
              reunion-famille.vercel.app
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback for others
  return (
    <div className="relative w-full max-w-sm sm:max-w-md h-80 sm:h-[400px] flex items-center justify-center">
      <div className="w-48 sm:w-56 h-76 sm:h-88 bg-zinc-950 rounded-[34px] p-2.5 shadow-2xl border-[3.5px] border-zinc-800 rotate-[-2deg]">
        <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2" />
        <div className="w-full h-[calc(100%-20px)] bg-gradient-to-b from-zinc-900 to-black rounded-[24px] p-4 text-white flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-black text-xl mb-3">
            {project.title.charAt(0)}
          </div>
          <h4 className="font-heading font-bold text-xs">{project.title}</h4>
          <p className="text-[9px] font-mono text-zinc-400 mt-1">{project.category}</p>
        </div>
      </div>
    </div>
  );
}

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

              {/* Right Column (6 cols): Smartphone Showcase (Rice Aliman style) */}
              <div className="lg:col-span-6 flex items-center justify-center py-2 relative">
                <PhoneMockup project={project} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
