import React from "react";
import banner from "../../Images/car-banner1.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-container">
      <div className="container-fluid div-wrap">
        <div className=" row align-items-center pt-5">
          <div className="pt-5 col-12 col-md-6 col-lg-6 col-xl-6 ">
            <img className="pt-5 img-fluid" height={400} src={banner} alt="" />
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6 ">
            <h1 className="mt-5 h1-text">Welcome To CarSale</h1>
            <p className=" ml-5">
              We are World Wide Brand New Car Supplier company The worlds first
              available Variable Compression Turbo anywhere and anytime we
              export. our car Enjoy. Experience instant connectivity to your
              compatible device with NissanConnect® and standard smartphone
              compatibility
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
