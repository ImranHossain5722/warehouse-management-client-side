// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4BDR-8EgReBNJwGFFTcYpUzIyEw9K9DQ",
  authDomain: "carsale-a3464.firebaseapp.com",
  projectId: "carsale-a3464",
  storageBucket: "carsale-a3464.appspot.com",
  messagingSenderId: "525426512539",
  appId: "1:525426512539:web:d767941086fd6b97f72c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;