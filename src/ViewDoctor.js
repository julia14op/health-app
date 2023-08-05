import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import hpimg1 from './hpimg1.png';
import vmimg1 from './vmimg1.png';
import vmimg2 from './vmimg2.png';
import vmimg3 from './vmimg3.png';
import vmimg4 from './vmimg4.png';
import vmimg5 from './vmimg5.png';
import ppimg1 from './ppimg1.png';
import './ViewDoctor.css';

function ViewDoctor() {


  return (
    <div className='vd-main'>
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
            <Link to='/find-doctor'><button>Book An Appointment</button></Link>
          </div>
        </nav>
      </header>

      <Link to='/find-doctor'><img src={ppimg1} id='vm1' alt='icon' /></Link>
      <img src={vmimg1} id='vmimg1' alt='male doctor' />
      <div className='vm-section1'>
        <h3>
          Dr. Ajayi Ayomide
        </h3>
        <br />
        <p>
          Neurosogeon
        </p>
         <img src={vmimg3} id='vmimg3' alt='icon' />
      </div>

     

      <img src={vmimg4} id='vmimg4' alt='icon' />

      <div className='vm-section4'>

        <h3>About</h3>
        <img src={vmimg5} id='vmimg5' alt='line' />
        <br /> <br />
        <p>A doctor and also an expert in Neurosogeon who care and always love to<br />
          spend time with his patient.</p>
      </div>

      <div className='vm-section5'>
        <h3>Available for appointment</h3>
      </div>
      <table>
        <tr>
          <td>Saturday</td>
          <td>9:00AM - 9:30PM</td>
        </tr>
        
        <tr>
          <td>Monday</td>
          <td>9:00AM - 9:30PM</td>
        </tr>
        
        <tr>
          <td>Friday</td>
          <td>9:00AM - 9:30PM</td>
        </tr>
      </table>

      <img src={vmimg2} id='vmimg2' alt=' the brain' />

      <div className='vd-btn'>
        <Link to='/book-appointment'><button>Book An Appointment</button></Link>
      </div>
    </div>
  );
}

export default ViewDoctor;
