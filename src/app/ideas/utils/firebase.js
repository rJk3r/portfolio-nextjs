import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy-quDxH6w6H-GfriawNFgwIgI5HZ8-PU",
  authDomain: "portfolio-2e3e4.firebaseapp.com",
  projectId: "portfolio-2e3e4",
  storageBucket: "portfolio-2e3e4.firebasestorage.app",
  messagingSenderId: "506621022785",
  appId: "1:506621022785:web:8fec644bf56a76bd3d6cc0",
  measurementId: "G-4953CRWTE3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);