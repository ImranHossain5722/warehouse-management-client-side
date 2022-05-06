import React from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateInventoryItem = ({isReload , setIsReload}) => {
  const { inventoryItemId } = useParams();

  const updateInventoryItems = (event) => {
    event.preventDefault();

    const quantity = event.target.quantity.value;
    const price = event.target.price.value;
    const user = { quantity, price };

    console.log(quantity, price);

    const url = `https://rocky-dawn-40302.herokuapp.com/inventoryItems/${inventoryItemId}`;
 
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        toast('update successfully')
        event.target.reset()
        setIsReload(result)


      });
  };

  return (
    <div className="container">
      <div className="row justify-content-start">
        <Form className="form " onSubmit={updateInventoryItems}>
          <h5 className="text-center p-3 ">Update Inventory Items</h5>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="quantity"
              placeholder="Update Your  quantity"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="price"
              placeholder=" Update Your price"
            />
          </Form.Group>

          <Button className="w-100 mx-auto" variant="primary" type="submit">
            Update Item
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateInventoryItem;
