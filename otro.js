async function getPokemon(pokeName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => console.log(response))
    .catch(error => console.log("Error!"))

}

getPokemon('ditto')