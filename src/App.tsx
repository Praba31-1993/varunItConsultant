import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headermenus from './component/header/headermenus';
import FoterSection from './component/footer/footerSection';
import ContactForm from './component/contact/contactForm';
import OurServices from './component/services/oruServices';
import AboutUs from './component/aboutUs/aboutUs';



function App() {
  return (
     <div className="App px-3">
      <Headermenus />
      
    

      <div id="about">
        <AboutUs />
      </div>

      <div id="services">
        <OurServices />
      </div>

      <div id="contact">
        <ContactForm />
      </div>

      <FoterSection />
    </div>
  );
}

export default App;