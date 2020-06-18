const db = require('./index.js')
mongoose.Promise = global.Promise;

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
})

const houseSchema = new mongoose.Schema({
  address: String,
  bedrooms: Number,
  bathrooms: Number,
  price: Number,
  sqft: Number,
  location: {
    type: pointSchema,
    required: true
  }
}, {timestamps:true})

const House = mongoose.model('House', houseSchema);