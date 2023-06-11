import {Routes,Route, Navigate} from 'react-router-dom'
import React from 'react'
import { Home } from '../Home/Home'
import LoginPage from '../login_signup/Login'
import SignupPage from '../login_signup/Signup'
import ItemDescription from '../products/ItemDescription '
import { Cart } from '../cart/Cart'
import { useSelector } from 'react-redux'
import PaymentPage from '../cart/PaymentPage'
import { Product } from '../products/Product'
import { UserInfo } from '../cart/UserInfo'
import ThankYouPage from '../cart/ThankYouPage '
export const Allroutes = () => {

  
  const{access}=useSelector((store)=>{
    
    return store;
  })


  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path="/item"  element={<ItemDescription/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/:product/:id' element={<ItemDescription/>}/> {/*temporary*/}
            <Route path='/payment' element={<PaymentPage/>}/>
            <Route path='/userinfo'  element={access?<UserInfo/> : <Navigate to={'/login'}/>}/>
            <Route path='/:product' element={<Product/>}/>
            <Route path='/thankyouPage' element={<ThankYouPage/>} />
        </Routes>
    </div>
  )
}
