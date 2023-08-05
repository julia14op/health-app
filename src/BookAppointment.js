import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import hpimg1 from './hpimg1.png';
import './BookAppointment.css';

function BookAppointment() {


  return (
    <div className='Ba-main'>
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

      <div className='Ba-section1'>
        <h2>Book Appointment</h2>
        <br />
        <form className='Ba-form'>
          <div className='Baform-group1'>
            <label htmlFor='lastName'></label>
            <input type='text' id='Ba-lName' name='lastName' placeholder='First name' />
          </div>

          <div className='Baform-group2'>
            <label htmlFor='firstName'></label>
            <input type='text' id='Ba-fName' name='firstName' placeholder='Last name' />
          </div>

          <div className='Baform-group3'>
            <label htmlFor='email'></label>
            <input type='email' id='Ba-email' name='email' placeholder='Email address' />
          </div>

          <div className='Baform-group4'>
            <label htmlFor='phoneNumber'></label>
            <input type='tel' id='Ba-phoneNumber' name='phoneNumber' placeholder='Phone number' />
          </div>

          <div className='Baform-group5'>
            <label htmlFor='date'></label>
            <input type='date' id='Ba-date' name='date' />
          </div>

          <div className='Baform-group6'>
            <label htmlFor='time'></label>
            <input type='time' id='Ba-time' name='time' />
          </div>

          <div className='Baform-group7a'>
            <input type='radio' id='Ba-physical' name='option' value='physical' />
            <label htmlFor='physical'>Physical</label>
          </div>

          <div className='Baform-group7b'>
            <input type='radio' id='Ba-online' name='option' value='online' />
            <label htmlFor='online'>Online</label>
          </div>

          <div className='baform-group8'>
            <label htmlFor='message'></label>
            <textarea id='Ba-message' name='message' rows='4' placeholder='Comment'></textarea>
          </div>

          <div className='Baform-btn'>
            <Link to ='/appointment-success'><button type='submit'>Book An appointment</button></Link>
          </div>
        </form>

      </div>
    </div>
  );
}

export default BookAppointment;
