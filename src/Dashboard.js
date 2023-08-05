import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import hpimg1 from './hpimg1.png';
import hpimg2 from './hpimg2.png';
import hpimg3 from './hpimg3.png';
import hpimg4 from './hpimg4.png';
import hpimg5 from './hpimg5.png';
import hpimg6 from './hpimg6.png';
import hpimg7 from './hpimg7.png';
import hpimg9 from './hpimg9.png';
import hpimg10 from './hpimg10.png';
import hpimg11 from './hpimg11.png';
import hpimg12 from './hpimg12.png';
import hpimg13 from './hpimg13.png';
import hpimg14 from './hpimg14.png';
import hpimg15 from './hpimg15.png';
import hpimg16 from './hpimg16.png';
import hpimg17 from './hpimg17.png';
import hpimg18 from './hpimg18.png';
import hpimg19 from './hpimg19.png';
import hpimg20 from './hpimg20.png';
import hpimg21 from './hpimg21.png';

import './Dashboard.css';

function HomePage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [showLinks, setShowLinks] = useState(false);

  const handleImageClick = () => {
    setShowLinks(true);
  };

  const handleGetStarted = () => {
    navigate('/dashboard');
  };


  return (
    <body>

      <div className='homepage'>

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
            <Link to='/dashboard'>
              <img src={hpimg1} id="hpimg1" alt="a female doctor" onClick={handleImageClick}/>
              </Link>
              {showLinks && (
        <div className='dashboard1'>
          <Link to='/profile'>Profile</Link><br/>
          <br/>
          <div className='dash'>
          <Link to='/'>Log Out</Link>
          </div>
        </div>
      )}

            <div className='hpnavbar-btn'>
              <Link to='/find-doctor'><button>Book An Appointment</button></Link>
            </div>
          </nav>
        </header>

        <div className='homepage-section'>
          <h1>
            <b>Protect Your Health<br /> And Take Care Of<br /> Your Health</b>
          </h1>
        </div>
        <div className='homepage-section1'>
          <h2>
            <img src={hpimg3} id="hpimg3" alt="an icon" />
            Make an appointment
          </h2><br />
          <p>Schedule an appointment<br /> with a doctor anytime</p>


        </div>
        <div className='homepage-section2'>
          <h2>
            <img src={hpimg4} id="hpimg4" alt=" icon" />
            Health Guaranteed Forever
          </h2><br />
          <p>We always provide the best health<br /> insurance for you.</p>
          <br />


        </div>
        <div className='homepage-section3'>
          <h2>
            <img src={hpimg5} id="hpimg5" alt=" icon" />
            Find your best doctor
          </h2><br />
          <p>We always provide the best health <br /> care doctors for you.</p><br />

        </div>
        <div className='homepage-section4'>
          <h2>
            <img src={hpimg6} id="hpimg6" alt="icon" />
            Spread in various places
          </h2><br />
          <p>We are available everywhere <br /> in various places.</p>
        </div>
        <button onClick={handleGetStarted} className='section-btn1'>Get Started</button>


        <div className='ellipse'></div>
        <img src={hpimg2} id="hpimg2" alt="a female doctor" />
        <img src={hpimg7} id="hpimg7" alt="subframe" />

        <div className='homepage-section5'>
          <h2>
            Quick Solution For Scheduling<br /> With Doctors
          </h2>
        </div>
        <div className='homepage-card1'>
          <h4>
            <img src={hpimg5} id="hpimg5" alt=" icon" /><br /><br />
            Find Doctor
          </h4>
          <br />
          <p className='text'>We are here to help whenever you<br /> feel out, keeping you healthy is our<br /> priority.
            <br />
            <br />
            <Link to='#'>See more</Link>
          </p>
        </div>
        <div className='homepage-card2'>
          <h4>
            <img src={hpimg5} id="hpimg5" alt=" icon" /><br /><br />
            Schedule Appointment
          </h4>
          <br />
          <p className='text'>Verify and schedule an appointment with<br /> a doctor ahead according to your<br /> time and availability.
            <br />
            <br />
            <Link to='#'>See more</Link>
          </p>

        </div>
        <div className='homepage-card3'>
          <h4>
            <img src={hpimg5} id="hpimg5" alt=" icon" /><br /><br />
            Get Your Solution
          </h4>
          <br />
          <p className='text'>We are here to help you have quick <br />access to health care services whenever<br /> you feel the need to.
            <br />
            <br />
            <Link to='#'>See more</Link>
          </p>
        </div>

        <div className='homepage-section6'>
          <h2> Consultation With Your Best <br />
            Doctor Anywhere And Anytime.</h2>
        </div>
        <div className='homepage-section7'>
          <div>
            <img src={hpimg3} id="sub7" alt="an icon" />
            <p className='sub7'>
              <b>
                Easy online booking here.
              </b>
            </p>
          </div>

          <div >
            <img src={hpimg5} id="sub8" alt=" icon" />
            <p className='sub7'>
              <b>
                Served Directly By Experts.
              </b>
            </p>
          </div>
        </div>
        <div className='rectangle'></div>
        <div>
          <img src={hpimg12} id="hpimg12" alt="a male doctor" />
        </div>
        <div className='hp-section7'>
          <Link to='/find-doctor'>
            <button>Book An Appointment</button>
          </Link>
        </div>
        <div className='homepage-section8'>
          <h2>
            Meet Our Great Doctors.
          </h2>
          <br />
          <h3>
            You will be handled by a team of expert doctors who have more than five years of<br />
            experience in their fields and you will get the best solution for your problem.
          </h3>
        </div>
        <div className='homepage-card4'>
          <img src={hpimg9} id="hpimg9" alt="a male doctor" />
          <h3>Dr. Lindsey Botosh</h3>
          <div className='hp-sub8'>
            <button>Professionals</button>
          </div>
          <br />
          <p><b>2500+ patients.</b></p>
          <div className='sub9'>
            <img src={hpimg16} id='hpimg16' alt="icon" />
            <img src={hpimg16} id='hpimg16' alt="icon" />
            <img src={hpimg16} id='hpimg16' alt="icon" />
            <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>
        <div className='homepage-card5'>
          <img src={hpimg10} id="hpimg10" alt="a male doctor" />
          <h3>Dr. Adams Ayomide</h3>
          <div className='hp-sub8'>
            <button>Professionals</button>
          </div>
          <br />
          <p><b>1620+ patients.</b></p>
          <div className='sub10'>
            <img src={hpimg16} id='hpimg16' alt="icon" />
            <img src={hpimg16} id='hpimg16' alt="icon" />
            <img src={hpimg16} id='hpimg16' alt="icon" />
            <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>
        <div className='homepage-card6'>
          <img src={hpimg11} id="hpimg11" alt="a male doctor" />
          <h3>Dr. Jon Smith</h3>
          <div className='hp-sub8'>
            <button>Professionals</button>
          </div>
          <br />
          <p>
            <b>
              3120+ patients.
            </b>
          </p>
          <div className='sub11'>
            <img src={hpimg16} id='hpimg16' alt="icon" />
            <img src={hpimg16} id='hpimg16' alt="icon" />
            <img src={hpimg16} id='hpimg16' alt="icon" />
            <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>


        <div className='homepage-section9'>
          <h3>What Our  Customers Say About Us.</h3>
          <br />
          <div className='homepage-card7'>
            <img src={hpimg13} id='hpimg13' alt="icon" />

            <p>Although this ia good innovation, the main aim
              is to have a stress free visitation at the hospital
              in order to see the doctor.</p>

            <hr />
            <h4>Wade Wumi</h4><br />
            <div className='sub12'>
              <p>
                <b>CEO Google Inc.
                </b>
              </p>
            </div>
            <div className='sup12'>
              <img src={hpimg16} id='hpimg16' alt="icon" />
              <img src={hpimg16} id='hpimg16' alt="icon" />
              <img src={hpimg16} id='hpimg16' alt="icon" />
              <img src={hpimg16} id='hpimg16' alt="icon" />
            </div>
          </div>

          <div className='homepage-card8'>
            <img src={hpimg15} id='hpimg15' alt="icon" />
            <p>
              it was actually the best site for a medical care
              has it helps me to book appointment aheasd
              in other to save time and stress.
            </p>
            <hr />
            <h4>Ilesanmi Oluwatope</h4>
            <div className='sub13'>
              <p>
                <b>
                  CEO Google Inc.
                </b>
              </p>
            </div>
            <div className='sup13'>
              <img src={hpimg16} id='hpimg16' alt="icon" />
              <img src={hpimg16} id='hpimg16' alt="icon" />
              <img src={hpimg16} id='hpimg16' alt="icon" />
              <img src={hpimg16} id='hpimg16' alt="icon" />
            </div>
          </div>

          <div className='homepage-card9'>
            <img src={hpimg14} id='hpimg14' alt="icon" />
            <p>This website is very helpful as it help to reduce
              the frequent visiting to the hospital and help
              me most of my consultation online.</p>
            <hr />
            <h4>Victoria Joy</h4>
            <div className='sub14'>
              <p>
                <b>
                  CEO Google Inc.
                </b>
              </p>
            </div>
            <div className='sup14'>
              <img src={hpimg16} id='hpimg16' alt="icon" />
              <img src={hpimg16} id='hpimg16' alt="icon" />
              <img src={hpimg16} id='hpimg16' alt="icon" />
              <img src={hpimg16} id='hpimg16' alt="icon" />
            </div>
          </div>

          <img src={hpimg17} id='hpimg17' alt="icon" />
          <img src={hpimg18} id='hpimg18' alt="icon" />

        </div>

        <div className='homepage-section10'>
          <h2>Always Check Your Health And Stay Healthy.</h2>
          <div className='hp-section10'>
            <Link to='/find-doctor'>
              <button>Book An Appointment</button>
            </Link>
          </div>
        </div>

        <footer>
          
            <img src={logo} id='hpfooter1' alt="icon" />
            <br/>
            <div className='homepage-footer1'>
            <b>
            <p>We will always give our<br/>
              customers the best services<br/>
              for their health insurance<br/>
              anytime and anywhere.</p>
              </b>
              <br/>
              <img src={hpimg19} id='hpimg19' alt="icon" />
              <img src={hpimg20} id='hpimg20' alt="icon" />
              <img src={hpimg21} id='hpimg21' alt="icon" />
          </div>
          <div className='homepage-footer2'>
            <h2>Links</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='hpfooter2'>
            <b><p>Home</p><br/>
            <p>Services</p><br/>
            <p>Features</p><br/>
            <p>Contact</p><br/>
            <p>Find Doctors</p><br/>
            <p>Book Appointment</p>
            </b>
            </div>
          </div>
          <div className='homepage-footer3'>
            <h2>About</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <b>
            <p>Patients</p><br/>
             <p>Contact</p> <br/>
             <p>Community </p><br/>
             <p>Book Appointment</p>
             </b>
          </div>
          <div className='homepage-footer4'>
            <h3>Subscribe to our newsletters</h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <input
                    className="footer-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="example@gmail.com"
                />
                <br/>
                <br/>
                <br/>
                <div className='footer-btn'>
                <button>Submit</button>
                </div>
          </div>
          <div className='hp-footer3'>
          <hr/>
          </div>
          <div className='hp-footer4'>
          <p>Copyright @ ju-code14</p>
          </div>
        </footer>
      </div>
    </body>


  );
}

export default HomePage;
