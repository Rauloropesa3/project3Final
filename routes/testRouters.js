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




client.search({
  term: 'Grocery',
  location: 'Los Angeles',
}).then(response => {
  console.log("WE are inside the response")
  //console.log(response.jsonBody);
  res.json(response.jsonBody)
}).catch(e => {
  console.log(e);
});
  console.log('test working route')
})

testRouter.post("/dynamic", (req, res)=>{
  console.log("BODY!!!",req.body)

  
client.search({
  term: req.body.term,
  location: req.body.location,
}).then(response => {
  console.log("WE are inside the response")
  //console.log(response.jsonBody);
  res.json(response.jsonBody)
}).catch(e => {
  console.log(e);
});
  console.log('test working route')
})

module.exports = testRouter
