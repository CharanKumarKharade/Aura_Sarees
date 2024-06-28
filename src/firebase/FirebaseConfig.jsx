// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7hBnigWSKjf7LfW-tYbl-_V4OnJu1rGI",
  authDomain: "myfirstapp-be5c3.firebaseapp.com",
  projectId: "myfirstapp-be5c3",
  storageBucket: "myfirstapp-be5c3.appspot.com",
  messagingSenderId: "726322269597",
  appId: "1:726322269597:web:ae709177752b68b592f374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth};