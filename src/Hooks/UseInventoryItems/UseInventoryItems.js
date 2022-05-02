import { useEffect, useState } from 'react';

const UseInventoryItems = () => {

    const [useInventoryItems, setUseInventoryItems] = useState([])
    useEffect(()=>{
   
        fetch ('https://rocky-dawn-40302.herokuapp.com/inventoryItems')
        .then (res => res.json())
        .then (data => setUseInventoryItems(data))
    
      },[])
    
 return[useInventoryItems, setUseInventoryItems]


};

export default UseInventoryItems;