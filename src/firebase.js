//I clicked on Config (setting projects.)

import firebase from "firebase";

 const firebaseConfig = process.env.firebaseConfig;
  // Initialize Firebase remember const firebaseApp in order to run line 19.
  const firebaseApp = firebase.initializeApp(firebaseConfig);


//Data below copied from other project I made.
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;