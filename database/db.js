const pointSchema = mongoose.schema({
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

const houseSchema = mongoose.schema({
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