import React, { Component } from 'react';
import PvInstallCard from './PvInstallsCard.js'
import './PVInstallsList.css';



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
      <div className="pv-installs-list">
        <h2>PV Installs</h2>
        <button onClick={clearPvInstalls} >Clear Search List</button>
        {pvInstallCards}
      </div>
    )
  }
}
