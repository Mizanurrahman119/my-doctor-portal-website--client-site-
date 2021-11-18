import initializeFirebase from "../Shared/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";


//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // user create new account part
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError(''); 
            const newUser = {email, displayName:name};
            setUser(newUser);
            //save user to firebaser after creation
            saveUser(email, name, 'POST')
            //send nane to firebase after creation 
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
               
              });
            history.replace('/')           
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally( () =>setIsLoading(false));
    }

    // user sing in account part
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally( () =>setIsLoading(false));
    }

    // sign in with google account
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
         signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT')
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally( () =>setIsLoading(false));
    
    }

    // change state part 
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[auth])


    useEffect( () =>{
        fetch(`https://damp-falls-66437.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user])

    //log out part
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        
          }).catch((error) => {

          })
          .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://damp-falls-66437.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    return {
        user,
        signInWithGoogle,
        registerUser,
        logout,
        loginUser,
        isLoading,
        authError,
        admin,
        token,
    }
}
export default useFirebase;