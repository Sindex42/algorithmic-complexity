const printWarmupNr = (n) => {
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(`Warmups: ${n + 1}`);
}

const benchmark = (func, input) => {
  let start = process.hrtime()
  func(input)
  let timeElapsed = process.hrtime(start)

  return timeElapsed
}

const randomArray = (length, max=length) => {
  return Array(length).fill().map(() => Math.round(Math.random() * max))
}

module.exports = { benchmark, randomArray, printWarmupNr }
