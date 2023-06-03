import React from 'react';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Redux/api';

const Product = ({ id, name, price, imageSrc }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = { id, name, price, imageSrc };
    dispatch(addtoCart(product));
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '15px', marginBottom: '20px' }}>
      <img
        src={imageSrc}
        alt={name}
        style={{ width: '200px', height: '200px', objectFit: 'cover', marginBottom: '10px' }}
      />
      <div style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>{name}</div>
      <div style={{ fontSize: '18px', marginBottom: '10px' }}>${price}</div>
      <button
        onClick={handleAddToCart}
        style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none' }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
