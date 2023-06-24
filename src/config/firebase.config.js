// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1pXnazXcHSw8YtyyQSsAIpzu4l83ZjIE",
  authDomain: "myecommerce-12fc3.firebaseapp.com",
  projectId: "myecommerce-12fc3",
  storageBucket: "myecommerce-12fc3.appspot.com",
  messagingSenderId: "580881018533",
  appId: "1:580881018533:web:fb61c2dea7c9e5b332274c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)