import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="apropos" className="py-16 border-t border-[#19243a]">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2 font-mono">
            // À propos
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Curieux, rigoureux et orienté résultat.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-8">
            Un profil formé à l'ingénierie logicielle, concentré sur la propreté du code et l'efficacité opérationnelle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl bg-[#111a2e] border border-[#1e2c47] p-7 sm:p-9 space-y-4 text-slate-300 text-base leading-relaxed hover:border-sky-500/30 transition-colors shadow-lg shadow-black/20"
        >
          <p>
            Diplômé d'une <strong className="text-white font-semibold">Licence en Génie Logiciel et Systèmes d'Information (DASI)</strong> à l'<strong className="text-white font-semibold">ESATIC</strong> en 2024, j'ai développé une solide culture d'ingénieur basée sur l'analyse conceptuelle (UML), la modélisation de bases de données et la sécurisation applicative.
          </p>
          <p>
            Au quotidien, j'interviens en priorité sur le <strong className="text-white font-semibold">backend</strong> : conception d'API RESTful robustes, sécurisation par tokens JWT, gestion d'accès aux bases relationnelles (PostgreSQL, Neon DB) ou NoSQL (MongoDB), tout en maîtrisant les interfaces modernes avec <strong className="text-white font-semibold">React, Next.js et Angular</strong> pour livrer des produits finis clé en main.
          </p>
          <p>
            Sélectionné lors du <strong className="text-amber-400 font-semibold">Hackathon AethexAI × Mstudio 2026</strong> à Abidjan, j'ai démontré mon aptitude à travailler sous pression et en équipe en construisant le backend de l'assistant IA de calcul de matériaux pour la marketplace B2B <em className="text-white font-medium not-italic">Blok</em>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
