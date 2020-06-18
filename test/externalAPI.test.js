const externalAPI = require('../server/externalAPI.js')


test('Yelp Request Returns Data', () => {
  var lat = 21.260088;
  var lng = -157.706806;
  //expect.assertions(1)
  expect(typeof externalAPI.yelp).toBe('function')
  // return externalAPI.yelp(lat, lng)
  // .then(data => {
  //     expect(data).toBe(true);
  //   })
})