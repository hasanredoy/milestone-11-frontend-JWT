import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosUrl = axios.create({
  
  baseURL:'http://localhost:5000',
  withCredentials:true
})
const useAxios = () => {
  const {logout} =useAuth()
  const navigate = useNavigate()
  useEffect(()=>{

    axiosUrl.interceptors.response.use(res=>{
      return res
    },err=>{
      // console.log('error founded', err.response);
      if(err.response.status === 401 || err.response.status===403){
        // console.log('logged out');
        logout()
        .then(()=>{
   navigate('/login')
        })
        .catch()
      }
    })
  },[])
  return axiosUrl
};

export default useAxios;