
import React from 'react'
import { Link } from 'react-router-dom'

export const SlideCard = ({img,name}) => {
  return (
    <div className='abid-images-room'>
        {/* {console.log(img)} */}
    <Link>
      <img src={img} alt="" />
    </Link>
    <h3>{name}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloribus ducimus
      in sapiente facere asperiores amet odio delectus mollitia totam.</p>
      <div className='abid-know-more'>
    <p>Know More </p>
    <span style={{color:"gray"}}> <i className="fa-solid fa-arrow-right fa-beat-fade"></i></span>
      </div>
  </div>
  )
}