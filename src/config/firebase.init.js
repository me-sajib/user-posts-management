// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZkBzg82Lh96BD5_yiKEUVPebwH9sBonY",
  authDomain: "crud-operation-c6ebf.firebaseapp.com",
  projectId: "crud-operation-c6ebf",
  storageBucket: "crud-operation-c6ebf.appspot.com",
  messagingSenderId: "160275754021",
  appId: "1:160275754021:web:92b3dd2717a057d2d363cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
