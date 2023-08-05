import React, { useState } from "react";
import { Link } from "react-router-dom";
import './LoginPage.css';
import twitter from './twitter.png';
import facebook from './facebook.png';
import gmail from './gmail.png';
import logo from './logo.png';

function LoginPage() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const database = [
    {
      email: "user1",
      password: "pass1"
    },
    {
      email: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    email: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { email, pass } = document.forms[0];

    const userData = database.find((user) => user.email === email.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  const handleRememberPassword = () => {
    setRememberPassword(!rememberPassword);
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="email" id="login-email" required placeholder="Email" />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <input type="password" id="login-pass" required placeholder="Password" />
          {renderErrorMessage("pass")}
        </div>
        <div className="remember-container">
          <input
            type="checkbox"
            id="rememberPassword"
            checked={rememberPassword}
            onChange={handleRememberPassword}
          />
          <label htmlFor="rememberPassword">Remember Password</label>
        </div>
        <div className="login-btn">
          <button>Log in</button>
        </div>
      </form>

      <div className="additional-links">
        <p>Forgot Password?</p>
        <span>Don't have an account? <Link to='./signup'>Sign Up</Link></span>
      </div>
      <div className="loginline"></div>
      <div className="loginline2"></div>

<div className="sub-link">Or Continue with</div>

   
        <img src={twitter}  id='loginicon1' alt="Twitter" />
        <img src={facebook} id='loginicon2' alt="Facebook" />
        <img src={gmail}   id='loginicon3'  alt="Gmail" />
    

    </div>
  );

  return (
    <div className="login">
      <div className="sidebar">
        <img src={logo} alt="Healthify Logo" className="login-logo" />
      </div>
      <div className="main-content">
        <div className="login-form">
          <div className="title">Log in</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
