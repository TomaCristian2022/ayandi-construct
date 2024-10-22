// src/components/ProjectsSection.tsx
import React from 'react';
import Proiect1 from '../assets/proiect1.png';
import Proiect2 from '../assets/proiect2.jpg';
import Proiect3 from '../assets/proiect3.jpg';



const ProjectsSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-9 font-bold text-gray-900 sm:text-4xl sm:leading-10">
            Proiectele Noastre
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Descoperiți unele dintre cele mai impresionante proiecte dezvoltate de echipa noastră.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            image={Proiect1}
            title="Complex rezidențial Skyline"
            description="Un ansamblu modern de apartamente situat în inima orașului, oferind facilități de top și un design arhitectural de avangardă."
          />
          <ProjectCard
            image={Proiect2}
            title="Centrul Comercial Plaza"
            description="Renovarea și extinderea unui centru comercial major, inclusiv adăugarea de noi spații comerciale și zonă de recreere pentru copii."
          />
          <ProjectCard
            image={Proiect3}
            title="Podul Libertății"
            description="Construirea unui nou pod care să faciliteze traficul urban și să ofere o soluție durabilă pentru creșterea mobilității în zona metropolitană."
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

const ProjectCard: React.FC<{ image: string, title: string, description: string }> = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};
