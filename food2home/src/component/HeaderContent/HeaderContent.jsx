import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderContent.css';

const HeaderContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <span className="brand-main">Food2</span>
          <span className="brand-secondary">Home</span>
        </Link>
      </div>

      {/* Hamburger Menu Button (Mobile Only) */}
      <button className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="header-link active">Home</Link>
        <Link to="/shop" className="header-link">Shop</Link>
        <Link to="/services" className="header-link">Our Services</Link>
        <Link to="/about" className="header-link">About</Link>
        <Link to="/contact" className="header-link">Contact</Link>
        <div className="call-link">Call</div>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default HeaderContent;