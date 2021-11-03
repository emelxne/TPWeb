import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'


const app = initializeApp({
    apiKey: "AIzaSyBXoGMJ-goiAR7b_coTG8yIOdVy-ISfTZA",
    authDomain: "projetweb-c2b97.firebaseapp.com",
    projectId: "projetweb-c2b97",
    storageBucket: "projetweb-c2b97.appspot.com",
    messagingSenderId: "330155578176",
    appId: "1:330155578176:web:a34ce78a9278dd4c34e0a5",
    measurementId: "G-39L1GNWPZ3"
})

export const auth = getAuth(app)
export default app
