import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import ppimg1 from './ppimg1.png';
import asimg1 from './asimg1.png';
import asimg2 from './asimg2.png';
import asimg3 from './asimg3.png';
import asimg4 from './asimg4.png';
import './AppointmentSuccess.css';

function AppointmentSuccess() {

  return (
    <div className='Asuccess-main'>
      <Link to='/view-doctor'><img src={ppimg1} id='as1' alt='icon' /></Link>

      <img src={logo} id="aslogo" alt="Healthify Logo" />
      <br />
      <p><b>Sent</b></p>
      <img src={asimg1} id='asimg1' alt='icon' />
      <img src={asimg2} id='asimg2' alt='icon' />
      <img src={asimg3} id='asimg3' alt='icon' />
      <img src={asimg4} id='asimg4' alt='icon' />
    </div>
  );
}

export default AppointmentSuccess;
