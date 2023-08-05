import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LandingPage.css';
import logo from './logo.png';
import img3 from './img3.png';
import img6 from './img6.png';
import img7 from './img7.png';
import img8 from './img8.png';

// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LandingPage() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="container">
      <header>
        <div className="toggle-bar">
          <img src={logo} id="logo" alt="Healthify Logo" />
          <span className={`menu-icon ${showMenu ? 'active' : ''}`} onClick={handleToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </span>

        </div>
        <nav className={`navbar ${showMenu ? 'active' : ''}`}>
          <ul>
            <li><Link to='./home'>Home</Link></li>
            <li><Link to='./about'>About Us</Link></li>
            <li><Link to='./contact'>Contact Us</Link></li>
            <li><Link to='./login'>Log In</Link></li>
            <li><Link to='./signup'>Sign Up</Link></li>
            <li><Link to='./find-doctor'>Features</Link></li>
          </ul>
        </nav>
      </header>

      <div className="aside">
        <h1>Embark on a journey<br /> of expert online<br /> guidance</h1>
        <br />
        <h3>
          Schedule, search, and connect<br /> effortlessly for an efficient healthcare<br /> experience.
        </h3>
        <br /><br />
        <button onClick={handleGetStarted} className='btn'><b>Get Started</b></button>
      </div>
      <div className='lp-ellipse'></div>
      <img src={img3} id="img3" alt="a female doctor" />

      <div className='section'>
        <h4>1500+ </h4> <br />
        <p>Expert Doctors</p>
        <img src={img6} id="img6" alt="a doctor" />
        <img src={img7} id="img7" alt="a doctor" />
        <img src={img8} id="img8" alt="a doctor" />
      </div>
      <div className='article'>
        <h3>300K+</h3>
      </div>
      <div className='sub-article'>
        <p className='p1'>Securing</p><br />
        <p className='p2'>patients both </p><br />
        <p className='p3'>online and</p> <br />
        <p className='p4'>offline</p>
      </div>




    </div>
  );
}

export default LandingPage;
