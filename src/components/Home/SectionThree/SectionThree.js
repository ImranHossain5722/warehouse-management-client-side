import React from "react";
import carBanner from "../../../Images/car2.webp";
import './SectionThree.css'
const SectionThree = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center  cover-wrap">
          <div className=" col-12 col-md-6 col-lg-6 details-wrap p-5">
            <h2>2022 Midnight Edition</h2>
            <p>
              Add more style, presence, and personality with the 2022 Altima
              Midnight Edition. From black wheels to a black rear spoiler, this
              vehicle is built to turn heads — day or night.
            </p>
            <button>Show More</button>
          </div>

          <div className="col-12 col-md-4 col-lg-4 img-dev">
            <img
              className="img-fluid"
              src={carBanner} 
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
