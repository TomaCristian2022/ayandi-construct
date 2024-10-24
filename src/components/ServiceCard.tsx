import React from 'react';
import { IoConstruct } from 'react-icons/io5'; // Ensure you have this icon imported

interface ServiceCardProps {
    title: string;
    description: string;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col justify-between h-full rounded overflow-hidden shadow-lg m-4 bg-white p-10" style={{ minWidth: "300px", maxWidth: "300px" }}>
            <IoConstruct className="text-gray-500 mx-auto text-3xl" />
            <div className="text-center">
                <h3 className="font-bold text-xl mb-2 flex justify-center items-center" style={{height:"56px"}}>{title}</h3>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="text-center mt-4">
                <a href="#contact" className="px-6 py-2 bg-primary hover:bg-gray-700 transition-colors rounded text-lg text-white">Cere o ofertă</a>
            </div>
        </div>
    );
};

export default ServiceCard;

