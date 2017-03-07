import React, { Component } from 'react';
import GreenPlaceCard from './GreenPlaceCard.js'
import './GreenPlaceList.css'

export default class GreenPlacesList extends Component {

  render() {
    const { greenPlaces, deleteGreenPlace } = this.props
    let greenPlacesCards
      greenPlacesCards = greenPlaces.map(g => {
        return <GreenPlaceCard
          key={g.name}
          zipcode={g.zip}
          count={g.count}
          name={g.name}
          cap={g.cap}
          cost={g.cost}
          deleteGreenPlace={deleteGreenPlace}
        />
      })

    return (
      <div className="green-places-list">
        <h2>Green Places</h2>
        {greenPlacesCards}
      </div>
    )
  }
}
