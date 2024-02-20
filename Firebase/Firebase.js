// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDloVDHL0V8uhXyLd9ebmlmd7fKVX5YG_Y",
  authDomain: "bytebeat-51b1a.firebaseapp.com",
  databaseURL: "https://bytebeat-51b1a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bytebeat-51b1a",
  storageBucket: "bytebeat-51b1a.appspot.com",
  messagingSenderId: "308556387750",
  appId: "1:308556387750:web:0a1ce3b14747ea994d2b67",
  measurementId: "G-GGY3E3Y7J4"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
