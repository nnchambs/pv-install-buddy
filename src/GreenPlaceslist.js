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
    this.setState({greenPlaces: helpers.sortGreenPlaces(this.props.greenPlaces, 'cap')})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({greenPlaces: helpers.sortGreenPlaces(nextProps.greenPlaces, 'cap')})
  }

  setSortedGreenPlaces(param){
    this.setState({greenPlaces: helpers.sortGreenPlaces(this.state.greenPlaces, param)})
  }

  render() {
    let greenPlacesCards
    if(this.state.greenPlaces) {
      greenPlacesCards = this.state.greenPlaces.map(g => {
        if(this.state.greenPlaces[0] === g) {
          return <GreenPlaceCard
            key={g.name}
            highestProp='highest'
            zipcode={g.zip}
            count={g.count}
            name={g.name}
            cap={g.cap}
            cost={g.cost}
            deleteGreenPlace={this.props.deleteGreenPlace}
          />
        } else {
          return <GreenPlaceCard
            key={g.name}
            zipcode={g.zip}
            count={g.count}
            name={g.name}
            cap={g.cap}
            cost={g.cost}
            deleteGreenPlace={this.props.deleteGreenPlace}
          />
        }
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
