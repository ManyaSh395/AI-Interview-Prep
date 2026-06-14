// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8H_HXPebAITiintBlOdICpPMarRuKgZs",
    authDomain: "mockmate-51413.firebaseapp.com",
    projectId: "mockmate-51413",
    storageBucket: "mockmate-51413.firebasestorage.app",
    messagingSenderId: "207352422788",
    appId: "1:207352422788:web:10e434bd13c913eab63dd1",
    measurementId: "G-CR2DEFD0MH"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
const db = getFirestore(app);