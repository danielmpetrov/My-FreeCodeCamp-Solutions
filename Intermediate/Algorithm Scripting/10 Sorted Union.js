function getUnique(result, array) {
  array.forEach(el => {
    if (result.indexOf(el) === -1) {
      result.push(el);
    }
  });

  return result;
}

function uniteUnique(...arr) {
  return arr.reduce((acc, curr) => getUnique(acc, curr), []);
}
