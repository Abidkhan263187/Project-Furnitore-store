import { AUTH, CARTARRAY, PERMIT, SINGLE } from "./actiontypes";
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
        // case CARTARRAY:{
        //     return{...state,cart:action.payload}
        // }
    }
    return state;
}