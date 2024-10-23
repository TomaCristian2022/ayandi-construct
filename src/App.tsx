// src/App.tsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AboutSection from './components/About';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
          <AboutSection />
          <ProjectsSection />
         <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
