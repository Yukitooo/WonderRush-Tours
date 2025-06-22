import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="wr-header">
      <h1 className="wr-title">WonderRush Tours</h1>
      <h4 className="wr-tagline">Experience the awe and beauty of Thailand through exciting and adventurous travel.</h4>
      <p className="desc">Discover the best of Thailand with WonderRush Tours! We offer guided tours to Ratchaburi, Kanchanaburi, Bangkok, and Pattaya—each destination rich in culture, history, and natural beauty. From floating markets and ancient temples to vibrant city streets and stunning beaches, our tours are designed to give you an authentic and unforgettable Thai experience.</p>
    </header>
  );
};

export default Header;
