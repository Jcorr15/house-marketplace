import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA9_qwj4uM03BNVe3ajFRsJsZvpqBYgVEY',
  authDomain: 'house-marketplace-app-d0155.firebaseapp.com',
  projectId: 'house-marketplace-app-d0155',
  storageBucket: 'house-marketplace-app-d0155.appspot.com',
  messagingSenderId: '76068509014',
  appId: '1:76068509014:web:d6556d82d0d326cc3272f7',
  measurementId: 'G-ENCXCM0WTV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
