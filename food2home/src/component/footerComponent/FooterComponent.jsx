import React from 'react';
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">Food2<span>Home</span></h2>
          <p className="footer-tagline">Fresh produce delivered to your doorstep</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
            <a href="#" aria-label="Youtube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="links-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Help</h3>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/shipping">Shipping Policy</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> 18/A, Main Street, Thanamalvila</li>
              <li><i className="fas fa-phone"></i> +(94) 915 452 313</li>
              <li><i className="fas fa-envelope"></i> hello@food2home.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Food2Home. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;