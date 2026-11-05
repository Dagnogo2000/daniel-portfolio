import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export default function About() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#080d16]">
      {/* Subtle orb */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div>
            <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-500 mb-6">
              À PROPOS
            </motion.p>

            <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Construire le{' '}
              <span className="font-playfair italic font-normal text-white">backend</span>
              <br />
              et l'<span className="font-black text-white">efficacité</span>.
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-zinc-400 text-base leading-relaxed mb-10 max-w-lg">
              Je suis un développeur passionné par la construction d'architectures backend robustes
              et d'applications modernes qui ne se contentent pas de fonctionner,
              mais qui résolvent de vrais besoins avec performance et sécurité.
            </motion.p>

            {/* Contact info */}
            <motion.div {...fadeUp(0.3)} className="flex flex-col gap-3 mb-8">
              <button
                onClick={copyEmail}
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group w-fit"
              >
                <svg className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">
                  {copied ? '✓ Copié !' : personalInfo.email}
                </span>
              </button>

              <a
                href={`https://wa.me/${personalInfo.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group w-fit"
              >
                <svg className="w-4 h-4 text-zinc-500 group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium">{personalInfo.phone}</span>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.4)} className="flex items-center gap-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
              >
                {/* GitHub icon */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
              >
                {/* LinkedIn icon */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
              >
                {/* Facebook icon */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </motion.div>
          </div>

          {/* Right column: Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Photo frame */}
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-zinc-700/40 bg-zinc-900/60 flex items-center justify-center">
                {/* Avatar placeholder */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
                    <span className="text-5xl font-black text-white">D</span>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-sm">Katie Daniel</p>
                    <p className="text-zinc-500 text-xs">DAGNOGO</p>
                  </div>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-blue-600/50 rounded-br-xl" />
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-blue-600/50 rounded-tl-xl" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
