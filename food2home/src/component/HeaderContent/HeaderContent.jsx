import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderContent.css';

const HeaderContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const handleCloseForm = () => {
    setShowLoginForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', formData);
    // Close the form after submission
    setShowLoginForm(false);
  };

  return (
    <>
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
          <div className="call-link">Call</div>
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
        </div>
      </nav>

      {/* Login Popup Form */}
      {showLoginForm && (
        <div className="login-popup-overlay">
          <div className="login-popup">
            <button className="close-btn" onClick={handleCloseForm}>×</button>
            <h2>Login to Your Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Login</button>
              <div className="form-footer">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
                <p><Link to="/forgot-password">Forgot password?</Link></p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderContent;