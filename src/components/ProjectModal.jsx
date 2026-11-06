import { useEffect } from 'react';
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
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md grid place-items-center p-4 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-left max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-400 hover:text-white grid place-items-center transition-colors z-10"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>

          {/* Screenshot Preview in Modal if available */}
          {project.image && (
            <div className="rounded-2xl overflow-hidden border border-zinc-750 mb-6 bg-zinc-950 aspect-[16/9]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}

          {/* Badge & Category */}
          <div className="flex items-center gap-2.5 mb-3">
            {project.badge && (
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                {project.badge}
              </span>
            )}
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              {project.category}
            </span>
            {project.year && (
              <span className="text-xs font-mono text-zinc-400 ml-auto">
                {project.year}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mb-4">
            {project.title}
          </h3>

          {/* Overview */}
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
            {project.overview}
          </p>

          {/* Problem & Solution */}
          <div className="rounded-2xl bg-zinc-950/70 border border-zinc-800/70 p-5 space-y-4 mb-6">
            <div>
              <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-amber-400 mb-1">
                Problématique rencontrée
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-blue-400 mb-1">
                Solution technique apportée
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-zinc-400 mb-3">
              Fonctionnalités clés
            </h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-zinc-400 mb-2.5">
              Stack technique
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-800 text-zinc-300 border border-zinc-750"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20"
              >
                <span>Visiter en direct</span>
                <ExternalLink size={14} />
              </a>
            )}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/20"
            >
              <span>Code source (GitHub)</span>
              <ExternalLink size={14} />
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition-colors ml-auto"
            >
              Fermer
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
