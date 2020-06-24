const axios = require('axios').default;
// var yelp = (lat, lng, categories="restaurants, shopping, arts, fitness") => {
//   //ForDebugging purposes
//   // console.log('Yelping!')
//   // console.log('lat - ', lat)
//   // console.log('lng - ', lng)
//   // console.log('categories', categories)
//   // console.log(process.env.YELP_API_KEY)
//   console.log('Categories - ', categories)
//   return axios.get('https://api.yelp.com/v3/businesses/search', {
//     params: {
//       latitude: lat,
//       longitude: lng,
//       categories:categories,
//       limit: 50
//     },
//     headers: {
//       "Authorization": `Bearer ${process.env.YELP_API_KEY}`
//     }
//   })
// }
var yelp = (lat, lng, categories='restaurants, shopping, arts, fitness') => {
  var categoryArr = categories.split(',');
  //console.log('Category Array - ', categoryArr)
  //categoryArr
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