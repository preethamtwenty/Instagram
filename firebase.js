import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJfhxFTCypwRciFSztnfn-p7j6Vy1z4vQ",
  authDomain: "insta-a93db.firebaseapp.com",
  databaseURL: "https://insta-a93db.firebaseio.com",
  projectId: "insta-a93db",
  storageBucket: "insta-a93db.appspot.com",
  messagingSenderId: "213065894331",
  appId: "1:213065894331:web:e05f66a9cb9d5c008bdc9e",
  measurementId: "G-M0BMV9EBF7"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
