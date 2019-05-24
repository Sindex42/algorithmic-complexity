const printIterationNr = (text, n) => {
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(`${text}: ${n}`);
}

const benchmark = (func, input) => {
  const NS_PER_SEC = 1e9

  const start = process.hrtime()
  func(input)
  const diff = process.hrtime(start)

  return diff[0] * NS_PER_SEC + diff[1]
}

const randomArray = (length, max=length) => {
  return Array(length).fill().map(() => Math.round(Math.random() * max))
}

const findMedian = (array) => {
  const mid = Math.floor(array.length / 2)
  let nums = [...array].sort((a, b) => a - b)
  return nums[mid]
}

module.exports = {
  benchmark,
  randomArray,
  printIterationNr,
  findMedian
}
