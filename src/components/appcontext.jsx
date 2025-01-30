"use client"
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <AppContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
