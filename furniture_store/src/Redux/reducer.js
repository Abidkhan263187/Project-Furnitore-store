import { AUTH, PERMIT } from "./actiontypes";
const inituserArr={
    userArr:[],
    access:false
}

export const reducer=(state=inituserArr,action)=>{

    switch(action.type){
        case AUTH:{
          return{...state,userArr:action.payload}
        }
        case PERMIT:{
            return{...state,access:true}
        }
    }
    return state;
}