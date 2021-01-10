import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBoPymg7bOBhLifG8wuTBi1PaVtAuuyEfM",
  authDomain: "theshoppies2021.firebaseapp.com",
  projectId: "theshoppies2021",
  storageBucket: "theshoppies2021.appspot.com",
  messagingSenderId: "581664631180",
  appId: "1:581664631180:web:a0a3d4ccd90fa7c9794ea9",
  measurementId: "G-J508TFXS4P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
