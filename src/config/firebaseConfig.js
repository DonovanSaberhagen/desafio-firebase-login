// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrZaXm8GECl_gCmc6nyp4i3S176ps4Oho",
  authDomain: "fire-login-42c94.firebaseapp.com",
  projectId: "fire-login-42c94",
  storageBucket: "fire-login-42c94.appspot.com",
  messagingSenderId: "363702215586",
  appId: "1:363702215586:web:ffbaa0db62b66fb11188fb",
  measurementId: "G-K5RX69NZ7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;