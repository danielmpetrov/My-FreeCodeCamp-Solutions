// Pig Latin
// Pig Latin takes the first consonant (or consonant cluster) of a word,
// moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.

function translate(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var word = str;
  var wordArr;
  // if first letter is a vowel
  if (vowels.indexOf(word[0]) !== -1) {
    word += 'way';
  } else {
    wordArr = word.split('');
    // go over every latter from the start
    for (var i = 0; i < word.length; i++) {
      // if you meet a vowel, stop iterating
      if (vowels.indexOf(word[i]) !== -1) break;
      // if consonant, shift it from starting position and push it at the tail
      else wordArr.push(wordArr.shift());
    }
    
    word = wordArr.join('') + 'ay';
  }

  return word;
}
