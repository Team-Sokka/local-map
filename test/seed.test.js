const seedData = require('../database/truliaSeedData.js')


test('Expect Sample Data to be an Array', () =>{
  var sampleData = seedData.truliaData.data.searchResultMap.homes;
  expect(Array.isArray(sampleData)).toBe(true)
});