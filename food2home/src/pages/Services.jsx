import React from "react";
import HeaderContent from "../component/HeaderContent/HeaderContent";
import ServicesComponent from "../component/ServicesComponent/ServicesComponent";
import FooterComponent from "../component/footerComponent/FooterComponent";

const Home = () => {
    return (
      <div className="home-page">
        <HeaderContent />
        <ServicesComponent />
        <FooterComponent />
      </div>
    );
};
  
export default Home;