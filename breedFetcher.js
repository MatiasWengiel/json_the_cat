const request = require('request');

const breed = process.argv.slice(2);

const errorHandling = (error, response) => {
  if (error) {
    console.log('error: ', error);
    return 'error';
  }

  if (response.statusCode !== 200) {
    console.log('statusCode: ', response && response.statusCode);
    return 'error';
  }
};

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

  if (errorHandling(error, response) === 'error') {
    return;
  }

  if (body === '[]') {
    console.log('The search parameter did not return any breeds');
  } else {
    const data = JSON.parse(body);
    
    console.log(data[0].description);
  }
  
});