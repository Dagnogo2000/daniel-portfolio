import React, { useState } from 'react';
import { Sun, Moon, Menu, X, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "À propos", href: "#apropos" },
    { label: "Compétences", href: "#competences" },
    { label: "Projets", href: "#projets" },
    { label: "Parcours", href: "#parcours" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/85 dark:bg-[#090d16]/85 border-b border-[#19243a]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-400 to-indigo-600 grid place-items-center text-white font-extrabold text-sm shadow-md shadow-sky-500/20">
            D
          </div>
          <span className="text-slate-100">Daniel<span className="text-sky-400">.dev</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 rounded-lg border border-[#1e2c47] bg-[#111a2e] text-slate-400 hover:text-sky-400 hover:border-sky-400 grid place-items-center transition-all duration-150"
            aria-label="Changer le thème"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${personalInfo.phoneRaw}?text=Bonjour%20Daniel,%20j'ai%20vu%20votre%20portfolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all duration-150"
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg border border-[#1e2c47] bg-[#111a2e] text-slate-400 grid place-items-center"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#19243a] bg-[#090d16] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-sky-400 font-medium py-1.5 text-base border-b border-slate-800/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${personalInfo.phoneRaw}?text=Bonjour%20Daniel,%20j'ai%20vu%20votre%20portfolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm"
          >
            <MessageCircle size={17} />
            <span>Écrire sur WhatsApp (+225 07 58 75 71 52)</span>
          </a>
        </div>
      )}
    </nav>
  );
}

