import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) => {
        setLoader(true)

        return signInWithEmailAndPassword(auth, email, password);

    }
    const SingInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }
    const gitHubLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider);

    }
 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser);
            setUser(loggedUser)
            setLoader(false)


        })
        return () => {
            unsubscribe();
        }
    }, []);


    const LogOut = () => {
        setLoader(true)
        return signOut(auth);

    }
 
    const authInfo = {
        user,
        createUser,
        singIn,
        LogOut,
        SingInWithGoogle,
        gitHubLogin,
        loader,
    
     
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;