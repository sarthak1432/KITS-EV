import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqKZDZgdLXALu6-8CBy720rxowIR30j-I",
  authDomain: "kits-ev.firebaseapp.com",
  projectId: "kits-ev",
  storageBucket: "kits-ev.firebasestorage.app",
  messagingSenderId: "981006313624",
  appId: "1:981006313624:web:7a92626c608d623e6188ed",
  measurementId: "G-CP164F1NS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
