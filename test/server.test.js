const axios = require('axios');
const http = require('http');

test('Server Repsonds to GET Request', () => {
  return axios.get('/').then((data) => {
    expect(true).toBe(true);
  });
})

//https://zellwk.com/blog/endpoint-testing/
//https://www.npmjs.com/package/supertest