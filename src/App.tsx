import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headermenus from './component/header/headermenus';
import FoterSection from './component/footer/footerSection';
import ContactForm from './component/contact/contactForm';
import OurServices from './component/services/oruServices';
import AboutUs from './component/aboutPage/aboutUs';
import Home from './component/homePage/home';



function App() {
  return (
    <div className="App px-3" style={{ background: '#80808012' }}>
      <Headermenus />


      <div id="about">
        <Home />
      </div>
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