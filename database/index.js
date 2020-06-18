const path = require('path')
require('dotenv').config({path: '../.env'})
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_DB_URI;
console.log(mongoUri)
const db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology:true});

module.exports.db = db;