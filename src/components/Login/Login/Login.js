import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../../../components/Login/SocialLogin/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {toast } from 'react-toastify';
import axios from "axios";


const Login = () => {
  const location =useLocation();
  let errorElement;
  let from = location.state?.from?.pathname || "/";

  //for navigate
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate("/register");
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);


  if (user) {
    // navigate(from, { replace: true });
  }

  if (error) {
    errorElement = toast (
      <div>
        <p className="text-danger">Error: {error?.message} </p>
      </div>
    );
  }

  // login handal
  const loginHandal = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    await signInWithEmailAndPassword(email, password);
    const {data} = await axios.post('https://rocky-dawn-40302.herokuapp.com/login',{email})

    console.log(data)
  };



  return (
    <div className=" w-50 mx-auto mt-5 form-container ">
      <h1 className=" text-center pt-4">Login Please </h1>
      <Form className="form  mx-auto" onSubmit={loginHandal}>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Control
            className=""
            type="email"
            name="email"
            placeholder="Enter Your email "
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className=""
            type="password"
            name="password"
            placeholder="Type your password"
          />
        </Form.Group>

        <Button
          className="d-flex  mx-auto"
          variant="primary "
          siz="lg"
          type="submit"
        >
          Login
        </Button>
      </Form>
       
      
      <p className="form-p">
        You don't have an account ?
        <Link
          to="/register"
          className="text-danger text-decoration-none"
          onClick={navigateRegister}
        >
          Register Please
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
