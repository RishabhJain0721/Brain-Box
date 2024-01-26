import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcIiPQ_bzgLd0oZBXdHDw4fJwjSSr8y8U",
  authDomain: "jwoc24-13268.firebaseapp.com",
  projectId: "jwoc24-13268",
  storageBucket: "jwoc24-13268.appspot.com",
  messagingSenderId: "217271217046",
  appId: "1:217271217046:web:f290b1769ec17427914bb7",
  measurementId: "G-Y48QWTEN63"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app,auth,db };
