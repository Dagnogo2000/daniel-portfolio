import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'À PROPOS', href: '#apropos' },
  { label: 'PROJETS', href: '#projets' },
  { label: 'TECHNOLOGIES', href: '#technologies' },
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
          ? 'bg-black/90 navbar-blur border-b border-zinc-800/60 shadow-lg shadow-black/50'
          : 'bg-black/70 navbar-blur'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-0"
        >
          <span className="text-white font-black text-xl tracking-tight uppercase">
            PORTFOLIO
          </span>
          <span className="text-blue-500 font-black text-xl">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
                active === link.href
                  ? 'text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: CV Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/cv-katie-daniel-dagnogo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
          >
            TÉLÉCHARGER CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-400 hover:text-white"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/95 border-t border-zinc-800 px-6 py-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-sm font-bold tracking-widest uppercase text-zinc-300 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/cv-katie-daniel-dagnogo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white text-xs font-black uppercase tracking-widest px-5 py-3 rounded-full text-center"
            >
              TÉLÉCHARGER CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
