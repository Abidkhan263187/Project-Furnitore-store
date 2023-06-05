

import axios from "axios"
import { Authenticate, cartArray, singlePRoduct } from "./action"

 export const getUserAuthenticate=()=>(dispatch)=>{

axios.get(`https://myjson.onrender.com/users`).then(({data})=>{
    console.log(data)
    dispatch(Authenticate(data))
}).catch((error)=>{
    console.log(error)
})
}
export const getProduct=(id)=>(dispatch)=>{
    axios.get(`https://myjson.onrender.com/sofas/${id}`).then(({data})=>{
        // console.log(data)
        dispatch(singlePRoduct(data))
    }).catch((error)=>{
        console.log(error)
    })
   
}
export  const addtoCart=(product)=>(dispatch)=>{

    axios.post(`  https://myjson.onrender.com/sofas`,product).then(({data})=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })

 }
// export const getCartArray=()=>(dispatch)=>{
//     axios.get(`  http://localhost:8080/furnitureCart`).then(({data})=>{
//         // console.log(data)
//         dispatch(cartArray(data))
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

// export const removeFromCart=(id)=>(dispatch)=>{
//     axios.delete(`  http://localhost:8080/furnitureCart/${id}`)
//     getCartArray();
// }