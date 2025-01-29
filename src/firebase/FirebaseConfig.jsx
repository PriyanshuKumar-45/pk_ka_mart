// src/firebase/firebaseConfig.jsx
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCNMIx85IDCqTifJI6lE52Vxk3qmGjjmDU',
  authDomain: 'pk-mart-683d3.firebaseapp.com',
  projectId: 'pk-mart-683d3',
  storageBucket: 'pk-mart-683d3.appspot.com',
  messagingSenderId: '316936094805',
  appId: '1:316936094805:web:144a529b1a04919cd240dc',
  measurementId: 'G-675HDXVHBQ',
};

const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Auth instance
const analytics = getAnalytics(app); // Analytics instance

export { fireDb, auth, analytics }; // Correct export
