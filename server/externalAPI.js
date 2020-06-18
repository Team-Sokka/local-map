const axios = require('axios').default;
var yelp = (lat, lng, categories="food,restaurants,grocery, nightlife,arts,cafes,shopping,fitness") => {
  return axios.get('https://api.yelp.com/v3/businesses/search', {
    params: {
      latitude: lat,
      longitude: lng,
      categories: categories
    },
    headers: {
      "Authorization": `Bearer ${process.env.YELP_API_KEY}`
    }
  })
}

module.exports.yelp = yelp;