import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCKXt8awevBUOW11qoeK5JYzI2pz3S2BE",
  authDomain: "twitter-react-53e28.firebaseapp.com",
  projectId: "twitter-react-53e28",
  storageBucket: "twitter-react-53e28.appspot.com",
  messagingSenderId: "957533624396",
  appId: "1:957533624396:web:14e2a48d668b5a0c7dfce9",
  measurementId: "G-VL39LR362P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
