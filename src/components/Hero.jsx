import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, Github, Copy, Check, Award, MapPin, Sparkles, Terminal, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const roles = [
  "Développeur Backend",
  "Architecte Full Stack",
  "Intégrateur IA & LLM",
  "Spécialiste Bases de Données"
];

export default function Hero({ onCopyEmail, copied }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <header id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      
      {/* Background Floating Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Text & CTAs) */}
          <div className="lg:col-span-7">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Disponible pour un stage & opportunités · Abidjan</span>
            </motion.div>

            {/* Main Title with Smooth Text Entrance */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.14] mb-4"
            >
              Je conçois des applications <br />
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                web, backend & data
              </span> <br />
              qui résolvent de vrais besoins.
            </motion.h1>

            {/* Dynamic Animated Role Rotator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-base sm:text-lg font-mono text-sky-400 mb-6 h-8"
            >
              <span className="text-slate-500">//</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-semibold"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Bio text */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
            >
              Bonjour, je suis <strong className="text-white font-semibold">{personalInfo.name}</strong>, diplômé en génie logiciel à l'<strong className="text-white font-semibold">ESATIC</strong>. 
              Spécialisé dans la conception d'APIs résilientes, la modélisation de bases de données et les architectures web performantes.
            </motion.p>

            {/* Animated CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              {/* Projects Button */}
              <motion.a
                href="#projets"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 transition-colors"
              >
                <span>Voir mes projets</span>
                <ArrowRight size={16} />
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
                href={`https://wa.me/${personalInfo.phoneRaw}?text=Bonjour%20Daniel,%20j'ai%20vu%20votre%20portfolio`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950/40 transition-colors"
              >
                <MessageCircle size={16} />
                <span>WhatsApp (+225 07 58 75 71 52)</span>
              </motion.a>

              {/* GitHub Button */}
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111a2e] hover:bg-[#15223c] border border-[#1e2c47] hover:border-sky-400 text-slate-200 text-sm font-semibold transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
              </motion.a>

              {/* Copy Email Button */}
              <motion.button
                onClick={onCopyEmail}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111a2e] hover:bg-[#15223c] border border-[#1e2c47] text-slate-300 text-sm font-medium transition-colors"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span>{copied ? "Email copié !" : "Copier Email"}</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column (Floating Animated Tech Card) */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating Tech Pill 1 (Top Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d1527] border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold shadow-xl"
            >
              <Code2 size={14} />
              <span>Next.js & Node.js</span>
            </motion.div>

            {/* Floating Tech Pill 2 (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d1527] border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold shadow-xl"
            >
              <Terminal size={14} />
              <span>PostgreSQL & APIs</span>
            </motion.div>

            {/* Main Interactive Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl bg-[#111a2e]/90 backdrop-blur-xl border border-[#1e2c47] p-6 sm:p-7 shadow-2xl shadow-black/50"
            >
              {/* Header */}
              <div className="flex items-center gap-4 pb-5 border-b border-[#19243a]">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 grid place-items-center text-slate-950 font-black text-2xl shadow-lg shadow-sky-500/30">
                  D
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{personalInfo.name}</span>
                    <Sparkles size={16} className="text-amber-400" />
                  </h3>
                  <p className="text-sm text-sky-400 font-medium">{personalInfo.role}</p>
                </div>
              </div>

              {/* Specs Rows */}
              <div className="py-4 space-y-3.5 text-sm">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Formation</span>
                  <span className="font-semibold text-slate-200">Licence DASI · ESATIC ('24)</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Spécialisation</span>
                  <span className="font-semibold text-slate-200">Backend, APIs & Bases de données</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Localisation</span>
                  <span className="font-semibold text-slate-200 flex items-center gap-1">
                    <MapPin size={14} className="text-sky-400" />
                    <span>Abidjan, Côte d'Ivoire</span>
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Disponibilité</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Immédiate pour stage</span>
                  </span>
                </div>
              </div>

              {/* Hackathon Badge with Shimmer */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-2 p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/15 to-transparent border border-amber-500/30 flex items-center gap-3 relative overflow-hidden"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 grid place-items-center text-amber-400 flex-shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                    <span>🏆 Hackathon AethexAI × Mstudio 2026</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">Assistant IA de chantier pour Blok</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </header>
  );
}
