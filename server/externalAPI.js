const axios = require('axios').default;
var yelp = (lat, lng, categories="Restaurants, Shopping, ArtsAndEntertainment, Fitness") => {
  //ForDebugging purposes
  // console.log('Yelping!')
  // console.log('lat - ', lat)
  // console.log('lng - ', lng)
  // console.log('categories', categories)
  // console.log(process.env.YELP_API_KEY)
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