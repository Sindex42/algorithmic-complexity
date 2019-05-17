const createCsvWriter = require('csv-writer').createObjectCsvWriter

const { lastElement } = require('./src/Functions.js')
const { benchmark, randomArray, printWarmupNr } = require('./src/TimingFunctions')

// CSV file template
const csvWriter = createCsvWriter({
  path: 'results.csv',
  header: [
    {id: 'size', title: 'SIZE'},
    {id: 'time', title: 'TIME'}
  ]
})

// Create, increment and bench arrays
const [START, MAX, STEP] = [5000, 100000, 5000]

const benchLoop = (recordBool) => {
  let records = []

  for (let i = START; i <= MAX; i += STEP) {
    let array = randomArray(i)
    let time = benchmark(lastElement, array)

    if (recordBool) {
      records.push(
        {size: i,  time: (time[0], time[1])}
      )
    }
  }

  return records
}

// Warmup
const WARMUPS = 100

for (let i = 0; i < WARMUPS; i++) {
  benchLoop(false)
  printWarmupNr(i)
}
console.log('\nWarmups complete')

// Benchmark execution


// Write to file
csvWriter
  .writeRecords(benchLoop(true))
  .then(() => { console.log('Data written to "results.csv"') })
