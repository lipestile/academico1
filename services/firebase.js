// Import the functions you need from the SDKs you need
import { initializeApp,getApp } from "firebase/app";
import { getDatabase } from "firebase/app";
let app
try{
  app=getApp() 

 } catch(erro) {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AD,
    databaseURL: process.env.FIREBASE_URL,
    projectId: process.env.FIREBASE_PJCID,
    storageBucket: process.env.FIREBASE_SB,
    messagingSenderId: process.env.FIREBASE_MSD,
    appId: process.env.FIREBASE_AI
  };
  app = initializeApp(firebaseConfig);
 }

 const db= getDatabase(app)
 export{db}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration/
//const ;;///firebaseConfig = {
//    apiKey: process.env.FIREBASE_API_KEY,
//    authDomain: process.env.FIREBASE_AD,
//    databaseURL: process.env.FIREBASE_URL,
//    projectId: process.env.FIREBASE_PJCID,
//    storageBucket: process.env.FIREBASE_SB,
//    messagingSenderId: process.env.FIREBASE_MSD,
//    appId: process.env.FIREBASE_AI,
//  };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);