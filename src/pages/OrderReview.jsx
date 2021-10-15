import React from 'react';
import { NavLink } from 'react-router-dom';
import useCustomContext from '../hooks/useCustomContext';
import Cart from './../components/Cart/Cart';

const OrderReview = () => {

    const { products: { clickedProduct } } = useCustomContext();

    return (
        <div className="m-16">
            <div className="mb-16 flex items-center justify-between">
                <button>
                    <NavLink to="/shop"
                        className="px-5 border-2 font-semibold text-lg  border-black py-3">
                        <span> Continue shopping </span>
                    </NavLink>
                </button>
                <div className="font-semibold text-lg underline">
                    <span className="mr-3">Shopping Bag(0) </span>
                    <span>Whichlist(0) </span>
                </div>
                <button>
                    <NavLink to="/checkout"
                        className="px-6 border-2 font-semibold text-lg  border-black  py-3 bg-black text-white">
                        <span> Proceed to checkout </span>
                    </NavLink>
                </button>
            </div>
            <div className="flex gap-10 items-start">
                <div className="w-2/3">

                    {
                        clickedProduct.map(pd => {
                            return (
                                <div className="flex gap-6 justify-between items-center shadow-lg bg-white p-10 rounded-lg mb-10">
                                    <div className="w-1/3">
                                        <img className="w-52 h-52" src={pd?.image} alt={pd?.title} />
                                    </div>
                                    <div className="w-2/3">
                                        <h3 className="text-2xl mb-6 font-semibold">{pd?.title} </h3>
                                        <p className="mb-4 font-medium"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis excepturi magnam modi quas distinctio vitae voluptate animi sit reprehenderit eius sint numquam ex itaque minus, ducimus quis amet necessitatibus corrupti.</p>
                                        <h3 className="text-3xl">${pd?.price} </h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Cart />
            </div>

        </div>
    )
}

export default OrderReview;