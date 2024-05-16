import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import Navbar from "../../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../shared/authprovider/AuthProvider";
import axios from "axios";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  // console.log(loginUser);
  const location = useLocation()
  const navigate = useNavigate()
  


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const user = { email, password };
    // console.log(user);

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        const user = {email}
        
        axios.post("http://localhost:5000/jwt", user ,{withCredentials:true})
        .then(data => {
          console.log(data.data);
          if(data.data.success){
            navigate(location?.state ? location?.state : "/")
            
         }
        })
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero my-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <img src={loginImg} className=" w-full" alt="" />
          </div>
          <div className="card shrink-0 w-1/2  border p-10">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-2xl font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-2xl font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <label className="label">
                  <a href="#" className="text-xl font-bold-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary btn-outline">Login</button>
              </div>
            </form>
            <p className=" py-5 font-bold text-center text-lg">
              {" "}
              New Here{" "}
              <Link to={"/register"} className=" font-bold text-blue-600">
                Register
              </Link>{" "}
              !!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
