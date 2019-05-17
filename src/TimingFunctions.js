const printWarmupNr = (n) => {
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(`Warmups: ${n + 1}`);
}

const benchmark = (func, input) => {
  const start = process.hrtime()
  func(input)
  const timeElapsed = process.hrtime(start)

  return timeElapsed
}

const randomArray = (length, max=length) => {
  return Array(length).fill().map(() => Math.round(Math.random() * max))
}

const findMedian = (array) => {
  const mid = Math.floor(array.length / 2)
  let nums = [...array].sort((a, b) => a - b)
  return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

module.exports = { benchmark, randomArray, printWarmupNr, findMedian }
