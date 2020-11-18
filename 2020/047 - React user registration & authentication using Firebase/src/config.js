import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBRnU-ukg1hajloAX4xmU_2wiKnwbNKDhA",
  authDomain: "react-firebase-auth-6270e.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-6270e.firebaseio.com",
  projectId: "react-firebase-auth-6270e",
  storageBucket: "react-firebase-auth-6270e.appspot.com",
  messagingSenderId: "83091629514",
  appId: "1:83091629514:web:99702034755a934a5a9b37",
});

export default firebaseConfig;
