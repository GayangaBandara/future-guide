// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa3f5W4oWNkXKeYGZrqWeq6DDktg5I0lI",
  authDomain: "futureguide-e58df.firebaseapp.com",
  projectId: "futureguide-e58df",
  storageBucket: "futureguide-e58df.firebasestorage.app",
  messagingSenderId: "117145585912",
  appId: "1:117145585912:web:218a4dc212fc59683b530d",
  measurementId: "G-19LED2REG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);