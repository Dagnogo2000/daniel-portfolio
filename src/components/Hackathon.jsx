import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export default function Hackathon() {
  return (
    <section id="hackathons" className="relative py-28 px-6 bg-[#080d16] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        <div className="border-t border-zinc-800/80 mb-16" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-2">
              SUR LE TERRAIN & HACKATHONS
            </motion.p>
            <motion.h2 {...fadeUp(0.1)} className="font-heading text-4xl sm:text-5xl font-black text-white tracking-tight">
              Esprit d'équipe & Challenge intensif<span className="text-blue-500">.</span>
            </motion.h2>
          </div>
          <p className="text-zinc-500 text-xs sm:text-sm font-mono max-w-xs">
            Concevoir, itérer et délivrer un produit viable sous forte contrainte de temps.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative group">
              {/* Glow backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
              
              {/* Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-700/80 bg-zinc-900 shadow-2xl">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-zinc-950">
                  <img
                    src="/hackathon.jpg"
                    alt="Hackathon Tech en équipe"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Badge Overlay */}
                <div className="p-4 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                      ⚡
                    </span>
                    <div>
                      <p className="text-white font-heading font-bold text-sm">
                        Compétition & Hackathon Tech
                      </p>
                      <p className="text-zinc-400 text-xs font-mono">
                        Équipe Aethex / Studio · Mobilisation collective
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Sprint 48h
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Learnings & Leadership (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div {...fadeUp(0.15)} className="space-y-3">
              <h3 className="font-heading text-2xl font-bold text-white">
                L’adrénaline de transformer une idée en prototype fonctionnel
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Les hackathons sont le banc d’essai ultime pour tester la vélocité technique et l'harmonie d’une équipe. En immersion totale pendant 48 heures, mon rôle s'articule autour de la robustesse de l'architecture, de l'orchestration des données et du soutien continu aux membres de l'équipe.
              </p>
            </motion.div>

            {/* 3 Pillars */}
            <div className="space-y-3">
              <motion.div {...fadeUp(0.25)} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading text-white font-bold text-sm mb-0.5">
                    Architecture rapide & Décisions pragmatiques
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Choix technologiques orientés résultat immédiat, modélisation express des bases de données et mise à disposition rapide des APIs pour l'intégration UI.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.35)} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading text-white font-bold text-sm mb-0.5">
                    Synergie collective & Communication fluide
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Capacité à fédérer développeurs, designers et spécialistes métier pour maintenir la cohésion et la motivation jusqu'à la dernière minute.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeUp(0.45)} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading text-white font-bold text-sm mb-0.5">
                    Délivrer sous haute pression
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Gestion du stress, tests des flux critiques avant le pitch et présentation d'une démonstration sans faille devant le jury.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

