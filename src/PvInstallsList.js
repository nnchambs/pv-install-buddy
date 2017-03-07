import React, { Component } from 'react';
import PvInstallCard from './PvInstallsCard.js'


export default class PvInstallsList extends Component {

  render() {
    const { pvInstalls, saveGreenPlace } = this.props
    let pvInstallCards
      pvInstallCards = pvInstalls.results.map(p => {
        return <PvInstallCard
          key={p.name}
          zipcode={pvInstalls.zip}
          count={p.count}
          name={p.name}
          cap={p.cap}
          cost={p.cost}
          saveGreenPlace={saveGreenPlace}
        />
    })
    return (
      <div>
        <h2>PV Installs</h2>
        {pvInstallCards}
      </div>
    )
  }
}
