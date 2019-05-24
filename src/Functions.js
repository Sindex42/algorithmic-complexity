// reverse, find duplicates

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

    // recursive call
    sortedLeft = mergeSort(left)
    sortedRight = mergeSort(right)

    // merging
    iL = 0
    iR = 0
    result = []

    // until end of either array is reached: push smaller, increment index
    while (iL < sortedLeft.length && iR < sortedRight.length) {
      if (sortedLeft[iL] <= sortedRight[iR]) {
        result.push(sortedLeft[iL])
        iL++
      } else {
        result.push(sortedRight[iR])
        iR++
      }
    }

    // push rest of remaining array to result
    if (iR === sortedRight.length) {
      result.push(sortedLeft.slice(iL))
    } else if (iL === sortedLeft.length) {
      result.push(sortedRight.slice(iR))
    }

    return result.flat()
  }
}


module.exports = {
  lastElement,
  shuffleFY,
  mergeSort
}
