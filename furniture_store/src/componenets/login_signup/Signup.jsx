import React, { useState } from "react";
import "./login_signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import axios from "axios"
import { clientName } from "../../Redux/action";
import { useDispatch } from "react-redux";

function SignupPage() {
    const navigate = useNavigate()
    const dispatch=useDispatch()

    const [sign, setSign] = useState({
        name: "",
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (sign.email === '' || sign.name === '' || sign.password === '') {
            
            alert("fill all the field")
            setSign({ ...sign, email: '', password: "" })
            return
        }
        else{
            // dispatch(clientName(sign.name))
            axios.post(`https://myjson.onrender.com/users`, sign)
            console.log(sign.name)
            alert("Account Created Succesfully")
            navigate('/login')
            setSign({ ...sign, name: '', email: '', password: '' })
        }
      
    };

    return (
        <><div className="signup-container abid-signup-container">
            <h2 className="abid-heading">Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group abid-form-group">
                    <label htmlFor="name" className="abid-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={sign.name}
                        onChange={(e) => setSign({ ...sign, [e.target.name]: e.target.value })}
                        className="abid-input" />
                </div>
                <div className="form-group abid-form-group">
                    <label className="abid-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={sign.email}
                        onChange={(e) => setSign({ ...sign, [e.target.name]: e.target.value })}
                        className="abid-input" />
                </div>
                <div className="form-group abid-form-group">
                    <label className="abid-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={sign.password}
                        onChange={(e) => setSign({ ...sign, [e.target.name]: e.target.value })}
                        className="abid-input" />
                </div>
                <div className="form-group abid-form-group">
                    <input type="submit" value="Sign Up" className="abid-submit-button" />
                    <div className="abid-form-help-s">
                        By signing up, you agree to our <Link id="abid-link-s">Terms of Service</Link> and <Link id="abid-link-s">Privacy Policy</Link>.
                    </div>
                </div>
            </form>
            <div className="footer abid-footer">
                Already have an account? <Link to={"/login"} id="abid-link">Sign In</Link>
            </div>
        </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default SignupPage;
