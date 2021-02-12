const $pokemon = document.querySelector('#pokemon');
const renderPokemon = (img) =>{
    $pokemon.setAttribute('src', img);
}
fetch('https://pokeapi.co/api/v2/pokemon/25/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => response.json() )
.then(pokemon => {
    renderPokemon(pokemon.sprites.front_default);
})