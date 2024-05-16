import { useContext } from "react";
import { AuthContext } from "./authprovider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)
  const location = useLocation()
  // console.log(location);

  if(loading)return <span>Loading</span>
  if(user?.email) return children
  return (
    <Navigate state={location?.pathname} to={'/login'} replace></Navigate>
  );
};

export default PrivetRoute;