// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFIZMXi1v0_BrGXKnSFYKFJPlJaYJCVRw",
  authDomain: "tarot-journal-512.firebaseapp.com",
  projectId: "tarot-journal-512",
  storageBucket: "tarot-journal-512.appspot.com",
  messagingSenderId: "156883671814",
  appId: "1:156883671814:web:ac4d18076947b5660d5c87",
  measurementId: "G-VXSRDNZE7L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
