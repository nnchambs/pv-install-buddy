import React, { Component } from 'react';
import GreenPlaceCard from './GreenPlaceCard.js'
import './GreenPlaceList.css'
import helpers from './helpers/helpers.js'

export default class GreenPlacesList extends Component {
  constructor() {
    super()
    this.state = {
      greenPlaces: ''
    }
  }
  componentDidMount() {
    this.setState({greenPlaces: this.props.greenPlaces})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({greenPlaces: nextProps.greenPlaces})
  }

  setSortedGreenPlaces(param){
    this.setState({greenPlaces: helpers.sortGreenPlaces(this.state.greenPlaces, param)})
  }

  compare(a, b, param) {
    if (a[param] < b[param]) {
      return -1
    }
    if(a[param] > b[param]){
      return 1;
    }
      return 0
  }


  render() {
    let greenPlacesCards
    if(this.state.greenPlaces) {
      greenPlacesCards = this.state.greenPlaces.map(g => {
        return <GreenPlaceCard
          key={g.name}
          zipcode={g.zip}
          count={g.count}
          name={g.name}
          cap={g.cap}
          cost={g.cost}
          deleteGreenPlace={this.props.deleteGreenPlace}
        />
      })
    }

    return (
      <div className="green-places-list">
        <h2>Green Places</h2>
        <div className='button-container'>
          <button onClick={() => this.setSortedGreenPlaces('cost')}>Sort By Total Cost</button>
          <button onClick={() => this.setSortedGreenPlaces('count')}>Sort By Total Count</button>
          <button onClick={() => this.setSortedGreenPlaces('cap')}>Sort By Total Capacity</button>
          <button onClick={() => this.setSortedGreenPlaces('name')}>Sort By ZipCode</button>
        </div>
        {greenPlacesCards}
      </div>
    )
  }
}
