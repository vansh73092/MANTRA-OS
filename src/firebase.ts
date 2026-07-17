import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkSjpnjdASjtJkTbUXblKGJ9TZojImc7M",
  authDomain: "mantra-os.firebaseapp.com",
  projectId: "mantra-os",
  storageBucket: "mantra-os.firebasestorage.app",
  messagingSenderId: "509997902619",
  appId: "1:509997902619:web:b703e13ddda377aecb41be",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);