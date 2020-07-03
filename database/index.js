const path = require('path')
require('dotenv').config({path: path.join(__dirname,'../.env')})
//adjust the path - direct pathing
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_DB_URI;
console.log('mongoURI - ', mongoUri)
mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology:true});