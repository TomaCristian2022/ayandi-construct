import React from 'react';

const RenovariSection = () => {
  return (
    <section id="renovari" className="bg-gray-200 pb-3 sm:pb-3 lg:pb-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto sm:h-auto md:h-[600px]">
          {/* First major column */}
          <div style={{
              backgroundImage: `url('/assets/galerie/electtrician.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="bg-gray p-6 flex items-end text-center shadow-lg rounded-lg h-[300px] sm:h-[300px] md:h-auto">

            <p className="text-4xl text-white bg-black font-bold text-gray-800 text-start">Nu ai destule prize în casă?</p>
          </div>

          {/* Second major column divided into 1 large and 2 smaller sections */}
          <div className="grid grid-cols-1 gap-4 h-auto">
            <div 
            style={{
              backgroundImage: `url('/assets/galerie/chiuveta.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="bg-sgray flex items-end p-6 text-center shazow-lg rounded-lg border border-white h-[300px] sm:h-[300px] md:h-auto">
              <p className="text-4xl text-white font-bold bg-black text-start">Chiuveta are scurgeri?</p>
            </div>

            <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
              style={{
                backgroundImage: `url('/assets/galerie/gazon.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="bg-ssgray p-6 flex items-end text-center shadow-lg rounded-lg border border-white h-[300px] sm:h-[300px] md:h-auto">
                <p className="text-2xl font-bold bg-black text-white text-start">Iarba din grădină s-a uscat?</p>
              </div>
              <div 
              style={{
                backgroundImage: `url('/assets/galerie/termopan.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="bg-sssgray p-6 flex items-end text-center shadow-lg rounded-lg border border-white h-[300px] sm:h-[300px] md:h-auto">
                <p className="text-2xl font-bold bg-black text-white text-start">Pierzi căldură pe la geamuri?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 container m-0 py-32">
          <h1 className="text-3xl md:text-5xl lg:text-8xl bg-primary text-white font-bold py-3 px-5 text-start">
                Trebuie să renovezi?
            </h1>
    
      </div>
      </div>
    </section>
  );
};

export default RenovariSection;
