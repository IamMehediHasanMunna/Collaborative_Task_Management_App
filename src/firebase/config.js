import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBseGAbgr0_WpINQR42uZo_PuMFm4oZ0Zk",
  authDomain: "manage-it-76666.firebaseapp.com",
  projectId: "manage-it-76666",
  storageBucket: "manage-it-76666.appspot.com",
  messagingSenderId: "848206790585",
  appId: "1:848206790585:web:30eeced6555f40f92e8068",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
