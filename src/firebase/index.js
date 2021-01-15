import firebase from 'firebase/app';
import 'firebase/firestore';   

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

/**
 * Add nomination list to firebase records
 */

const addNominationListToDB = (nominations) => {
  return db.collection("nominations").add({ nominations: nominations });
};

/**
 * Retrieve nomination list by document ID
 */

const getNominationByID = (id) => {
  return db.collection("nominations").doc(id).get();
};

export { db, addNominationListToDB, getNominationByID };
