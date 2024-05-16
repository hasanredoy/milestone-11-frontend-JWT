import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "./authprovider/AuthProvider";
const Navbar = () => {
const {user , logout}= useContext(AuthContext)

const handleLogout=()=>{
  logout()
  .then()
  .catch()
}
  const navBars =<>
  <li><NavLink to={'/'}>Home</NavLink></li>
  {user ?<>
  <li><NavLink to={'/bookings'}>Booking</NavLink></li>
  <li><a onClick={handleLogout}>Logout</a></li>  
  </>:<li><NavLink to={'/login'}>Login</NavLink></li>}
  <li><NavLink to={'/about'}>About</NavLink></li>
  <li><NavLink to={'/contact'}>Contact</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-200 rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBars}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl"><img src={logo} alt="" className=" w-full h-full" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navBars}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
