import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
              <Link to="/home" className="home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/bangkok" className="bangkok" onClick={() => setMenuOpen(false)}>
                Bangkok
              </Link>
            </li>
            <li>
              <Link to="/pattaya" className="pattaya" onClick={() => setMenuOpen(false)}>
                Pattaya
              </Link>
            </li>
            <li>
              <Link to="/ratchaburi" className="ratchaburi" onClick={() => setMenuOpen(false)}>
                Ratchaburi
              </Link>
            </li>
            <li>
              <Link to="/kanchanaburi" className="kanchanaburi" onClick={() => setMenuOpen(false)}>
                Kanchanaburi
              </Link>
            </li>
            <li>
              <Link to="/packages" className="packages" onClick={() => setMenuOpen(false)}>
                Packages
              </Link>
            </li>
            <li>
              <Link to="/contact" className="contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
