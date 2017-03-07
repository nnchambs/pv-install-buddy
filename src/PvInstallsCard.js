import React from 'react';

const PvInstallCard = (props) => {
  const { count, name, cap, cost, saveGreenPlace } = props;


  return (
    <div className='pvInstallCards'>
      <h3>{name}</h3>
      <ul>
        <li>Total Count: {Math.floor(count)}</li>
        <li>Total Capacity: {Math.floor(cap)}</li>
        <li>Total Cost:  {Math.floor(cost)}</li>
      </ul>
      <button onClick={() => saveGreenPlace({ name: name, cap: cap, cost: cost, count: count})}>Save Zipcode</button>
    </div>
  )
}

module.exports = PvInstallCard;
