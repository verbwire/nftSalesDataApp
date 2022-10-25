var express = require('express');
var app = express();
// const sdk = require('api')('@verbwire/v1.0#hr2s143dl9hbr7s9');

const API_KEY = 'YOUR API KEY GOES HERE'; // put in your API key here

app.get('/', function(req, res){
  const sdk = require('api')('@verbwire/v1.0#hr2s143dl9hbr7s9');

sdk.auth(API_KEY);
sdk.get('/nft/data/salesEventsForSlug', {
  slug: 'boredapeyachtclub', // change slug to a project name of your choice
  chain: 'ethereum',
  limit: '25',     // change to adjust number of records returned
  offset: '0',
  sortDirection: 'DESC', //ascending and descending order...
  startDate: '2022-10-01',// you can change the starting date for your returned data
  endDate: '2022-10-11'  // you can change the end date of your returned data
})
  .then((data)=>{res.send(data)})
  .catch(err => console.error(err));
});

app.listen(8080);
