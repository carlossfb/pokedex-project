const pokemonHtml = document.getElementById("pokemon-list")
const loadMoreButton = document.getElementById("loadMoreButton")
const limit = 5
let offset = 0




function loadPokemonItens(offset = 0, limit = 10){

    pokeApi.getPokemons().then((pokemonList = []) => {
        pokemonHtml.innerHTML += pokemonList.map((pokemon) =>
        `<li class="pokemon-card ${pokemon.type}">
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
            </li>`
        ).join('')  
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () =>{
    offset += limit
    loadPokemonItens(offset, limit)
})