import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAiemL1-rbZ-uawRyqPxt09QPWwlGu6VCo",
  authDomain: "auth-test-8586e.firebaseapp.com",
  databaseURL: "https://auth-test-8586e.firebaseio.com",
  projectId: "auth-test-8586e",
  storageBucket: "auth-test-8586e.appspot.com",
  messagingSenderId: "374989499601",
  appId: "1:374989499601:web:89ea3a0209df9c0c9ce9f0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
