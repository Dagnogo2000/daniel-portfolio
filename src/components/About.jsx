import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export default function About() {
  const [copied, setCopied] = useState(false);
  const [activePhoto, setActivePhoto] = useState('cravate'); // 'cravate' | 'hackathon'

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#080d16]">
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left column (7 cols) - Bio & Contact */}
          <div className="lg:col-span-7">
            <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400">
                À PROPOS
              </span>
              <div className="h-px w-10 bg-blue-500/40" />
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Master 2 BIHAR · ESATIC
              </span>
            </motion.div>

            <motion.h2 {...fadeUp(0.1)} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
              Concevoir des architectures{' '}
              <span className="font-serif italic font-normal text-blue-400">robustes</span>
              <br />
              et créatrices de <span className="text-white underline decoration-blue-500 decoration-4 underline-offset-4">valeur</span>.
            </motion.h2>

            <motion.div {...fadeUp(0.2)} className="space-y-4 text-zinc-300 text-base leading-relaxed mb-8">
              <p>
                Actuellement en <strong className="text-white font-semibold">Master 2 BIHAR (Big Data, Intelligence Artificielle et Systèmes Intelligents)</strong> à l’<strong>ESATIC</strong>, je me spécialise dans la conception d'architectures logicielles d'entreprise, d'APIs sécurisées et de solutions de données performantes.
              </p>
              <p>
                Fort d’expériences concrètes dans le secteur bancaire et fintech — notamment la conception et le développement de l’<strong className="text-cyan-300 font-semibold">application web de gestion de prêts bancaires pour les salariés de la BNI (Banque Nationale d’Investissement)</strong> et la mise en place d'un <strong className="text-cyan-300 font-semibold">portefeuille électronique chez Mandigo-SARL</strong> —, je maîtrise les exigences rigoureuses de fiabilité, de sécurité des transactions et de tenue de charge.
              </p>
              <p className="text-zinc-400 text-sm">
                Mon approche : allier la puissance de l'ingénierie backend, du Big Data et de l’IA pour transformer des processus métier complexes en applications fluides et pérennes.
              </p>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div {...fadeUp(0.25)} className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div>
                <p className="text-2xl font-black text-white font-heading">BNI</p>
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">Gestion Prêts</p>
              </div>
              <div className="border-l border-zinc-800 pl-3">
                <p className="text-2xl font-black text-blue-400 font-heading">Master 2</p>
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">Big Data & IA</p>
              </div>
              <div className="border-l border-zinc-800 pl-3">
                <p className="text-2xl font-black text-emerald-400 font-heading">ESATIC</p>
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">Licence DASI</p>
              </div>
            </motion.div>

            {/* Contact Pills */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white transition-all text-xs font-medium group"
              >
                <svg className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{copied ? '✓ Email copié !' : personalInfo.email}</span>
              </button>

              <a
                href={`https://wa.me/${personalInfo.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white transition-all text-xs font-medium group"
              >
                <svg className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{personalInfo.phone}</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div {...fadeUp(0.35)} className="flex items-center gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:text-white transition-all text-xs font-semibold"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all text-xs font-semibold"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </motion.div>
          </div>

          {/* Right column (5 cols) - Photo avec Cravate ESATIC & Switch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-sm">
              {/* Glow backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-35 group-hover:opacity-55 transition duration-500" />
              
              {/* Photo Card container */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-750 bg-zinc-900 shadow-2xl">
                {/* Switcher Tabs at top of card */}
                <div className="p-2.5 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between text-xs">
                  <div className="flex gap-1 bg-zinc-900 p-1 rounded-lg">
                    <button
                      onClick={() => setActivePhoto('cravate')}
                      className={`px-3 py-1 rounded-md font-mono text-[11px] font-bold transition-all ${
                        activePhoto === 'cravate'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      🎓 Portrait ESATIC
                    </button>
                    <button
                      onClick={() => setActivePhoto('hackathon')}
                      className={`px-3 py-1 rounded-md font-mono text-[11px] font-bold transition-all ${
                        activePhoto === 'hackathon'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      ⚡ Hackathon
                    </button>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" title="Disponible" />
                </div>

                {/* Photo with AnimatePresence */}
                <div className="aspect-[4/5] overflow-hidden bg-zinc-950 relative">
                  <AnimatePresence mode="wait">
                    {activePhoto === 'cravate' ? (
                      <motion.img
                        key="cravate"
                        src="/profile.jpg"
                        alt="Katie Daniel DAGNOGO - ESATIC"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover object-center filter contrast-[1.03]"
                      />
                    ) : (
                      <motion.img
                        key="hackathon"
                        src="/hackathon.jpg"
                        alt="Katie Daniel DAGNOGO - Équipe Hackathon"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover object-top filter contrast-[1.03]"
                      />
                    )}
                  </AnimatePresence>

                  {/* Floating mini-badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#080d16]/90 backdrop-blur-md border border-zinc-700/80 flex items-center justify-between">
                    <div>
                      <p className="text-white font-heading font-bold text-xs tracking-wide">
                        {activePhoto === 'cravate' ? 'Katie Daniel DAGNOGO' : 'Équipe Hackathon Tech'}
                      </p>
                      <p className="text-blue-400 text-[11px] font-mono">
                        {activePhoto === 'cravate' ? 'Master 2 BIHAR · ESATIC' : 'Développement Collaboratif & MVP'}
                      </p>
                    </div>
                    <span className="text-xs">
                      {activePhoto === 'cravate' ? '👔' : '🚀'}
                    </span>
                  </div>
                </div>

                {/* Card footer */}
                <div className="p-3 bg-zinc-900 border-t border-zinc-800 text-center">
                  <p className="text-[11px] text-zinc-400 font-mono">
                    {activePhoto === 'cravate'
                      ? '« Rigueur d’ingénieur et passion de bâtir »'
                      : '« Esprit d’équipe et challenge en temps réel »'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
