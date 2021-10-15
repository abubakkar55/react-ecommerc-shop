import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import { ShoppingCartIcon, } from '@heroicons/react/outline';
import data from "../../data/Slider";
import "./Slider.css"
const Slider = () => {
    return (
        <div className="h-screen bg-gray-200">
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}  showThumbs={true} transitionTime={1200}>
                {
                    data.map(item => {
                        return (
                            <div className="flex items-center px-7 gap-7">
                                <div className="w-1/2 h-screen" style={{backgroundImage: `url(${item.img})`, backgroundRepeat: "no-repeat", backgroundPosition: "left center", backgroundSize: "140%"}}>
                                </div>
                                <div className="w-1/2 text-left">
                                    <h3 className="text-3xl">{item.subTitle} </h3>
                                    <h1 className="text-5xl font-semibold my-6">{item.title} </h1>
                                    <NavLink to="/shop"
                                        className="px-8 border-2 border-black flex items-center max-w-max py-3 gap-2 hover:bg-black hover:text-white">
                                        <span> <ShoppingCartIcon className="h-5" /> </span>
                                        <span> Shop Now </span>
                                    </NavLink>
                                </div>
                            </div>

                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default Slider
