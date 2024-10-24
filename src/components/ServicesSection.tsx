import React from 'react';
import ServiceCard from './ServiceCard';

const servicesData = [
    { id: 1, title: 'Proiectare Arhitecturală', description: 'Servicii complete de planificare și proiectare arhitecturală pentru a aduce viziunile dumneavoastră la viață.' },
    { id: 2, title: 'Managementul Construcțiilor', description: 'Soluții profesionale de management care asigură finalizarea proiectelor de construcție la timp și în cadrul bugetului.' },
    { id: 3, title: 'Renovări de Clădiri', description: 'Modernizați-vă structurile existente cu soluțiile noastre de renovare moderne, adaptate nevoilor dumneavoastră.' }
];

const ServicesSection = () => {
    return (
        <section id="servicii" className="bg-gray-100 py-8">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Serviciile noastre</h2>
                <div className="flex flex-wrap justify-center">
                    {servicesData.map(service => (
                        <ServiceCard key={service.id} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
