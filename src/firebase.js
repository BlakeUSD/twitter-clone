// the variation in firebase import is to allow for backward compatibility
// the standard import was giving an error.
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBRlZJdB_3-9UBIypK0Wl9-YIe0sA7a_EQ",
    authDomain: "twitter-clone-d6dd0.firebaseapp.com",
    projectId: "twitter-clone-d6dd0",
    storageBucket: "twitter-clone-d6dd0.appspot.com",
    messagingSenderId: "904031564600",
    appId: "1:904031564600:web:1f089559152acfe86487cd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;