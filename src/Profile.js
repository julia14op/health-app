import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import hpimg1 from './hpimg1.png';
import ppimg1 from './ppimg1.png';
import ppimg3 from './ppimg3.png';
import './Profile.css';

function Profile() {
  return (
    <body >
      <div className='profile-main'>
        <header>
          <nav className='homepagenavbar'>
            <img src={logo} id="logo" alt="Healthify Logo" />
            <ul>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/find-doctor'>Features</Link></li>
              <li><Link to='/contact'>Contact Us</Link></li>
              <li><Link to='/find-doctor'>Find a Doctor</Link></li>
            </ul>
            <Link to='/dashboard'><img src={hpimg1} id="hpimg1" alt="a female doctor" /></Link>

            <div className='hpnavbar-btn'>
              <Link to='/find-doctor/:doctorId'><button>Book An Appointment</button></Link>
            </div>
          </nav>
        </header>
        <div>
          <Link to='/homepage'><img src={ppimg1} id="ppimg1" alt="icon" /></Link>
        </div>
        <img src={ppimg3} id="ppimg3" alt="a female doctor" />
        <form className='profile-form'>
          <div className='form-group1'>
            <label htmlFor='lastName'></label>
            <input type='text' id='lName' name='lastName' placeholder='Adeniran' />
          </div>

          <div className='form-group2'>
            <label htmlFor='firstName'></label>
            <input type='text' id='fName' name='firstName' placeholder='Susan' />
          </div>

          <div className='form-group3'>
            <label htmlFor='email'></label>
            <input type='email' id='pp-email' name='email' placeholder='adeniransusan@gmail.com' />
          </div>

          <div className='form-group4'>
            <label htmlFor='phoneNumber'></label>
            <input type='tel' id='pp-phoneNumber' name='phoneNumber' placeholder='Phone number' />
          </div>

          <div className='form-group5'>
            <label htmlFor='nationality'></label>
            <input type='text' id='pp-nationality' name='nationality' placeholder='Nigerian' />
          </div>

          <div className='form-group6'>
            <label htmlFor='message'></label>
            <textarea id='pp-message' name='message' rows='4' placeholder='Bio:'></textarea>
          </div>

          <div className='form-btn'>
            <button type='submit'>Update Account</button>
          </div>
        </form>

      </div>
    </body>
  );
}

export default Profile;
