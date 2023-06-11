import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import { useSelector } from 'react-redux';


export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {access,name}=useSelector((store)=>{
    return store;
  })
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Check if the user has scrolled down more than a certain threshold (e.g., 100px)
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`abid-nav-container ${isScrolled ? 'sticky' : ''}`}>
        <div className='abid-nav1'>
          <Link to={"/"}><h2 className='nav-logo' style={{ border: "1px solid", width: "50px", background: "black", color: "white" }}><i className="fa-solid fa-m"></i></h2></Link>
          <Link to={'/chairs'} className='abid-a' ><h3 id="h4">Chairs</h3></Link>
          <Link to={'/tables'} className='abid-a' ><h3>Tables</h3></Link>
          <Link className='abid-a'><h3>Lamps</h3></Link>
          <Link to={`/sofas`} className='abid-a' ><h3>Sofas</h3></Link>
          <Link to={'/case'} className='abid-a1'><h3>Cases</h3></Link>
          <Link to={'/other'} className='abid-a1'><h3>Others</h3></Link>
        </div>
        <div className='abid-nav2'>
          <div className="abid-search-div">
            <button style={{ background: "white", border: "none" }}> <i className="fa-solid fa-magnifying-glass"></i></button>
            <input type="search" placeholder='search' className='abid-serach-nav' />
          </div>
          <Link to={'/fav'}><p><i className="fa-solid fa-heart"></i></p></Link>
          <Link className='shuffle'> <p><i className="fa-solid fa-shuffle"></i></p></Link>
          <Link to={'/cart'}> <p><i className="fa-sharp fa-solid fa-cart-shopping"></i></p></Link>
          <Link to={'/signup'} ><p>{access?name:<i className="fa-solid fa-user"></i>}</p></Link>
        </div>
        <div className='abid-nav3'>
          <Link><p><i className="fa-solid fa-bars"></i></p></Link>
        </div>
      </div>
    </>
  );
};
