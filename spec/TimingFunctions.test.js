const { findMedian } = require('../src/TimingFunctions.js')

describe('#findMedian', () => {
  test('finds the median value of an array (odd)', () => {
    let array = [0, 50, 2, 10, 12]
    expect(findMedian(array)).toEqual(10)
  })

  test('finds the median value of an array (even)', () => {
    let array = [0, 50, 2, 10, 12, 30]
    expect(findMedian(array)).toEqual(11)
  })
})
