const request = require('request');

const errorHandling = (error, response) => {
  if (error) {
    return 'error';
  }

  if (response.statusCode !== 200) {
    return 'error';
  }
};

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (errorHandling(error, response) === 'error') {
      callback(error, null);
    }
  

    if (body === '[]') {
      callback('The search parameter did not return any breeds', null);
    } else {
      const data = JSON.parse(body);
      
      callback(null, data[0].description);
    }
    
  });

};

module.exports = {fetchBreedDescription};