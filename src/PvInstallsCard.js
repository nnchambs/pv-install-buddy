import React from 'react';

const PvInstallCard = (props) => {
  const { count, name, cap, cost, zipcode, saveGreenPlace } = props;


  return (
    <div className='pvInstallCards'>
      <h3>{name}</h3>
      <h5>{zipcode}</h5>
      <ul>
        <li>{count}</li>
        <li>{cap}</li>
        <li>{cost}</li>
      </ul>
      <button onClick={() => saveGreenPlace({ name: name, cap: cap, cost: cost, count: count, zipcode: zipcode})}>Save Zipcode</button>
    </div>
  )
}

module.exports = PvInstallCard;
