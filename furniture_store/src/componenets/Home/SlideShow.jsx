import React, { useEffect, useState } from 'react';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [ "https://hometown.gumlet.io/media/cms/icons/Web-banner_home-makeover_1.jpg?dpr=1.0&q=70&w=1366",
  "https://hometown.gumlet.io/media/cms/Home_Town_Make_Over_Banner_1920x590px-01.jpg?dpr=1.0&q=70&w=1366",
  "https://hometown.gumlet.io/media/cms/icons/MK.jpg?dpr=1.0&q=70&w=1366",
  "https://hometown.gumlet.io/media/cms/icons/front-casablanca.jpg?w=1366&dpr=1.0",
  "https://hometown.gumlet.io/media/cms/icons/front-dining.jpg?w=1366&dpr=1.0"
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={images[currentIndex]} className='abid-slide-images' />
    </div>
  );
};

export default Slideshow;