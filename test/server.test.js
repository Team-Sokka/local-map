const request = require('supertest');
//const express = require('express');
const app = require('../server/index.js')
//console.log('App -', app)
//const app = express()
// test('Server has a test', ()=> {
//   expect(true).toBe(true);
// // })
test('Server Repsonds to GET Request', () => {
  request(app).get('/')
  .expect(200)
})
test('Server Returns seed data', () => {
  request(app).get('/seed')
  .expect(200)
  .expect('Content-Type', /json/)
  .end(function(err, res){
    if (err) throw err;
  });
})
//Not sure if this test is working
test('Server sends back data about a house', () => {
  request(app).get('/house/14')
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
  })
})
//https://zellwk.com/blog/endpoint-testing/
//https://www.npmjs.com/package/supertest