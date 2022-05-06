import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UpdateInventoryItem from "../../../UpdateInventoryItem/UpdateInventoryItem";
import { toast } from "react-toastify";

const InventoryItemDetail = () => {
  const {inventoryItemId} = useParams();
  const [isReload, setIsReload] =useState(true)

  const [inventoryItem , setInventoryItem] = useState([]);

  const deliveredItem=(_id)=>{
  
        console.log('item delverd');
        const newQuantity = parseInt(inventoryItem.quantity)-1
        setIsReload(newQuantity)
        console.log(newQuantity);

      
        }




  useEffect(() => {
    fetch(
      `https://rocky-dawn-40302.herokuapp.com/inventoryItems/${inventoryItemId}`
    )
      .then((res) => res.json())
      .then((data) => setInventoryItem(data));
  }, [inventoryItemId,isReload]);

  return (
  
   <div>
       <div className="container mt-5" >
        <div className="row">
            <div className="col-6" >
                <img className="img-fluid " src={inventoryItem.img} alt="" />
            </div>
            <div className="col-6">
            <p><span className="inventory-text" >Supplier Name :</span> {inventoryItem.supplierName}</p>
          <p><span className="inventory-text" >Car Name : </span>{inventoryItem._id}</p>
          <p><span className="inventory-text" >Brand:</span> {inventoryItem.brand}</p>
          <p><span className="inventory-text" >Quantity : </span>{inventoryItem.quantity}</p>
          <p><span className="inventory-text" >Price: </span>$ {inventoryItem.price}</p>
          <p><span className="inventory-text" >Short Detail :</span> {inventoryItem.description}</p>
          <Button onClick={ ()=> deliveredItem(inventoryItem.quantity)}>Delivered</Button>

            <UpdateInventoryItem  isReload={isReload}  setIsReload={setIsReload} ></UpdateInventoryItem>
          </div>


        </div>
       </div>
      
   </div>
  
  );
};

export default InventoryItemDetail;
