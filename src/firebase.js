import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC6eRJtxSfzC9xlK7XISbrJovz8l2EKpJs",
  authDomain: "brainboxcontributorsetup-1db49.firebaseapp.com",
  projectId: "brainboxcontributorsetup-1db49",
  storageBucket: "brainboxcontributorsetup-1db49.appspot.com",
  messagingSenderId: "851938183097",
  appId: "1:851938183097:web:18b623e0189d87b2ecd868",
  measurementId: "G-P5HGB1K2QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app,auth,db };
