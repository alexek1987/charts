import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMuW2JhZtk90H7RfwElxZcRYHiW14o85U",
  authDomain: "charts-da2be.firebaseapp.com",
  projectId: "charts-da2be",
  storageBucket: "charts-da2be.appspot.com",
  messagingSenderId: "778199959851",
  appId: "1:778199959851:web:5af73b70057602c90a5d6e",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export { db, provider, auth };
