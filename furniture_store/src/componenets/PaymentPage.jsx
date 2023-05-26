import React, { useState } from 'react';
import "./PaymentPage.css"

const PaymentPage = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  const totalAmount = 99.99; // Replace with your actual total amount

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = () => {
    // Logic for placing the order
  };

  return (
    <div className="payment-container">
      <div className="payment-summary">
        <h2 className="payment-heading">Payment Summary</h2>
        <div className="total-amount">
          <span>Total Amount:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="payment-options">
          <h2 className="payment-heading">Payment Options</h2>
          <div className="payment-option">
            <input
              type="radio"
              id="cashOnDelivery"
              name="paymentMethod"
              value="cashOnDelivery"
              checked={paymentMethod === 'cashOnDelivery'}
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="cashOnDelivery">Cash on Delivery</label>
          </div>
          <div className="payment-option">
            <input
              type="radio"
              id="payByCard"
              name="paymentMethod"
              value="payByCard"
              checked={paymentMethod === 'payByCard'}
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="payByCard">Pay by Card</label>
          </div>
        </div>
      </div>
      {paymentMethod === 'payByCard' && (
        <div className="payment-form">
          <h2 className="payment-heading">Card Details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Cardholder Name:</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={cardDetails.cardName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date:</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </form>
        </div>
      )}
      <div className="place-order">
        <button className="place-order-button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
