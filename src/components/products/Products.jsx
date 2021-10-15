import React from 'react'
import { colors, sizes } from '../../data/Variations';
import SingleProducts from '../SingleProducts/SingleProducts';
import productsData from './../../data/ProductsData';

const Products = () => {
    return (
        <div className="px-6 md:px-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pt-7 md:pt-16 text-center">Our Featured Products </h2>
            <div className="my-5 md:my-10 flex items-center justify-between">
                <div>
                
                    <span className="text-xl md:text-2xl font-semibold">Filter Products : </span>
                    <select name="" id="" className="outline-none border p-2 mr-4 ">
                        {
                            colors.map(pd => <option value={pd.color}> {pd.color} </option>)
                        }
                    </select>

                    <select name="" id="" className="outline-none border p-2 ">
                        {
                            sizes.map(pd => <option value={pd.size}> {pd.size} </option>)
                        }
                    </select>

                </div>
                <div>
                    <span className="text-xl md:text-2xl font-semibold">Sort Products : </span>
                    <select name="" id="" className="outline-none border p-2 ">
                        <option value="regular"> Regular </option>
                        <option value="price(asec)">price(asec) </option>
                        <option value="price(dsec)"> price(dsec) </option>
                    </select>

                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                {
                    productsData.map(pd => {
                        return (
                            <SingleProducts key={pd.id} pd={pd} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
