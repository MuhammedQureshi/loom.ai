import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlhqnk22yx4Niuon0zrpe4DUEfh7yKWh4",
    authDomain: "loom-ai.firebaseapp.com",
    projectId: "loom-ai",
    storageBucket: "loom-ai.appspot.com",
    messagingSenderId: "763245309698",
    appId: "1:763245309698:web:98165939c2e25f96979c1b"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };