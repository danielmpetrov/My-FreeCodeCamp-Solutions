// Drop the elements of an array (first argument), starting from the front,
// until the predicate (second argument) returns true.
// Return the rest of the array, otherwise return an empty array.

function drop(arr, func) {
  var arrCopy = arr.slice();

  for (var i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      arrCopy.shift();
    } else {
      break;
    }
  }

  return arrCopy;
}
