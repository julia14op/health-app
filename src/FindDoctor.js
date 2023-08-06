import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import hpimg1 from './hpimg1.png';
import hpimg19 from './hpimg19.png';
import hpimg20 from './hpimg20.png';
import hpimg21 from './hpimg21.png';
import hpimg16 from './hpimg16.png';
import fdimg1 from './fdimg1.png';
import fdimg2 from './fdimg2.png';
import fdimg3 from './fdimg3.png';
import fdimg4 from './fdimg4.png';
import fdimg5 from './fdimg5.png';
import fdimg6 from './fdimg6.png';
import fdimg7 from './fdimg7.png';
import fdimg8 from './fdimg8.png';
import fdimg9 from './fdimg9.png';
import fdimg10 from './fdimg10.png';
import fdimg11 from './fdimg11.png';
import fdimg12 from './fdimg12.png';
import fdimg13 from './fdimg13.png';
import fdimg14 from './fdimg14.png';
import fdimg15 from './fdimg15.png';
import fdimg16 from './fdimg16.png';
import fdimg17 from './fdimg17.png';
import './FindDoctor.css';


function FindDoctor () {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='fd-main'>
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



      <div>
        <input type="text" id='fd-search' placeholder="Find A Doctor" />
      </div>
      <img src={fdimg1} id='fdimg1' alt='icon' />

      <nav className='sub-navbar'>
        <ul>
          <li>Neurology</li>
          <li>Hematology</li>
          <li>Opthalmology</li>
          <li>Family Doctor</li>
          <li>Physiotherapy</li>
          <li>Cardiology</li>
          <li>Anesthetics</li>
        </ul>
      </nav>

 
        <div className='fd-card1'>
          <img src={fdimg2} id='fdimg2' alt='icon' />
          <h3>Dr. Ajayi Ayomide</h3>
          <h5>Professionals</h5>
          <div className='fd-btn1'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard1'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>

        <div className='fd-card2'>
          <img src={fdimg3} id='fdimg3' alt='icon' />
          <h3>Dr. Jon Smith</h3>
          <h5>Professionals</h5>
          <div className='fd-btn2'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1150+ patients</b></p>
          <div className='fd-subcard2'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>

        <div className='fd-card3'>
          <img src={fdimg4} id='fdimg4' alt='icon' />
          <h3>Dr. Adeniyi Ojo</h3>
          <h5>Professionals</h5>
          <div className='fd-btn3'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1450+ patients</b></p>
          <div className='fd-subcard3'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>

        <div className='fd-card4'>
          <img src={fdimg5} id='fdimg5' alt='icon' />
          <h3>Dr. Adams Olaolohun</h3>
          <h5>Professionals</h5>
          <div className='fd-btn4'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard4'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>

        <div className='fd-card5'>
          <img src={fdimg6} id='fdimg6' alt='icon' />
          <h3> Dr. Adeboye Blessing</h3>
          <h5>Professionals</h5>
          <div className='fd-btn5'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard5'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>

       
        <div className='fd-card6'>
          <img src={fdimg7} id='fdimg7' alt='icon' />
          <h3> Dr. Afolagboye Olatunji</h3>
          <h5>Professionals</h5>
          <div className='fd-btn6'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard6'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>


        <div className='fd-card7'>
          <img src={fdimg8} id='fdimg8' alt='icon' />
          <h3> Dr. Rahama Ojo</h3>
          <h5>Professionals</h5>
          <div className='fd-btn7'> 
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard7'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>

        <div className='fd-card8'>
          <img src={fdimg9} id='fdimg9' alt='icon' />
          <h3> Dr. Oluwatoyin Ojo</h3>
          <h5>Professionals</h5>
          <div className='fd-btn8'>
             <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard8'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>


        <div className='fd-card9'>
          <img src={fdimg10} id='fdimg10' alt='icon' />
          <h3> Dr. Akinola Jame</h3>
          <h5>Professionals</h5>
          <div className='fd-btn9'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard9'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>



        <div className='fd-card10'>
        <img src={fdimg11} id='fdimg11' alt='icon' />
          <h3> Dr. John Smiths</h3>
          <h5>Professionals</h5>
          <div className='fd-btn10'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard10'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>

        
        <div className='fd-card11'>
          <img src={fdimg12} id='fdimg12' alt='icon' />
          <h3> Dr. Rebecca James</h3>
          <h5>Professionals</h5>
          <div className='fd-btn11'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard11'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>

        
        <div className='fd-card12'>
          <img src={fdimg13} id='fdimg13' alt='icon' />
          <h3> Dr. Ayomide Adeniyi</h3>
          <h5>Professionals</h5>
          <div className='fd-btn12'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard12'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>
        

        
        <div className='fd-card13'>
          <img src={fdimg14} id='fdimg14' alt='icon' />
          <h3> Dr. Owolabi Victoria</h3>
          <h5>Professionals</h5>
          <div className='fd-btn13'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard13'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>
        

        <div className='fd-card14'>
          <img src={fdimg15} id='fdimg15' alt='icon' />
          <h3> Dr. Oso Ojo</h3>
          <h5>Professionals</h5>
          <div className='fd-btn14'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard14'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>
        
        
        <div className='fd-card15'>
         <img src={fdimg16} id='fdimg16' alt='icon' />
          <h3> Dr. Seun David</h3>
          <h5>Professionals</h5>
          <div className='fd-btn15'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard15'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>
        
        
        <div className='fd-card16'>
          <img src={fdimg17} id='fdimg17' alt='icon' />
          <h3> Dr. Oyindamola Jospeh</h3>
          <h5>Professionals</h5>
          <div className='fd-btn16'>
          <Link to='/view-doctor'><button>View more</button></Link>
          </div>
          <p><b>1300+ patients</b></p>
          <div className='fd-subcard16'>
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          <img src={hpimg16} id='hpimg16' alt="icon" />
          </div>
        </div>
     
      
       <div className='fd-section3'>
          <h2>Always Check Your Health And Stay Healthy.</h2>
          <div className='fd-subsection3'>
            <Link to='/find-doctor'>
              <button>Book An Appointment</button>
            </Link>
          </div>
        </div>



        <footer className='fd-footer'>
        <img src={logo} id='fdfooter1' alt="icon" />
            <br/>
            <div className='fd-footer1'>
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

          <div className='fd-footer2'>
            <h2>Links</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='fdfooter2'>
            <b><p>Home</p><br/>
            <p>Services</p><br/>
            <p>Features</p><br/>
            <p>Contact</p><br/>
            <p>Find Doctors</p><br/>
            <p>Book Appointment</p>
            </b>
            </div>
          </div>


          <div className='fd-footer3'>
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


          <div className='fd-footer4'>
            <h3>Subscribe to our newsletters</h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <form onSubmit={handleSubmit} className='fd-form'>
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
                </form>
          </div>
          <hr/>
          <p>Copyright @ Group28</p>
        </footer>

    </div>
   
  );
}

export default FindDoctor;
