import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Parcours from './components/Parcours';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { personalInfo } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true);
      showToast('Adresse email copiée dans le presse-papier !');
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      showToast(personalInfo.email);
    });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Sections */}
      <main>
        <Hero onCopyEmail={handleCopyEmail} copied={copied} />
        <About />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Parcours />
        <Contact onCopyEmail={handleCopyEmail} copied={copied} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp (Bottom Right) */}
      <FloatingWhatsApp />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 px-4 py-2.5 rounded-xl bg-[#111a2e] border border-sky-400 text-slate-100 text-xs font-semibold shadow-xl shadow-black/50 animate-bounce">
          {toastMessage}
        </div>
      )}

    </div>
  );
}

