import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Parcours from './components/Parcours';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Hackathon from './components/Hackathon';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ProjectModal from './components/ProjectModal';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#080d16] text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* À Propos Section */}
        <section id="apropos">
          <About />
        </section>

        {/* Parcours & Expériences */}
        <section id="parcours">
          <Parcours />
        </section>

        {/* Technologies Section */}
        <section id="technologies">
          <TechStack />
        </section>

        {/* Projets Section */}
        <section id="projets">
          <Projects onSelect={setSelectedProject} />
        </section>

        {/* Hackathons & Défis Tech Section */}
        <section id="hackathons">
          <Hackathon />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
