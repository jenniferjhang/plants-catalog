import React, { createContext, useState } from 'react';
import { products } from '../db/ProductsData';

//context object
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [ mobileFiltersOpen, setMobileFiltersOpen ] = useState(false);
    const [ searchTerm, setSearchTerm ] = useState("");
    const [ sortBy, setSortBy ] = useState("");
    const [ filterBy, setFilterBy ] = useState("");
    //handle search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }
    //search logic
    const searchedProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    //handle sort change
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        console.log(e.target.value);
    }
    //sort logic
   const sortedProducts = sortBy ? [...products].sort((a,b) => {
        if (sortBy === 'priceAsc') {
            return a.price - b.price;
        } else if (sortBy === 'priceDesc') {
            return b.price - a.price;
        } else if (sortBy === 'new') {
            return a.createdAt - b.createdAt;
        }
   }) : products;
    //handle filter
    const handleFilter = (e) => {
        if (e.target.checked) {
            setFilterBy([...filterBy, e.target.value]); //place both in array
            console.log(e.target.value);
            //when checked, grabs value
            //when unchecked, doesn't double grab value
        } else {
            setFilterBy(filterBy.filter((filterValue) => filterValue !== e.target.value));
            //when unchecked, remove value from array
        }
    }
    //filter logic
    const filteredProducts = filterBy.length > 0 ? [...products].filter((item) => {
        return filterBy.includes(item.nature.size) ||
            filterBy.includes(item.nature.light) ||
            filterBy.includes(item.nature.care) ||
            filterBy.includes(item.nature.water) ||
            filterBy.includes(item.nature.perk) ||
            filterBy >= (item.price);
    }) : products;

    function filteredData() {
        let result = products;
        if (searchTerm) {
            result = searchedProducts;
        } else if (sortBy) {
            result = sortedProducts;
        } else if (filterBy.length > 0) {
            result = filteredProducts;
        }
        return result;
    };
    //filter classes, lets me use ternary
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <MyContext.Provider
            value={{
                mobileFiltersOpen, setMobileFiltersOpen,
                searchTerm, setSearchTerm, handleSearch,
                sortBy, setSortBy, handleSortChange,
                filterBy, setFilterBy, handleFilter, filteredData: filteredData(),
                classNames,
                }}>
            {children}
        </MyContext.Provider>
    );
};
