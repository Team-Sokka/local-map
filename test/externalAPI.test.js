const externalAPI = require('../server/externalAPI.js')
require('dotenv').config();

// test('Yelp Request Returns Data', () => {
//   var lat = "21.260088";
//   var lng = "-157.706806";
//   return externalAPI.yelp(lat, lng).then(data => {
//     expect(Array.isArray(data.data.businesses)).toBe(true);
//     })
// })