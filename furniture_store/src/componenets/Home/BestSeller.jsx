

import React from 'react'
import { Link } from 'react-router-dom'

export const BestSeller = ({img,name,price,mrp}) => {
  return (
    <div className='bestSelerCard'>
        <Link>
        <img src={img} alt="" />
        </Link>
        <div className='best-seller-p'>
           <div><p style={{height:"40px", margin:"5px 0px"}}>{name}</p></div> 
           <div className='mrp-abid-div'>
           <p style={{color:"green"}}><span style={{color:"#ff9f0b"}}>Price : </span>   ₹{price}</p>
           <s>MRP : ₹{mrp}</s>
            </div> 
        </div>
        </div>
  )
}