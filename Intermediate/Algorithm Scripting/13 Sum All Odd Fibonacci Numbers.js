function sumOddFibs(num) {
  let a = 1;
  let b = 1;
  let sum = 2;

  while (true) {
    [a, b] = [b, a + b];

    if (b > num) {
      return sum;
    }

    if (b % 2 === 1) {
      sum += b;
    }
  }
}

sumOddFibs(4);
