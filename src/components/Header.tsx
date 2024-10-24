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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if(targetId){
      const targetElement = document.getElementById(targetId); // Get the target element
    if (targetElement) {
      const topOffset = targetElement.offsetTop - 100; // Calculate the position, 100px above the element
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth' // Enable smooth scrolling
      });
    }
  };  
 };


  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-white bg-opacity-90'}`}>
    <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex-1 flex justify-start">
            <a href="#home">
                <img src={logo} alt="Company Logo" className="h-12 w-auto" />
            </a>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-around ">
            <a href="#home" onClick={handleScroll} className="text-gray-900 text-xl font-medium hover:text-gray-700" aria-current="page">Acasă</a>
            <a href="#despre"  onClick={handleScroll}  className="text-gray-900 text-xl font-medium hover:text-gray-700 mx-4">Despre</a>
            <a href="#proiecte" onClick={handleScroll} className="text-gray-900 text-xl font-medium hover:text-gray-700 mx-4">Proiecte</a>
            <a href="#contact" onClick={handleScroll} className="text-gray-900 text-xl font-medium hover:text-gray-700">Contact</a>
        </div>
        <div className="flex-1 flex justify-end md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700">
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
        </div>
        <div className={`absolute md:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col top-12 right-0 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} bg-white h-auto w-2/5 transition-transform duration-300 ease-in-out`}>
            <div className="flex flex-col items-start p-8 space-y-4">
                <a href="#home" onClick={handleScroll} className="text-gray-900 text-xl font-medium hover:text-gray-700">Acasă</a>
                <a href="#despre" onClick={handleScroll}  className="text-gray-900 text-xl font-medium hover:text-gray-700">Despre</a>
                <a href="#proiecte" onClick={handleScroll} className="text-gray-900 text-xl font-medium hover:text-gray-700">Proiecte</a>
                <a href="#contact" onClick={handleScroll} className="text-gray-900 text-xl font-medium hover:text-gray-700">Contact</a>
            </div>
        </div>
    </nav>
</header>

  );
};

export default Header;
