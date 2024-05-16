import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import Navbar from "../../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../shared/authprovider/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  // console.log(registerUser);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    
    registerUser(email ,password)
    .then(res =>{
      console.log(res.user);
    })
    .catch(err=> console.log(err))
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
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-2xl font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error btn-outline">Register</button>
              </div>
            </form>
            <p className=" py-5 font-bold text-center text-lg">
              {" "}
              Already Have an Account{" "}
              <Link to={"/login"} className=" font-bold text-blue-600">
                Login
              </Link>{" "}
              !!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
