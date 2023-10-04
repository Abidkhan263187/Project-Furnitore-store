import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Flex, HStack, Heading, Image, Text, VStack, useDisclosure } from '@chakra-ui/react';


export const Navbar = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const access=JSON.parse(sessionStorage.getItem('Fur_user'))||''
  const name=JSON.parse(sessionStorage.getItem('userName'))||''
  const city=JSON.parse(localStorage.getItem('city'))||''
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

  const handleLogout=()=>{
 sessionStorage.clear()
 window.location.href='/'
  }

  return (
    <>
      <div className={`abid-nav-container ${isScrolled ? 'sticky' : ''}`}>
        <Box className='abid-nav1'>
          <Image onClick={()=>navigate('/')} class="nav_logo" src='https://w7.pngwing.com/pngs/729/1006/png-transparent-furniture-logo-home-design-angle-building-triangle-thumbnail.png'/>
          <Link to={'/chairs'} className='abid-a' ><h3 id="h4">Chairs</h3></Link>
          <Link to={'/tables'} className='abid-a' ><h3>Tables</h3></Link>
          <Link className='abid-a'><h3>Lamps</h3></Link>
          <Link to={`/sofas`} className='abid-a' ><h3>Sofas</h3></Link>
          <Link to={'/case'} className='abid-a1'><h3>Cases</h3></Link>
          <Link to={'/other'} className='abid-a1'><h3>Others</h3></Link>
          <Text fontSize={'xs'} id="cityname"> <i style={{ color: "orange" }} class="fa-solid fa-location-dot"></i>&nbsp;{city}</Text>
        </Box>

        <div className='abid-nav2'>
          <Box className="abid-search-div">
           
            <input type="search" placeholder='search' className='abid-serach-nav' />
            <button style={{ border: "none" }}> <i id="symbol" className="fa-solid fa-magnifying-glass"></i></button>
          </Box>
          <Flex id="symbols_div">
          <Link to={'/fav'}><p><i className="fa-solid fa-heart"></i></p></Link>
          <Link className='shuffle'> <p><i className="fa-solid fa-shuffle"></i></p></Link>
          <Link to={'/cart'}> <p><i className="fa-sharp fa-solid fa-cart-shopping"></i></p></Link>
          <Link   ><p  >{  access ? <Button size={'sm'} colorScheme="transparent" color={'black'} onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i>&nbsp; {name} </Button> : <Flex justifyContent={'space-between'}  alignItems={'center'} as ={Link}   to ="/login"><Heading size={'md'}>login</Heading>  <i style={{marginLeft:'20px'}} id="symbol_mob_nav" className="fa-solid fa-user"></i></Flex>}</p></Link>
      
          </Flex>
         </div>

        {/*  for mobile */}
        <Flex id='mob_nav' w={'100%'} justifyContent={'space-between'}>
        <Image onClick={()=>navigate('/')} class="nav_logo" src='https://w7.pngwing.com/pngs/729/1006/png-transparent-furniture-logo-home-design-angle-building-triangle-thumbnail.png'/>
        <Button  onClick={isOpen ? onClose : onOpen} size={'sm'} variant={'outline'}colorScheme='black' >Menue</Button>
        </Flex>

        {isOpen && <VStack id="mob_menue">
          <Link onClick={onClose} to={'/chairs'} className='abid-a' ><h3 id="h4">Chairs</h3></Link>
          <Link onClick={onClose} to={'/tables'} className='abid-a' ><h3>Tables</h3></Link>
          <Link onClick={onClose} className='abid-a'><h3>Lamps</h3></Link>
          <Link onClick={onClose} to={`/sofas`} className='abid-a' ><h3>Sofas</h3></Link>
          <Link onClick={onClose} to={'/case'} className='abid-a1'><h3>Cases</h3></Link>
          <Link onClick={onClose} to={'/other'} className='abid-a1'><h3>Others</h3></Link>
          <Link onClick={onClose} to={'/fav'} id='sybmol_mob'><p style={{color:"white"}}> Fav  <i id="symbol_mob_nav" className="fa-solid fa-heart"></i></p></Link>
          <Link onClick={onClose} className='shuffle'> <p > <i id="symbol_mob_nav" className="fa-solid fa-shuffle"></i></p></Link>
          <Link onClick={onClose} to={'/cart'}  id='sybmol_mob'> <p style={{color:"white"}}>  Cart <i id="symbol_mob_nav" className="fa-sharp fa-solid fa-cart-shopping"></i></p></Link>
          <Link onClick={onClose}   ><p style={{color:"white"}} >{  access ? <Button colorScheme="transparent" onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i>&nbsp; {name} </Button> : <Box>login <i id="symbol_mob_nav" className="fa-solid fa-user"></i></Box>}</p></Link>
          </VStack>}
      </div>





    </>
  );
};
