import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "testing-720eb.firebaseapp.com",
  databaseURL: "https://testing-720eb-default-rtdb.firebaseio.com",
  projectId: "testing-720eb",
  storageBucket: "testing-720eb.appspot.com",
  messagingSenderId: "646088357560",
  appId: "1:646088357560:web:ef4be44282bcb73c9e664d",
  measurementId: "G-J9498FQ4XX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app,auth,db };