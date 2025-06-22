import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  return (
    <>
      <div className="navbar">
        <div className="companyName">
          <div className="name">WonderRush Tours</div>
          <div className="btn">
            <button
              className={`burger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>

        <div className={`navlinks${menuOpen ? " show" : ""}`}>
          <ul>
            <li>
              <a href="#home" className="home">
                Home
              </a>
            </li>
            <li>
              <a href="#bangkok" className="bangkok">
                Bangkok
              </a>
            </li>
            <li>
              <a href="#pattaya" className="pattaya">
                Pattaya
              </a>
            </li>
            <li>
              <a href="#ratchaburi" className="ratchaburi">
                Ratchaburi
              </a>
            </li>
            <li>
              <a href="#kanchanaburi" className="kanchanaburi">
                Kanchanaburi
              </a>
            </li>
            <li>
              <a href="#packages" className="packages">
                Packages
              </a>
            </li>
            <li>
              <a href="#contact" className="contact">
                {" "}
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
