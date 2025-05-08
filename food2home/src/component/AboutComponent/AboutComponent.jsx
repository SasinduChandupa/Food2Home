import React from 'react';
import './AboutComponent.css';

const AboutComponent = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>Food2Home</h1>
          <p className="hero-subtitle">Bringing farm-fresh goodness to your doorstep since 2020</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="mission-content">
        <h2 className="section-title">Our Mission</h2>
          <p>
            At Food2Home, we're revolutionizing grocery shopping by connecting you directly with local farmers and producers. 
            We believe everyone deserves access to fresh, high-quality food without compromising on convenience.
          </p>
        </div>
        <div className="mission-image">
          <img src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg" alt="Fresh produce" />
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
      <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h3>Farm Fresh</h3>
            <p>We source directly from trusted local farmers to ensure maximum freshness and quality.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>From farm to your table in record time with our optimized delivery network.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💚</div>
            <h3>Sustainability</h3>
            <p>We prioritize eco-friendly packaging and support sustainable farming practices.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🏆</div>
            <h3>Quality Guarantee</h3>
            <p>If you're not satisfied, we'll make it right - no questions asked.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
      <h2 className="section-title">Our Founders</h2>
        <div className="team-members">
          <div className="team-card">
            <img src="https://media.istockphoto.com/id/1915382108/photo/smiling-friendly-confident-millennial-caucasian-lady-manager-teacher-in-formal-wear-with.jpg?s=612x612&w=0&k=20&c=TkrRP273eXURjstyDZHFH4lkrE6OFmVJ9ZCrgLoPfIw=" alt="Founder 1" />
            <h3>Milky F Liyo</h3>
            <p className="role">CEO & Co-Founder</p>
            <p className="bio">
              Former agricultural specialist with a passion for connecting farms to urban communities.
            </p>
          </div>
          <div className="team-card">
            <img src="https://cdn.pixabay.com/photo/2024/06/22/22/56/man-8847069_640.jpg" alt="Founder 2" />
            <h3>Raj Patel</h3>
            <p className="role">CTO & Co-Founder</p>
            <p className="bio">
              Tech entrepreneur dedicated to building sustainable food supply chains through innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Local Farms Partnered</p>
          </div>
          <div className="stat-item">
            <h3>50,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Positive Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;