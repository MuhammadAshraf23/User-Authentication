// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth,GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword,
  onAuthStateChanged, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCi_zn7R5pXa6rHPPQpO6wTm23TLepX7hs",
  authDomain: "react-authentication-cb2f1.firebaseapp.com",
  projectId: "react-authentication-cb2f1",
  storageBucket: "react-authentication-cb2f1.appspot.com",
  messagingSenderId: "321520747032",
  appId: "1:321520747032:web:0c3ad59524fec204e2f96d",
  measurementId: "G-XVXKBYQ33J"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
export {auth,provider,app, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signInWithPopup }
