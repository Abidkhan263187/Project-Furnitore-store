import { ADDPARAMS, AUTH, CARTARRAY, CART_TOTAL, PAYMENT_INFO, PERMIT, SINGLE, UPLOAD_PROD_DATA, USER_INFO } from "./actiontypes";
const inituserArr={
    userArr:[],
    access:false,
    single:{},
    cart:[],
    display:false,
    prod_Array:[],
    userInfo:{},
    paymentInfo:{},
    carttotal:''

}

export const reducer=(state=inituserArr,action)=>{

    switch(action.type){
        case AUTH:{
          return{...state,userArr:action.payload}
        }
        case PERMIT:{
            return{...state,access:true}
        }
        case SINGLE:{
            return{...state,single:action.payload}
        }
        case CARTARRAY:{
            return{...state,cart:action.payload}
        }
        case UPLOAD_PROD_DATA:{
            return{...state,prod_Array:action.payload}
        }
        case USER_INFO:{
            return{...state,userInfo:action.payload}
        }
        case PAYMENT_INFO:{
            return{...state,paymentInfo:action.payload}
        }
        case CART_TOTAL:{
            return{...state,carttotal:action.payload}
        }
        default: return state;
    }
    
}