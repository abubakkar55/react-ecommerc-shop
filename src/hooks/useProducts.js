import React, { useEffect, useState } from 'react'
const useProducts = () => {

    const [clickedProduct, setClickedProduct] = useState([]);

    const handleStoredProduct = (pd) => {
        const newArray = [...clickedProduct, pd]
        setClickedProduct(newArray);
    }

    //console.log(sliderData);
    return { handleStoredProduct, clickedProduct };
}

export default useProducts
