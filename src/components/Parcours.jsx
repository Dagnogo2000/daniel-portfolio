import { motion } from 'framer-motion';
import { parcoursData, experiencesData } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export default function Parcours() {
  return (
    <section className="relative py-24 px-6 bg-[#080d16] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-zinc-800/80 mb-16" />

        {/* Section title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-2">
              PARCOURS & EXPÉRIENCES
            </motion.p>
            <motion.h2 {...fadeUp(0.1)} className="font-heading text-4xl sm:text-5xl font-black text-white">
              Formation d'excellence & Réalisations
            </motion.h2>
          </div>
          <p className="text-zinc-500 text-xs font-mono">
            ESATIC · Abidjan & Secteur Bancaire
          </p>
        </div>

        {/* Academic Timeline (Rice Aliman style) */}
        <div className="mb-20">
          <p className="text-xs font-bold font-mono tracking-wider text-zinc-400 uppercase mb-8">
            01. FORMATION ACADÉMIQUE
          </p>

          <div className="relative">
            {/* Connecting Line on desktop */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="hidden md:block absolute top-[19px] left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-blue-500 origin-left"
            />

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {parcoursData.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.2 + i * 0.15)}
                  className="relative group"
                >
                  {/* Dot */}
                  <div className="hidden md:flex justify-start mb-6">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 relative transition-transform duration-300 group-hover:scale-110 ${
                        item.status === 'current'
                          ? 'bg-[#080d16] border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]'
                          : 'bg-emerald-500 border-emerald-500'
                      }`}
                    >
                      {item.status === 'completed' ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-500 animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-500 text-xs font-mono font-semibold">{item.period}</span>
                      {item.badge && (
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          item.badge === 'EN COURS'
                            ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                            : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-white font-heading font-bold text-base mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {item.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Experiences (BNI & Mandigo-SARL) */}
        <div>
          <p className="text-xs font-bold font-mono tracking-wider text-zinc-400 uppercase mb-6">
            02. EXPÉRIENCES EN ENTREPRISE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiencesData.map((exp, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(0.3 + idx * 0.15)}
                className="relative p-7 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-950 border border-zinc-800 hover:border-blue-500/40 transition-all duration-300 shadow-lg group"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {exp.period}
                  </span>
                  <span className="text-xs text-zinc-500">{exp.location}</span>
                </div>

                <h3 className="text-lg font-heading font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-emerald-400 mb-3">
                  {exp.company}
                </p>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
