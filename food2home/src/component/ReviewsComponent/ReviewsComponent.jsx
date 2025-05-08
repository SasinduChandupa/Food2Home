import React, { useState, useEffect, useRef } from 'react';
import './ReviewsComponent.css';

const ReviewsComponent = () => {
  const reviews = [
    {
      name: "Frank Klin",
      role: "DESIGNER",
      text: "The organic vegetables taste amazing and delivery was super fast.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Linda Anand",
      role: "DOCTOR",
      text: "As a health professional, I recommend Food2Home to all my patients.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "David Gueta",
      role: "CHEF",
      text: "The ingredients are restaurant-quality. My dishes have never tasted better!",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "FOOD BLOGGER",
      text: "Farm-to-table experience without leaving home.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Raj Patel",
      role: "FITNESS TRAINER",
      text: "Perfect for my meal prep. Fresh, nutritious, and delivered right.",
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      name: "Emma Wilson",
      role: "MOTHER OF TWO",
      text: "My kids actually eat their veggies now! The quality makes all the difference.",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      name: "Michael Chen",
      role: "NUTRITIONIST",
      text: "Finally a service that delivers truly fresh produce..",
      image: "https://randomuser.me/api/portraits/men/48.jpg"
    },
    {
      name: "Priya Sharma",
      role: "YOGA INSTRUCTOR",
      text: "My weekly order is the highlight of my healthy lifestyle. Never disappoints.",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      name: "James Taylor",
      role: "LOCAL FARMER",
      text: "Proud to supply Food2Home. They treat our produce with the carefully",
      image: "https://randomuser.me/api/portraits/men/72.jpg"
    },
    {
      name: "Olivia Martin",
      role: "FOOD CRITIC",
      text: "Exceptional quality control. Every item arrives in perfect condition.",
      image: "https://randomuser.me/api/portraits/women/25.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(window.innerWidth <= 768 ? 1 : 3);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth <= 768 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // call once on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (reviews.length - itemsToShow + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length, itemsToShow]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
    }
  }, [currentIndex, itemsToShow]);

  return (
    <div className="reviews-container">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="reviews-wrapper">
        <div className="reviews-carousel" ref={carouselRef}>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-content">
                <p className="review-text">{review.text}</p>
                <div className="reviewer-image">
                  <img src={review.image} alt={review.name} />
                </div>
                <div className="reviewer-info">
                  <h3 className="reviewer-name">{review.name}</h3>
                  <p className="reviewer-role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsComponent;
