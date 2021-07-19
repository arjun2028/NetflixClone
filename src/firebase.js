import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_fO0_-F3kuadqHwAqQkFAi1AB5uCiR74",
  authDomain: "netflix-clone-a6473.firebaseapp.com",
  projectId: "netflix-clone-a6473",
  storageBucket: "netflix-clone-a6473.appspot.com",
  messagingSenderId: "959521378841",
  appId: "1:959521378841:web:68b0b407c370a1bbd05088",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
