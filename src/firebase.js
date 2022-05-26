import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgGSls76-M9eGmLd4ik2oWK9UG4gzQC9Y",
  authDomain: "clone-c5fad.firebaseapp.com",
  projectId: "clone-c5fad",
  storageBucket: "clone-c5fad.appspot.com",
  messagingSenderId: "516084823199",
  appId: "1:516084823199:web:756b2324b2bdc902465eaa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
