import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Server: Server,
  Layout: Layout,
  Database: Database,
  Wrench: Wrench
};

export default function Skills() {
  return (
    <section id="competences" className="py-16 bg-[#0c1220] border-t border-[#19243a]">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2 font-mono">
            // Compétences
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Ma boîte à outils technique
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-10">
            Les technologies que je pratique quotidiennement sur des projets réels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group, idx) => {
            const Icon = iconMap[group.icon] || Server;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl bg-[#111a2e] border border-[#1e2c47] p-6 shadow-lg shadow-black/20 hover:border-sky-400/60 hover:shadow-sky-500/10 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 grid place-items-center text-sky-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-white text-base">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#090d16] border border-[#19243a] text-slate-300 hover:text-white hover:border-sky-500/40 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
