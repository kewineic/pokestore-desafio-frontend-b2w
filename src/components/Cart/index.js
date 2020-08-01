import React, { useEffect } from 'react';
import { usePurchased } from '../../context/Purchased';
import { useModal } from '../../context/Modal';
import './style.css';

const Cart = (props) => {
    const colorThemeCart = props.colorThemeCart;
    const storageKey = props.storageKey;

    const { pokemon, setPokemon } = usePurchased();
    const { setIsModalVisible } = useModal(false);
    const { purchased, setPurchased } = usePurchased();
    const { priceTotal, setPriceTotal } = usePurchased(0);

    useEffect(() => {
        const filtered = pokemon.filter(poke =>
            poke.pokemon.purchased
        );

        setPurchased(filtered);
    }, ([pokemon]));

    useEffect(() => {
        let convert = purchased.map(num =>
            Number(num.pokemon.price)
        );

        let total = convert.reduce((a, b) => a + b, 0);

        setPriceTotal(total.toFixed(2));
    }, ([purchased]));

    const removePurchasedCart = (id) => {
        const removePokemon = pokemon.map(poke => {
            return poke.pokemon.id === id ? {
                ...poke, pokemon: {
                    purchased: !poke.pokemon.purchased,
                    id: poke.pokemon.id,
                    name: poke.pokemon.name,
                    img: poke.pokemon.img,
                    price: poke.pokemon.price
                }
            } : poke
        });

        setPokemon(removePokemon);
    }

    const checkOut = () => {
        const removePokemon = pokemon.map(poke => {
            return {
                pokemon: {
                    purchased: false,
                    id: poke.pokemon.id,
                    name: poke.pokemon.name,
                    img: poke.pokemon.img,
                    price: poke.pokemon.price
                }
            }
        });

        if (purchased.length) localStorage.clear(`pokePurchased${storageKey}`);
        setPokemon(removePokemon);
    }

    const openModal = () => {
        if (purchased.length) setIsModalVisible(true)
    }

    return (
        <>
            <input type="checkbox" id="hidden-cart" />

            <div className="cart-container" id="cart">
                <div className="cart-title">
                    <p>Carrinho</p>
                </div>

                <div className="cart-main">
                    <ul>
                        {purchased.map(poke =>
                            <li key={poke.pokemon.id}>
                                <img className="cart-pokeImg" src={poke.pokemon.img} alt={` Mini icone do ${poke.pokemon.name}`}></img>
                                <p className="cart-pokeName">{poke.pokemon.name}</p>
                                <p>${poke.pokemon.price}</p>
                                <button onClick={() => removePurchasedCart(poke.pokemon.id)}>Remover</button>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="cart-footer">
                    <div className="total-container">
                        <p>TOTAL: </p>
                        <p>${priceTotal}</p>
                    </div>
                    <button
                        onClick={() => { checkOut(); openModal() }}
                        style={{ background: colorThemeCart }}
                    >
                        Finalizar
                </button>
                </div>
            </div>
        </>
    )
}

export default Cart;
