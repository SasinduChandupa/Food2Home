import React from "react";
import HeaderContent from "../component/HeaderContent/HeaderContent";
import ShopItemComponent from "../component/ShopItemComponent/ShopItemComponent";
import FooterComponent from "../component/footerComponent/FooterComponent";

const Home = () => {
    return (
      <div className="home-page">
        <HeaderContent />
        <ShopItemComponent />
        <FooterComponent />
      </div>
    );
};
  
export default Home;