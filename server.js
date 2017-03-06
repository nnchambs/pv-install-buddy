const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path')


const environment = process.env.NODE_ENV;
const API_KEY = process.env.API_KEY

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.greenPlaces = [{ count: '2', name: "81301", cap: '4.67', cost: '7.8' }, { count: '7', name: "80301", cap: '9.67', cost: '4.5' }, { count: '4', name: "77024", cap: '32.55', cost: '2.9' }]

app.set('port', process.env.PORT || 3001)
app.locals.title = 'PV-Install Buddy'

if(environment === "production") {
  app.use(express.static(path.join(__dirname, '/build')))

  app.get('/', (req, res) => {
    res.sendfile('/build/index.html')
  })
}

app.get('/api/pvinstalls/:zip', (req, res) => {
  const { zip } = req.params
 axios.get(`https://developer.nrel.gov/api/solar/open_pv/installs/rankings?api_key=${API_KEY}&zipcode=${zip}`)
  .then((blob) => {
    res.status(200).json(blob.data)
  })
})

app.get('/api/pvinstalls/:county/:state', (req, res) => {
  const { zip, county, state } = req.params
 axios.get(`https://developer.nrel.gov/api/solar/open_pv/installs/rankings?api_key=${API_KEY}&county=${county}&state=${state}`)
  .then((blob) => {
    res.status(200).json(blob.data)
  })
})

app.get('/api/greenplaces', (req, res) => {
  res.status(200).json(app.locals.greenPlaces)
})

app.post('/api/greenplaces', (req, res) => {
  const location = req.body
  app.locals.greenPlaces.push(location)
  res.status(200).json(app.locals.greenPlaces)
})

app.delete('/api/greenplaces/:zipcode', (req, res) => {
  const { zipcode } = req.params
  app.locals.greenPlaces = app.locals.greenPlaces.filter((p) => {
    if (p.name !== zipcode) return p
  })
  res.status(200).json(app.locals.greenPlaces)
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is runing on ${app.get('port')}.`)
})
