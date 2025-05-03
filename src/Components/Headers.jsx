import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Headers = () => {


    const items = <>
        <div className='active md:flex'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/addCoffee'>Add Coffee</NavLink></li>
            <li><NavLink to='/signUp'>Sign UP</NavLink></li>
            <li><NavLink to='/signIn'>Sign In</NavLink></li>
            <li><NavLink to='/newUsers'>Users Details</NavLink></li>
        </div>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {items}
                    </ul>
                </div>
                <Link to='/'><a className="btn btn-ghost text-xl bg-cyan-500">Coffee Shope</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">User</a>
            </div>
        </div>
    );
};

export default Headers;