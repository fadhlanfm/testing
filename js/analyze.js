function analyze(arr) {
  return {
    average: averager(arr),
    min: minFinder(arr),
    max: maxFinder(arr),
    length: arr.length,
  };
}

module.exports = analyze