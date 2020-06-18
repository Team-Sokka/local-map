

//generate objects to insert

// address: String,
// bedrooms: Number,
// bathrooms: Number,
// price: Number,
// sqft: Number,
// location: {coordinates:[]}


var bedroomOptions = [];
var bathroomOptions = [];
var price;
var sqft;
//how to randomize coordinates?
//have a base and a random addition or subtraction?

var n = 0;
var houses = {};
var idCount = 0;
while(n < 5) {
  var id = idCount+=1
  houses[id] = {};
  houses[id].bedrooms = Math.floor(Math.random()* 5);
  houses[id].bathrooms = Math.floor(Math.random()* 5);
  houses[id].price = Math.floor(Math.random()* 3000000)+100000;
  houses[id].sqft = Math.floor(Math.random()* 2000) +1000;
  n++;
}
console.log(houses)
