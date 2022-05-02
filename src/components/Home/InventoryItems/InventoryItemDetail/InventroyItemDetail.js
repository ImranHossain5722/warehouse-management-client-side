import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const InventoryItemDetail = () => {
  const {inventoryItemId} = useParams();

  const [inventoryItem , setInventoryItem] = useState([]);

  useEffect(() => {
    fetch(
      `https://rocky-dawn-40302.herokuapp.com/inventoryItems/${inventoryItemId}`
    )
      .then((res) => res.json())
      .then((data) => setInventoryItem(data));
  }, [inventoryItemId]);

  return (
  
   <div>
       <div className="container" >
        <div className="row">
            <div className="col-6" >
                <img className="img-fluid" src={inventoryItem.img} alt="" />
            </div>
            <div className="col-6">
            <p><span className="inventory-text" >Supplier Name :</span> {inventoryItem.supplierName}</p>
          <p><span className="inventory-text" >Car Name : </span>{inventoryItem.name}</p>
          <p><span className="inventory-text" >Brand:</span> {inventoryItem.brand}</p>
          <p><span className="inventory-text" >Quantity : </span>{inventoryItem.length}</p>
          <p><span className="inventory-text" >Price : </span>{inventoryItem.price}</p>
          <p><span className="inventory-text" >Short Detail :</span> {inventoryItem.description}</p>
              <Button>Delivered</Button>
            </div>


        </div>
       </div>
      
   </div>
  
  );
};

export default InventoryItemDetail;
