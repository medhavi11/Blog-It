// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//getfirestore initializes db inside our project
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyrcu5CDro8YBaPQSC02WiiHJC0QQ-aG8",
  authDomain: "blog-it-82983.firebaseapp.com",
  projectId: "blog-it-82983",
  storageBucket: "blog-it-82983.appspot.com",
  messagingSenderId: "914856934403",
  appId: "1:914856934403:web:07a13f68e2bd6d831fe236",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//pass the app that we created
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
