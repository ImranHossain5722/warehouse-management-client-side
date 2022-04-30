import React from 'react';

const InventroyItemDetail = () => {
const [inventoryItems , setInventoryItems]= useState([])

  useEffect(()=>{
   
    fetch ('https://rocky-dawn-40302.herokuapp.com/inventoryItems')
    .then (res => res.json())
    .then (data => setInventoryItems(data))

  },[])


    return (
        <div>
            
        </div>
    );
};

export default InventroyItemDetail;