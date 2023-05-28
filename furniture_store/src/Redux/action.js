import axios from 'axios'
import {AUTH,CARTARRAY,PERMIT, SINGLE} from './actiontypes'


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
// export const  cartArray=(payload)=>{
// return {
//     type:CARTARRAY,
//     payload
// }
// }
