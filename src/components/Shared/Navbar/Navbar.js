import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const allLink = <>
                <li>
                    <button className="btn btn-ghost text-white mx-4">
                        <Link to="/home" className='lg:text-white text-black'>Home</Link>
                    </button>
                </li>
                <li>
                    <button className="btn btn-ghost text-white mx-4">
                        <Link to="/aboutme" className='lg:text-white text-black'>About Me</Link>
                    </button>
                </li>
                <li>
                    <button className="btn btn-ghost text-white mx-4" >
                        <Link to="/blog" className='lg:text-white text-black'>Blog</Link>
                    </button>
                </li>
    </>
    return (
        <div className="navbar  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                allLink
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl">
                        <span className='information'>
                             Ashraful Alam
                        </span>
                       
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                         {
                            allLink
                         }
                    </ul>
                </div>             
     </div>
    );
};

export default Navbar;