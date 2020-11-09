require('dotenv').config()


const express = require('express')
const axios = require('axios')
const port = process.env.PORT || 5000
const http = require("http")

const app = express()

const server = http.createServer(app)


const WEATHER_KEY = process.env.WEATHER_KEY
const GEO_KEY = process.env.GEO_KEY
const PHOTO_KEY = process.env.PHOTO_KEY

// * Reverse Geocoding (From Window)
app.get('/address/coords/:latlong', (req, res) => {
    const {latlong} = req.params
    const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${encodeURIComponent(latlong)}&key=${GEO_KEY}&pretty=1&no_record=1`
    axios
      .get(url, {json: true})
      .then((response) => {
        const {data} = response
        res.status(200)
        res.json(data)
      })
      .catch((err) => {
        res.status(err.response ? err.response.status.message !== 'OK' : 500)
        res.send(err.message || 'Something went wrong! Please try again later.')
      })
  })

//   * Based on Query
app.get('/search/coords/:query', (req, res) => {
    const {query} = req.params
    const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${encodeURIComponent(query)}&key=${GEO_KEY}&pretty=1&no_record=1`
    axios
      .get(url, {json: true})
      .then((response) => {
        const {data} = response
        res.status(200)
        res.json(data)
      })
      .catch((err) => {
        res.status(err.response ? err.response.status.message !== 'OK' : 500)
        res.send(err.message || 'Something went wrong! Please try again later.')
      })
  })

  app.get('/photo_search/:query', (req, res) => {
    const {query} = req.params
    const url = `https://api.unsplash.com/search/photos/?client_id=${PHOTO_KEY}&page=1&query=${encodeURIComponent(query)}`
    axios
      .get(url, {json: true})
      .then((response) => {
        const {data} = response
        res.status(200)
        res.json(data)
      })
      .catch((err) => {
        res.status(err.response ? err.response.errors : 500)
        res.send(err.message || 'Something went wrong! Please try again later.')
      })
  })

  server.listen(port, ()=>{
      console.log(`Currently running on ${port}`)
  })