import React, { useState } from 'react'
import { SearchIcon, ShoppingCartIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import useCustomContext from '../../hooks/useCustomContext';
import MobileMenu from './../MobileMenu/MobileMenu';
const Navbar = () => {
    const { products: { clickedProduct, isOPen, setIsOpen }, firebase: { user: { displayName, photoURL, email } } } = useCustomContext();

    const handleMenu = () => {
        setIsOpen(!isOPen);
    }
    return (
        <div className="shadow-lg">
            <div className="flex items-center h-16 md:h-20  justify-between px-4 md:px-5 lg:px-10 ">
                <div className="xl:flex-1  hidden lg:block">
                    <div className="flex items-center">
                        <span>
                            Eng
                        </span>
                        <div className="relative flex items-center ml-3">
                            <input type="text" className="p-1 border border-gray-300 outline-none" />
                            <SearchIcon className="h-4 absolute right-2" />
                        </div>
                    </div>
                </div>
                <div className="lg:flex-1 md:text-center ">
                    <NavLink to="/">
                        <span className="md:text-2xl lg:text-3xl text-xl font-bold">ABShop </span>
                    </NavLink>
                </div>
                <div className="flex-1">
                    <ul className="flex text-lg items-center justify-end">
                        <NavLink to="/shop" className="hidden md:block mr-2 md:mr-5 text-base md:text-lg">Shop </NavLink>

                        {
                            clickedProduct.length >= 1 && <NavLink to="/orderReview" className="hidden md:block mr-2 md:mr-5 text-base md:text-lg">order Review </NavLink>
                        }
                        {!email ?
                            <div className="hidden md:block">
                                <NavLink to="/signup" className="mr-2 md:mr-5 text-base md:text-lg">Register </NavLink>
                                <NavLink to="/login" className="mr-2 md:mr-5 text-base md:text-lg">Login </NavLink>
                            </div>
                            :
                            <div className="hidden md:block">
                                <div className="flex items-center">
                                    <NavLink to="/logout" className="mr-2 md:mr-5 text-base md:text-lg">Logout </NavLink>
                                    <img className="w-10 mr-4 shadow-xl rounded-full" src={photoURL} alt={displayName} />
                                </div>
                            </div>
                        }

                        <NavLink to="/orderReview" className="relative  mr-5 md:mr-0">
                            <ShoppingCartIcon className="h-6" />
                            <span className="bg-yellow-500 w-5 h-5 flex items-center justify-center rounded-full text-xs absolute -right-3 bottom-3 font-bold">{clickedProduct.length} </span>
                        </NavLink>

                        {/*  Mobile menu  */}

                        <li className="md:hidden cursor-pointer" onClick={handleMenu}>

                            {
                                isOPen ?
                                    <XIcon className="h-6" />
                                    :
                                    <MenuIcon className="h-6" />

                            }
                        </li>
                    </ul>

{
    isOPen && <MobileMenu/>
}
                    {/*<NavLink>Register </NavLink>
                    <NavLink>Login </NavLink>*/}
                </div>
            </div>
        </div>
    )
}

export default Navbar;