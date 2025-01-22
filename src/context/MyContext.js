import React, { createContext, useState } from 'react';
import { products } from '../db/ProductsData';

//context object
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [ mobileFiltersOpen, setMobileFiltersOpen ] = useState(false);
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sortBy, setSortBy ] = useState(null);
    const [ filterState, setFilterState ] = useState("");
    //handle search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }
    //filter search
    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    //handle sort change
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        console.log(sortBy);
    }
    //handle sort order
   const sortedProducts = sortBy ? [...products].sort((a,b) => {
        if (sortBy === 'priceAsc') {
            return a.price - b.price;
        } else if (sortBy === 'priceDesc') {
            return b.price - a.price;
        }
   }) : products;

    //handle filter
    const handleFilter = (e) => {
        setFilterState(e.target.value)
    }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <MyContext.Provider
            value={{
                mobileFiltersOpen, setMobileFiltersOpen,
                searchTerm, setSearchTerm, handleSearch, filteredProducts,
                sortBy, setSortBy, handleSortChange, sortedProducts,
                filterState, setFilterState,
                classNames
                }}>
            {children}
        </MyContext.Provider>
    );
};
