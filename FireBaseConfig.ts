import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy4OoL0Uuihf3M3E-Cb8Hpm8-68rhU1zU",
    authDomain: "mealmaster-b4047.firebaseapp.com",
    projectId: "mealmaster-b4047",
    storageBucket: "mealmaster-b4047.appspot.com",
    messagingSenderId: "795379983906",
    appId: "1:795379983906:web:1f481a495005d851b34c7b"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
