import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InventoryItem from "../../Home/InventoryItems/InventoryItem/InventoryItem";
import './InventoryItems.css'

const InventoryItems = () => {
  const navigate = useNavigate()
  const moveToManageItemPage =()=>{

    navigate('/manageitem')
  }

  const [inventoryItems , setInventoryItems]= useState([])

  useEffect(()=>{
   
    fetch ('https://rocky-dawn-40302.herokuapp.com/inventoryItems')
    .then (res => res.json())
    .then (data => setInventoryItems(data))

  },[])

  return (
    <div className="container">
      <div className="row ">
          <h1 className="text-center pt-4">We have items in stock: {inventoryItems.length}</h1>
          <div style={{ height: "3px" , width:"50px" }} className="bg-primary  mx-auto "></div>

          <div className="inventory-container  " >
              {
                inventoryItems.map(inventoryItem => <InventoryItem key={inventoryItem._id} inventoryItem={inventoryItem} > </InventoryItem>)
              }
              
             
          </div>
          <Button className=" w-25 mx-auto mt-5" onClick={()=>moveToManageItemPage()}> Manage Inventory Items</Button>
      </div>
    </div>
  );
};

export default InventoryItems ;
