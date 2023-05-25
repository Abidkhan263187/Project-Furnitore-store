import React, { useState } from "react";
import "./login_signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here

    // console.log("Email:", email);
    // console.log("Password:", password);
    
    setEmail("");
    setPassword("");
    navigate('/')
  };

  return (
    <div className="login-container">
      <h2>Sign-In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email or mobile phone number</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Sign In" />
          <div className="form-help">
            <Link to="#">Forgot your password?</Link>
          </div>
        </div>
      </form>
      <div className="footer">
        <Link to="#">Conditions of Use</Link> |{" "}
        <Link to="#">Privacy Notice</Link> | <Link to="#">Help</Link>
      </div>
    </div>
  );
}

export default LoginPage;

