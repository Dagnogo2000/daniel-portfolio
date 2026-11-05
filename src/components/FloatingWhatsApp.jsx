import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${personalInfo.phoneRaw}?text=Bonjour%20Daniel,%20j'ai%20vu%20votre%20portfolio`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-emerald-950/60 transition-colors"
    >
      {/* Pulsing ring around button */}
      <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
      <MessageCircle size={18} className="relative z-10" />
      <span className="relative z-10">WhatsApp</span>
    </motion.a>
  );
}
