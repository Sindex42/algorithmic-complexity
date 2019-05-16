function getRandomIntInclusive(min, max) {
  let min = Math.ceil(min);
  let max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomIntArrayGen(length, min, max) {
    let result = []
    for (var i = 0; i < length; i++) {
      result.push(getRandomIntInclusive(min, max))
    }
    return result
}
