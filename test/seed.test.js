const seedData = require('../database/truliaSeedData.js')

var sampleData = seedData.truliaData.data.searchResultMap.homes;

test('Expect Sample Data to be an Array', () =>{
  expect(Array.isArray(sampleData)).toBe(true)
})