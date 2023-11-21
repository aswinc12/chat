// Import the functions you need from the SDKs you need
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getAuth,GoogleAuthProvider} from 'firebase/auth'
import{getFirestore}from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2x3WTJeNYwJSlNLEj-j5wPKOIoeqUPwE",
  authDomain: "chatroom-4c5a0.firebaseapp.com",
  projectId: "chatroom-4c5a0",
  storageBucket: "chatroom-4c5a0.appspot.com",
  messagingSenderId: "351413552020",
  appId: "1:351413552020:web:2ecb553d3d1c8cd62b0581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider =new GoogleAuthProvider();
export const db=getFirestore(app);