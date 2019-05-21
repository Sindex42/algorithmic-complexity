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
