// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
  var arr = str.split(' ').map(function (x) {
    return parseInt(x, 2);
  });
  arr = arr.map(function (x) {
    return String.fromCharCode(x);
  });
  return arr.join('');
}
