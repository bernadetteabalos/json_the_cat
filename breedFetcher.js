const request = require('request');


const fetchBreedDescription = function(breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, 'Breed not found.');
      return;
    } else { 
      (data[0]) 
      callback(error, data[0].description);
    }
  });

};

module.exports = { fetchBreedDescription };
