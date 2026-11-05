import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#19243a] text-slate-500 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} {personalInfo.name} · Abidjan, Côte d'Ivoire
        </div>
        <div className="flex items-center gap-5">
          <a href="#top" className="hover:text-sky-400 transition-colors">
            Haut de page ↑
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`https://wa.me/${personalInfo.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

