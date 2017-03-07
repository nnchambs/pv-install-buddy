import GreenPlacesList from '../src/GreenPlacesList.js'
import React from 'react';
import ReactDOM from 'react-dom';
var {assert} = require('chai');
import helpers from './helpers/helpers.js'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <GreenPlacesList
    />, div);
});

it('can compare with the compare method', () => {
  var greenPlaces = [{ name: "81301", cap:   4.67, cost: 7.8, count: 2}, { name: "80301", cap: 9.67, cost: 4.5, count: 7}, { name: "77024", cap: 32.55, cost: 2.9, count: 4}]

  var expected = [{ name: "81301", cap:   4.67, cost: 7.8, count: 2}, { name: "77024", cap: 32.55, cost: 2.9, count: 4}, { name: "80301", cap: 9.67, cost: 4.5, count: 7}]

  var newSort = greenPlaces.sort((a,b) => helpers.compare(a, b, 'count'))
  assert.equal(newSort[2].count, expected[2].count)
})

it('can compare with the compare method', () => {
  var greenPlaces = [{ name: "81301", cap:   4.67, cost: 7.8, count: 2}, { name: "80301", cap: 9.67, cost: 4.5, count: 7}, { name: "77024", cap: 32.55, cost: 2.9, count: 4}]

  var expected = [{ name: "81301", cap:   4.67, cost: 7.8, count: 2},  { name: "80301", cap: 9.67, cost: 4.5, count: 7}, { name: "77024", cap: 32.55, cost: 2.9, count: 4}]
  var newSort = helpers.sortGreenPlaces(greenPlaces, 'cap')
  assert.equal(newSort[2].cap, expected[2].cap)
})
