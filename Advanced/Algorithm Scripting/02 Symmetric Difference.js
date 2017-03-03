function sym() {
  // put all passed arguments in args[]
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  function symDiffOfTwo(arr1, arr2) {
    var arrDiff = [];

    for (var p = 0; p < arr1.length; p++) {
      if(arr2.indexOf(arr1[p]) < 0 && arrDiff.indexOf(arr1[p]) < 0)
        arrDiff.push(arr1[p]);
    };

    for (var q = 0; q < arr2.length; q++) {
      if(arr1.indexOf(arr2[q]) < 0 && arrDiff.indexOf(arr2[q]) < 0)
        arrDiff.push(arr2[q]);
    };

    return arrDiff;
  }

  return args.reduce(symDiffOfTwo);
}
