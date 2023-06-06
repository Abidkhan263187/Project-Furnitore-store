import React, { useState } from 'react';
import './Nav2.css'
import { Link } from 'react-router-dom';

 export const SecondNav = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };
  const toggleDropdown4 = () => {
    setShowDropdown4(!showDropdown4);
  };
  const toggleDropdown5 = () => {
    setShowDropdown5(!showDropdown5);
  };

  return (
    <nav className="navbar">
      
      <ul className="nav-links">
        
        <li onMouseEnter={toggleDropdown1} onMouseLeave={toggleDropdown1}>
          <a href="/">Dining Chairs</a>
          {showDropdown1 && (
            <div className="dropdown-menu1">
              <a href="/" style={{color:"#FF9215",fontWeight:"700"}}> Best Seller</a>
             
              <a href="/"></a>
              <a href="/"></a>
           
              <a href="/">Arm Chair</a>
              <a href="/">Windsor Chair</a>
              <a href="/"> Wishbone Chair</a>
              <a href="/">Barcelona Chair</a>
              <a href="/">Tullip Chair</a>
              <a href="/"> Adirondack chair</a>
              <a href="/">Plastic Dining Chair</a>
              <a href="/">Arm Chair</a>
              <a href="/">Windsor Chair</a>
              <a href="/"> Wishbone Chair</a>
              <a href="/">Barcelona Chair</a>
              <a href="/">Tullip Chair</a>
            </div>
          )}
        </li>
        <li onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
          <a href="/">Living sofas</a>
          {showDropdown2 && (
            <div className="dropdown-menu1">
                <a href="/" style={{color:"#FF9215",fontWeight:"700"}}> Best Floring</a>
             
             <a href="/"></a>
             <a href="/"></a>
          
              <a href="/">Hall Sofas</a>
              <a href="/">Fabric Sofas</a>
              <a href="/">Wooden Sofas</a>
              <a href="/">Leather Sofas</a>
              <a href="/">Worner Sofas</a>
              <a href="/">Corner Sofas</a>
              <a href="/">Bed Sofas</a>
              <a href="/">Lounger Sofas</a>
              <a href="/">Corner Sofas</a>
            </div>
          )}
        </li>
        <li onMouseEnter={toggleDropdown3} onMouseLeave={toggleDropdown3}>
          <a href="/">Bedside Tables</a>
          {showDropdown3 && (
            <div className="dropdown-menu1">
              <a href="/" style={{color:"#FF9215",fontWeight:"700"}}> Well Furnished</a>
             
             <a href="/"></a>
             <a href="/"></a>
            
              <a href="/">Drawer Table</a>
              <a href="/">Round Table</a>
              <a href="/">Light Table</a>
              <a href="/">Glass Table</a>
              <a href="/">Wooden Table</a>
              <a href="/">Light Table</a>
              <a href="/">Marble Table</a>
              <a href="/">Acquast Table</a>
              <a href="/">Pillo Table</a>
            </div>
          )}
        </li>
        <li onMouseEnter={toggleDropdown4} onMouseLeave={toggleDropdown4}> <Link>Cocktails Chairs</Link>
       {showDropdown4 && (
            <div className="dropdown-menu1">
              <a href="/" style={{color:"#FF9215",fontWeight:"700"}}> Classic Design</a>
             
             <a href="/"></a>
             <a href="/"></a>
            
              <a href="/">Accent</a>
              <a href="/">Sactional Chair</a>
              <a href="/">Windsor</a>
              <a href="/">Rocking Chair</a>
              <a href="/">Wishbone Chair</a>
              <a href="/">Panton Chair</a>
              <a href="/">Tillip Chair</a>
              <a href="/">Womb Chair</a>
              <a href="/">Club Chair</a>
            </div>
          )}
          </li>
       <li onMouseEnter={toggleDropdown5} onMouseLeave={toggleDropdown5}> <Link>Office Chairs</Link>
       {showDropdown5 && (
            <div className="dropdown-menu1">
                  <a href="/" style={{color:"#FF9215",fontWeight:"700"}}> Luxu Design</a>
             
             <a href="/"></a>
             <a href="/"></a>
          
              <a href="/">Chaise Chair</a>
              <a href="/">Folding Chair</a>
              <a href="/">Accent</a>
              <a href="/">Modern Chair</a>
              <a href="/">Sactional Chair</a>
              <a href="/">Windsor</a>
              <a href="/">Rocking Chair</a>
              <a href="/">Wishbone Chair</a>
              <a href="/">Panton Chair</a>
              <a href="/">Tillip Chair</a>
              <a href="/">Womb Chair</a>
              <a href="/">Club Chair</a>
              <a href="/">Loverseat Chair</a>
              <a href="/">Kartell Chair</a>
              <a href="/">Eames Chair</a>
            </div>
          )}
       </li>


<li><Link>Coffee Tables</Link></li>
<li><Link>Office Desks</Link></li>
<li><Link>Wall Lamps</Link></li>
<li><Link>Table Lamps</Link></li>
<li><Link>Living Sofas</Link></li>
<li><Link>Chaises</Link></li>
<li><Link>Bookcases</Link></li>
<li><Link>Organises</Link></li>
<li><Link>Vases</Link></li>
<li><Link>Cases</Link></li>
<li ><Link>Clocks</Link></li>
      </ul>
    </nav>
  );
};


