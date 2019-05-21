// shuffle, reverse, find duplicates

const lastElement = (arr) => arr[arr.length - 1]

const shuffleFY = (arr) => {
  var j, x, i
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = arr[i]
    arr[i] = arr[j]
    arr[j] = x
  }
  return arr
}

const mergeSort = (arr) => {
  l = arr.length

  if (l < 2) {
    return arr
  }
}


module.exports = {
  lastElement,
  shuffleFY,
  mergeSort
}
