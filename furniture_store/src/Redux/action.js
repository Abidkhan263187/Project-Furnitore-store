import {AUTH,PERMIT} from './actiontypes'


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