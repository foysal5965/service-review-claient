import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from "../../firebase/firebase.init";
const auth= getAuth(app)
export const AuthContext= createContext()
const AuthProvider=({children})=>{
    const [user,setUser]= useState({})
    const [loading,setLoading]= useState(true)
    // create user with email and password
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login
     const login= (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
     }
    //  logout
    const logOut =()=>{
        return signOut(auth)
    }
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            return unsubscribe()
        }
    },[])

    const authInfo= {user, loading, createUser,login,logOut}
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;