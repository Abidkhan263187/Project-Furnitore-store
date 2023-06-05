

import axios from 'axios'
import {AUTH,CARTARRAY,PERMIT, SINGLE, INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    REMOVE_FROM_CART} from './actiontypes'


 export const Authenticate=(payload)=>{
    return{
        type:AUTH,
        payload
    }
}

export const  givePermmission=(payload)=>{
return{
    type:PERMIT,
    payload
}
}

export const singlePRoduct=(payload)=>{
    return{
        type:SINGLE,
        payload
    }
}
export const  cartArray=(payload)=>{
return {
    type:CARTARRAY,
    payload
}
}

// logic for Cart page action -------------------------------------
export const incrementQuantity = (itemId) => {
    return {
      type: INCREMENT_QUANTITY,
      payload: itemId,
    };
  };
  
  export const decrementQuantity = (itemId) => {
    return {
      type: DECREMENT_QUANTITY,
      payload: itemId,
    };
  };
  
  export const removeFromCart = (itemId) => {
    return {
      type: REMOVE_FROM_CART,
      payload: itemId,
    };
  };