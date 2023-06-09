const pokeApi = {}


function pokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.home.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response)=>response.json())
        .then(pokeApiDetailToPokemon)
}

pokeApi.getPokemons = () =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response)=> response.json())
    .then((responseBody) => responseBody.results)
    .then((pokemons)=>pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails)=>pokemonDetails)
    .catch((error) => console.error(error))
}