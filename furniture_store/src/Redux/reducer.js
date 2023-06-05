import { AUTH, CARTARRAY, PERMIT, SINGLE,INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    REMOVE_FROM_CART } from "./actiontypes";
const inituserArr={
    userArr:[],
    access:false,
    single:{},
    cart:[]
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



        //reducer for cart page ------------------------

        case INCREMENT_QUANTITY:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

    case DECREMENT_QUANTITY:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          };
        }
        return item;
      });

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);


    }
    return state;
}