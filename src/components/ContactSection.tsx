// src/components/ContactSection.tsx
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-9 font-bold bg-black text-primary sm:text-4xl sm:leading-10">
           Transformă-ți visul în ralitate cu Ayandi Construct!
          </h2>
          <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:mt-4">
            Contactează-n acum
            </p>
        </div>
        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Nume</label>
            <input type="text" name="name" id="name" autoComplete="name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Nume complet"/>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" name="email" id="email" autoComplete="email" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Adresa de email"/>
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Telefon</label>
            <input type="tel" name="phone" id="phone" autoComplete="tel" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Număr de telefon"/>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Mesaj</label>
            <textarea id="message" name="message" rows={4} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder="Mesajul tău"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-700">
              Trimite mesaj
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
