import React, { use } from 'react';

import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Navabr = () => {

    const {user,signOutUser}=use(AuthContext);

    const handleSignOut =()=>{
        signOutUser()
        .then(()=>{
            console.log('signOut')
        }).catch(error=>{
            console.log(error)
        })
    }

    const links = <>
    <li className='font-bold '><NavLink to='/'>Home</NavLink></li>
    <li className='font-bold '><NavLink to='/bookShelf'>Bookshelf</NavLink></li>
    <li className='font-bold '><NavLink to='/addBooks'>Add Books</NavLink></li>
    <li className='font-bold '><NavLink to='/myBooks'>My Books</NavLink></li>
    <li className='font-bold '><NavLink to='/myProfile'>My Profile</NavLink></li>
    
        

    </>
    return (
         <div className="navbar sticky top-0 z-50 bg-gradient-to-r from-teal-800 to-purple-800  text-white backdrop-blur-md shadow-sm ">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown text-white">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52">
            {links}
          </ul>
        </div>
        {/* Logo */}
        <Link to='/' className="text-3xl font-bold text-teal-800">
         <span className="text-yellow-300">Book</span><span className="text-white">Nest</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1 font-medium">
          {links}
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="navbar-end space-x-2">
        {
          user ? (
            <button onClick={handleSignOut} className="btn btn-sm bg-white text-teal-800 hover:bg-gray-100
 rounded-full px-4">
              Sign Out
            </button>
          ) : (
            <>
              <NavLink to='/signup' className="btn btn-sm bg-white text-teal-800 hover:bg-gray-100
 rounded-full px-4">
                Sign Up
              </NavLink>
              {/* <NavLink to='/signin' className="btn btn-sm bg-gray-100 text-teal-700 border border-teal-600 rounded-full px-4">
                Sign In
              </NavLink> */}
            </>
          )
        }
      </div>
    </div>
    );
};

export default Navabr;