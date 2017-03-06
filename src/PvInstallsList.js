import React, { Component } from 'react';
import PvInstallCard from './PvInstallsCard.js'


export default class PvInstallsList extends Component {

  render() {
    const { pvInstalls } = this.props
    let pvInstallCards
    if (pvInstalls) {
      pvInstallCards = pvInstalls.map(p => {
        return <PvInstallCard
          key={p.name}
          className='pvInstallCard'
          count={p.count}
          name={p.name}
          cap={p.cap}
          cost={p.cost}
        />
    })
  }
    return (
      <div>
        <h2>PV Installs</h2>
        {pvInstallCards}
      </div>
    )
  }
}
