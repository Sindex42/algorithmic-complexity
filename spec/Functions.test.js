const { lastElement } = require('../src/Functions.js')

describe('#last', () => {
  test('returns the last element of an array', () => {
    let array = [ 8, 5, 6, 5, 3 ]
    expect(lastElement(array)).toEqual(3)
  })
})
