import React, { useEffect, useState } from 'react'
const useProducts = () => {

    const [clickedProduct, setClickedProduct] = useState([]);
    const [isOPen, setIsOpen] = useState(false);
    const handleStoredProduct = (pd) => {
        const newArray = [...clickedProduct, pd]
        setClickedProduct(newArray);
    }

    //console.log(sliderData);
    return { handleStoredProduct, clickedProduct, isOPen, setIsOpen };
}

export default useProducts
