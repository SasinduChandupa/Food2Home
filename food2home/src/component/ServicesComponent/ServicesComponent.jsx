import React from 'react';
import './ServicesComponent.css';

const ServicesComponent = () => {
    const services = [
        {
            icon: "⏰",
            title: "24/7 Service",
            description: "Order anytime, day or night. Our virtual marketplace never closes, with customer support available around the clock.",
            features: [
                "Midnight cravings? We've got you covered",
                "Emergency ingredient delivery",
                "24/7 customer support"
            ]
        },
        {
            icon: "🚚",
            title: "Same Day Delivery",
            description: "Get your fresh produce delivered within hours of ordering. Perfect for when you need ingredients fast.",
            features: [
                "Order by 2pm for evening delivery",
                "Real-time delivery tracking",
                "Guaranteed freshness or money back"
            ]
        },
        {
            icon: "🌱",
            title: "Farm Direct",
            description: "Straight from local farms to your table. Our shortest supply chain ensures maximum freshness.",
            features: [
                "Locally sourced produce",
                "Farm freshness guaranteed",
                "Support for local farmers"
            ]
        },
        {
            icon: "📦",
            title: "Subscription Boxes",
            description: "Weekly curated boxes of seasonal produce delivered automatically. Never worry about grocery shopping again.",
            features: [
                "Customizable contents",
                "Pause or cancel anytime",
                "10% discount for subscribers"
            ]
        },
        {
            icon: "🍎",
            title: "Organic Selection",
            description: "Wide variety of certified organic fruits and vegetables. Better for you and the environment.",
            features: [
                "100% pesticide-free",
                "Certified organic produce",
                "Seasonal specials"
            ]
        },
        {
            icon: "💼",
            title: "Corporate Services",
            description: "Bulk deliveries for offices, restaurants, and institutions. Customized to your business needs.",
            features: [
                "Volume discounts",
                "Regular scheduled deliveries",
                "Dedicated account manager"
            ]
        }
    ];

    return (
        <div className="services-container">
            <div className="services-header">
                <h2 className="section-title">Our Services</h2>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h2>{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                        <ul className="service-features">
                            {service.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="service-guarantee">
                <h2 className="section-title">Our Guarantee</h2>
                <div className="guarantee-items">
                    <div className="guarantee-item">
                        <div className="guarantee-icon">✓</div>
                        <p>100% freshness guarantee on all produce</p>
                    </div>
                    <div className="guarantee-item">
                        <div className="guarantee-icon">✓</div>
                        <p>No-questions-asked refund policy</p>
                    </div>
                    <div className="guarantee-item">
                        <div className="guarantee-icon">✓</div>
                        <p>Carbon-neutral delivery options</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesComponent;