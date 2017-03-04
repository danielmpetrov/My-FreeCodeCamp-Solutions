function diffArray(arr1, arr2) {
  const firstArrOnly = arr1.filter(item => arr2.indexOf(item) === -1);
  const secondArrOnly = arr2.filter(item => arr1.indexOf(item) === -1);
  return [].concat(firstArrOnly).concat(secondArrOnly);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
