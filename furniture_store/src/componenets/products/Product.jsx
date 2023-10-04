import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getProductArray, getSortArray, applyFilters, getFilterArray } from '../../Redux/api'; // Import your API actions here
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import './products.css';
import { useSearchParams } from 'react-router-dom';
import { Accordan } from './Accordan';
import { Box, Button, Heading, Progress } from '@chakra-ui/react';

export const Product = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const { product } = useParams()
  const [searchParams, setSearchParams] = useSearchParams();
  const { prod_Array } = useSelector((store) => {
    return store;
  });

  const dispatch = useDispatch();
  // const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductArray(product));
  }, [product]);

 
  const handleSort = (sortVal) => {
    dispatch(getSortArray(sortVal, product));
  };
  const setQueryParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    setSearchParams(params);

  };
  const cat = searchParams.get('cat');
  const manufacturer = searchParams.get('manufacturer');
  const rating = searchParams.get('rating');

  useEffect(()=>{
    dispatch(getFilterArray(cat,manufacturer,rating,product))
  },[searchParams])

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);


  return (
    <div className='abid-Product-main' style={{ border: '2px red' }}>
      <div className='abid-prodnav-div'>
        <h1 className='page-name-abid'>{product}</h1>
        <div className='abid-sorting-div'>
          <Button colorScheme='gray' size='sm' variant='outline' id='dummy-pic'><i class="fa-brands fa-dropbox"></i></Button>
          <Button colorScheme='gray' size='sm' variant='outline' id='dummy-pic'><i class="fa-solid fa-list"></i></Button>
          <Button colorScheme='gray' size='sm' variant='outline' onClick={() => dispatch(getProductArray(product))}>  sort by  <i style={{ marginLeft: "10px" }} class="fa-solid fa-sort"></i></Button>
          <Button colorScheme='gray' size='sm' variant='outline' onClick={() => handleSort('asc')}> <i class="fa-solid fa-arrow-up-wide-short"></i></Button>
          <Button colorScheme='gray' size='sm' variant='outline' onClick={() => handleSort('desc')}><i class="fa-solid fa-arrow-down-wide-short"></i></Button>

        </div>
        <div className='items-abid'>Items 1 to 10 or 216 total</div>
        <div className='abid-view'>View <span style={{ fontWeight: "600", color: "black" }}>5</span> /06/2023/All</div>

      </div>
      <div className='abid-Product-container' style={{ border: '1px black', display: 'flex', justifyContent: 'space-between' }}>
        <div className='abid-product-filter-div' > <Accordan setQueryParam={setQueryParam} /> </div>
        <div className='abid-product-products-div'>

        {prod_Array && prod_Array.length > 0 ? (
  prod_Array.map((elem) => {
    return (
      <ProductCard
        key={elem.id}
        image={elem.image}
        id={elem.id}
        price={elem.price}
        rating={elem.rating}
        discount={elem.discount}
        mrp={elem.mrp}
        name={elem.name}
        quantity={elem.quantity}
      />
    );
  })
) : (
  <Box  width= "100%" margin={["20% 0%","30% 80%"]}>
    <Heading size={['sm','','','']}>Loading Please Wait....</Heading>
    <Progress size='xs' isIndeterminate />
  </Box>
)}
        </div>
      </div>
    </div>
  );
};


/* prod_Array.map((elem) => {
            return (
              <ProductCard
                key={elem.id}
                image={elem.image}
                id={elem.id}
                price={elem.price}
                rating={elem.rating}
                discount={elem.discount}
                mrp={elem.mrp}
                name={elem.name}
                quantity={elem.quantity}
              />
            );
          })*/