import React, { useState } from "react";
import "./login_signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log("Form submitted");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        // Reset form fields
        setName("");
        setEmail("");
        setPassword("");
        navigate('/login')
    };

    return (
        <div className="signup-container abid-signup-container">
            <h2 className="abid-heading">Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group abid-form-group">
                    <label htmlFor="name" className="abid-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="abid-input"

                    />
                </div>
                <div className="form-group abid-form-group">
                    <label className="abid-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="abid-input"

                    />
                </div>
                <div className="form-group abid-form-group">
                    <label className="abid-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="abid-input"

                    />
                </div>
                <div className="form-group abid-form-group">
                    <input type="submit" value="Sign Up" className="abid-submit-button" />
                    <div className="form-help abid-form-help">
                        By signing up, you agree to our <Link className="abid-link">Terms of Service</Link> and <Link className="abid-link">Privacy Policy</Link>.
                    </div>
                </div>
            </form>
            <div className="footer abid-footer">
                Already have an account? <Link to={"/login"} className="abid-link">Sign In</Link>
            </div>
        </div>
    );
}

export default SignupPage;
