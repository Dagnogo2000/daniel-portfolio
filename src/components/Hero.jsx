import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const keywords = [
  { text: 'Backend', x: '5%', y: '12%', delay: 0 },
  { text: 'Full Stack', x: '80%', y: '8%', delay: 1 },
  { text: 'Node.js', x: '3%', y: '75%', delay: 2 },
  { text: 'PostgreSQL', x: '78%', y: '78%', delay: 0.5 },
  { text: 'React', x: '88%', y: '45%', delay: 1.5 },
  { text: 'API REST', x: '1%', y: '45%', delay: 2.5 },
];

const lines = [
  { cmd: '$ whoami', output: 'katie-daniel-dagnogo', delay: 0.5 },
  { cmd: '$ cat welcome.txt', output: 'Bienvenue sur le portfolio de KATIE DANIEL DAGNOGO', delay: 2.5 },
];

function TypewriterText({ text, speed = 40, onDone }) {
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080d16] pt-20">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-600/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating keywords */}
      {keywords.map((kw, i) => (
        <motion.span
          key={i}
          className="absolute text-cyan-400/20 font-mono text-sm font-semibold tracking-wider hidden md:block"
          style={{ left: kw.x, top: kw.y }}
          animate={{ y: [0, -14, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: kw.delay }}
        >
          {kw.text}
        </motion.span>
      ))}

      {/* Terminal card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="relative z-10 w-full max-w-2xl mx-auto px-4"
      >
        <div className="rounded-xl overflow-hidden border border-zinc-700/40 shadow-2xl shadow-black/70">
          {/* Terminal header */}
          <div className="bg-zinc-800/80 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 text-zinc-400 text-xs font-mono tracking-wider">bash profile</span>
          </div>

          {/* Terminal body */}
          <div className="bg-zinc-900/80 backdrop-blur-sm px-6 py-8 min-h-[220px] font-mono">
            {/* Line 1: $ whoami */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-4"
            >
              <p className="text-zinc-400 text-sm mb-1">
                <span className="text-blue-400 font-semibold">$</span>{' '}
                <span className="text-zinc-200">whoami</span>
              </p>
              {step >= 0 && (
                <p className="text-white text-sm pl-2">
                  <TypewriterText
                    text="katie-daniel-dagnogo"
                    speed={45}
                    onDone={() => setStep(1)}
                  />
                </p>
              )}
            </motion.div>

            {/* Line 2: $ cat welcome.txt */}
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-zinc-400 text-sm mb-2">
                  <span className="text-blue-400 font-semibold">$</span>{' '}
                  <span className="text-zinc-200">cat welcome.txt</span>
                </p>
                <p className="text-white text-base font-semibold pl-2 leading-relaxed">
                  <TypewriterText
                    text="Bienvenue sur le portfolio de KATIE DANIEL DAGNOGO"
                    speed={30}
                    onDone={() => setStep(2)}
                  />
                  {step < 2 && <span className="terminal-cursor" />}
                </p>
              </motion.div>
            )}

            {/* Cursor blink after done */}
            {step >= 2 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-zinc-500 text-sm"
              >
                <span className="text-blue-400 font-semibold">$</span>{' '}
                <span className="terminal-cursor" />
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-zinc-700 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-zinc-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
