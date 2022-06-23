import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFThmJL3zGIyKSFOGR1YKfPQ1LM7n6cWM",
    authDomain: "whatsapp-clone-cbf5f.firebaseapp.com",
    projectId: "whatsapp-clone-cbf5f",
    storageBucket: "whatsapp-clone-cbf5f.appspot.com",
    messagingSenderId: "32274402045",
    appId: "1:32274402045:web:84ed6e0d577f113cfe4c94",
    measurementId: "G-0NENHZXGMS"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  export {db, auth, provider}