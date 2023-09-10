// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const FirebaseConfig = {
    apiKey: "AIzaSyBg1gkHrt12bNQyAsxWlTANMkb56V8SxlE",
    authDomain: "prashant-4a994.firebaseapp.com",
    projectId: "prashant-4a994",
    storageBucket: "prashant-4a994.appspot.com",
    messagingSenderId: "770605734278",
    appId: "1:770605734278:web:1757837ab741dfb2153407",
    measurementId: "G-Z0VJCS56D3"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);

export const FirestoreDatabase= getFirestore(app);