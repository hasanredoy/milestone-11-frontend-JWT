import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import auth from "../../Firebase/CarDoctor.config";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

  const[user , setUser]= useState([])
  const[loading , setLoading]= useState(true)

  const registerUser = (email , password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth , email , password)
  }
  const loginUser = (email , password)=>{
    setLoading(true)
    return  signInWithEmailAndPassword(auth , email , password)
  }

  const logout =()=>{
    setLoading(true)
    return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , currentUser=>{
      setUser(currentUser)
      setLoading(false)
    })
    return  ()=>{
      return unsubscribe()
    }
  },[])
  // console.log(user);
  const authInfo = {
   registerUser,
   loginUser,
   user,
   logout,
   loading
  }
  return (
    <AuthContext.Provider value={ authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;