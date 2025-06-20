import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="wr-navbar">
      <ul className="wr-navbar-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#packages">Packages</a></li>
        <li><a href="#book">Book</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
