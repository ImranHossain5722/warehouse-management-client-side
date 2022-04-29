import React from "react";
import { Form, Button } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import "./Register.css";

const Register = () => {
  //for navigate
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // submit handal
  const registerHandal = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);

    console.log(name, email, password);
  };
  return (
    <div className=" w-50 mx-auto mt-5 form-container ">
      <h1 className=" text-center pt-4">Register Please </h1>
      <Form className="form " onSubmit={registerHandal}>
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-100 mx-auto" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className="form-p">
        Already have an account ? <Link to="/login"className="text-danger text-decoration-none"onClick={navigateLogin}
        >Login </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
