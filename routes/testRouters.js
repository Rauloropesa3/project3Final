const { response } = require('express')
const express = require('express')

const testRouter = express.Router()

testRouter.get('/:path/:query', (req, res) => {
  let params = req.params.path
  let query = req.params.query
  fetch("https://api.yelp.com/v3/businesses/search") 
    .then(response=> response.json())
    .then(data => res.json(data))


  console.log('test working route')
  res.send('hello')
})

module.exports = testRouter
