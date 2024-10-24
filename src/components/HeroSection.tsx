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
      autoplaySpeed: 3000,
      adaptiveHeight: false,
      cssEase: "linear",
      fade: true // adding a fade effect between slides
    };

    return (
        <div className="home-hero slider">
          <Slider {...settings}>
            <div>
              <img src={HardHatMockup} alt="Construction Site One" className="object-cover" width="100%"/>
            </div>
            <div>
              <img src={FreeStationeryMockup} alt="Construction Site Two" className="object-cover" width="100%"  />
            </div>
            <div>
              <img src={FreePosterSet} alt="Architect Planning" className="object-cover" width="100%"  />
            </div>
          </Slider>
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> */}
           {/* <button className="px-6 py-2 bg-primary hover:b-2 transition-colors rounded text-lg text-white">Află mai multe</button> */}
          {/* </div> */}
        </div>
      );
    };
    
    export default HeroSection;