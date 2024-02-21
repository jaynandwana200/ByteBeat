// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBTh9AWt-gp_9M9eMUdmnaBQaAHIIuoX74",

  authDomain: "beat-byte-f7224.firebaseapp.com",

  projectId: "beat-byte-f7224",

  storageBucket: "beat-byte-f7224.appspot.com",

  messagingSenderId: "479571559806",

  appId: "1:479571559806:web:9fa96ddede5c55dc72df2f",

  measurementId: "G-QDQ7N1VY4L"

};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
