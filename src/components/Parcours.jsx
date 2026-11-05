import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/portfolioData';

export default function Parcours() {
  return (
    <section id="parcours" className="py-16 bg-[#0c1220] border-t border-[#19243a]">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2 font-mono">
            // Parcours
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Formation & Expériences
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-10">
            Un cursus axé sur la rigueur d'ingénierie et la pratique continue.
          </p>
        </motion.div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#19243a] ml-2 sm:ml-4 space-y-9">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Dot with pulse on hover */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#090d16] border-2 border-sky-400 group-hover:scale-125 group-hover:border-emerald-400 transition-all" />

              {/* Year badge */}
              <span className="text-xs font-bold text-sky-400 font-mono tracking-wider block mb-1">
                {item.year}
              </span>

              {/* Title & Role */}
              <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-sky-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-amber-400 mb-2">
                {item.role}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
