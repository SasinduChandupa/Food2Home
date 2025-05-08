import React from "react";
import HeaderContent from "../component/HeaderContent/HeaderContent";
import AboutComponent from "../component/AboutComponent/AboutComponent";
import FooterComponent from "../component/footerComponent/FooterComponent";

const Home = () => {
    return (
      <div className="home-page">
        <HeaderContent />
        <AboutComponent />
        <FooterComponent />
      </div>
    );
};
  
export default Home;