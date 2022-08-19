// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_qPgA274wK-uDNuWis1JC9GzPTjdUGpg",
  authDomain: "simpleblog-64cc4.firebaseapp.com",
  projectId: "simpleblog-64cc4",
  storageBucket: "simpleblog-64cc4.appspot.com",
  messagingSenderId: "492639691297",
  appId: "1:492639691297:web:b9c0b8a8c59f69ead57960",
  measurementId: "G-Z9WLG6WQHM"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth= getAuth(app);
export const provider=new GoogleAuthProvider();