import React, { createContext } from 'react'
import useProducts from '../hooks/useProducts';
import useFirebase from '../hooks/useFirebase';

export const AllContext = createContext();

const AllProvider = ({ children }) => {
    const products = useProducts();
    const firebase = useFirebase();
    return (
        <AllContext.Provider value={{ products, firebase }}>
            {children}
        </AllContext.Provider>
    )
}

export default AllProvider;