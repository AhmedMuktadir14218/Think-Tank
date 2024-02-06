// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: import.mete.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyDm6IGqNT30lo68kb0MDJRPT2W8zauLC_4",
  authDomain: "thinktank-49cbb.firebaseapp.com",
  projectId: "thinktank-49cbb",
  storageBucket: "thinktank-49cbb.appspot.com",
  messagingSenderId: "438043741190",
  appId: "1:438043741190:web:b579d95d25c3bac38f8787"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);