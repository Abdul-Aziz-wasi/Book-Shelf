import React, { use } from 'react';

import { NavLink } from 'react-router';
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
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/bookShelf'>Bookshelf</NavLink></li>
    
        

    </>
    return (
       <div className="navbar sticky top-0 z-50 bg-white/30 backdrop-blur-md text-gray-800   shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl"><span className='font-light'>Book</span>Nest</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ? <button
        
         onClick={handleSignOut} className='btn bg-teal-800 text-white rounded-3xl'>Sing out</button> :
        <>
        <NavLink to='signup' className='btn bg-teal-800 text-white rounded-3xl '>Sign up</NavLink>
    <NavLink to='signin' className='btn bg-teal-800 text-white rounded-3xl '>Sign In</NavLink>
        </>
    }
  </div>
</div>
    );
};

export default Navabr;