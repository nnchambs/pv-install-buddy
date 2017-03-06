import React from 'react';

const PvInstallCard = (props) => {
  const { count, name, cap, cost } = props;


  return (
    <div className='pvInstallCards'>
      <h3>{name}</h3>
      <ul>
        <li>{cap}</li>
        <li>{cost}</li>
      </ul>
    </div>
  )
}

module.exports = PvInstallCard;
