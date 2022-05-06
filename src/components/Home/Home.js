import React from "react";
import banner from "../../Images/car-banner2.png";
import InventoryItems from "../Home/InventoryItems/InventoryItems";

import "./Home.css";
import SectionFour from "./SectionFour/SectionFour";
import SectionThree from "./SectionThree/SectionThree";
import Blogs from "../Blogs/Blogs"

const Home = () => {
  return (
    <div className="main-container">
      <div className="div-wrap">
        <div className=" row align-items-center pt-5">
          <div className="pt-5 img-div col-12 col-md-6 col-lg-6  col-xl-6 ">
            <img className="pt-5 img-fluid" height={500} src={banner} alt="" />
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6 div-wrap-text ">
            <h1 className="mt-5 h1-text">Welcome To CarSale</h1>
            <p className=" ml-5 tex-wrap text-left">
              We are World Wide Brand New Car Supplier company The worlds first
              available Variable Compression Turbo anywhere and anytime we
              export. our car Enjoy. Experience instant connectivity to your
              compatible device with NissanConnect® and standard smartphone
              compatibility
            </p>
          </div>
        </div>
      </div>
      <InventoryItems></InventoryItems>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      <Blogs></Blogs>

    </div>
  );
};

export default Home;
