
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDGQcgtEnlU8LHWYexNgjsPXSvMoRUc-tM",
  authDomain: "test-9e54f.firebaseapp.com",
  projectId: "test-9e54f",
  storageBucket: "test-9e54f.appspot.com",
  messagingSenderId: "802074267213",
  appId: "1:802074267213:web:1ef626d112f19471231604",
  measurementId: "G-33X104QTRB"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//getAuth fetches a reference to the authentication service
