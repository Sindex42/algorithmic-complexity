const createCsvWriter = require('csv-writer').createObjectCsvWriter

const { lastElement } = require('./src/Functions.js')
const { benchmark, randomArray } = require('./src/TimingFunctions')

// CSV file template
const csvWriter = createCsvWriter({
  path: 'results.csv',
  header: [
    {id: 'size', title: 'SIZE'},
    {id: 'time', title: 'TIME'}
  ]
})

// Benchmark execution
let records = []

for (var i = 5000; i <= 100000; i += 5000) {
  let array = randomArray(i)
  let time = benchmark(lastElement, array)

  records.push(
    {size: i,  time: (time[0], time[1])}
  )
}

// Write to file
csvWriter
  .writeRecords(records)
  .then(() => { console.log('Data written to "results.csv"') })
