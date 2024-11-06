// src/components/HeroSection.tsx
import React from 'react';
import Slider from 'react-slick';
import HardHatMockup from '../assets/Hard_Hat_Mockup_2.webp'; 
import FreeStationeryMockup from '../assets/Free_Stationery_Mockup_3.webp';
import FreePosterSet from '../assets/Free_Poster_Set_Mockup_1.webp';

const HeroSection: React.FC = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
      cssEase: "linear",
      fade: true // adding a fade effect between slides
    };

    return (
      <div id="home" className="home-hero slider relative my-10">
      <Slider {...settings}>
          <div className="relative">
              {/* Opacity Layer */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <img src={FreeStationeryMockup} alt="Construction Site Two" className="object-cover w-full h-full" />
          </div>
          <div className="relative">
              {/* Opacity Layer */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <img src={FreePosterSet} alt="Architect Planning" className="object-cover w-full h-full" />
                  </div>
              </Slider>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className='text-l sm:text-l md:text-3xl text-white font-bold py-10'>Ayandi Construct este partenerul tău de încredere pentru toate nevoile de construcție și renovare.</h1>
                  <button className="mt-4 px-6 py-2 bg-primary hover:bg-gray-700 transition-colors rounded text-l sm:text-l md:text-lg text-white">Află mai multe</button>
              </div>
          </div>
          
      );
    };
    
    export default HeroSection;
