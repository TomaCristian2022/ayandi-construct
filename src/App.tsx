// src/App.tsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import RenovariSection from './components/RenovariSection';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
          <ServicesSection />
          <RenovariSection />

         <Gallery />
         <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
