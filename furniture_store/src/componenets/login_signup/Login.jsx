import React, { useEffect, useState } from "react";
import "./login_signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthenticate } from "../../Redux/api";
import { givePermmission } from "../../Redux/action";
import { Alert, Button } from "@chakra-ui/react";

function LoginPage() {

  const { access, userArr } = useSelector((store) => {
    return store
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  useEffect(() => {
    dispatch(getUserAuthenticate())
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password == '' || user.email == '') {
      alert("fill all the field")
      setUser({ ...user, email: '', password: "" })
      return
    }
    let flag=-1;
    userArr.forEach((elem) => {
      if (elem.email === user.email && elem.password === user.password) {
        flag = 0;
      }
    })

    if (flag === 0) {
      alert("Login Successfully!")
      navigate('/')
      dispatch(givePermmission(true))
    } else {
      alert("Wrong Credential!")
    }
    setUser({ ...user, email: '', password: "" })
  };


  return (
    <><div className="login-container">
      <h2>Sign-In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email or mobile phone number</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
        </div>
        <div className="form-group">
          <input type="submit" value="Sign In" />
          <div className="form-help">
            <Link to="#">Forgot your password?</Link>
            <Link style={{ marginLeft: "10px" }} to={'/signup'}>Back to SignUp</Link>
          </div>
        </div>
      </form>
      <div className="footer">
        <Link to="#">Conditions of Use</Link> |{" "}
        <Link to="#">Privacy Notice</Link> | <Link to="#">Help</Link>
      </div>
    </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default LoginPage;

