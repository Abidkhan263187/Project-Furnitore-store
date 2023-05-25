import React from 'react'
import { Link } from 'react-router-dom'

export const Category = ({img,name}) => {
  return (
    <Link>
          <div>
            <img src={img} alt="" />
            <h4>{name}</h4>
          </div>
        </Link>
  )
}
