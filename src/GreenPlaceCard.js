import React from 'react';

const GreenPlaceCard = (props) => {
  const { count, name, cap, cost, zipcode, deleteGreenPlace } = props;


  return (
    <div className='greenPlacesCards'>
      <h3>{name}</h3>
      <ul>
        <li>{count}</li>
        <li>{cap}</li>
        <li>{cost}</li>
      </ul>
      <button onClick={() => deleteGreenPlace(name)}>Delete from myGreenPlaces</button>
    </div>
  )
}

module.exports = GreenPlaceCard;
