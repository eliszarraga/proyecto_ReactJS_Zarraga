import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe7JrlVesr6XVK4bbkADVdjbJOuF9P68E",
  authDomain: "proyecto-holo-3ee5a.firebaseapp.com",
  projectId: "proyecto-holo-3ee5a",
  storageBucket: "proyecto-holo-3ee5a.appspot.com",
  messagingSenderId: "916063467953",
  appId: "1:916063467953:web:96e5131ce7035f9a98e590",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
