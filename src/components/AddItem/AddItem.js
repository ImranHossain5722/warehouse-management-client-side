import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";

const AddItem = () => {

const addItemsHandel =()=>{

}

  return (
    <div>
      <Form className="form " onSubmit={addItemsHandel }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name "
          />
          <Form.Text className="text-muted ">
            We'll never share your information with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Your email "
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Your password"
          />
        </Form.Group>
        
        <Button className="w-100 mx-auto" variant="primary" type="submit">
          Add Items
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
