const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=sib`, (error, response, body) => {
  if (error) {console.log('error: ', error)};
  if (response.statusCode !== 200) {console.log('statusCode: ', response && response.statusCode)};
  const data = JSON.parse(body);
  console.log(data[0].description);
})