import React, { createContext, useState, useContext } from 'react';

const PurchasedContext = createContext();

export default function PurchasedProvider({ children }) {
    const [pokemon, setPokemon] = useState([]);
    const [purchased, setPurchased] = useState([]);
    const [priceTotal, setPriceTotal] = useState(0);


    return (
        <PurchasedContext.Provider
            value={{
                pokemon,
                setPokemon,
                purchased,
                setPurchased,
                priceTotal,
                setPriceTotal
            }}
        >
            {children}
        </PurchasedContext.Provider>
    );
}

export function usePurchased() {
    const context = useContext(PurchasedContext);
    const { pokemon, setPokemon, purchased, setPurchased, priceTotal, setPriceTotal } = context;

    return { pokemon, setPokemon, purchased, setPurchased, priceTotal, setPriceTotal };
}