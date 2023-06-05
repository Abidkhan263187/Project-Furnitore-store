import React from 'react';
import './thankyou.css'
import { useSelector } from 'react-redux';
import { Text } from '@chakra-ui/react';

const ThankYouPage = ({ name, address, pincode, amount, phone, email }) => {

    const {userInfo,paymentInfo,carttotal}=useSelector((store)=>{
        return store
    })
  return (
    <div className="thank-you-page">
      <div className="thank-you-content">
        <div> <img src="https://i.pinimg.com/736x/59/6b/23/596b2390daf7184dae76d42d4f54e9a3--smiley-faces-creative-art.jpg" alt="" /> </div>
        <Text fontSize={'xl'} fontWeight={"600"}>Here are the details:</Text>
        <div className="details-box">
          <div>
            <strong>Name:</strong> {userInfo.fname && userInfo.lname?userInfo.fname+" "+userInfo.lname:""}
          </div>
          <div>
            <strong>Address:</strong> {paymentInfo.address}
          </div>
          <div>
            <strong>Pin Code:</strong> {paymentInfo.zip_code}
          </div>
          <div>
            <strong>Amount:</strong> ${carttotal}
          </div>
          <div>
            <strong>Phone Number:</strong> {userInfo.phone}
          </div>
          <div>
            <strong>Email:</strong> {userInfo.email}
          </div>
          <div>
        <strong > Delivery by wed Jun 7 </strong>
          </div>
          <div>
        <strong style={{color:"green"}}> Free Delivery  <i class="fa-solid fa-truck-fast"></i></strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
