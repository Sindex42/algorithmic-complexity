const f = require('../src/Functions.js')

describe('#last', () => {
  test('returns the last element of an array', () => {
    let array = [8, 5, 6, 5, 3]
    expect(f.lastElement(array)).toEqual(3)
  })
})

describe('#shuffleFY', () => {
  test('returns a shuffled array', () => {
    let original = [1, 2, 3, 4, 5]
    let array = [1, 2, 3, 4, 5]

    expect(f.shuffleFY(array)).not.toEqual(original)
    expect(f.shuffleFY(array)).toEqual(expect.arrayContaining(original))
  })
})

describe('#mergeSort', () => {
  test('sorts an array of length 1', () => {
    expect(f.mergeSort([1])).toEqual([1])
  })

  test('sorts an array of length 2 (unsorted)', () => {
    expect(f.mergeSort([2, 1])).toEqual([1, 2])
  })

  test('sorts an array of length 2 (sorted)', () => {
    expect(f.mergeSort([1, 2])).toEqual([1, 2])
  })

  test('returns a sorted array', () => {
    let array = [7, 2, 8, 3, 9, 8, 9, 2, 4, 3]
    expect(f.mergeSort(array)).toEqual([2, 2, 3, 3, 4, 7, 8, 8, 9, 9])
  })
})

describe('#reverse', () => {
  test('reverses an array of odd length', () => {
    expect(f.reverse([2, 1])).toEqual([1, 2])
  })

  test('reverses an array of even length', () => {
    expect(f.reverse([3, 2, 1])).toEqual([1, 2, 3])
  })
})
