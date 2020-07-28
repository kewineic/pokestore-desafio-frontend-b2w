import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [search, setSearch] = useState({ search: '' });

    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    const { search, setSearch } = context;

    return { search, setSearch };
}