require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const externalAPI = require('./externalAPI.js')
const app = express()
const port = process.env.PORT;

//Middleware
app.use(morgan('tiny'));
app.use(helmet())
app.set('query parser', 'simple');

//Set Static Folder
app.use(express.static(path.join(__dirname, '../public')))

//Endpoints
app.get('/', (req, res) => {
  //console.log('query params', req.query)
  //res.send('Hello World');
  res.sendFile('index')
});

app.get('/map/:service', (req, res) => {
  var lat = req.query.lat;
  var lng = req.query.lng;
  var categories = req.query.categories;
  if (categories) {
    var markerData = externalAPI[req.params.service](lat, lng, categories)
    .then(data => {
      res.json(data.data)
    })
    .catch(err => res.send(`${req.params.service} request failed`));
  } else {
    externalAPI[req.params.service](lat, lng)
    .then(data => {
      res.json(data.data)
    })
    .catch(err => res.send(`${req.params.service} request failed`));
  }
})

app.listen(port, ()=>{
  console.log(`Listening at http://127.0.0.1:${port}`)
});