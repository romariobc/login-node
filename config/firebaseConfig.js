// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_FWEJkeYWdeZKf3fufbyOJKxKcFdcGZ8",
  authDomain: "appteste-b900d.firebaseapp.com",
  projectId: "appteste-b900d",
  storageBucket: "appteste-b900d.firebasestorage.app",
  messagingSenderId: "615920218837",
  appId: "1:615920218837:web:94c0531276b9315a67285c",
  measurementId: "G-2Z72RVRE5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);