import { motion } from 'framer-motion';
import { parcoursData } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

export default function Parcours() {
  return (
    <section className="relative py-24 px-6 bg-[#080d16] overflow-hidden">
      {/* Divider line */}
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-zinc-800 mb-16" />

        <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.25em] uppercase text-zinc-500 mb-12">
          PARCOURS
        </motion.p>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-green-500 to-blue-500 origin-left"
            style={{ top: '20px' }}
          />

          {/* Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {parcoursData.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.3 + i * 0.15)}
                className="relative"
              >
                {/* Dot */}
                <div className="hidden md:flex justify-start mb-6">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 relative ${
                      item.status === 'current'
                        ? 'bg-[#080d16] border-blue-500'
                        : 'bg-green-500 border-green-500'
                    }`}
                  >
                    {item.status === 'completed' ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Badge EN COURS */}
                  {item.status === 'current' && (
                    <span className="inline-block bg-green-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded mb-3">
                      EN COURS
                    </span>
                  )}

                  <p className="text-zinc-500 text-xs font-mono mb-2">{item.period}</p>
                  <h3 className="text-white font-bold text-base mb-1 leading-snug">{item.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
