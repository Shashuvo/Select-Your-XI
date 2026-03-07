import React from 'react';
import logo from "../../assets/logo.png";
import { TbCoinTakaFilled } from 'react-icons/tb';
const Navbar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>Fixtures</a></li>
        <li><a>Teams</a></li>
        <li><a>Schedule</a></li>
    </>
    return (
        <div className='my-5'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img src={logo} alt="Logo" className='w-15 h-15' />
                </div>
                <div className="navbar-end gap-8">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <a className="btn bg-white">0 Coin <TbCoinTakaFilled className='text-[#F39E09] h-5 w-5' /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;