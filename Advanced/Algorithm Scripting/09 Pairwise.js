// https://www.freecodecamp.com/challenges/pairwise

function pairwise(arr, arg) {
  const arrCopy = arr.slice();
  const len = arrCopy.length;
  let res = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arrCopy[i] + arrCopy[j] === arg) {
        res += i + j;
        arrCopy[i] = NaN;
        arrCopy[j] = NaN;
      }
    }
  }

  return res;
}
