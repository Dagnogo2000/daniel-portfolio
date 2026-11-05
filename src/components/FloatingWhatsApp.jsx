import React from 'react';
import { MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${personalInfo.phoneRaw}?text=Bonjour%20Daniel,%20j'ai%20vu%20votre%20portfolio`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/60 transition-all duration-200 hover:scale-105 active:scale-95"
    >
      <MessageCircle size={18} />
      <span>WhatsApp</span>
    </a>
  );
}

