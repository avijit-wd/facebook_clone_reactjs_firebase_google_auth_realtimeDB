import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDW3RX_DUThwVOVXMBrVcsq4Y_parjkscI",
  authDomain: "facebook-clone-6dfc2.firebaseapp.com",
  projectId: "facebook-clone-6dfc2",
  storageBucket: "facebook-clone-6dfc2.appspot.com",
  messagingSenderId: "832863497287",
  appId: "1:832863497287:web:0d36381311907f6fad1562",
  measurementId: "G-5RJSZ963GH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
