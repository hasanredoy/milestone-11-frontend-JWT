import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import auth from "../../Firebase/CarDoctor.config";
import axios from "axios";
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
      const userEmail= currentUser?.email || user?.email
      const loggedUser ={email: userEmail}
      setUser(currentUser)
      setLoading(false)
      if(currentUser){

        axios.post('https://car-doctor-ten.vercel.app/jwt',loggedUser , {withCredentials:true})
        .then(()=>{
          // console.log(res.data);
        })
      }
      else{
         axios.post('https://car-doctor-ten.vercel.app/logout', loggedUser ,{
          withCredentials:true
         })
         .then(()=>{
          // console.log(res.data);
         })
      }
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