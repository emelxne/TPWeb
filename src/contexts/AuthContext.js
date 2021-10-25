import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }){

    const[currentUser, setCurrentUser]=useState()
    function signup(email, mdp){
        return auth().createUserWithEmailAndPassword(email, mdp)
    }
// permet de vérifier l'état de l'utilisateur
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signup
    }

    return(
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )
}