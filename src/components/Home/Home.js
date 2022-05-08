import React from "react";
import banner from "../../Images/car-banner2.png";
import InventoryItems from "../Home/InventoryItems/InventoryItems";

import "./Home.css";
import SectionFour from "./SectionFour/SectionFour";
import SectionThree from "./SectionThree/SectionThree";
import Blogs from "../Blogs/Blogs"

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="div-wrap">
        <div className=" row align-items-center pt-5">
          <div className="pt-5 img-div col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 ">
            <img className="pt-5 img-fluid" height={450} src={banner} alt="" />
          </div>

          <div className="mt-5 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4  div-wrap-text ">
            <h2 className="h1-text">Welcome To CarSale</h2>
            <p className=" ml-5 p-2">
              We are World Wide Brand New Car Supplier company The worlds first
              available Variable Compression Turbo anywhere and anytime we
              export. our car Enjoy.
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
