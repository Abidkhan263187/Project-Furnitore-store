import React from 'react'
import { Link } from 'react-router-dom'
import Slideshow from './SlideShow'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './home.css'
import Slider from './Slider';
import { SlideCard } from './SlideCard';
import { BestSeller } from './BestSeller';
import { SecondNav } from './SecondNav';
import Footer from './Footer';
import { Category } from './Category';

export const Home = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const responsiveBestSeller = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <><SecondNav /><div className='home'>
      <div>
        <Slideshow />
      </div>

      <div className='sbc'>
        <h1>Shop By Categories</h1>
      </div>
      <div className='abid-cat-div'>

        <Category name={"Furniture"} img={"https://hometown.gumlet.io/media/cms/hometownnew/desktopnewhomepage/shopbycat/shopbycat01.png?dpr=1.0&q=70&w=200"} />
        <Category name={"Sofas"} img={"https://hometown.gumlet.io/media/cms/hometownnew/desktopnewhomepage/shopbycat/shopbycat02.png?dpr=1.0&q=70&w=200"} />
        <Category name={"Reclines"} img={"https://hometown.gumlet.io/media/cms/hometownnew/desktopnewhomepage/shopbycat/shopbycat03.png?dpr=1.0&q=70&w=200"} />
        <Category name={"Dinning Set"} img={"https://hometown.gumlet.io/media/cms/icons/bahubali-dining.png?dpr=1.0&q=70&w=200"} />
        <Category name={"Bedroom"} img={"https://hometown.gumlet.io/media/cms/icons/astra.png?dpr=1.0&q=70&w=200"} />
        <Category name={"BookShelves"} img={" https://hometown.gumlet.io/media/cms/hometownnew/desktopnewhomepage/shopbycat/shopbycat08.png?dpr=1.0&q=70&w=200"} />

      </div>

      <div className='abid-cat-div2'>

        <Category name={"Shoe Rocks"} img={"https://hometown.gumlet.io/media/cms/New%20desktop/shoerack1.png?w=200&dpr=1.0"} />
        <Category name={"Wardrobes"} img={"https://hometown.gumlet.io/media/cms/hometownnew/desktopnewhomepage/shopbycat/shopbycat06.png?w=200&dpr=1.0"} />
        <Category name={"Mattresses"} img={"https://hometown.gumlet.io/media/cms/icons/front-mattres1.png?w=200&dpr=1.0"} />
        <Category name={"Decors"} img={"https://hometown.gumlet.io/media/cms/hometownnew/desktopnewhomepage/shopbycat/shopbycat09.png?w=200&dpr=1.0"} />
        <Category name={"Furnishing"} img={"https://hometown.gumlet.io/media/cms/hometownnew/desktopnewhomepage/shopbycat/shopbycat11.png?w=200&dpr=1.0"} />
        <Category name={"Tableware & Kithenware"} img={"https://hometown.gumlet.io/media/cms/hometownnew/desktopnewhomepage/shopbycat/shopbycat12.png?w=200&dpr=1.0"} />

      </div>


      <div className='abid-room-Container'>
        <div><h1>Shop By Room</h1></div>
        <div className='abid-shopby-room'>

          <Carousel responsive={responsive}>
            <SlideCard name={"Living Room "} img={"https://hometown.gumlet.io/media/cms/New%20desktop/bradford.jpg?dpr=1.0&q=70&w=576"} />
            <SlideCard name={"Dinning "} img={"https://hometown.gumlet.io/media/cms/New%20desktop/Dining-setA1.jpg?dpr=1.0&q=70&w=576"} />
            <SlideCard name={"Bed Room"} img={"https://hometown.gumlet.io/media/cms/New%20desktop/Casablanca-Bed_1.jpg?w=576&dpr=1.0"} />
            <SlideCard name={"Kids Room"} img={"https://hometown.gumlet.io/media/cms/icons/bunk-bed13.jpg?w=576&dpr=1.0"} />
          </Carousel>
        </div>
      </div>



      <div className='abid-best-sellers'>
        <div><h1>Best Sellers</h1></div>

        <div className='Best-sellers-div'>
          <Carousel responsive={responsiveBestSeller}>
            <BestSeller name={"Bolton Queen bed with Hydraulic storage in Wenge.."} price={"5,999"} mrp={"7,459"} img={"https://hometown.gumlet.io/media/cms/New%20desktop/bradford.jpg?dpr=1.0&q=70&w=576"} />
            <BestSeller name={"Prime 2 door wardrobe in Wenge Colour"} price={"12,999"} mrp={"19,999"} img={"https://hometown.gumlet.io/media/product/62/4453/13235/1.jpg?mode=fill&w=279.5&h=279.5&dpr=1.0"} />
            <BestSeller name={"Arrow PVC Office Chair in Black Colour"} price={"10,999"} mrp={"14,999"} img={"https://hometown.gumlet.io/media/product/34/9553/33603/1.jpg?mode=fill&w=279.5&h=279.5&dpr=1.0"} />
            <BestSeller name={"Saville King Size Bed with Hydraulic Storage in Dark..."} price={"42,999"} mrp={"59,459"} img={"https://hometown.gumlet.io/media/product/07/8963/35577/1.jpg?mode=fill&w=279.5&h=279.5&dpr=1.0"} />
            <BestSeller name={"Bolton King bed with Box storage in Wenge Colour"} price={"29,999"} mrp={"49,999"} img={"https://hometown.gumlet.io/media/product/43/8153/54285/1.jpg?mode=fill&w=279.5&h=279.5&dpr=1.0"} />
            <BestSeller name={"Allen 4 door wardrobe in Walnut Colour"} price={"11,999"} mrp={"2,9999"} img={"https://hometown.gumlet.io/media/product/94/3063/18556/1.jpg?mode=fill&w=279.5&h=279.5&dpr=1.0"} />

          </Carousel>
        </div>
      </div>

      <div className="abid-slide-div"> <h1>Top Offers</h1> <Slider /> </div>
      <div> <Footer /></div>
    </div></>


  )
}
