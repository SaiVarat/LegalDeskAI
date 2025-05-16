// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPAwKb0IKH19aAlVoSoRJqGjQMs_F7ZqE",
  authDomain: "legaldeskai-70572.firebaseapp.com",
  projectId: "legaldeskai-70572",
  storageBucket: "legaldeskai-70572.firebasestorage.app",
  messagingSenderId: "516350321990",
  appId: "1:516350321990:web:482b06e3ce031388cd7147",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
