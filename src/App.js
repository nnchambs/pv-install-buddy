import React, { Component } from 'react';
import GreenPlacesList from './GreenPlaceslist.js'
import PvInstallsList from './PvInstallsList.js'
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      zipCode: '',
      pvInstalls: []
    }

  }

  setZipCode(zip) {
    this.setState({zipCode: zip})
  }

  getInstallByZip(e) {
    e.preventDefault()
    axios.get(`/api/pvinstalls/${this.state.zipCode}`)
      .then((response) => {
        console.log(response);
        this.setState({ pvInstalls: response.data.result });
      })
  }

  render() {

    let county
    if(this.state.pvInstalls.inputs) {
      county = this.state.pvInstalls.inputs.zipcode
    } else {
      county = 'loading......'
    }
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Green Cities</h2>
        </div>
        <form>
          <input type="integer" maxLength='5' placeholder="Search by Zipcode" onChange={(e) => this.setZipCode(e.target.value)}/>
          <button type="submit" onClick={(e)=>this.getInstallByZip(e)}>Submit</button>
        </form>
        <PvInstallsList pvInstalls={this.state.pvInstalls} />
        <GreenPlacesList />
      </div>
    );
  }
}

export default App;
