const { findMedian, randomArray } = require('../src/TimingFunctions.js')

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

describe('#randomArray', () => {
  test('creates an array of the specified length', () => {
    expect(randomArray(5).length).toEqual(5)
  })

  test('creates an array where the max value is the length', () => {
    expect(randomArray(5).sort()[4]).toBeLessThanOrEqual(5)
  })
})
