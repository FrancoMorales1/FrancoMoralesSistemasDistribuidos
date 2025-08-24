const axios = require('axios');
const util = require('./util');

var base_url = "https://pokeapi.co/api/v2/";

async function getInformationWithUrl(url) {
    let response = null;
    try {
        response = await axios.get(url);
        response = response.data;
    } catch (err) { 
        util.errorHandler(err);
    }
    return response;
}

async function getInformationWithEndpoint(endpoint = "", identificator = "", limit_amount = 20, offset_amount= 20) {
    let final_url;
    identificator ? final_url = base_url+endpoint+`/${identificator}` : final_url = base_url+endpoint+`?limit=${limit_amount}&offset=${offset_amount}`;
    let response = getInformationWithUrl(final_url);
    return response;
}

module.exports = { getInformationWithEndpoint, getInformationWithUrl };