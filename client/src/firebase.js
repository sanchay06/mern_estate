// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e807b.firebaseapp.com",
  projectId: "mern-estate-e807b",
  storageBucket: "mern-estate-e807b.appspot.com",
  messagingSenderId: "527659973955",
  appId: "1:527659973955:web:11856e69f5d4c2dfc883f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);