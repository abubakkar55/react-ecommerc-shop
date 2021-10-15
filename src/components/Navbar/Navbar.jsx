import { SearchIcon, ShoppingCartIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import useCustomContext from '../../hooks/useCustomContext';
const Navbar = () => {
    const { products: { clickedProduct }, firebase: { user: { displayName, photoURL, email } } } = useCustomContext();
    return (
        <div className="shadow-lg">
            <div className="flex items-center h-16 md:h-20  justify-between px-4 md:px-10 ">
                <div className="flex-1  hidden md:block">
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
                <div className="flex-1 md:text-center ">
                    <NavLink to="/">
                        <span className="md:text-2xl lg:text-3xl text-xl font-bold">ABShop </span>
                    </NavLink>
                </div>
                <div className="flex-1">
                    <ul className="flex text-lg items-center justify-end">
                        {
                            clickedProduct.length >= 1 && <NavLink to="/orderReview" className="mr-2 md:mr-5 text-base md:text-lg">order Review </NavLink>
                        }
                        {!email ?
                            <div>
                                <NavLink to="/signup" className="mr-2 md:mr-5 text-base md:text-lg">Register </NavLink>
                                <NavLink to="/login" className="mr-2 md:mr-5 text-base md:text-lg">Login </NavLink>
                            </div>
                            :
                            <div className="flex items-center">
                                <NavLink to="/logout" className="mr-2 md:mr-5 text-base md:text-lg">Logout </NavLink>
                                <img className="w-10 mr-4 shadow-xl rounded-full" src={photoURL} alt={displayName} />
                            </div>
                        }

                        <NavLink to="/orderReview" className="relative mr-4 md:mr-5">
                            <ShoppingCartIcon className="h-6" />
                            <span className="bg-yellow-500 w-5 h-5 flex items-center justify-center rounded-full text-xs absolute -right-3 bottom-3 font-bold">{clickedProduct.length} </span>
                        </NavLink>

                        {/*  Mobile menu  */}
                        <li className="md:hidden"> <MenuIcon className="h-6" /> </li>
                        {/*<li> <XIcon className="h-6"/> </li>*/}
                    </ul>

                    {/*<NavLink>Register </NavLink>
                    <NavLink>Login </NavLink>*/}
                </div>
            </div>
        </div>
    )
}

export default Navbar;