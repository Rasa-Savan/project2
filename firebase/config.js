import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7K1UX2e5U0aU26AjvdYiN6g7JwvpRQEg",
  authDomain: "edl-autooffice.firebaseapp.com",
  projectId: "edl-autooffice",
  storageBucket: "edl-autooffice.appspot.com",
  messagingSenderId: "42946860932",
  appId: "1:42946860932:web:8eeed7601c837a0b63efd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
