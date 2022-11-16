
import { auth } from '.././firebaseconfig.js';
import React, { useContext, createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginContext = createContext();//creates a global object. It returns two components, Provider and Consumer. It is usually named with a capital letter, because although it isn't realyl component, it contains components, and behaves like one. 

export const LoginContextProvider = ({ children }) => {
    const [user, setUser] = useState();   //state hook. User comes from getAuth() object.  (imported here as 'auth')

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider(); //create provider object
        signInWithRedirect(auth, provider) // method belonging to firebase.auth  - triggers a full page redirect to authenticaion provider, then returns to the app
            .then(getRedirectResult)
            .then((result) => {
                console.log(result);
                const user = result.user;
                setUser(user);
                console.log(user);
            })
    }
    const signout = () => {
        signOut();
        useEffect(() => {
            setUser(user);
            return () => {
                setUser(user);
            }
        }, [onAuthStateChanged(auth, (user))]);

/* 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('User', currentUser)
        });
        return () => {
            unsubscribe(); 
        };
    }, []);)*/



}
return (
    <LoginContext.Provider value={{ googleSignIn, signout, user }}>
        {children}
    </LoginContext.Provider>
)
}
export const AuthenticationComponent = () => { //this is a functional component??
    return useContext(LoginContext); //useContext is a hook that returns the context value from the object created by createContext. 
} 