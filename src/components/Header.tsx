import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="wr-header">
      <h1 className="wr-title">WonderRush Tours</h1>
      <h4 className="wr-tagline">Experience the awe and beauty of Thailand through exciting and adventurous travel.</h4>
      <p className="desc">Discover the best of Thailand with WonderRush Tours! Our expertly guided tours take you to four of the country’s most captivating destinations: Ratchaburi, Kanchanaburi, Bangkok, and Pattaya. Each location offers a unique blend of culture, history, and scenic charm. Wander through colorful floating markets in Ratchaburi, explore the historic River Kwai in Kanchanaburi, feel the pulse of city life in Bangkok, and relax on the vibrant beaches of Pattaya. Whether you're a curious explorer or a laid-back traveler, WonderRush Tours is here to make your journey through Thailand truly authentic, seamless, and unforgettable.</p>
      <Link to="/packages" className="bookNow">Check Packages</Link>
    </header>
  );
};

export default Header;
