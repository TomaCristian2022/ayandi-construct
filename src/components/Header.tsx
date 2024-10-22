// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo 2 Negru.png'; 


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-white'}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <img src={logo} alt="Company Logo" className="h-12 w-auto" />
        </div>
        <div className="space-x-4">
          <a href="#home" className="text-gray-900 hover:text-gray-700" aria-current="page">Acasă</a>
          <a href="#despre" className="text-gray-900 hover:text-gray-700">Despre</a>
          <a href="#proiecte" className="text-gray-900 hover:text-gray-700">Proiecte</a>
          <a href="#contact" className="text-gray-900 hover:text-gray-700">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
