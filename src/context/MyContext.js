import React, { createContext, useState } from 'react';
import { products } from '../db/ProductsData';

export const MyContext = createContext(); //context object

export const MyProvider = ({ children }) => {
    const [ mobileFiltersOpen, setMobileFiltersOpen ] = useState(false);
    const [ productCards, setProductCards ] = useState(products);
    const [searchTerm, setSearchTerm] = useState("");
    const [ sortState, setSortState ] = useState("asc");
    const [ filterState, setFilterState ] = useState("");
    //handle search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }
    //handle sort
    const handleSort = () => {
        setSortState(sortState === 'asc' ? 'desc' : 'asc');
    };
    //handle filter
    const handleFilter = (e) => {
        setFilterState(e.target.value)
    }
    //filter search
    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    //sort function
    const sortedProducts = [...products].sort((a,b) => {
        if (sortState === 'asc') {
            return a.price - b.price; //asc
        } else {
            return b.price - a.price; //desc
        }
    })
    return (
        <MyContext.Provider
            value={{
                mobileFiltersOpen, setMobileFiltersOpen,
                searchTerm, setSearchTerm,
                sortState, setSortState,
                filterState, setFilterState,
                filteredProducts, sortedProducts,
                }}>
            {children}
        </MyContext.Provider>
    );
};
