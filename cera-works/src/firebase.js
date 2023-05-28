// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDydjFz7l6qkFyDOqnpsj1PCbyD2bWB0T0",
  authDomain: "ceraworks-project3.firebaseapp.com",
  projectId: "ceraworks-project3",
  storageBucket: "ceraworks-project3.appspot.com",
  messagingSenderId: "921332912848",
  appId: "1:921332912848:web:b6230937321e30fa2084d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);