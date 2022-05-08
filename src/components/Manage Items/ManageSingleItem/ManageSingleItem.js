import React, { useState } from "react";
import "./ManageSingleItem.css";
import { faCirclePlus, faTrash,  } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import UseInventoryItems from "../../../Hooks/UseInventoryItems/UseInventoryItems";
import { useNavigate } from "react-router-dom";

const ManageSingleItem = ({ useInventoryItem, handelDelete }) => {
const navigate = useNavigate ()

 const navegateAddItem = () => {

   navigate ('/additem')
 }

  const {_id, email, img, price, brand, quantity, supplierName } = useInventoryItem;

    
  return (
    <div className="main-items-container w-50 mx-auto mt-5 p- align-items center">
      <div className="items-img">
        <img className="figure-img img-fluid rounded" src={img} alt="" />
      </div>

      <div className=" Single-items-container">
        <div className="items-details">
  
          <p> <span className="items-detail">Brand:</span> {brand}</p>
          <p> <span className="items-detail">Quantity:</span> {quantity}</p>
          <p> <span className="items-detail">Supplier Name:</span> {supplierName}</p>
          <p> <span className="items-detail">Price :</span> $ {price}</p>
        </div>
        <div className="delete-btn-container">
          <button className="btn"onClick={()=>handelDelete(_id)} > <FontAwesomeIcon className="deleteIcon" icon={faTrash} ></FontAwesomeIcon> </button>
          <button className="btn" onClick={()=>navegateAddItem()}> <FontAwesomeIcon className="deleteIcon" icon={faCirclePlus} ></FontAwesomeIcon> </button>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleItem;
