function gcd(a, b) { // https://en.wikipedia.org/wiki/Euclidean_algorithm
  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a;
}

function lcm(a, b) {
  return a / gcd(a, b) * b;
}

function smallestCommons(arr) {
  const range = [];
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  return range.reduce((p, c) => lcm(p, c));
}

smallestCommons([1,5]);
