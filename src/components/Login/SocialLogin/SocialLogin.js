import React from "react";
import { Button } from "react-bootstrap";
import auth from "../../../firebase.init";
import google from '../../../Images/social-images/Google-Logo.png'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import './SocialLogin.css'

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div className=" w-50 mx-auto">
      <div className="d-flex align-items-center ">
        <div style={{ height: "1px" }} className="bg-white  w-50 or-div"></div>
        <p className="mt-2 px-2"> or</p>
        <div style={{ height: "1px" }} className="bg-white  w-50 or-div "></div>
      </div>

        <div className=" w-50 mx-auto pb-4">
            <Button  className="btn"  onClick={()=>signInWithGoogle()} >
            <img style={{ width: "30px" }} src={google} alt="" />    
            Google Sign In </Button>
        </div>

    </div>
  );
};

export default SocialLogin;
