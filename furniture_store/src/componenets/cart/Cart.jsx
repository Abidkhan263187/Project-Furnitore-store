

import React, { useState } from 'react';


const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 1,
      imageSrc:
        'https://images.unsplash.com/photo-1594224457860-23bdb45f8e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      quantity: 1,
      imageSrc:
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30,
      quantity: 1,
      imageSrc:
        'https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
  ]);

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ fontSize: '30px', marginBottom: '20px',color:'blue' }}>Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '15px',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={item.imageSrc}
              alt={item.name}
              style={{ width: '120px', height: '120px', marginRight: '10px', objectFit: 'cover' }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', marginBottom: '10px' ,fontWeight: 'bold', fontSize: '20px'}}>{item.name}</div>
              <div style={{ fontSize: '20px', color: '#666',fontWeight: 'bold' }}>${item.price}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px', marginRight: '20px' }}>
              <button
                onClick={() => decreaseQuantity(item.id)}
                disabled={item.quantity <= 1}
                style={{ marginRight: '10px', padding: '8px 10px', background: '#007bff',
                color: '#fff', }}
              >
                -
              </button>
              <span style={{ margin: '0 10px' , fontWeight: 'bold', fontSize: '20px'}}>{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                style={{ marginRight: '10px', padding: '8px 10px', background: '#007bff',
                color: '#fff',}}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}

      <div style={{ borderTop: '1px solid #ccc', marginTop: '20px', paddingTop: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Total: ${getTotalPrice()}</div>
        </div>
        <button
          style={{
            width: '100%',
            marginTop: '20px',
            padding: '10px',
            background: '#ffcc01',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Checkout
        </button>
      </div>
      
    </div>
  );
};

export default Cart;