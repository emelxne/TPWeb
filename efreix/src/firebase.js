import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'


const app = initializeApp({
    apiKey: "AIzaSyBXoGMJ-goiAR7b_coTG8yIOdVy-ISfTZA",
    authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_FIREBASE_APPID,
    measurementId: process.env.REACT_FIREBASE_MEASUREMENT_ID
})

export const auth = getAuth(app)
export default app
