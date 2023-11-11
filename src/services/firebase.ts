import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB78fqA0AvcQK-m3EGsqTxlgDjaNqGhLaM",
  authDomain: "cloud-crafter.firebaseapp.com",
  projectId: "cloud-crafter",
  storageBucket: "cloud-crafter.appspot.com",
  messagingSenderId: "870141014342",
  appId: "1:870141014342:web:0315de56cd7556c3fb3547"
};

const app = initializeApp(firebaseConfig);
const authorization = getAuth(app);
const dataBase = getFirestore(app);

export { authorization, dataBase }
