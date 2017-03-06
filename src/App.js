import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      zipCode: '',
      pvInstalls: ''
    }

  }

  setZipCode(zip) {
    this.setState({zipCode: zip})
  }

  getInstallByZip(e) {
    e.preventDefault()
    axios.get(`/api/zip/${this.state.zipCode}`)
      .then((response) => {
        console.log(response);
        this.setState({ pvInstalls: response.data });
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
          <h2>Welcome to PV-Install Helper!</h2>
        </div>
        <form>
          <input type="integer" maxLength='5' onChange={(e) => this.setZipCode(e.target.value)}/>
          <button type="submit" onClick={(e)=>this.getInstallByZip(e)}>Submit</button>
        </form>

        <div>{county}</div>
      </div>
    );
  }
}

export default App;
