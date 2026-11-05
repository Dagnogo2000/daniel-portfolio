import React from 'react';
import { ArrowRight, MessageCircle, Github, Copy, Check, Award, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onCopyEmail, copied }) {
  return (
    <header id="top" className="pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponible pour un stage & opportunités</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.15] mb-5">
              Je conçois des applications <br />
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                web, backend & data
              </span> <br />
              qui résolvent de vrais besoins.
            </h1>

            {/* Bio text */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Bonjour, je suis <strong className="text-slate-200 font-semibold">{personalInfo.name}</strong>, développeur backend & full stack diplômé de l'<strong className="text-slate-200 font-semibold">ESATIC</strong>. 
              Spécialisé dans la conception d'APIs résilientes, la modélisation de bases de données et l'intégration de services modernes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projets"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all duration-150 shadow-lg shadow-sky-500/20 hover:-translate-y-0.5"
              >
                <span>Voir mes projets</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={`https://wa.me/${personalInfo.phoneRaw}?text=Bonjour%20Daniel,%20j'ai%20vu%20votre%20portfolio`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all duration-150 shadow-sm hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                <span>WhatsApp (+225 07 58 75 71 52)</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111a2e] hover:bg-[#15223c] border border-[#1e2c47] hover:border-sky-400 text-slate-200 text-sm font-semibold transition-all duration-150 hover:-translate-y-0.5"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <button
                onClick={onCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111a2e] hover:bg-[#15223c] border border-[#1e2c47] text-slate-300 text-sm font-medium transition-all duration-150"
                title="Copier mon adresse email"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span>{copied ? "Email copié !" : "Copier Email"}</span>
              </button>
            </div>
          </div>

          {/* Right Column (Card Specs) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#111a2e] border border-[#1e2c47] p-6 sm:p-7 shadow-xl shadow-black/40">
              
              {/* Profile Header */}
              <div className="flex items-center gap-4 pb-5 border-b border-[#19243a]">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-400 to-indigo-600 grid place-items-center text-slate-950 font-black text-2xl shadow-md shadow-sky-500/25">
                  D
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{personalInfo.name}</h3>
                  <p className="text-sm text-sky-400 font-medium">{personalInfo.role}</p>
                </div>
              </div>

              {/* Specs Rows */}
              <div className="py-4 space-y-3 text-sm">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Formation</span>
                  <span className="font-semibold text-slate-200">Licence DASI · ESATIC ('24)</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Spécialité</span>
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
                  <span className="font-semibold text-emerald-400">Immédiate pour stage</span>
                </div>
              </div>

              {/* Hackathon Badge */}
              <div className="mt-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 grid place-items-center text-amber-400 flex-shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Sélectionné Hackathon</div>
                  <div className="text-xs text-slate-300 font-medium">AethexAI × Mstudio 2026 (Projet Blok)</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

