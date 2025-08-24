const pokeapi = require('./pokeapi');
const util = require('./util');

var endpoint = "pokemon";
var identificator = "";
var limit = 30;
var offset = 0;
var target_pokemon = 'charizard';

async function main1 () {
    pokeapi.getInformationWithEndpoint(endpoint, identificator, limit, offset)
        .then( response => { return response.results})
        .then( response => {
            if (response != null) {
                poke_list.forEach( (element) => {
                    if (target_pokemon == element.name) {
                        pokeapi.getInformationWithUrl(element.url)
                        .then(pokemon_data => {
                            util.downloadImage(pokemon_data.sprites.front_default, `image/${target_pokemon}.png`);
                        })
                        .catch( err => {util.errorHandler(err)})
                    }
                })
            }
        })
        .catch( err => {util.errorHandler(err)})

    let response = await pokeapi.getInformationWithEndpoint(endpoint, identificator, limit, offset);
    let poke_list = response.results;
    if (poke_list != null) {
        poke_list.forEach( (element) => {
            if (target_pokemon == element.name) {
                pokeapi.getInformationWithUrl(element.url)
                .then(pokemon_data => {
                    util.downloadImage(pokemon_data.sprites.front_default, `image/${target_pokemon}.png`);
                })
            }
        })
    }
}

async function main2 () {
    let response = await pokeapi.getInformationWithEndpoint(endpoint, identificator, limit, offset);
    let poke_list = response.results;
    if (poke_list != null) {
        poke_list.forEach( (element) => {
            if (target_pokemon == element.name) {
                pokeapi.getInformationWithUrl(element.url)
                .then(pokemon_data => {
                    util.downloadImage(pokemon_data.sprites.front_default, `image/${target_pokemon}.png`);
                })
            }
        })
    }
}

main1()