import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {

  const [user] = useAuthState(auth) 
  const [myItems , setMyItems]  = useState([]) 
  // const email = user?.email
  //  const url = `https://rocky-dawn-40302.herokuapp.com/inventoryItems?email=${email}`

  useEffect(()=>{

      const getItems =async ()=>{
        const  email = user.email
        const url =`https://rocky-dawn-40302.herokuapp.com/inventoryItems?email=${email}`;
        const {data}= await axios.get(url)
        setMyItems(data)

      }
      getItems()

    // fetch(url)
    // .then (res => res.json())
    // .then(data => setMyItems(data))


 },[user])
return (

    <div className='m-5' >
        <h1>My Add Items: {myItems.length}</h1>
    </div>
);

}


export default MyItems;