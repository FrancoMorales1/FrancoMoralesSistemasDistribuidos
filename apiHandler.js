const axios = require('axios');
const util = require('./util');

var base_url = "https://jsonplaceholder.typicode.com/";

async function getUsers() {
    let response = null;
    try {
        response = await axios.get(base_url+"users");
        response = response.data;
    } catch (err) { 
        util.errorHandler(err);
    }
    return response;
}

async function getPostsWithId(user_id) {
    let response = null;
    try {
        response = await axios.get(base_url+"posts?userId="+`${user_id}`);
        response = response.data;
    } catch (err) { 
        util.errorHandler(err);
    }
    return response;
}

module.exports = { getUsers, getPostsWithId };