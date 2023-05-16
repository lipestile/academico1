// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AD,
    databaseURL: process.env.FIREBASE_URL,
    projectId: process.env.FIREBASE_PJCID,
    storageBucket: process.env.FIREBASE_SB,
    messagingSenderId: process.env.FIREBASE_MSD,
    appId: process.env.FIREBASE_AI,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);