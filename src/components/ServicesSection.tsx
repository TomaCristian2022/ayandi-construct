import React from "react";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: 1,
    title: "Construcții la cheie",
    description:
      "",
  },
  {
    id: 2,
    title: "Renovări și remodelări",
    description:
      "",
  },
  {
    id: 3,
    title: "Tâmplărie PVC",
    description:
      "",
  }, {
    id: 4,
    title: "Instalații electrice",
    description:
      "",
  },
  {
    id: 5,
    title: "Montare de gresie și faianță",
    description:
      "",
  },
  {
    id: 6,
    title: "Zidărie și tâmplărie",
    description:
      "",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicii" className="bg-gray-100 py-3 md:py-32">
        <div className="container mx-auto px-6 ">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Fie că îţi doreşti o bucătărie modernă sau un spațiu de relaxare în aer liber, suntem pregătiţi să transformăm visurile tale în realitate.
          </h2>
          <div className="flex flex-wrap justify-center">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="w-full lg:w-1/2 container m-0 py-32">
              <h1 className="text-3xl md:text-5xl lg:text-8xl bg-primary text-white font-bold py-3 px-5 text-start">
                  Vrei să construiești?
              </h1>
          </div>

        </div>
  </section>
  
  );
};

export default ServicesSection;
