import React from 'react';
import { SearchIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline';
import "./SingleProducts.css";
import { NavLink } from 'react-router-dom';
import useCustomContext from '../../hooks/useCustomContext';
const SingleProducts = ({ pd }) => {
    const { title, image } = pd;
    const { products: { handleStoredProduct } } = useCustomContext();
    return (
        <div style={{ backgroundColor: "#f6fbfd" }} className="item p-6 flex justify-center items-center flex-col relative rounded-md">
            <div className="w-60 h-60 rounded-full bg-white flex items-center justify-center">
                <img className="w-36 h-36" src={image} alt="" />
            </div>
            <div className="icons flex items-center justify-center">
                <ul className="flex items-center gap-4 absolute inset-y-0  m-auto ">
                    <li className="cart">
                        <button
                            onClick={() => handleStoredProduct(pd)}
                            className="link h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white"> <ShoppingCartIcon className="h-5" /> </button>
                    </li>

                    <li className="search">
                        <NavLink to={`/product_details/${title}`}
                            className="link h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white">
                            <SearchIcon className="h-5" /> </NavLink>
                    </li>
                    <li className="heart">

                        <NavLink to=""
                            className="link h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white">
                            <HeartIcon className="h-5" /> </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SingleProducts
