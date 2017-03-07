const compare = (a, b, param) => {
  if (a[param] > b[param]) {
    return -1
  }
  if(a[param] < b[param]){
    return 1;
  }
    return 0
};

const sortGreenPlaces = (greenPlaces, param) => {
  return greenPlaces.sort((a, b) => compare(a, b, param))
}

module.exports = { compare, sortGreenPlaces };
