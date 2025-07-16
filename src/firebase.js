// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgd-TMPWvQUt6rCjnzzymo57coXKJVmiQ",
  authDomain: "zbackend-ea0a7.firebaseapp.com",
  projectId: "zbackend-ea0a7",
  storageBucket: "zbackend-ea0a7.firebasestorage.app",
  messagingSenderId: "823052752401",
  appId: "1:823052752401:web:af59cc01916162571983b0",
  measurementId: "G-2KPSWDC2R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);