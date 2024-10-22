// src/components/AboutSection.tsx
import React from 'react';
import OpenedIsometric from '../assets/Opened_Isometric.webp';
const AboutSection: React.FC = () => {
  return (
    <div className="bg-white my-20 px-4 sm:px-6 lg:px-8 h-full">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-bold text-gray-900 sm:text-4xl sm:leading-10">
            Despre Noi
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Fondată în 1998, firma noastră de construcții a dezvoltat proiecte impresionante de infrastructură, locuințe și edificii comerciale. Ne dedicăm excelenței în fiecare proiect, punând accent pe inovație, durabilitate și eficiență.
          </p>
        </div>

        <div className="m-10">
        <div className="text-center md:grid md:grid-cols-2 md:gap-3 md:text-left">
            <div className="md:flex md:justify-center">
              <img className="md:h-48 md:w-auto md:rounded-lg" src={OpenedIsometric} alt="Imagine reprezentativă firma"/>
            </div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Misiunea Noastră</h3>
              <p className="mt-2 text-base text-gray-500">
                Misiunea noastră este de a construi nu doar clădiri, ci și comunități sustenabile. Ne angajăm să oferim soluții inovatoare care să respecte cele mai înalte standarde de calitate și de protecție a mediului.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
