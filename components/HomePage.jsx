import React from 'react';
import Navbar from './Navbar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="hero-section">
        <div className="logo">Beans and Ivy</div>
        <div className="tagline">Where Every Cup Tells a Story</div>
      </div>
    </div>
  );
};

export default HomePage;