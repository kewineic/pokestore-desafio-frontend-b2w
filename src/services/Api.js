async function getPokemon(pokeUrl) {
    const pokemon = [];

    const response = await fetch(pokeUrl),
        json = await response.json(),
        urls = json.pokemon.map(item => item.pokemon.url);

    for (const url of urls) {
        const response = await fetch(url),
            json = await response.json();

        const randomPrice = () => {
            return (Math.random() * 1000).toFixed(2);
        }

        if (json.sprites.front_default != null)
            pokemon.push({
                pokemon: {
                    id: json.id,
                    name: json.name,
                    img: json.sprites.front_default,
                    price: `${randomPrice()}`
                }
            });
    }


    return pokemon;
};

export default getPokemon;