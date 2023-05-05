const pokemonHtml = document.getElementById("pokemon-list")
const loadMoreButton = document.getElementById("loadMoreButton")
const limit = 10
let offset = 0




function loadPokemonItens(){

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

loadPokemonItens()

loadMoreButton.addEventListener('click', () =>{
    offset += limit
    loadPokemonItens(offset, limit)
})