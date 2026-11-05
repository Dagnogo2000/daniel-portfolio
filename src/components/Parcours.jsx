import React from 'react';
import { timelineData } from '../data/portfolioData';

export default function Parcours() {
  return (
    <section id="parcours" className="py-16 bg-[#0c1220] border-t border-[#19243a]">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">
          Parcours
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          Formation & Expériences
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-10">
          Un cursus axé sur la rigueur d'ingénierie et la pratique continue.
        </p>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#19243a] ml-2 sm:ml-4 space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#090d16] border-2 border-sky-400 group-hover:scale-125 transition-transform" />

              {/* Year badge */}
              <span className="text-xs font-bold text-sky-400 font-mono tracking-wider block mb-1">
                {item.year}
              </span>

              {/* Title & Role */}
              <h3 className="text-lg font-bold text-white mb-0.5">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-amber-400 mb-2">
                {item.role}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

