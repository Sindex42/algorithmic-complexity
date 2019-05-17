const createCsvWriter = require('csv-writer').createObjectCsvWriter

const { lastElement } = require('./src/Functions.js')
const { benchmark, randomArray } = require('./src/TimingFunctions')

const csvWriter = createCsvWriter({
  path: 'results.csv',
  header: [
    {id: 'size', title: 'SIZE'},
    {id: 'time', title: 'TIME'}
  ]
})

let array = randomArray(10000)
let time = benchmark(lastElement, array)

const records = [
  {size: `${array.length}`,  time: `${time[1]}`}
]

csvWriter
  .writeRecords(records)
  .then(() => { console.log('Data written to "results.csv"') })
