import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Github, Copy, Check, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onCopyEmail, copied }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent('[Portfolio] Contact de ' + name)}&body=${encodeURIComponent("Nom: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
    window.location.href = mailto;
    setStatus('Ouverture de votre boîte mail...');
    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section id="contact" className="py-16 border-t border-[#19243a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-[#111a2e] border border-[#1e2c47] p-8 sm:p-12 shadow-2xl shadow-black/40 hover:border-sky-500/30 transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            {/* Info Left */}
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2 font-mono">
                // Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Travaillons ensemble
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                Je suis immédiatement disponible pour un stage en développement Backend ou Full Stack. 
                Contactez-moi directement via WhatsApp ou par email, je réponds rapidement.
              </p>

              <div className="space-y-3">
                {/* WhatsApp */}
                <motion.a
                  href={`https://wa.me/${personalInfo.phoneRaw}?text=Bonjour%20Daniel,%20j'ai%20vu%20votre%20portfolio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#090d16] border border-emerald-500/30 hover:border-emerald-500 transition-all shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 grid place-items-center flex-shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-400 uppercase">WhatsApp Direct</div>
                    <div className="text-sm font-semibold text-white">{personalInfo.phone}</div>
                  </div>
                </motion.a>

                {/* Email with copy */}
                <motion.div
                  onClick={onCopyEmail}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#090d16] border border-[#19243a] hover:border-sky-400 transition-all cursor-pointer shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 grid place-items-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-sky-400 uppercase">Email (Cliquez pour copier)</div>
                    <div className="text-sm font-semibold text-white truncate">{personalInfo.email}</div>
                  </div>
                  <div className="text-slate-400 pr-2">
                    {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                  </div>
                </motion.div>

                {/* GitHub */}
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#090d16] border border-[#19243a] hover:border-sky-400 transition-all shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 grid place-items-center flex-shrink-0">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">GitHub</div>
                    <div className="text-sm font-semibold text-white">github.com/Dagnogo2000</div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Form Right */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Votre nom
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nom ou entreprise"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-[#19243a] text-slate-200 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Votre adresse email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@exemple.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-[#19243a] text-slate-200 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Parlez-moi de votre opportunité ou de votre projet..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-[#19243a] text-slate-200 text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-sky-500/25"
              >
                <Send size={16} />
                <span>Envoyer le message</span>
              </motion.button>

              {status && (
                <p className="text-xs text-emerald-400 text-center font-medium animate-pulse">
                  {status}
                </p>
              )}
            </form>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
