import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './SignupPage.css';

function SignupPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === '' || lastName === '' || email === '' || password === '') {
            setError("Please enter all the fields.");
        } else {
            setSubmitted(true);
            setError('');
        }
    };

    const handleRememberPassword = () => {
        setRememberPassword(!rememberPassword);
    };

    return (
        <div className="form">
            <div>
                <h1>Sign up</h1>
                <p>Welcome to Healthify</p>
            </div>

            {error && <div className="error">{error}</div>}

            {submitted ? (
                <div className="success">
                    <h1>User {firstName} {lastName} successfully registered!!</h1>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        className="input"
                        value={firstName}
                        type="text"
                        placeholder="First name"
                    />
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        className="input"
                        value={lastName}
                        type="text"
                        placeholder="Last name"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        value={email}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        value={password}
                        type="password"
                        placeholder="Password"
                    />
                    <div className="remember-container">
                        <input
                            type="checkbox"
                            name="rememberPassword"
                            checked={rememberPassword}
                            onChange={handleRememberPassword}
                        />
                        <label htmlFor="rememberPassword">Remember Password</label>
                    </div>

                    <button type="submit" className="btn">
                        Submit
                    </button>

                    <div className="ref">
                        Already have an account? <Link to='/login'>Log In</Link>
                    </div>
                </form>
            )}
        </div>
    );
}

export default SignupPage;
