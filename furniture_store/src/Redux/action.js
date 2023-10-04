
import { AUTH,CARTARRAY,CART_TOTAL,CLIENT_NAME,LATITUDE,LONGITUDE,PAYMENT_INFO,PERMIT, SINGLE, UPLOAD_PROD_DATA, USER_INFO } from './actiontypes'


 export const Authenticate=(payload)=>{
    return{
        type:AUTH,
        payload
    }
}
export const clientName=(payload)=>{
    return{
        type:CLIENT_NAME,
        payload
    }
}
export const setLatitide=(payload)=>{
    return{
      type:LATITUDE,
      payload
    }
  }
  export const  setLongitide=(payload)=>{
      return {
          type:LONGITUDE,
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


export const uploadProductsData=(payload)=>{
    return{
        type:UPLOAD_PROD_DATA,
        payload,
    }
}
export const userInfor=(payload)=>{
    return{
        type:USER_INFO,
        payload,
    }
}
export const cartTotal=(payload)=>{
    return{
        type:CART_TOTAL,
            payload,
        
    }
}
export const storePaymentInfo=(payload)=>{
    return{
        type:PAYMENT_INFO,
        payload,
    }
}



