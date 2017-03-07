import React, { Component } from 'react';
import PvInstallCard from './PvInstallsCard.js'


export default class PvInstallsList extends Component {

  render() {
    const { pvInstalls, saveGreenPlace, clearPvInstalls } = this.props
    let pvInstallCards
      pvInstallCards = pvInstalls.map(p => {
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
        <button onClick={clearPvInstalls} >Clear List</button>
        {pvInstallCards}
      </div>
    )
  }
}
