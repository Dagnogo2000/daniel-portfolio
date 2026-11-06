import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'À PROPOS', href: '#apropos' },
  { label: 'PARCOURS', href: '#parcours' },
  { label: 'TECHNOLOGIES', href: '#technologies' },
  { label: 'PROJETS', href: '#projets' },
  { label: 'HACKATHONS', href: '#hackathons' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080d16]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl shadow-black/60'
          : 'bg-[#080d16]/75 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-0.5 group"
        >
          <span className="font-heading font-black text-xs sm:text-sm md:text-base tracking-wider text-white uppercase group-hover:text-zinc-200 transition-colors">
            DAGNOGO KATIE DANIEL
          </span>
          <span className="text-blue-500 font-black text-base md:text-lg">.</span>
        </a>

        {/* Center Nav links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-200 ${
                active === link.href
                  ? 'text-blue-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/cv-katie-daniel-dagnogo.pdf"
            download="CV_Katie_Daniel_Dagnogo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-heading font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-md shadow-blue-600/30"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>TÉLÉCHARGER CV</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-zinc-300 hover:text-white p-2"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-[#080d16]/98 backdrop-blur-2xl border-t border-zinc-800 px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-xs font-mono font-bold tracking-widest uppercase text-zinc-300 hover:text-white py-1"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/cv-katie-daniel-dagnogo.pdf"
              download="CV_Katie_Daniel_Dagnogo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center bg-blue-600 text-white text-xs font-heading font-bold uppercase tracking-wider py-3 rounded-full"
            >
              TÉLÉCHARGER CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
