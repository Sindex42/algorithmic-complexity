// shuffle, reverse, find duplicates

const lastElement = (array) => array[array.length - 1]

const shuffleFY = (array) => {
  var j, x, i
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = array[i]
    array[i] = array[j]
    array[j] = x
  }
  return array
}


module.exports = {
  lastElement,
  shuffleFY
}
