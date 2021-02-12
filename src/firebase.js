//I clicked on Config (setting projects.)

import firebase from "firebase";

 const firebaseConfig =
  {
  apiKey: "AIzaSyCpacPB_oETbEUV3OAUqQ6kXusvQsxX4xE",
  authDomain: "search-project-1d5c6.firebaseapp.com",
  projectId: "search-project-1d5c6",
  storageBucket: "search-project-1d5c6.appspot.com",
  messagingSenderId: "158959311239",
  appId: "1:158959311239:web:7480d27e9d170043109b22",
  measurementId: "G-8GH37MPK6L"
}; // process.env.firebaseConfig;
  // Initialize Firebase remember const firebaseApp in order to run line 19.
  const firebaseApp = firebase.initializeApp(firebaseConfig);


//Data below copied from other project I made.
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;