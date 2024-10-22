// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">Links</h3>
            <ul>
              <li><a href="#home" className="hover:underline">Acasă</a></li>
              <li><a href="#about" className="hover:underline">Despre Noi</a></li>
              <li><a href="#projects" className="hover:underline">Proiecte</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="path_to_facebook_icon" alt="Facebook"/></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="path_to_twitter_icon" alt="Twitter"/></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src="path_to_linkedin_icon" alt="LinkedIn"/></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-4 mt-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Firma de Construcții. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
