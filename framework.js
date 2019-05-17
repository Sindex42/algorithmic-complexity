const createCsvWriter = require('csv-writer').createObjectCsvWriter
const testF = require('./src/Functions.js')
const timeF = require('./src/TimingFunctions')

const [START, MAX, STEP] = [5000, 100000, 5000]
const WARMUPS = 100 // default: 100
const WARMUP_ITERATIONS = 10 // default: 10
const TEST_FUNCTION = testF.lastElement
const TEST_ITERATIONS = 100 // default: 100

// CSV file template
const csvWriter = createCsvWriter({
  path: 'output.csv',
  header: [
    {id: 'size', title: 'SIZE'},
    {id: 'time', title: 'TIME'}
  ]
})

// Create, increment and bench arrays
const benchLoop = (recordBool, iterations) => {
  let records = []

  for (let i = START; i <= MAX; i += STEP) {
    let timings = []
    if (recordBool) { timeF.printIterationNr('Array size', i) }

    for (let j = 0; j < iterations ;j++) {
      timings.push(timeF.benchmark(TEST_FUNCTION, timeF.randomArray(i)))
    }
    if (recordBool) { records.push({ size: i,  time: timeF.findMedian(timings) }) }
  }
  return records
}

// Warmup
for (let i = 0; i < WARMUPS; i++) {
  benchLoop(false, WARMUP_ITERATIONS)
  timeF.printIterationNr('Warmups', i + 1)
}
console.log('\nWarmups complete')

// Benchmark and write to file
csvWriter
  .writeRecords(benchLoop(true, TEST_ITERATIONS))
  .then(() => { console.log('\nData written to "output.csv"') })
  .catch(() => { console.log('\nUnable to write data to file') })
