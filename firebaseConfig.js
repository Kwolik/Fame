import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrLvOc_yM9VuRDqYVok9nJLPVikD8sDHA",
  authDomain: "fame-ab4b2.firebaseapp.com",
  projectId: "fame-ab4b2",
  storageBucket: "fame-ab4b2.appspot.com",
  messagingSenderId: "686934036671",
  appId: "1:686934036671:web:b04f4d9eaa450e231a360a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
