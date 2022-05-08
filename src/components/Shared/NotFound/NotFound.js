import React from "react";
import { useNavigate } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
const navigate =useNavigate()

const navgateHome =()=>{
    navigate('/home')
}

  return (
    <div className="mainNotFound">
      <div className="container">
        <div className="row ">
            <button button onClick={navgateHome } className="notFoundtButton w-25 mt-5 ">Back Home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
