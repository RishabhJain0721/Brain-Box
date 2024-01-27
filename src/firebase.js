import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALaYVdiu4sB-RX3PURIk1-WjxHtzf5S1w",
  authDomain: "brain-box-899ec.firebaseapp.com",
  projectId: "brain-box-899ec",
  storageBucket: "brain-box-899ec.appspot.com",
  messagingSenderId: "220074958290",
  appId: "1:220074958290:web:1f19fdd5a8bc9448883c0b",
  measurementId: "G-FMNLXMESW4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
