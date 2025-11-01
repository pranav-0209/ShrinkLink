import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";


const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <div className="h-16 bg-custom-gradient z-50 flex items-center sticky top-0 backdrop-blur-sm shadow-lg">
      <div className="lg:px-0.5 sm:px-8 px-4 w-full flex justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-btnColor text-xl font-bold">S</span>
          </div>
          <h1 className="font-bold text-2xl text-white sm:mt-0 mt-2 tracking-tight">
            ShrinkLink
          </h1>
        </Link>
        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center sm:pt-0 pt-3 text-slate-800 sm:static absolute left-0 top-[62px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
          }  transition-all duration-100 sm:h-fit sm:bg-none  bg-custom-gradient sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
        >
          <li>
            <Link
              className={`${
                path === "/" 
                  ? "text-white font-semibold after:w-full" 
                  : "text-gray-200 after:w-0"
              } hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full py-1`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                path === "/about"
                  ? "text-white font-semibold after:w-full"
                  : "text-gray-200 after:w-0"
              } hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full py-1`}
              to="/about"
            >
              About
            </Link>
          </li>
          {token && (
            <li>
            <Link
              className={`${
                path === "/dashboard"
                  ? "text-white font-semibold after:w-full"
                  : "text-gray-200 after:w-0"
              } hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full py-1`}
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          )}
          {!token && (
            <Link to="/register">
              <li className="sm:ml-0 -ml-1 bg-white/10 border border-white/20 text-white cursor-pointer px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-btnColor transition-all duration-300">
                Sign Up
              </li>
            </Link>
          )}

          {token && (
            <button
             onClick={onLogOutHandler}
             className="sm:ml-0 -ml-1 bg-white/10 border border-white/20 text-white cursor-pointer px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-btnColor transition-all duration-300">
              Log Out
            </button>
          )}
        </ul>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center sm:mt-0 mt-2"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;