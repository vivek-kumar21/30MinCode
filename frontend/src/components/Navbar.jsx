import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  // console.log(user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = (path) =>
    location.pathname === path
      ? "text-red-500"
      : "text-gray-700 hover:text-red-500 duration-300";

  return (
    <nav className="bg-white shadow-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-6 w-auto" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:gap-x-16">
            <Link to="/" className={`text-[18px] ${navLinkClasses("/")}`}>
              Home
            </Link>
            <Link
              to="/learn"
              className={`text-[18px] ${navLinkClasses("/learn")}`}
            >
              Learn
            </Link>
            <Link to="/ide" className={`text-[18px] ${navLinkClasses("/ide")}`}>
              Online IDE
            </Link>
            <Link to="/faqs" className={`text-[18px] ${navLinkClasses("/faqs")}`}>
              FAQS
            </Link>
          </div>

          {isAuthenticated ? (
            <div className="hidden md:flex md:items-center">
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="px-6 py-2 mx-4 border rounded hover:bg-gray-200 duration-500"
              >
                Logout
              </button>
              <img
                src={user.picture}
                alt="User"
                className="h-8 w-8 rounded-full"
              />
            </div>
          ) : (
            <div className="hidden md:flex md:items-center">
              <button
                onClick={loginWithRedirect}
                className="px-6 py-2 mx-4 border rounded hover:bg-gray-200 duration-500"
              >
                Login
              </button>
              <button
                onClick={loginWithRedirect}
                className="bg-red-400 text-white duration-500 px-6 py-2 hover:bg-red-500 rounded"
              >
                Signup
              </button>
            </div>
          )}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              {isOpen ? (
                <IoClose
                  className="h-6 w-6 cursor-pointer"
                  aria-hidden="true"
                />
              ) : (
                <IoMenu className="h-6 w-6 cursor-pointer" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className={`md:hidden duration-300 ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 ml-4 space-y-1 sm:px-3">
          <Link to="/" className={`block text-[18px] ${navLinkClasses("/")}`}>
            Home
          </Link>
          <Link
            to="/learn"
            className={`block text-[18px] ${navLinkClasses("/learn")}`}
          >
            Learn
          </Link>
          <Link
            to="/ide"
            className={`block text-[18px] ${navLinkClasses("/ide")}`}
          >
            Online IDE
          </Link>

          {isAuthenticated ? (
            <>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="w-full px-6 py-2 mt-6 border rounded hover:bg-gray-200 duration-500"
              >
                Logout
              </button>
              <div className="flex items-center justify-center mt-2">
                <img
                  src={user.picture}
                  alt="User"
                  className="h-8 w-8 rounded-full"
                />
              </div>
            </>
          ) : (
            <>
              <button
                onClick={loginWithRedirect}
                className="w-full px-6 py-2 mt-6 border rounded hover:bg-gray-200 duration-500"
              >
                Login
              </button>
              <button
                onClick={loginWithRedirect}
                className="w-full bg-red-400 text-white duration-500 px-6 py-2 mt-2 hover:bg-red-500 rounded"
              >
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
