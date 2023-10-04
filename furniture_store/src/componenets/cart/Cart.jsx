
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartArray, removeFromCart } from '../../Redux/api';
import { Button, Heading, Progress, Text } from '@chakra-ui/react';
import "./Cart.css"
import { backIn } from 'framer-motion';
import { cartTotal } from '../../Redux/action';

export const Cart = () => {
  const [show, setShow] = useState(false)
  const [total, setTotal] = useState()
  const dispatch = useDispatch()
  const { cart } = useSelector((store) => {
    return store
  })

  useEffect(() => {
    dispatch(getCartArray())

  }, [show])
  
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);


  useEffect(() => {
    setCartItems(cart);

  }, [cart, show]);


  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>prevItems.map((item) => {
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




  useEffect(() => {
    let totalVal = cartItems.length > 0 && cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotal(totalVal)
    dispatch(cartTotal(totalVal))
  }, [cartItems])

  const handleRemove = (id) => {

    dispatch(removeFromCart(id));
    show ? setShow(false) : setShow(true)
  };
  return (
    <div className='abid-cart-boss'>

  
    <div className='cart-container' style={{ padding: '30px' }}>
      <Heading textAlign={"start"} color={"#404040"} marginBottom={"20px"} >Your Orders</Heading>
      <div>
        {cartItems.length > 0 ?
          (cartItems.map((item) => (
            <div className='cart-main' key={item.id}   >
              <div className='cart-card-div'>
                <div className='cart-img-div'> <img src={item.image} alt={item.name} /> </div>

                <div style={{ flex: 1 }}>
                  <div className='cart-item-name' >{item.name}</div>
                  <div style={{ fontSize: '20px', color: '#666', fontWeight: 'bold' }}>${item.price}</div>
                </div>
                <div className='cart-item-div'>
                  <Button size={["xs", "sm", "sm", "sm"]}
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={item.quantity <= 1}
                    style={{
                      marginRight: '10px', padding: '8px 10px', background: '#ff9015',
                      color: '#fff',
                    }}
                  >
                    -
                  </Button  >
                  <span className='cart-quantity'>{item.quantity}</span>
                  <Button size={["xs", "sm", "sm", "sm"]}
                    onClick={() => increaseQuantity(item.id)}
                    style={{
                      marginRight: '10px', padding: '8px 10px', background: '#ff9015',
                      color: '#fff',
                    }}
                  >
                    +
                  </Button >

                </div>
                <Button size={["xs", "sm", "sm", "sm"]} variant={"outline"} className='cart-remove-btn' onClick={() => handleRemove(item.id)}><i class="fa-solid fa-trash"></i></Button >
              </div>
            </div>
          ))) : (<Heading >Loading Please Wait..... <Progress size='xs' isIndeterminate /></Heading>)}

        <div style={{ borderTop: '1px solid #ccc', marginTop: '20px', paddingTop: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Total: ${total?total:"0"}</div>
          </div>

          <Link to={'/userinfo'}>
            <Button size={"sm"}
            id='checkout-abid'
             
            >
              Checkout
            </Button >
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}





