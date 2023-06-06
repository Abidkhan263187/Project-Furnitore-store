
import {ADDPARAMS, AUTH,CARTARRAY,CART_TOTAL,PAYMENT_INFO,PERMIT, SINGLE, UPLOAD_PROD_DATA, USER_INFO} from './actiontypes'


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



