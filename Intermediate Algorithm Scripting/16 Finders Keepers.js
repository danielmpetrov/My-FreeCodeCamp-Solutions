// Finders Keepers
// Create a function that looks through an array (first argument) and returns
// the first element in the array that passes a truth test (second argument).

function find(arr, func) {
  var list = arr.filter(func);
  return list[0];
}
