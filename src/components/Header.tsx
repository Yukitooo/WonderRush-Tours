import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="wr-header">
      <h1 className="wr-title">WonderRush Tours</h1>
      <p className="wr-tagline"></p>
      <a className="wr-btn-packages" href="#packages">See All Packages</a>
    </header>
  );
};

export default Header;
