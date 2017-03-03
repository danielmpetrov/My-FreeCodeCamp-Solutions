// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var letters = str;
  var charCode;
  // don't check the last letter because there is no next one
  for (var i = 0; i < letters.length - 1; i++) {
    charCode = letters.charCodeAt(i);
    // if next letter's code is not the current + 1, that's the missing letter
    if ((charCode + 1) !== letters.charCodeAt(i + 1)) {
      return String.fromCharCode(charCode + 1);
    }
  }

  return undefined;
}
