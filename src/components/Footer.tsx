// src/components/Footer.tsx
import React from "react";
import { FaFacebookF, FaTiktok, FaLinkedinIn, FaYoutube } from "react-icons/fa"; // Import specific icons

const Footer: React.FC = () => {

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
    <footer className="bg-footer text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">Links</h3>
            <ul>
              <li>
                <a onClick={handleScroll} href="#home" className="hover:underline">
                  Acasă
                </a>
              </li>
              <li>
                <a href="#despre"  onClick={handleScroll} className="hover:underline">
                  Despre Noi
                </a>
              </li>
              <li>
                <a href="#proiecte"  onClick={handleScroll} className="hover:underline">
                  Proiecte
                </a>
              </li>
              <li>
                <a href="#servicii"  onClick={handleScroll} className="hover:underline">
                  Servicii
                </a>
              </li>
              <li>
                <a href="#contact"  onClick={handleScroll} className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold pb-5">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61557992285170"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@ayandiconstruct"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCF2cA6CY_BbDVZg-9FqmhwQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-4 mt-8">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Ayandi Construct. Toate
            drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
