// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP56sPD1OlTCCWpJQ8EowUGQWlNehXJWo",
  authDomain: "house-marketplace-app-2bd20.firebaseapp.com",
  projectId: "house-marketplace-app-2bd20",
  storageBucket: "house-marketplace-app-2bd20.appspot.com",
  messagingSenderId: "842251556419",
  appId: "1:842251556419:web:b12e67a8204870ca51a6f6"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()