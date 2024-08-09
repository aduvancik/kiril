// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore'; // Import Firestore if needed
import { getAuth } from 'firebase/auth'; // Import Auth if needed
import { getStorage } from 'firebase/storage'; // Import Storage if needed

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCkaUrtA1h2Lx2WF1aGM6vHWInuydwG18A',
  authDomain: 'kiril-84a7b.firebaseapp.com',
  projectId: 'kiril-84a7b',
  storageBucket: 'kiril-84a7b.appspot.com',
  messagingSenderId: '1099040075037',
  appId: '1:1099040075037:web:d64a411ba70573f89b85f4',
  measurementId: 'G-SW0HPTYH0B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and other services if needed
const analytics = getAnalytics(app);
const firestore = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Auth
const storage = getStorage(app); // Initialize Storage

// Export the initialized services
export { app, analytics, firestore, auth, storage };
