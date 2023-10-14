import React, { useState } from "react";
import CustomNavbar from "../components/CustomNavbar";
import DesignBanner from "../components/Banner/DesignBanner";
import Service from "../components/Service/Service";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer/Footer";
import FooterData from "../components/Footer/FooterData";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="body_wrapper">
      <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" />
      <DesignBanner />
      <div
        className="section"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="overlay">
            <p>Coming Soon</p>
          </div>
        )}
        <Service />
      </div>
      <div
        className="section"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="overlay">
            <p>Coming Soon</p>
          </div>
        )}
        <Subscribe FooterData={FooterData} />
      </div>
      <div
        className="section"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="overlay">
            <p>Coming Soon</p>
          </div>
        )}
        <Footer FooterData={FooterData} />
      </div>
    </div>
  );
};
export default Home;
