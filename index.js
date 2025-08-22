const axios = require('axios');
const fs = require('fs');

// Funcion hecha por CHATGPT (big charlie)
async function downloadImage(url, filepath) {
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  return new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(filepath))
      .on("finish", () => resolve(filepath))
      .on("error", reject);
  });
}

async function getPokemonByUrl(pokeUrl) {
    let response = await axios.get(pokeUrl);
    return response.data;
}

async function getPokemonByName(pokeName) {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    return response.data.results;
}

async function getManyPokemon(amount, offset) {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=${offset}`);
    return response.data.results;
}
async function main () {
    let result = await getManyPokemon(30, 0);

    let pokeName = 'charizard'

    console.log(result);
    result.forEach( (element) => {
        if (pokeName == element.name) {
            getPokemonByUrl(element.url)
            .then(pokeInfo => { 
                console.log(pokeInfo)
                downloadImage(pokeInfo.sprites.front_default, 'pokeSprite.png')
                })
        }
    })
}

main()