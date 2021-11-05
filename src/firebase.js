import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBXoGMJ-goiAR7b_coTG8yIOdVy-ISfTZA",
  authDomain: "projetweb-c2b97.firebaseapp.com",
  databaseURL: "projetweb-c2b97.firebaseapp.com",
  projectId: "projetweb-c2b97.appspot.com",
  storageBucket: "330155578176",
  messagingSenderId: "1:330155578176:web:a34ce78a9278dd4c34e0a5",
  appId: "G-39L1GNWPZ3"
})

export const auth = app.auth()
export default app
