const axios = require('axios').default;
var yelp = (lat, lng, categories="Restaurants, Shopping, ArtsAndEntertainment, Fitness") => {
  return axios.get('https://api.yelp.com/v3/businesses/search', {
    params: {
      latitude: lat,
      longitude: lng,
      categories:categories
    },
    headers: {
      "Authorization": `Bearer ${process.env.YELP_API_KEY}`
    }
  })
}

module.exports.yelp = yelp;