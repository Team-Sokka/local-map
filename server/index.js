require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const externalAPI = require('./externalAPI.js')
const app = express()
const port = process.env.PORT;

app.use(morgan('tiny'));
app.set('query parser', 'simple');

app.get('/', (req, res) => {
  console.log('query params', req.query)
  res.send('Hello World');
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