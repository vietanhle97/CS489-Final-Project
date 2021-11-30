// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6kr08aKyCL9hkmUs-fuSvvykNCQ1pkr0",
  authDomain: "computer-ethics.firebaseapp.com",
  projectId: "computer-ethics",
  storageBucket: "computer-ethics.appspot.com",
  messagingSenderId: "360968806467",
  appId: "1:360968806467:web:ee3a4f2e99e748fa48b4f6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };