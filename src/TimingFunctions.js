const printIterationNr = (text, n) => {
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(`${text}: ${n}`);
}

const benchmark = (func, input) => {
  const start = process.hrtime.bigint()
  func(input)
  const end = process.hrtime.bigint()

  return end - start
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
