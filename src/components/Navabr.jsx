"use client";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Sun, Moon } from "lucide-react"; 

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

 
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Signed Out"))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li className="font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/bookShelf">Bookshelf</NavLink>
      </li>

      {user && (
        <>
          <li className="font-semibold">
            <NavLink to="/addBooks">Add Books</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to="/myBooks">My Books</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to="/myProfile">My Profile</NavLink>
          </li>
        </>
      )}

      <li className="font-semibold">
        <NavLink to="/privacy">Privacy & Policy</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-gradient-to-r from-teal-800 to-purple-800 text-white backdrop-blur-md shadow-md">
      
      <div className="navbar-start">
        
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-extrabold tracking-tight">
          <span className="text-yellow-300">Book</span>
          <span className="text-white">Nest</span>
        </Link>
      </div>

      {/* Center - Links for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium">{links}</ul>
      </div>

      {/* Right - Theme + Auth Buttons */}
      <div className="navbar-end flex items-center gap-3">
        {/* Dark / Light Mode Button */}
        <button
          onClick={toggleTheme}
          className="btn btn-sm bg-white/20 hover:bg-white/30 text-white rounded-full"
          title="Toggle theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Auth Buttons */}
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-sm bg-white text-teal-800 hover:bg-gray-100 rounded-full px-4"
          >
            Sign Out
          </button>
        ) : (
          <NavLink
            to="/signin"
            className="btn btn-sm bg-gray-100 text-teal-700 border border-teal-600 rounded-full px-4"
          >
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
