// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4WZoExxGE86oWhUaz2PPDlBhKLjJQRyE",
    authDomain: "coffee-store-223ba.firebaseapp.com",
    projectId: "coffee-store-223ba",
    storageBucket: "coffee-store-223ba.firebasestorage.app",
    messagingSenderId: "1090120774599",
    appId: "1:1090120774599:web:408e1ec2cbba9f103ddfe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);