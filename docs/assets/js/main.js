
function pokemonToHtml(pokemon){
    return `
        <li class="pokemon-card ${pokemon.type}">
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <div class="pokemon-img">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </div>
        </li>    
    `
}
const pokemonHtml = document.getElementById("pokemon-list")

pokeApi.getPokemons().then((pokemonList = []) => {
    
        pokemonHtml.innerHTML += pokemonList.map(pokemonToHtml).join('')
        
    })
    