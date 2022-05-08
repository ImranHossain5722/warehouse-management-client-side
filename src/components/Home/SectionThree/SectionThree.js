import React from "react";
import { useNavigate } from "react-router-dom";
import carBanner from "../../../Images/car-banner1.webp";
import './SectionThree.css'
const SectionThree = () => {

  const navegate = useNavigate()
  
   const navegateToMagePage =()=>{

    navegate('/manageitem')
   }
 

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
            <button onClick={navegateToMagePage }>Show More</button>
          </div>

          <div className="col-12  col-sm-12  col-md-6 col-lg-6 img-dev">
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
