import { useContext } from "react";
import { AuthContext } from "../shared/authprovider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
};

export default useAuth;