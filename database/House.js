const mongoose = require('mongoose');
require('./index.js')
mongoose.Promise = global.Promise;


//Note that LONGITUDE COMES FIRST
const pointSchema = new mongoose.Schema({
  type:{
    type: String,
    enum:['Point'],
    required: true
  },
  coordinates: {
    type:[Number],
    required: true
  }
});

//This schema is for House. It has a subschema of pointSchema to be able to work with geoJSON information
const houseSchema = new mongoose.Schema({
  houseId: Number,
  address: String,
  beds: Number,
  baths: Number,
  price: Number,
  sqft: Number,
  location: {
    type: pointSchema,
    required: true
  }
}, {timestamps:true})

const House = mongoose.model('House', houseSchema);
module.exports = House;