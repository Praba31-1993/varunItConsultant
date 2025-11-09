import React, { useState } from 'react';
import './headermenus.css'

function Headermenus() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="header-container">
      {/* Header Bar */}
      <div className="d-flex justify-content-between p-3 bg-pght align-items-center">
        <div className="Logo fw-bold fs-4">ABC</div>

        {/* Desktop Menu */}
        <div className="Menus d-none d-md-block">
          <div className="d-flex gap-5 p-0 align-items-center">
            <p className="m-0">Home</p>
            <p className="m-0">About Us</p>
            <p className="m-0">Our Services</p>
            <p className="m-0">Blog</p>
            <p className="m-0">Contact</p>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <i
          className="bi bi-list fs-1 d-md-none"
          onClick={toggleMenu}
          style={{ cursor: 'pointer' }}
        ></i>
      </div>

      {/* Side Menu for Mobile */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="side-menu-header d-flex justify-content-between align-items-center p-3">
          <h5 className="m-0">Menu</h5>
          <i
            className="bi bi-x-lg fs-4"
            onClick={closeMenu}
            style={{ cursor: 'pointer' }}
          ></i>
        </div>
        <div className="menu-items d-flex flex-column gap-4 p-4">
          <p onClick={closeMenu}>Home</p>
          <p onClick={closeMenu}>About Us</p>
          <p onClick={closeMenu}>Our Services</p>
          <p onClick={closeMenu}>Blog</p>
          <p onClick={closeMenu}>Contact</p>
        </div>
      </div>

      {/* Overlay (click outside to close) */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  );
}

export default Headermenus;
