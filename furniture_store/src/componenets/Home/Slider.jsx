
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Slider = () => {
  const sliderRef = useRef(null);
  let sliderInterval;
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for reverse

  useEffect(() => {
    const slider = sliderRef.current;
  

    const scroll = () => {
      const { scrollLeft, clientWidth, scrollWidth } = slider;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (scrollLeft >= maxScrollLeft) {
        setScrollDirection(-1);
      } else if (scrollLeft <= 0) {
        setScrollDirection(1);
      }

      slider.scrollLeft += scrollDirection;
    };

    sliderInterval = setInterval(scroll, 20);

    slider.addEventListener('mouseenter', () => {
      clearInterval(sliderInterval);
    });

    slider.addEventListener('mouseleave', () => {
      sliderInterval = setInterval(scroll, 20);
    });

    return () => {
      clearInterval(sliderInterval);
    };
  }, [scrollDirection]);

  return (
    <div className="slider-abid"  ref={sliderRef}>
        
      <div className="slide">
        <div>
        <img src="https://hometown.gumlet.io/media/cms/icons/shoeRacks2.jpg?dpr=1.0&q=70&w=240" alt="" />
        <div className='abid-slideshow-detail'>
        <p>Shoeracks</p>
           <p className='slide-price-abid'><span style={{color:"#323232"}}>Starting</span>  ₹4,999</p>
           <Link><p>Shop Now</p></Link> 
        </div> 
        </div>
      </div>
      <div className="slide">
       
        <div>
        <img src="https://hometown.gumlet.io/media/cms/icons/storageCabinets2.jpg?dpr=1.0&q=70&w=240" alt="" />
        <div className='abid-slideshow-detail'>
        <p>Storage Cabinets</p>
           <p className='slide-price-abid'><span style={{color:"#323232"}}>Starting</span> ₹2,599</p>
           <Link><p>Shop Now</p></Link> 
        </div> 
        </div>
      </div>
      <div className="slide">
       
       <div>
       <img src="https://hometown.gumlet.io/media/cms/categories/furniture/shopbyCat11.png?dpr=1.0&q=70&w=240" alt="" />
       <div className='abid-slideshow-detail'>
       <p>Bookshelves</p>
          <p className='slide-price-abid'><span style={{color:"#323232"}}>Starting</span> ₹6,999</p>
          <Link><p>Shop Now</p></Link> 
       </div> 
       </div>
     </div>

     <div className="slide">
       
        <div>
        <img src="https://hometown.gumlet.io/media/cms/icons/tvUnits2.jpg?dpr=1.0&q=70&w=240" alt="" />
        <div className='abid-slideshow-detail'>
        <p>Tv Units</p>
           <p className='slide-price-abid'><span style={{color:"#323232"}}>Starting</span> ₹759</p>
           <Link><p>Shop Now</p></Link> 
        </div> 
        </div>
      </div>


      <div className="slide">
       
        <div>
        <img src="https://hometown.gumlet.io/media/cms/categories/furniture/centerTables.png?w=240&dpr=1.0" alt="" />
        <div className='abid-slideshow-detail'>
        <p>Center Tables</p>
           <p className='slide-price-abid'><span style={{color:"#323232"}}>Starting</span> ₹3,399</p>
           <Link><p>Shop Now</p></Link> 
        </div> 
        </div>
      </div>

      <div className="slide">
       
        <div>
        <img src="https://hometown.gumlet.io/media/cms/categories/furniture/homeofficeTable.png?dpr=1.0&q=70&w=360" alt="" />
        <div className='abid-slideshow-detail'>
        <p>Office Tables</p>
           <p className='slide-price-abid'><span style={{color:"#323232"}}>Starting</span> ₹7,999</p>
           <Link><p>Shop Now</p></Link> 
        </div> 
        </div>
      </div>
      {/* Add more slide items as needed */}
    </div>
  );
};

export default Slider;
