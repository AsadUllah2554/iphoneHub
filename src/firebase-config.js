// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZwkRYzhp__AmjStVKnlVXrwVTPkozlOM",
  authDomain: "iphonehub-f6a47.firebaseapp.com",
  projectId: "iphonehub-f6a47",
  storageBucket: "iphonehub-f6a47.appspot.com",
  messagingSenderId: "676495563107",
  appId: "1:676495563107:web:aa7c13c4c8db780f469b56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)