import React from 'react';

const GreenPlaceCard = (props) => {
  const { count, name, cap, cost, zipcode, deleteGreenPlace, highestProp } = props;

  if(highestProp) {
    return (
      <div id={highestProp} className='greenPlacesCards'>
        <h3>{name}</h3><span className="winner">Greenest Zipcode!</span>
        <ul>
          <li> Total Count: {count}</li>
          <li>Total Capacity: {cap}</li>
          <li>Total Cost: {cost}</li>
        </ul>
        <button onClick={() => deleteGreenPlace(name)}>Delete from myGreenPlaces</button>
      </div>
    )
  } else {
      return (
        <div className='greenPlacesCards'>
          <h3>{name}</h3>
          <ul>
            <li> Total Count: {count}</li>
            <li>Total Capacity: {cap}</li>
            <li>Total Cost: {cost}</li>
          </ul>
          <button onClick={() => deleteGreenPlace(name)}>Delete from myGreenPlaces</button>
        </div>
      )
    }
}

module.exports = GreenPlaceCard;
