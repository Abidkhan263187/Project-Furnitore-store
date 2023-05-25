import {Routes,Route} from 'react-router-dom'
import React from 'react'
import { Home } from '../Home/Home'
import LoginPage from '../login_signup/Login'
import SignupPage from '../login_signup/Signup'

export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>

        </Routes>
    </div>
  )
}
