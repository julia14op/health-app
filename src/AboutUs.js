import React from 'react';
import { Link } from 'react-router-dom';
import globe from './globe.png';
import logo from './logo.png';

function AboutUs() {
  return (
    <div>
      <nav>
        <img src={logo} id="logo" alt="Healthify Logo"/>
        <ul>
        <li><Link to='./home'>Home</Link></li>
            <li><Link to='./about'>About Us</Link></li>
            <li><Link to='./contact'>Contact Us</Link></li>
          <li><Link to='./find-doctor'>Find a Doctor</Link></li>
        </ul>
        <div className="button-container">
          <Link to='/book-appointment'><button>Book An Appointment</button></Link>
        </div>
      </nav>
      <img src={globe} id="globe" alt="an earth globe pic" />
      <h1>About Us</h1>
      <p>
        We link the gap between the doctors and patients across<br /> 
        the country by providing a platform for booking<br /> 
        appointments with a doctor online for either physical or<br /> 
        virtual meetings.
      </p>

      <p>Your Solution</p>
    </div>
  );
}

export default AboutUs;
