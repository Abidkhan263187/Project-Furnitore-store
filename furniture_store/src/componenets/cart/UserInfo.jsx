

// import React, { useState } from 'react';
// import "./UserInfo.css"
// import PaymentPage from './PaymentPage';

// const UserInfo = () => {
//   const [userInfo, setUserInfo] = useState({
//     name: '',
//     email: '',
//     address: '',
//     phone: '',
//   });

//   const [promoCode, setPromoCode] = useState('');
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [showPaymentPage, setShowPaymentPage] = useState(false);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserInfo((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handlePromoCodeChange = (event) => {
//     setPromoCode(event.target.value);
//   };

//   const handleNextClick = () => {
//     // Perform next button action here
    
//     setShowPaymentPage(true);
//   };



//   // Calculate total amount based on promo code
//   const calculateTotalAmount = () => {
//     // Logic to calculate total amount based on promo code
//     // and update the state using setTotalAmount()
//   };

//   return (
//     <div className="container">
//       <h2 className="heading">User Information</h2>
//       <hr className="divider" />
//       {showPaymentPage ? (
//         <PaymentPage userInfo={userInfo} totalAmount={totalAmount} />
//       ) :(<form>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={userInfo.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={userInfo.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address:</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={userInfo.address}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={userInfo.phone}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         {/* <div className="form-group">
//           <label htmlFor="promoCode">Promo Code:</label>
//           <input
//             type="text"
//             id="promoCode"
//             name="promoCode"
//             value={promoCode}
//             onChange={handlePromoCodeChange}
//           />
//         </div>
//         <div className="form-group">
//           <button
//             className="btn-calculate"
//             type="button"
//             onClick={calculateTotalAmount}
//           >
//             Calculate Total Amount
//           </button>
//         </div>
//         <div className="form-group">
//           <label htmlFor="totalAmount">Total Amount:</label>
//           <input
//             type="text"
//             id="totalAmount"
//             name="totalAmount"
//             value={totalAmount}
//             readOnly
//           />
//         </div> */}
//         <div className="form-group">
//           <button className="btn-next" type="button" onClick={handleNextClick}>
//             Next
//           </button>
//         </div>
//       </form>)}
      
//     </div>
//   );
// };

// export default UserInfo;









import React, { useState } from 'react';
import "./UserInfo.css"
import PaymentPage from './PaymentPage';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const [showPaymentPage, setShowPaymentPage] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNextClick = () => {
    setShowPaymentPage(true);
  };

  return (
    <div className="container">
      
      
      {showPaymentPage ? (
        <PaymentPage userInfo={userInfo} />
      ) : (
        <form>
          <h2 className="heading">User Information</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <button className="btn-next" type="button" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserInfo;

