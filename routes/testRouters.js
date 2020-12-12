const { response } = require('express')
const express = require('express')
const axios = require("axios")

const yelp = require('yelp-fusion');
const client = yelp.client('wz06egUOK6g8xFhV3YrJAgtESWwA-rJnbxG33K1DFEoumLOqCVlDONIrltaG0S0y9brKrerWnlG8-MptZfK54Gd0mUOGsmZO6LX1_FFHKHKz2NzeBAoDgLernuC9X3Yx');

const testRouter = express.Router()

testRouter.get('/', (req, res) => {
  let params = req.params.path
  let query = req.params.query
  console.log("Hit SERVER ")
  // axios.get("https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972", {'Authorization': "Bearer wz06egUOK6g8xFhV3YrJAgtESWwA-rJnbxG33K1DFEoumLOqCVlDONIrltaG0S0y9brKrerWnlG8-MptZfK54Gd0mUOGsmZO6LX1_FFHKHKz2NzeBAoDgLernuC9X3Yx"}) 
  //   .then(response=> {
  //     console.log("888888888888")
  //     console.log("res", response)
  //     res.json(response)})
  //   .catch(err=>console.log(err))



client.search({
  term: 'Four Barrel Coffee',
  location: 'san francisco, ca',
}).then(response => {
  console.log("WE are inside the response")
  console.log(response.jsonBody);
  res.json(response.jsonBody)
}).catch(e => {
  console.log(e);
});
  console.log('test working route')
})

module.exports = testRouter
