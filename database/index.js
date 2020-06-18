const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_DB_URI;

const db = mongoose.connect(mongoUri);

module.exports.db = db;