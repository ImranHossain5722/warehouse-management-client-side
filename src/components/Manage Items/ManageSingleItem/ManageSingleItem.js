import React from "react";
import "./ManageSingleItem.css";

const ManageSingleItem = ({ useInventoryItem }) => {
  const { name, img, price, brand, description, quantity, supplierName } =
    useInventoryItem;
  return (
    <div className="main-items-container w-50 mx-auto mt-5 align-items center">
      <div className="items-img">
        <img src={img} alt="" />
      </div>

      <div className=" items-container">
        <div className="items-details">
          <p> <span>Name:</span> {name}</p>
          <p> <span>Brand:</span> {brand}</p>
          <p> <span>Quantity:</span> {quantity}</p>
          <p> <span>Supplier Name:</span> {supplierName}</p>
          <p> <span>Price :</span> {price}</p>
        </div>
        <div className="delete-btn-container">
          <button className="btn"> X </button>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleItem;
