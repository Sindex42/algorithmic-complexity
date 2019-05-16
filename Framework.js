const { lastElement } = require('./src/Functions.js')
const { benchmark, randomArray } = require('./src/TimingFunctions')

let array = randomArray(100, 100)

console.log(benchmark(lastElement, array))
