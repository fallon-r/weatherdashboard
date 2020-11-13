

const express = require('express')
const axios = require('axios')
const port = process.env.PORT || 5000
const http = require("http")
const cors = require('cors')
require('dotenv').config()

const app = express()

const server = http.createServer(app)

app.use(cors())


const WEATHER_KEY = process.env.WEATHER_KEY
const GEO_KEY = process.env.GEO_KEY
const PHOTO_KEY = process.env.PHOTO_KEY



// * Reverse Geocoding (From userCoords)
app.get('/reverse/coords/:latlong', (req, res) => {
  const {latlong} = req.params
  const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${latlong}&key=${GEO_KEY}&pretty=1&no_record=1`
  
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
app.get('/forward/coords/:query', (req, res) => {
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

  // * Get dynamic background
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


  app.get('/weather/:lat/:lon', (req, res) => {
    const lat = req.params.lat
    const lon = req.params.lon

    console.log(lat + '....' +lon)

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&exclude=hourly,minutely&units=metric&appid=${WEATHER_KEY}`;
    axios
      .get(url, {json: true})
      .then((response) => {
        const {data} = response
        
        res.json(data)
      })
      .catch((err) => {
        
        res.send('Something went wrong! Please try again later.')
      })
  })

  server.listen(port, ()=>{
      console.log(`Currently running on ${port}`)
  })