import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-850 text-zinc-500 text-xs bg-[#080d16]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-wider">DAGNOGO KATIE DANIEL</span>
          <span className="text-blue-500 font-bold">.</span>
          <span className="text-zinc-600">|</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors"
          >
            Haut de page ↑
          </button>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={`https://wa.me/${personalInfo.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
