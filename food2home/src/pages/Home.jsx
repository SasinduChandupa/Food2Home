import React from "react";
import HeaderContent from "../component/HeaderContent/HeaderContent";
import MainContent from "../component/MainContent/MainContent"; 
import ReviewsComponent from "../component/ReviewsComponent/ReviewsComponent";
import FooterComponent from "../component/footerComponent/FooterComponent";

const Home = () => {
    return (
      <div className="home-page">
        <HeaderContent />
        <MainContent />
        <ReviewsComponent />
        <FooterComponent />
      </div>
    );
};
  
export default Home;