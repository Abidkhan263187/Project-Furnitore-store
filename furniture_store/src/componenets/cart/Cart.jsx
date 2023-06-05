

// import React, { useState } from 'react';
// import UserInfo from './UserInfo';


// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: 'Product 1',
//       price: 10,
//       quantity: 1,
//       imageSrc:
//         'https://images.unsplash.com/photo-1594224457860-23bdb45f8e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       price: 20,
//       quantity: 1,
//       imageSrc:
//         'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
//     },
//     {
//       id: 3,
//       name: 'Product 3',
//       price: 30,
//       quantity: 1,
//       imageSrc:
//         'https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
//     },
//   ]);
//   const [checkoutClicked, setCheckoutClicked] = useState(false);

//   const increaseQuantity = (itemId) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) => {
//         if (item.id === itemId) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       })
//     );
//   };

//   const decreaseQuantity = (itemId) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) => {
//         if (item.id === itemId && item.quantity > 1) {
//           return { ...item, quantity: item.quantity - 1 };
//         }
//         return item;
//       })
//     );
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const handleCheckoutClick = () => {
//     setCheckoutClicked(true);
//   };

//   if (checkoutClicked) {
//     return <UserInfo />;
//   }

//   return (
//     <div style={{ padding: '30px' }}>
//       <h1 style={{ fontSize: '30px', marginBottom: '20px',color:'blue' }}>Your Cart</h1>

//       {cartItems.map((item) => (
//         <div
//           key={item.id}
//           style={{
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//             padding: '15px',
//             boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
//             marginBottom: '20px',
            
//           }}
//         >
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <img
//               src={item.imageSrc}
//               alt={item.name}
//               style={{ width: '120px', height: '120px', marginRight: '10px', objectFit: 'cover' }}
//             />
//             <div style={{ flex: 1 }}>
//               <div style={{ fontWeight: 'bold', marginBottom: '10px' ,fontWeight: 'bold', fontSize: '20px'}}>{item.name}</div>
//               <div style={{ fontSize: '20px', color: '#666',fontWeight: 'bold' }}>${item.price}</div>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px', marginRight: '20px' }}>
//               <button
//                 onClick={() => decreaseQuantity(item.id)}
//                 disabled={item.quantity <= 1}
//                 style={{ marginRight: '10px', padding: '8px 10px', background: '#007bff',
//                 color: '#fff', }}
//               >
//                 -
//               </button>
//               <span style={{ margin: '0 10px' , fontWeight: 'bold', fontSize: '20px'}}>{item.quantity}</span>
//               <button
//                 onClick={() => increaseQuantity(item.id)}
//                 style={{ marginRight: '10px', padding: '8px 10px', background: '#007bff',
//                 color: '#fff',}}
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div style={{ borderTop: '1px solid #ccc', marginTop: '20px', paddingTop: '10px' }}>
//         <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//           <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Total: ${getTotalPrice()}</div>
//         </div>
//         <button
//         onClick={handleCheckoutClick}
//           style={{
//             width: '100%',
//             marginTop: '20px',
//             padding: '10px',
//             background: '#ffcc01',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             fontSize: '16px',
//           }}
//         >
//           Checkout
//         </button>
//       </div>
      
//     </div>
//   );
// };

// export default Cart;

//-------------------------------------------------------------------------------------
// For Dynamic data




// import Image from 'next/image';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   incrementQuantity,
//   decrementQuantity,
//   removeFromCart,
// } from '../redux/cart.slice';
// import styles from '../styles/CartPage.module.css';

// const Cart = () => {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

  // const getTotalPrice = () => {
  //   return cart.reduce(
  //     (accumulator, item) => accumulator + item.quantity * item.price,
  //     0
  //   );
  // };


//   import React, { useState } from 'react';
// import UserInfo from './UserInfo';
// import './CartPage.css'
// import { Navbar } from '../Home/Navbar';
// import Footer from '../Home/Footer';


// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: 'Product 1',
//       price: 10,
//       quantity: 1,
//       imageSrc:
//         'https://images.unsplash.com/photo-1594224457860-23bdb45f8e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       price: 20,
//       quantity: 1,
//       imageSrc:
//         'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
//     },
//     {
//       id: 3,
//       name: 'Product 3',
//       price: 30,
//       quantity: 1,
//       imageSrc:
//         'https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
//     },
//   ]);
//   const [checkoutClicked, setCheckoutClicked] = useState(false);

//   const increaseQuantity = (itemId) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) => {
//         if (item.id === itemId) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       })
//     );
//   };

//   const decreaseQuantity = (itemId) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) => {
//         if (item.id === itemId && item.quantity > 1) {
//           return { ...item, quantity: item.quantity - 1 };
//         }
//         return item;
//       })
//     );
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const handleCheckoutClick = () => {
//     setCheckoutClicked(true);
//   };

//   if (checkoutClicked) {
//     return <UserInfo />;
//   }



//   return (<>
//     <Navbar/>
//     <div  className="container" >
//       {cartItems.length === 0 ? (
//         <h1>Your Cart is Empty!</h1>
//       ) : (
//         <>
//         <div className='formboxsd'>
//           <div className="header">
//             <div>Image</div>
//             <div>Product</div>
//             <div>Price</div>
//             <div>Quantity</div>
//             <div>Actions</div>
//             <div>Total Price</div>
//           </div>
//           {cartItems.map((item) => (
//             <div className="body">
//               <div className="image">
//                 <img src={item.imageSrc} height="90" width="65" />
//               </div>
//               <p>{item.name}</p>
//               <p>$ {item.price}</p>
//               <p>{item.quantity}</p>
//               <div className="buttons">
//                 <button onClick={() => increaseQuantity(item.id)}>
//                   +
//                 </button>
//                 <button onClick={() => decreaseQuantity(item.id)}>
//                   -
//                 </button>
//                 {/* <button onClick={() => removeFromCart(item.id)}>
//                   x
//                 </button> */}
//               </div>
//               <p>$ {(item.quantity * item.price).toFixed(2)}</p>
//             </div>
//           ))}
//           <h2>Grand Total: $ {getTotalPrice().toFixed(2)}</h2>
//           <button
//         onClick={handleCheckoutClick}
//           style={{
//             width: '100%',
//             marginTop: '20px',
//             padding: '10px',
//             background: '#ffcc01',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             fontSize: '16px',
//           }}
//         >
//           Checkout
//         </button>
//         </div>
//         </>
//       )}
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default Cart;




// import React, { useState } from 'react';
// import UserInfo from './UserInfo';
// import './CartPage.css';
// import { Navbar } from '../Home/Navbar';
// import Footer from '../Home/Footer';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     // cart items data
    
//           {
//             id: 1,
//             name: 'Product 1',
//             price: 10,
//             quantity: 1,
//             imageSrc:
//               'https://images.unsplash.com/photo-1594224457860-23bdb45f8e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
//           },
//           {
//             id: 2,
//             name: 'Product 2',
//             price: 20,
//             quantity: 1,
//             imageSrc:
//               'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
//           },
//           {
//             id: 3,
//             name: 'Product 3',
//             price: 30,
//             quantity: 1,
//             imageSrc:
//               'https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
//           },
     
//   ]);

//   const [checkoutClicked, setCheckoutClicked] = useState(false);

//   const increaseQuantity = (itemId) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) => {
//         if (item.id === itemId) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       })
//     );
//   };

//   const decreaseQuantity = (itemId) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) => {
//         if (item.id === itemId && item.quantity > 1) {
//           return { ...item, quantity: item.quantity - 1 };
//         }
//         return item;
//       })
//     );
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const handleCheckoutClick = () => {
//     setCheckoutClicked(true);
//   };

//   if (checkoutClicked) {
//     return <UserInfo />;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         {cartItems.length === 0 ? (
//           <h1>Your Cart is Empty!</h1>
//         ) : (
//           <>
//             <div className="formboxsd">
//               <div className="header">
//                 <div>Image</div>
//                 <div>Product</div>
//                 <div>Price</div>
//                 <div>Quantity</div>
//                 <div>Actions</div>
//                 <div>Total Price</div>
//               </div>
//               {cartItems.map((item) => (
//                 <div className="body" key={item.id}>
//                   <div className="image">
//                     <img src={item.imageSrc} height="90" width="65" alt={item.name} />
//                   </div>
//                   <p>{item.name}</p>
//                   <p>$ {item.price}</p>
//                   <p>{item.quantity}</p>
//                   <div className="buttons">
//                     <button onClick={() => increaseQuantity(item.id)}>+</button>
//                     <button onClick={() => decreaseQuantity(item.id)}>-</button>
//                     <button onClick={() => removeFromCart(item.id)}>x</button>
//                   </div>
//                   <p>$ {(item.quantity * item.price).toFixed(2)}</p>
//                 </div>
//               ))}
//               <h2>Grand Total: $ {getTotalPrice().toFixed(2)}</h2>
//               <button
//                 onClick={handleCheckoutClick}
//                 style={{
//                   width: '100%',
//                   marginTop: '20px',
//                   padding: '10px',
//                   background: '#ffcc01',
//                   color: '#fff',
//                   border: 'none',
//                   borderRadius: '4px',
//                   cursor: 'pointer',
//                   fontSize: '16px',
//                 }}
//               >
//                 Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Cart;





//---------------------------------------------------------------------------------------------
// Dynamic cart page if product page works fine 


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity ,decrementQuantity,removeFromCart } from '../../Redux/action';
import './CartPage.css';
import UserInfo from './UserInfo';
import { Navbar } from '../Home/Navbar';
 import Footer from '../Home/Footer';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [checkoutClicked, setCheckoutClicked] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  const handleCheckoutClick = () => {
    setCheckoutClicked(true);
  };

  if (checkoutClicked) {
    return <UserInfo />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        {cart.length === 0 ? (
          <h1>Your Cart is Empty!</h1>
        ) : (
          <>
          <div className="formboxsd">
    <div className="container">
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className="header">
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className="body">
              <div className="image">
                <img src={item.image} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className="buttons">
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice().toFixed(2)}</h2>
        </>
      )}
    </div>
          <button
                          onClick={handleCheckoutClick}
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
                      </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;