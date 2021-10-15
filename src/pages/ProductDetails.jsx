import React from 'react'
import { useParams } from 'react-router';
import { sizes } from '../data/Variations';
import productsData from './../data/ProductsData';
import { PlusIcon, MinusIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import useCustomContext from '../hooks/useCustomContext';
const ProductDetails = () => {
    const { pdId } = useParams();
    const findPd = productsData.find(pd => pd.title === pdId);
    const { products: { handleStoredProduct } } = useCustomContext();
    //const { title, price, image } = findPd;
    return (
        <div className="p-8 md:p-16">
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <div className="md:w-1/2">
                    <img className="w-52 md:w-3/5 mx-auto md:mx-0 h-52 md:h-72" src={findPd?.image} alt={findPd?.title} />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-xl md:text-2xl mb-3 md:mb-6 font-semibold">{findPd?.title} </h3>
                    <p className="mb-3 md:mb-7 md:w-3/4 font-medium"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis excepturi magnam modi quas distinctio vitae voluptate animi sit reprehenderit eius sint numquam ex itaque minus, ducimus quis amet necessitatibus corrupti.</p>
                    <h3 className="text-3xl mb-6">${findPd?.price} </h3>

                    <div className="flex justify-between items-center md:w-2/4">
                        <div className="flex gap-2 items-center">
                            <h3 className="text-2xl">Color :</h3>
                            <div className="w-5 h-5 bg-blue-800 rounded-full"></div>
                            <div className="w-5 h-5 bg-black rounded-full"></div>
                            <div className="w-5 h-5 bg-green-800 rounded-full"></div>
                            <div className="w-5 h-5 bg-red-800 rounded-full"></div>
                        </div>
                        <div>
                            <select name="sizes" id="" className="outline-none border p-2 ">
                                {
                                    sizes.map(pd => <option value={pd?.size}> {pd?.size} </option>)
                                }
                            </select>

                        </div>
                    </div>
                    <div className="flex items-center py-8">
                        <div className="flex items-center gap-3">
                            <span> <MinusIcon className="h-6" /> </span>
                            <div className="w-10 bg-gray-200 rounded-md h-7" />
                            <span className=""> <PlusIcon className="h-6" /> </span>
                        </div>
                        <div className="ml-14">
                            <button to="/shop"
                                onClick={() => handleStoredProduct(findPd)}
                                className="px-8 border-2 border-black flex items-center max-w-max py-3 gap-2 hover:bg-black hover:text-white">
                                <span> <ShoppingCartIcon className="h-5" /> </span>
                                <span> add to cart </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails;