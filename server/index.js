require('dotenv').config();
const express = require('express');
//const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const House = require('../database/House.js');
const externalAPI = require('./externalAPI.js');
const trulia = require('../database/truliaSeedData.js');
const app = express()
//Middleware
app.use(cors())
//app.use(morgan('tiny'));
app.use(helmet())
app.set('query parser', 'simple');

//Set Static Folder
app.use(express.static(path.join(__dirname, '../public')))

//Endpoints
app.get('/', (req, res) => {
  res.sendFile('index');
});
//Sends webpack bundle
app.get('/proxy',(req, res) =>{
  res.sendFile('bundle.js', {root:path.join(__dirname, '../public/dist')})
})

//Shows Seed Data
app.get('/seed', (req, res) => {
  res.send(trulia.truliaData.data);
});

//Route for getting housing data
app.get('/house/:id', (req, res) =>{
  House.find({houseId: req.params.id}).then((data) => res.send(data)).catch(err => res.send(err))
})

//GET request to work with API's
app.get('/map/:service', (req, res) => {
  var lat = req.query.lat;
  var lng = req.query.lng;
  var categories = req.query.categories;
  if (categories) {
    externalAPI[req.params.service](lat, lng, categories)
    .then(data => {
      res.json(data)
    })
    .catch(() => res.send(`${req.params.service} request failed`));
  } else {
    externalAPI[req.params.service](lat, lng)
    .then(data => {
      res.json(data)
    })
    .catch(() => res.send(`${req.params.service} request failed`));
  }
})

module.exports = app;