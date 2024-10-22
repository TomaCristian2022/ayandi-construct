import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo 2 Negru.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-white'}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-around items-center">
        <div>
          <a href="#">
            <img src={logo} alt="Company Logo" className="h-12 w-auto" />
          </a>
         
        
        </div>
        <button onClick={toggleMenu} className="md:hidden text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700">
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
        <div className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:space-x-4 absolute md:static top-12 right-0 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} bg-white h-full md:h-auto w-2/5 md:w-auto transition-transform duration-300 ease-in-out`}>
          <div className="flex flex-col md:flex-row items-start md:items-center p-8 md:p-0 space-y-4 md:space-y-0 md:space-x-4 bg-white ">
            <a href="#home" className="text-gray-900 hover:text-gray-700" aria-current="page">Acasă</a>
            <a href="#despre" className="text-gray-900 hover:text-gray-700">Despre</a>
            <a href="#proiecte" className="text-gray-900 hover:text-gray-700">Proiecte</a>
            <a href="#contact" className="text-gray-900 hover:text-gray-700">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
