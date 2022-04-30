import React, { useEffect, useState } from "react";

const CarInventory = () => {

  const [inventoryItems , setInventoryItems]= useState([])

  useEffect(()=>{
   
    fetch ('https://rocky-dawn-40302.herokuapp.com/inventoryItems')
    .then (res => res.json)
    .then (data => setInventoryItems(data))

  },[])

  return (
    <div className="container">
      <div className="row">
          <h1 className="text-center">Our Cars in stock</h1>
          <div style={{ height: "3px" , width:"50px" }} className="bg-primary  mx-auto "></div>

          <div >
              <h1>inventory Items:{inventoryItems.length} </h1>
          </div>
      </div>
    </div>
  );
};

export default CarInventory;
