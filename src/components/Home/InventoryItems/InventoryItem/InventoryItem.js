import { Button } from "bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import './InventoryItem.css'

const InventoryItem = ({ inventoryItem }) => {
  const { _id, name, img, price, brand, description, quantity, supplierName } = inventoryItem;

    const navigate = useNavigate()

    const navigateButton = _id =>{

        navigate(`manageitem/${_id}`)
    }

  return (
    <div>
      <div className="card mx-2 inventory-item-div mt-5">
          <img className="card-img-top" src={img} alt=""/>
          <div className="card-body p-0">
          <p><span className="inventory-text" >Supplier Name :</span> {supplierName}</p>
          <p><span className="inventory-text" >Car Name : </span>{name}</p>
          <p><span className="inventory-text" >Brand:</span> {brand}</p>
          <p><span className="inventory-text" >Quantity : </span>{quantity}</p>
          <p><span className="inventory-text" >Price : </span>{price}</p>
          <p><span className="inventory-text" >Short Detail :</span> {description}</p>
           <button className="btn-mange-stock d-flx justify-content-center" onClick={()=>navigateButton(_id)} >Manage Stock</button>
          </div>
      </div>
    </div>
  );
};

export default InventoryItem;
