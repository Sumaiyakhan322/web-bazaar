import  { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase_config';

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    
    const [loading,setLoading]=useState(true);
     
     

   //create user 
   const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password) 
   }
   //login user
   const loginUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
//logout

// sign out user
const SignOutUser=()=>{
    setLoading(true)
    return signOut(auth)
}
//google sign in
const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,GoogleProvider)
}


// // get the user info by auth changed
//  useEffect(()=>{
//     const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
//         const userEmail=currentUser?.email || user?.email
//         const loggedInUser={email:userEmail}
//             setUser(currentUser)
//             setLoading(false)
//             //user exited issue an token
//             if(currentUser){
                
//                 axios.post(`https://server-psi-navy.vercel.app/jwt`,loggedInUser,{withCredentials:true})
//                 .then(res=>
//                     {console.log('token respoond',res.data)})
//             }
//             else{
//                 axios.post('https://server-psi-navy.vercel.app/logout',loggedInUser,{
//                     withCredentials:true
//                 })
//                 .then(res=>{
//                     console.log('logout',res.data);
//                 })
//             }
//         })
//     return()=>{
//     unSubscribe()
//     }
//  },[user])

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);
        setLoading(false);
    });
    return () => {
        return unsubscribe();
    }
}, [])

 const authInfo={user,loginUser,SignOutUser,createUser,loading,googleSignIn,}
 return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
)
};
AuthProvider.propTypes = {
children: PropTypes.node,
};
export default AuthProvider;