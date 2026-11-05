import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md grid place-items-center p-4 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-[#111a2e] border border-[#1e2c47] rounded-2xl p-6 sm:p-8 shadow-2xl my-8 text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#090d16] border border-[#19243a] text-slate-400 hover:text-white grid place-items-center transition-colors"
            aria-label="Fermer"
          >
            <X size={17} />
          </button>

          {/* Badge & Category */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
              {project.badge}
            </span>
            <span className="text-xs font-medium text-slate-400">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
            {project.title}
          </h3>

          {/* Overview */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {project.overview}
          </p>

          {/* Problem & Solution */}
          <div className="rounded-xl bg-[#090d16] border border-[#19243a] p-5 space-y-4 mb-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                Problème rencontré
              </h4>
              <p className="text-sm text-slate-300">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                Solution technique
              </h4>
              <p className="text-sm text-slate-300">{project.solution}</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Fonctionnalités clés
            </h4>
            <ul className="space-y-2 text-sm text-slate-200">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Stack technique
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#090d16] border border-[#19243a] text-sky-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#19243a]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-sky-500/20"
            >
              <span>Voir sur GitHub</span>
              <ExternalLink size={14} />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#090d16] hover:bg-[#15223c] border border-[#19243a] text-slate-300 text-xs font-semibold transition-colors"
            >
              Fermer
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
