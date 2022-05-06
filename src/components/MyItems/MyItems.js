import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {

  const [user] = useAuthState(auth) 
  const [myItems , setMyItems]  = useState([]) 
  const email = user?.email
   const url = `https://rocky-dawn-40302.herokuapp.com/inventoryItems?email=${email}`

  useEffect(()=>{

    fetch(url)
    .then (res => res.json())
    .then(data => setMyItems(data))


 },[])
return (

    <div>
        <h1>My Add Items: {myItems.length}</h1>
    </div>
);

}


export default MyItems;