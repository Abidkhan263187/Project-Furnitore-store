import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='abid-footer-container'>
      
      <div className='footer-one-abid'>
        <div id='fst-abid-clock'>
          <div id='abid-clock'><img src="https://i.pinimg.com/originals/9a/22/b7/9a22b792f2b21a0c7832de476895704c.png" alt="" /></div>
          <div>
            <p>Working every day</p>
          <p>24*7</p>
          <p>from 8.00  till 9.00</p>
          </div>
          </div>

          <div id='fst-abid-clock'>
          <div id='abid-clock'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8VAVcIvkDs0RQp7RIR83VH4sh6SqpDRm6lg&usqp=CAU" alt="" /></div>
          <div>
            <p>Free Delivery</p>
          <p>WorldWide</p>
          <p>from $2.500</p>
          </div>
          </div>
          <div id='fst-abid-clock'>
          <div id='abid-clock'><img  style={{marginTop:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7azER2rBWaqPcK0v_VgMrxXdcbEfPddJYw&usqp=CAU" alt="" /></div>
          <div >
            <p>Support</p>
          <p>Documentation</p>
          <p>All collection</p>
          </div>
          </div>
      </div>
 <div className='second-color-part'>

 

      <div className='footer-two-abid'>
   <div className='abid-contact-footer'>
    
     <p>0332 253 3535</p>
   <p>Online Store helpline</p>
   </div>
   <div className='abid-footer-opt'>
    <Link>Delivery Information</Link>
    <Link>Refund & Exchanges</Link>
    <Link>Privacy & Policies</Link>
    <Link>Term & Conditions</Link>
   </div>
      </div>



      <div className='footer-three-abid'>
<div>@ 2021 Abid All Right Reserved</div>
<div className='abid-social-modes'>
  <Link><i class="fa-brands fa-facebook"></i></Link>
  <Link><i class="fa-brands fa-linkedin"></i></Link>
  <Link><i class="fa-brands fa-youtube"></i></Link>
  <Link><i class="fa-brands fa-twitter"></i></Link>
</div>
<div className="abid-payment-modes">
<Link>accepting payment methods</Link>
<Link><i class="fa-brands fa-cc-visa"></i></Link>
<Link><i class="fa-brands fa-cc-mastercard"></i></Link>
<Link><i class="fa-brands fa-cc-paypal"></i></Link>
</div>

      </div>
      </div>
    </div>
  )
}

export default Footer