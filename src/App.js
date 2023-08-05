import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import Loginsuccess from './Loginsucess';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import Profile from './Profile';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import FindDoctor from './FindDoctor';
import ViewDoctor from './ViewDoctor';
import BookAppointment from './BookAppointment';
import AppointmentSuccess from './AppointmentSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loginsuccess" element={<Loginsuccess />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/view-doctor" element={<ViewDoctor />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/appointment-success" element={<AppointmentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
