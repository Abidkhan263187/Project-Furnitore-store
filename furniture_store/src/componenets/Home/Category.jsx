import React from 'react'
import { Link } from 'react-router-dom'

export const Category = ({ img, name }) => {
  let cat;
  if (name === 'Furniture') {
    cat = "chairs";
  } else if (name === 'Sofas') {
    cat = "sofas";
  } else if(name==="Dinning Set") {
    cat = "tables";
  }else{
    cat="sofas"
  }

  return (
    <Link to={`/${cat}`}>
      <div>
        <img src={img} alt="" />
        <h4>{name}</h4>
      </div>
    </Link>
  )
}
