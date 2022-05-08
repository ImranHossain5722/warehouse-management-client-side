import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import './AddItem.css'
import { toast } from "react-toastify";
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

const AddItem = () => {

 

const addItemsHandel =(event)=>{
    event.preventDefault();
    const supplierName =event.target.supplierName.value;
    const email= event.target.email.value ;
    const brand=event.target.brand.value ; 
    const quantity=event.target.quantity.value ;  
    const price=event.target.price.value ;  
    const description=event.target.description.value ;  
    const img=event.target.img.value ;  
    const user ={supplierName, email, brand, quantity, price, description,img}

    console.log(supplierName, email, brand,  quantity, price, description,  img );

        const url = `https://rocky-dawn-40302.herokuapp.com/inventoryItems`
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(result =>{
            
            toast('Add Stock Items Successfully')
            event.target.reset();
        })

}

  return (
    <div className="main-div-AddItem pt-5 pb-5">
    <div className="w-50 mx-auto main-form-wrap">
      <Form className="form " onSubmit={addItemsHandel }>
          <h1 className="text-center p-3 text-white">Add Stock Items</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="supplierName"
            placeholder="Enter Your supplier name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Your email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="brand"
            placeholder="Enter Your car brand name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="quantity"
            placeholder="Enter Your  quantity"
          />
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            name="price"
            placeholder="Your price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter Your short detail"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="img"
            placeholder="Your Items photo URL"
          />
        </Form.Group>
        
        <Button className="w-100 mx-auto" variant="primary" type="submit">
          Add Items
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default AddItem;
