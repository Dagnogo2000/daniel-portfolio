import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const keywords = [
  { text: 'Big Data & IA', x: '8%', y: '14%', delay: 0 },
  { text: 'Architecture Bancaire', x: '74%', y: '12%', delay: 1 },
  { text: 'Spring Boot & Node.js', x: '6%', y: '80%', delay: 2 },
  { text: 'PostgreSQL & Cloud', x: '78%', y: '82%', delay: 0.5 },
  { text: 'Machine Learning', x: '85%', y: '46%', delay: 1.5 },
  { text: 'Microservices & APIs', x: '3%', y: '48%', delay: 2.5 },
];

function TypewriterText({ text, speed = 35, onDone }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span>{displayed}</span>;
}

export default function Hero() {
  const [step, setStep] = useState(0);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080d16] pt-24 pb-16">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Neural network / Synapse SVG graphics on Left and Right (exact Rice Aliman aesthetic) */}
      <div className="hidden lg:block absolute left-4 xl:left-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 hover:opacity-60 transition-opacity">
        <svg width="220" height="340" viewBox="0 0 220 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 170 C60 170, 90 120, 140 100" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M10 170 C60 170, 90 220, 140 240" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M140 100 C170 80, 190 50, 210 30" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M140 100 C170 120, 180 140, 210 150" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M140 240 C170 230, 180 210, 210 200" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M140 240 C170 270, 190 300, 210 320" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          
          {/* Glowing synaptic dots */}
          <circle cx="10" cy="170" r="5" fill="#38bdf8" className="animate-pulse" />
          <circle cx="140" cy="100" r="4" fill="#60a5fa" />
          <circle cx="140" cy="240" r="4" fill="#60a5fa" />
          <circle cx="210" cy="30" r="3" fill="#93c5fd" />
          <circle cx="210" cy="150" r="3" fill="#93c5fd" />
          <circle cx="210" cy="200" r="3" fill="#93c5fd" />
          <circle cx="210" cy="320" r="3" fill="#93c5fd" />
        </svg>
      </div>

      <div className="hidden lg:block absolute right-4 xl:right-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 hover:opacity-60 transition-opacity">
        <svg width="220" height="340" viewBox="0 0 220 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="-scale-x-100">
          <path d="M10 170 C60 170, 90 120, 140 100" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M10 170 C60 170, 90 220, 140 240" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M140 100 C170 80, 190 50, 210 30" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M140 100 C170 120, 180 140, 210 150" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M140 240 C170 230, 180 210, 210 200" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          <path d="M140 240 C170 270, 190 300, 210 320" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" />
          
          <circle cx="10" cy="170" r="5" fill="#38bdf8" className="animate-pulse" />
          <circle cx="140" cy="100" r="4" fill="#60a5fa" />
          <circle cx="140" cy="240" r="4" fill="#60a5fa" />
          <circle cx="210" cy="30" r="3" fill="#93c5fd" />
          <circle cx="210" cy="150" r="3" fill="#93c5fd" />
          <circle cx="210" cy="200" r="3" fill="#93c5fd" />
          <circle cx="210" cy="320" r="3" fill="#93c5fd" />
        </svg>
      </div>

      {/* Floating keywords */}
      {keywords.map((kw, i) => (
        <motion.span
          key={i}
          className="absolute text-cyan-400/25 font-mono text-xs md:text-sm font-semibold tracking-wider hidden sm:block pointer-events-none"
          style={{ left: kw.x, top: kw.y }}
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: kw.delay }}
        >
          {kw.text}
        </motion.span>
      ))}

      {/* Main Terminal Card */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-2xl mx-auto px-4"
      >
        <div className="rounded-2xl overflow-hidden border border-zinc-700/50 shadow-[0_0_50px_-10px_rgba(37,99,235,0.25)] bg-[#0c1322]/90 backdrop-blur-xl">
          {/* Terminal top bar */}
          <div className="bg-zinc-900/90 px-5 py-3.5 flex items-center justify-between border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-zinc-400 text-xs font-mono font-medium tracking-wide">
                bash profile
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">zsh · node v20</span>
          </div>

          {/* Terminal command area */}
          <div className="p-6 md:p-8 min-h-[250px] font-mono text-left space-y-4">
            {/* Command 1: $ whoami */}
            <div>
              <p className="text-zinc-400 text-sm mb-1 flex items-center gap-2">
                <span className="text-blue-400 font-bold">$</span>
                <span className="text-zinc-200">whoami</span>
              </p>
              {step >= 0 && (
                <p className="text-emerald-400 font-semibold text-sm md:text-base pl-4">
                  <TypewriterText
                    text="katie-daniel-dagnogo"
                    speed={35}
                    onDone={() => setStep(1)}
                  />
                </p>
              )}
            </div>

            {/* Command 2: $ cat welcome.txt */}
            {step >= 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-zinc-400 text-sm mb-1 flex items-center gap-2">
                  <span className="text-blue-400 font-bold">$</span>
                  <span className="text-zinc-200">cat welcome.txt</span>
                </p>
                <p className="text-white text-base md:text-lg font-bold pl-4 leading-relaxed tracking-wide">
                  <TypewriterText
                    text="Bienvenue sur le portfolio de KATIE DANIEL DAGNOGO"
                    speed={25}
                    onDone={() => setStep(2)}
                  />
                  {step === 1 && <span className="terminal-cursor" />}
                </p>
              </motion.div>
            )}

            {/* Command 3: $ echo $SPECIALTY */}
            {step >= 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-zinc-400 text-sm mb-1 flex items-center gap-2">
                  <span className="text-blue-400 font-bold">$</span>
                  <span className="text-zinc-200">echo $FORMATION_&_EXPERTISE</span>
                </p>
                <p className="text-cyan-300 text-xs md:text-sm font-medium pl-4 leading-relaxed">
                  <TypewriterText
                    text="Master 1 BIHAR (Big Data & IA) · ESATIC · Développeur d'Applications Bancaires (BNI)"
                    speed={20}
                    onDone={() => setStep(3)}
                  />
                  {step === 2 && <span className="terminal-cursor" />}
                </p>
              </motion.div>
            )}

            {/* Final prompt */}
            {step >= 3 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-zinc-500 text-sm pt-2"
              >
                <span className="text-blue-400 font-bold">$</span>{' '}
                <span className="terminal-cursor" />
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="mt-12 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-500 text-[11px] font-mono tracking-widest uppercase">
          Découvrir mon profil
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-blue-400"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
