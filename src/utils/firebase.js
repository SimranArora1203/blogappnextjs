// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp2-13452.firebaseapp.com",
  projectId: "blogapp2-13452",
  storageBucket: "blogapp2-13452.appspot.com",
  messagingSenderId: "165775015070",
  appId: "1:165775015070:web:6cbec497fe5d26dfa80f8f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
