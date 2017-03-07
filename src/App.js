import React, { Component } from 'react';
import GreenPlacesList from './GreenPlaceslist.js'
import PvInstallsList from './PvInstallsList.js'
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countyName: '',
      searchState:'',
      zipCode: '',
      pvInstalls: '',
      greenPlaces: '',
      greenPlace: ''
    }
  }

  componentDidMount() {
    this.getGreenPlaces()
  }

  setZipCode(zip) {
    this.setState({zipCode: zip})
  }

  setCountyName(countyName) {
    this.setState({countyName: countyName})
  }

  setSearchState(searchState){
    this.setState({searchState: searchState})

  }

  clearPvInstalls() {
    this.setState({pvInstalls: ''})
  }

  getInstallByZip(e) {
    e.preventDefault()
    axios.get(`/api/pvinstalls/${this.state.zipCode}`)
    .then((response) => {
        this.setState({ pvInstalls: [{name: response.data.inputs.zipcode, cap: response.data.result[0].cap, cost: response.data.result[0].cost, count: response.data.result[0].count}]});
    })
  }

  getInstallByCountyNameAndState(e) {
    e.preventDefault()
    axios.get(`/api/pvinstalls/${this.state.countyName}/${this.state.searchState}`)
    .then((response) => {
      this.setState({pvInstalls: response.data.result});
    })
  }

  getGreenPlaces() {
    axios.get('/api/greenplaces')
    .then(res => {
      this.setState({greenPlaces: res.data});
    })
  }

  saveGreenPlace(greenPlace) {
    this.setState({greenPlace: greenPlace }, () => this.postGreenPlace(this.state.greenPlace))
  }

  postGreenPlace(greenPlace) {
    axios.post(`/api/greenplaces`, ({greenPlace}))
    .then(res => {
      this.setState({greenPlaces: res.data});
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Green Cities</h2>
        </div>
        <form>
          <input type="integer" maxLength='5' placeholder="Search by Zipcode" onChange={(e) => this.setZipCode(e.target.value)}/>
          <button type="submit" onClick={(e)=>this.getInstallByZip(e)}>Submit</button>
        </form>
        <form>
          <input type="string" placeholder="Search by County Name" onChange={(e) => this.setCountyName(e.target.value)}/>
          <span>CASE SENSITIVE</span>
          <input type="string" maxLength='2' placeholder="and State" onChange={(e) => this.setSearchState(e.target.value)}/>
          <button type="submit" onClick={(e)=>this.getInstallByCountyNameAndState(e)}>Submit</button>
        </form>
        { this.state.pvInstalls ? <PvInstallsList pvInstalls={this.state.pvInstalls} saveGreenPlace={this.saveGreenPlace.bind(this)} clearPvInstalls={this.clearPvInstalls.bind(this)} /> : '' }
        { this.state.greenPlaces ? <GreenPlacesList /> : '' }
      </div>
    );
  }
}

export default App;
