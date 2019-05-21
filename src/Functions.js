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
  let left, right, sortedLeft, sortedRight, iL, iR, result
  l = arr.length

  if (l < 2) {
    return arr
  } else {
    // breakdown
    left = arr.slice(0, l / 2)
    right = arr.slice(l / 2)
    console.log('l, r', left, right)

    // recursive call
    sortedLeft = mergeSort(left)
    sortedRight = mergeSort(right)

    // merging
    iL = 0
    iR = 0
    result = []

    // console.log(iL, iR, sortedLeft.length, sortedRight.length)

    while (iL < sortedLeft.length && iR < sortedRight.length) {
      if (sortedLeft[iL] <= sortedRight[iR]) {
        console.log('left smaller, result before', result)
        result.push(sortedLeft[iL])
        iL++
        console.log('index, result after', iL, result)
      } else {
        console.log('right smaller, result before', result)
        result.push(sortedRight[iR])
        iR++
        console.log('index, result after:', iR, result)
      }
    }

    if (iR = sortedRight.length) {
      result.push(sortedLeft.slice(iL))
      console.log('after push right', result)
    } else if (iL = sortedLeft.length) {
      result.push(sortedRight.slice(iR))
      console.log('after push left', result)
    }

    return result.flat()
  }
}


module.exports = {
  lastElement,
  shuffleFY,
  mergeSort
}
