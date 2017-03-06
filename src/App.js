import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      blob: ''
    }

  }

  componentDidMount() {
    this.getPVBlob()
  }

  getPVBlob() {
    axios.get('/api/solartest')
      .then((response) => {
        console.log(response.data);
        this.setState({ blob: response.data });
    });
  }

  render() {

    let county
    if(this.state.blob.inputs) {
      county = this.state.blob.inputs.county
    } else {
      county = 'loading....'
    }
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to PV-Install Helper!</h2>
        </div>
        <h4>{ county }</h4>
      </div>
    );
  }
}

export default App;
