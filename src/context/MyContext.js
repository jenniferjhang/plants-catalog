import React, { createContext, useState } from 'react';

export const MyContext = createContext(); //context object

export const MyProvider = ({ children }) => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    return (
        <MyContext.Provider value={{ mobileFiltersOpen, setMobileFiltersOpen}}>
            {children}
        </MyContext.Provider>
    );
};
