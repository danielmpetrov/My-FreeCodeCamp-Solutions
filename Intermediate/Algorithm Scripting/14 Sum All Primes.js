// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
function sieve(n) {
  const A = {};

  for (let i = 2; i <= n; i++) {
    A[i] = true;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (A[i] === true) {
      for (let j = i * i; j <= n; j += i) {
        A[j] = false;
      }
    }
  }

  const result = [];
  for (const index in A) {
    if (A[index] === true) {
      result.push(index);
    }
  }

  return result.map(Number);
}

function sumPrimes(num) {
  return sieve(num).reduce((a, b) => a + b, 0);
}

sumPrimes(10); // 17
