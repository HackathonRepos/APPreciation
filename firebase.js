import dotenv from "dotenv";
import firebase from "firebase";
dotenv.config();

// API Keys within an ENV file (to prevent security leaks)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_API_KEY_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_KEY_MESSAGE_ID,
  appId: process.env.REACT_APP_FIREBASE_API_KEY_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
console.log("Initialized Firebase");

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
export default firebase;
