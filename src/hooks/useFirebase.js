import React, { useEffect, useState } from 'react'
import initAuth from './../firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth"
const useFirebase = () => {
    initAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const getName = (e) => {
        setName(e.target.value);
    }

    const getEmail = (e) => {
        setEmail(e.target.value);
    }

    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    const auth = getAuth();

    // sign in
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    //update user information
    const updateUser = () => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://cambodiaict.net/wp-content/uploads/2019/12/computer-icons-user-profile-google-account-photos-icon-account.jpg"
        });
    }

    // create user 
    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateUser();
                setUser(userCredential.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // login user =================> 
    const logInUser = () => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logOut = () => {
        signOut(auth)
            .then(result => {
                setUser({});
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // observer the user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    return {
        user,
        googleSignIn,
        error,
        setError,
        setUser,
        getName,
        getEmail,
        getPassword,
        createUser,
        logOut,
        logInUser,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;