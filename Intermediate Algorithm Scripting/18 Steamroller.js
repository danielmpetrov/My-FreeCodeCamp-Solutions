// Flatten a nested array. You must account for varying levels of nesting.

function steamroller(arr) {
  var flat = [];

  flatten(arr);

  function flatten(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i]))
        flat.push(arr[i]);
      else
        flatten(arr[i]);
    }
  }

  return flat;
}

steamroller([1, [2], [3, [[4]]]]);
