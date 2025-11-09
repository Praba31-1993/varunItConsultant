import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headermenus from './component/header/headermenus';
import FoterSection from './component/footer/footerSection';
import ContactForm from './component/contact/contactForm';



function App() {
  return (
    <div className="App">
      <Headermenus />
      <ContactForm/>
      <FoterSection/>

    </div>
  );
}

export default App;