axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=grocery&latitude=${latitude}&longitude=${longitude}`, {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
},
  params: {

    "latitude": 37.7854472,
    "longitude": -122.4056319
},

})
.then((res) => {
console.log(res)
})
.catch((err) => {
console.log ('error')
})