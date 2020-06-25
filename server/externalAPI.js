const axios = require('axios').default;
var yelp = (lat, lng, categories='restaurants, shopping, arts, fitness') => {
  var categoryArr = categories.split(',');
  var searches = categoryArr.map((category) => {
    return axios.get('https://api.yelp.com/v3/businesses/search', {
      params: {
        latitude: lat,
        longitude: lng,
        categories: category,
        limit: 50
      },
      headers: {
        "Authorization": `Bearer ${process.env.YELP_API_KEY}`
      }
    });
  });
  var results = Promise.all(searches).then((data) => {
    var categorySearches = data.map((search) => {return search.data})
    return categorySearches;
  })
  return results;
}

module.exports.yelp = yelp;