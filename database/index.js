const path = require('path')
require('dotenv').config({path: path.join(__dirname,'../.env')})
//adjust the path - direct pathing
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_DB_URI;
mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology:true});

//const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// module.exports.db = db;