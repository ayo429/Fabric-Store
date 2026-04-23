import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdhDtL6MJC-qKQ7NpSc6QjxDpuwh7tcRo",
  authDomain: "fabric-store-4cc85.firebaseapp.com",
  projectId: "fabric-store-4cc85",
  storageBucket: "fabric-store-4cc85.firebasestorage.app",
  messagingSenderId: "859692397408",
  appId: "1:859692397408:web:75a0eb27cab4831c38a405"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);