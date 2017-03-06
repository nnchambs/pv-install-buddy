const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path')


const environment = process.env.NODE_ENV;
const API_KEY = process.env.API_KEY

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.greenPlaces = []

app.set('port', process.env.PORT || 3001)
app.locals.title = 'PV-Install Buddy'

if(environment === "production") {
  app.use(express.static(path.join(__dirname, '/build')))

  app.get('/', (req, res) => {
    res.sendfile('/build/index.html')
  })
}

app.get('/api/zip/:zip', (req, res) => {
  const { zip } = req.params
 axios.get(`https://developer.nrel.gov/api/solar/open_pv/installs/rankings?api_key=${API_KEY}&zipcode=${zip}`)
  .then((blob) => {
    res.status(200).json(blob.data)
  })
})

app.get('/api/zip/:county/:state', (req, res) => {
  const { zip, county, state } = req.params
 axios.get(`https://developer.nrel.gov/api/solar/open_pv/installs/rankings?api_key=${API_KEY}&county=${county}&state=${state}`)
  .then((blob) => {
    res.status(200).json(blob.data)
  })
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is runing on ${app.get('port')}.`)
})
