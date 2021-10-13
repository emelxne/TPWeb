import firebase from 'firebase/compat/app'
import 'firebase/auth'


const app = firebase.initializeApp({
    apiKey: process.env.REACT_FIREBASE_API_KEY,
    authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_FIREBASE_APPID,
    measurementId: process.env.REACT_FIREBASE_MEASUREMENT_ID
})

export const auth = app.auth
export default app