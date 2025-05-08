import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <div className="hero-section">
          <div className="hero-text">
            <h2 className="brand-title">Food2Home</h2>
            <h1>Fresh Food Door step within 24 hours</h1>
            <p>Build direct connections with nearby farmers and local creators. Enjoy farm-fresh fruits, vegetables, dairy, and handmade products brought right to your home.</p>
            
            <div className="cta-section">
              <button className="shop-now-btn">Shop Now</button>
              <button className="Browse-btn">Browse Categories</button>
            </div>

            {/* Mobile-only image */}
            <div className="mobile-hero-image">
              <img src="/A.png" alt="Fresh local produce" />
            </div>

            <div className="search-bar">
              <input type="text" placeholder="Search for fresh products" />
            </div>

            <div className="guarantees">
              <span>✓ Fresh Food</span>
              <span>✓ By farmer's own hand</span>
              <span>✓ One Day Delivery</span>
            </div>
          </div>
          
          <div className="hero-image">
            <img src="/A.png" alt="Fresh local produce" />
          </div>
        </div>

        <div className="benefits-section">
          <div className="benefit-card">
            <h3>Free shipping</h3>
            <p>FREE delivery on orders over Rs.5000.00</p>
            <p className="small-text">Limited to town area</p>
          </div>

          <div className="benefit-card">
            <h3>Goods</h3>
            <p>Only grown with organic fertilizer</p>
          </div>

          <div className="benefit-card">
            <h3>FRESH</h3>
            <p>Harvested within 24 hours of delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;