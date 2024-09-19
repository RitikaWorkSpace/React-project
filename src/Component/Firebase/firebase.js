// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACF-DsMzy19suwUomh1aAim2_PK12537c",
  authDomain: "login-auth-aa3df.firebaseapp.com",
  projectId: "login-auth-aa3df",
  storageBucket: "login-auth-aa3df.appspot.com",
  messagingSenderId: "691636351165",
  appId: "1:691636351165:web:c3f78ceb7b0f158acec7d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =  getAuth();
export const db = getFirestore(app);
export default app; 