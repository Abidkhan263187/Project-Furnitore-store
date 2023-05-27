import axios from "axios"
import { Authenticate } from "./action"

 export const getUserAuthenticate=()=>(dispatch)=>{

axios.get(`http://localhost:8080/users`).then(({data})=>{
    // console.log(data)
    dispatch(Authenticate(data))
}).catch((error)=>{
    console.log(error)
})

}