const fs = require('fs');
const axios = require('axios');

function errorHandler(err) {
    console.error(err);
}

// Funcion hecha por CHATGPT
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

module.exports = { errorHandler, downloadImage };