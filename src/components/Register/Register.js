import { async } from "@firebase/util";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from '../../firebase.init'
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import "./Register.css" ;

const Register = () => {

  const [proceed,setProceed]= useState(false)
  //for navigate
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  // const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
  const [
    createUserWithEmailAndPassword,
     user, 
     loading, 
     error
    ] = useCreateUserWithEmailAndPassword( auth, { sendEmailVerification: true } );
 //update profile
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);


  // submit handal
  const registerHandel = async (event) => {

    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

   await createUserWithEmailAndPassword (email, password)
   await updateProfile ({displayName:name})
    
    navigate ('/home')

  };

  
  return (
    <div className=" w-50 mx-auto mt-5 form-container ">
      <h1 className=" text-center pt-4">Register Please </h1>
      <Form className="form " onSubmit={registerHandel}>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className={proceed ? 'text-primary' : 'text-danger'} type="checkbox" onClick={()=> setProceed(!proceed)}  label="Accept CarSale Terms And Conditions" />
        </Form.Group>
        <Button className="w-100 mx-auto" variant="primary" type="submit" disabled={!proceed} >
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
