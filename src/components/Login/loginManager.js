import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


export const initializeLoginFramework = () => firebase.initializeApp(firebaseConfig);


export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, photoURL, email } = res.user;
            const newUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            return newUser;
            // console.log(displayName, photoURL, email);
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        });
}