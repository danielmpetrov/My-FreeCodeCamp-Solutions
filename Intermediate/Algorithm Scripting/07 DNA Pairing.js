// DNA Pairing

function singlePair(letter) {
  switch (letter) {
    case 'A': return ['A', 'T'];
    case 'T': return ['T', 'A'];
    case 'C': return ['C', 'G'];
    case 'G': return ['G', 'C'];
    default: return undefined;
  }
}

function pair(str) {
  var result = [];

  for (var i = 0; i < str.length; i++) {
    result.push(singlePair(str[i]));
  }

  return result;
}
