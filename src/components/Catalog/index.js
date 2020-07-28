import getPokemon from '../../services/Api';
import React, { useEffect, useState } from 'react';
import { usePurchased } from '../../context/Purchased';
import { useSearch } from '../../context/Search';
import './styles.css';

const Catalog = (props) => {
    const colorThemeCatalog = props.colorThemeCatalog;
    const pokeUrl = props.pokeUrl;
    const { pokemon, setPokemon } = usePurchased();
    const { search } = useSearch({ search: "" });
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true);
        const data = await getPokemon(pokeUrl);

        setPokemon(data);
        setLoading(false);
    }, []);

    const buyPokemon = (id) => {
        const newPokemon = pokemon.map(poke => {
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

        setPokemon(newPokemon);
    };

    const filterPokemon = pokemon.filter(poke => {
        return poke.pokemon.name.toLowerCase().includes(search.search)
    });

    return (
        <div className="main-container">
            {loading && <h2>Carregando...</h2>}
            <ul>
                {filterPokemon.map(poke =>
                    <li className="card" key={poke.pokemon.id}>
                        {poke.pokemon.purchased && <span>(Adquirido)</span>}
                        <img src={poke.pokemon.img} alt="Imagem pokemon" />
                        <p className="poke-name">{poke.pokemon.name}</p>
                        <p className="poke-price"> ${poke.pokemon.price}</p>
                        <button onClick={() => buyPokemon(poke.pokemon.id)} className="buy-button" style={{ background: colorThemeCatalog }}>
                            {poke.pokemon.purchased && "Remover"} {!poke.pokemon.purchased && "Comprar"}
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Catalog;