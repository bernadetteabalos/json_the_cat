const request = require('request');
const breed = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed not found.');
  }
  if (data[0]) {
    console.log('Description: ', data[0].description);
  }
});
