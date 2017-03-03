function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;

  for (let num = min; num <= max; num += 1) {
      sum += num;
  }

  return sum;
}

sumAll([1, 4]);
