// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXT6yIIPTnUBXIcstAPv4hVPi0VUqaFvQ",
  authDomain: "escaperoom-fd0ad.firebaseapp.com",
  projectId: "escaperoom-fd0ad",
  storageBucket: "escaperoom-fd0ad.firebasestorage.app",
  messagingSenderId: "420308128389",
  appId: "1:420308128389:web:de8b57a8921bdcf3110fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);


export {app,auth};
