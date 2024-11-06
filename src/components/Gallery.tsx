import React, { useRef, useEffect, useState } from 'react';

interface ImageData {
  src: string[];
  title: string;
}

interface ScrollSetting {
  speed: number;
  direction: number;
}

const Gallery: React.FC = () => {
  const sections: ImageData[] = [
    {
      title: 'Beton Amprentat',
      src: [
        '/assets/galerie/beton_amprentat/Ayandi Construct 1.webp',
        '/assets/galerie/beton_amprentat/Ayandi Construct 2.webp',
        '/assets/galerie/beton_amprentat/Ayandi Construct 3.webp',
        '/assets/galerie/beton_amprentat/Ayandi Construct 4.webp',
        '/assets/galerie/beton_amprentat/Ayandi Construct 5.webp',
        '/assets/galerie/beton_amprentat/Ayandi Construct 6.webp',
        '/assets/galerie/beton_amprentat/Ayandi Construct 7.webp',
        '/assets/galerie/beton_amprentat/Ayandi Construct 8.webp',
        '/assets/galerie/beton_amprentat/Ayandi Construct 9.webp',
        '/assets/galerie/beton_amprentat/Ayandi Construct 10.webp',
        
      ],
    },
    {
      title: 'Gazon și Irigație',
      src: [
        './assets/galerie/gazon_irigatie/Ayandi Construct Gazon 1.webp',
        './assets/galerie/gazon_irigatie/Ayandi Construct Gazon 2.webp',
        './assets/galerie/gazon_irigatie/Ayandi Construct Gazon 3.webp',
        './assets/galerie/gazon_irigatie/Ayandi Construct Gazon 3.webp',
        './assets/galerie/gazon_irigatie/Ayandi Construct Gazon 5.webp',
        './assets/galerie/gazon_irigatie/Ayandi Construct Gazon 6.webp',
        './assets/galerie/gazon_irigatie/Ayandi Construct Gazon 7.webp',
        './assets/galerie/gazon_irigatie/Ayandi Construct Gazon 8.webp',
        './assets/galerie/gazon_irigatie/Ayandi Construct Gazon 9.webp',
        './assets/galerie/gazon_irigatie/Ayandi Construct Gazon 10.webp',
    ],
    }
  ];


  const [scrollRefs, setScrollRefs] = useState<React.RefObject<HTMLDivElement>[]>([]);
  const [scrollSettings, setScrollSettings] = useState<ScrollSetting[]>([]);

  useEffect(() => {
    // Initialize refs and scroll settings for each section
    setScrollRefs(sections.map(_ => React.createRef<HTMLDivElement>()));
    setScrollSettings(sections.map((_, i) => ({
      speed: 1 + i,  // Increasing speed for each subsequent section
      direction: 1   // Initial direction right
    })));
  }, [sections.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRefs.forEach((ref, index) => {
        if (ref.current && index < scrollSettings.length) {
          const div = ref.current;
          let setting = scrollSettings[index];
          
          if (div.scrollLeft >= (div.scrollWidth - div.clientWidth) && setting.direction !== -1) {
            setting.direction = -1;
          } else if (div.scrollLeft <= 0 && setting.direction !== 1) {
            setting.direction = 1;
          }

          div.scrollLeft += setting.speed * setting.direction;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [scrollRefs, scrollSettings]);

  return (
    <section id="galerie" className="py-20 bg-gray-100">
      {sections.map((section, index) => (
        <div key={index} className="mb-20">
        <div className='w-fit mx-auto'>
                <h2 className="text-center text-3xl bg-primary  font-bold text-gray-800 mb-2">{section.title}</h2>
          </div>
          <div ref={scrollRefs[index]} className="flex overflow-x-auto space-x-1 scrollbar-hide">
            {section.src.map((src, idx) => (
              <img key={idx} src={src} alt={`${section.title} ${idx + 1}`} className="block min-w-[200px] h-auto" />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;